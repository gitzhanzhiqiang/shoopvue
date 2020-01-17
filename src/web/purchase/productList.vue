<template>
     <div>
          <!-- 头部 header -->
          <div id="s-header" class="s-header">
               <seller-header @getKeyWords="getProductList" :hidden="showInput"></seller-header>
          </div>
          <!--商品列表-->
          <div class="productList">
               <!--筛选导航-->
               <ul class="type-nav" id="nav">
                    <li class="fl notBuleBackground" @click="searchCondition()">
                         <span :class="(nowIndex === 0? 'active' : 'none')">综合</span>
                    </li>
                    <li class="fl saleCount notBuleBackground" @click="searchCondition(1)">
                         <span :class="(nowIndex === 1? 'active' : 'none')">销量</span>
                         <img src="~@/assets/imagesRecode/moren.png" alt="" v-if="nowIndex !== 1">
                         <img src="~@/assets/imagesRecode/shang.png" alt="" v-if="!topSell && nowIndex === 1">
                         <img src="~@/assets/imagesRecode/xia.png" alt="" v-if="topSell && nowIndex === 1">
                    </li>
                    <li class="fl goodsPrice notBuleBackground" @click="searchCondition(2)">
                         <span :class="(nowIndex === 2? 'active' : 'none')">价格</span>
                         <img src="~@/assets/imagesRecode/moren.png" alt="" v-if="nowIndex !== 2">
                         <img src="~@/assets/imagesRecode/shang.png" alt="" v-if="!priceSell && nowIndex === 2">
                         <img src="~@/assets/imagesRecode/xia.png" alt="" v-if="priceSell && nowIndex === 2">
                    </li>
               </ul>
               <div class="text-list">
                    <!--商品列表-->
                    <ul class="list" id="list">
                         <li v-for="goods in GoodsList" :key="goods.id">
                              <img @click="goDetail(goods.goodsId, goods.supplierId)" :src="goods.imageAddress" alt="">
                              <p class="price">¥ {{ goods.actualPrice }} </p>
                              <p class="key-word" @click="goDetail(goods.goodsId, goods.supplierId)"> {{goods.goodsName.length > 22 ? goods.goodsName.substring(0, 22) + '...' : goods.goodsName}}</p>
                              <P class="payment">{{ goods.soldNumber }} 人付款</P>
                              <!-- <button id="addCard">查看详情</button> -->
                         </li>
                    </ul>
                    <!-- 分页 -->
                    <div v-if="total" class="pagination-container">
                         <el-pagination background @size-change="(value)=> handleSizeChange(value, 'params', 'getProductList')" @current-change="(value)=> handleCurrentPageChange(value, 'params', 'getProductList')" :current-page.sync="params.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
                    </div>
                    <!-- 没有数据显示 -->
                    <div id="nodata" v-if="nodata">
                         <img src="~@/assets/imagesRecode/noData.png" alt="">
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import { validate } from "@/assets/js/validation";
import ajax from "@utils/config";
import Cookies from "js-cookie";
import topBG from "@/components/topBG.vue";
import topBox from "@/components/topBox.vue";
import sellerHeader from "@/components/sellerHeader.vue";

export default {
     components: {
          topBG,
          topBox,
          sellerHeader
     },
     data() {
          return {
               params: {
                    pageIndex: 1,
                    pageSize: 30,
                    goodsName: "",
                    goodsPrice: 0, //价格排序 1升序 2降序 0默认
                    saleCount: 0, //销量排序 1升序 2降序 0默认
                    selectHotGoods: 0 // 0否 1是热销商品;
               },
               GoodsList: [],
               total: 0, //商品总条数
               nowIndex: 0,
               // 以下为搜索条件
               topSell: true, //销量排序
               priceSell: true, //价格排序
               nodata: false, //控制没有商品 显示图片
               showInput: false
          };
     },
     // 一下局部keyWords勿替换为全局变量 否则会影响搜索结果
     created() {
          let keyWords = this.$route.query.search;
          // 当页面重新刷新的时候
          let pageIndex = this.$route.query.pageIndex;
          this.params.pageIndex = pageIndex ? pageIndex * 1 : 1;

          let obj = {
               groupType: this.$route.query.groupType || "",
               h5GroupId: this.$route.query.h5GroupId || ""
          };
          if (obj.groupType && obj.h5GroupId) {
               Object.assign(this.params, obj);
          } else {
               delete this.params.groupType;
               delete this.params.h5GroupId;
          }
          this.getProductList(keyWords);
     },
     mounted() { },
     watch: {
          //  解决路由相同参数不同回退不能刷新的问题
          $route(newVal, oldVal) {
               if (newVal != oldVal) {
                    // 路由搜索关键词
                    let keyWords = this.$route.query.search;
                    let pageIndex = this.$route.query.pageIndex;
                    // 路由改变时，如果顶部存在分页 页码；则使用路由页码；否则为1；
                    this.params.pageIndex = pageIndex ? pageIndex * 1 : 1;

                    let obj = {
                         groupType: this.$route.query.groupType || "",
                         h5GroupId: this.$route.query.h5GroupId || ""
                    };
                    if (obj.groupType && obj.h5GroupId) {
                         Object.assign(this.params, obj);
                    } else {
                         delete this.params.groupType;
                         delete this.params.h5GroupId;
                    }

                    this.getProductList(keyWords);
               }
          }
     },
     methods: {
          /**
           * 获取商品列表
           * @param {String} goodsName 商品名称
           * 可能从子组件传来 或者 从路由获取
           */
          getProductList(goodsName = "") {
               this.params.goodsName = goodsName;
               ajax({
                    url: "product-api-impl/app/goodsList",
                    optionParams: this.params
               })
                    .post()
                    .then(res => {
                         if (res.code === 200) {
                              this.GoodsList = res.data ? res.data.GoodsList : [];
                              this.total = res.data.total;

                              // 商品列表不为空隐藏
                              this.nodata = !this.GoodsList.length ? true : false;
                         }
                    })
                    .catch(error => {
                         console.log(error);
                    });
          },
          /**
           * 改变搜索条件函数 选谁谁红
           * @param {Number} nowIndex defult = 0;
           * 0 综合 1 销量 2价格
           */
          searchCondition(nowIndex = 0) {
               let obj = { goodsPrice: 0, saleCount: 0 };
               this.nowIndex = nowIndex;
               if (!nowIndex) {
                    this.topSell = true;
                    this.priceSell = true;
               } else if (nowIndex === 1) {
                    this.topSell = !this.topSell;
                    this.priceSell = true;
                    obj.saleCount = !this.topSell ? 1 : 2;
               } else {
                    this.topSell = true;
                    this.priceSell = !this.priceSell;
                    obj.goodsPrice = !this.priceSell ? 1 : 2;
               }
               obj.pageIndex = 1;
               Object.assign(this.params, obj);
               let keyWords = this.$route.query.search;
               this.getProductList(keyWords);
          },
          /**
           * 去商品详情
           * @param {Number} goodsId 商品id
           * @param {Number} supplierId 店铺id
           */
          goDetail(goodsId, supplierId) {
               // this.$router.push({ path:`/purchase/productDetails?id=${goodsId}&supplierid=${supplierId}`})
               window.open(
                    `/purchase/productDetails?id=${goodsId}&supplierid=${supplierId}`,
                    "_blank"
               );
          },
          // 改变每一页的条数
          handleSizeChange(val, parameter, method) {
               this[parameter].pageSize = val;
               this[parameter].pageIndex = 1; //从第一页开始
               this[method]();
          },
          // 切换页码
          handleCurrentPageChange(val, parameter, method) {
               // 没切换页码重新让滚动条回到顶部
               document.body.scrollTop = 0;
               document.documentElement.scrollTop = 0;
               // 下面主要是用于存储每一页的页码数据
               this.$router.push({
                    path: `/purchase/productList?search=${
                    this.$route.query.search
                    }&pageIndex=${this.params.pageIndex}&obj=${JSON.stringify(this.params)}`
               });
               this[parameter].pageIndex = val;
               this[method]();
          }
     }
};
</script>
<style lang='scss' scoped>
@import "./scss/productList.scss";
#nodata {
     text-align: center;
     padding: 166px 0;
}

.notBuleBackground {
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
}
</style>