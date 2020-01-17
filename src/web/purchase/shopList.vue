<template>
  <div>
    <!-- 店铺名称那块 -->
    <div id="s-header" class="s-header">
      <TheStoreHead :store-name="shopParam.supplierName" :store-tel="shopParam.servicePhoneNo" :store-icon="shopParam.userImage"></TheStoreHead>
    </div>
    <!-- banner -->
    <div class="banner" v-if="bannerList.length">
      <div class="body-center">
        <div class="left fl">
          <div class="swiper-container img">
            <div class="swiper-wrapper img">
              <div class="swiper-slide" v-for="pic in bannerList" :key="pic.id">
                <a href="javascript:;"><img :src='pic.picture' alt=""></a>
              </div>
            </div>
          </div>
          <div class="pagination"></div>
        </div>
      </div>
    </div>
    <!--店铺列表-->
    <div class="productList">
      <!--筛选导航-->
      <ul class="type-nav" id="nav">
        <li class="fl notBuleBackground" @click="searchCondition()">
          <span :class="nowIndex === 0? 'active' : 'none'">综合</span>
        </li>
        <li class="fl saleCount notBuleBackground" @click="searchCondition(1)">
          <span :class="nowIndex === 1? 'active' : 'none'">销量</span>
          <img src="~@/assets/imagesRecode/moren.png" alt="" v-if="nowIndex !== 1">
          <img src="~@/assets/imagesRecode/shang.png" alt="" v-if="!topSell && nowIndex === 1">
          <img src="~@/assets/imagesRecode/xia.png" alt="" v-if="topSell && nowIndex === 1">
        </li>
        <li class="fl goodsPrice notBuleBackground" @click="searchCondition(2)">
          <span :class="nowIndex === 2? 'active' : 'none'">价格</span>
          <img src="~@/assets/imagesRecode/moren.png" alt="" v-if="nowIndex !== 2">
          <img src="~@/assets/imagesRecode/shang.png" alt="" v-if="!priceSell && nowIndex === 2">
          <img src="~@/assets/imagesRecode/xia.png" alt="" v-if="priceSell && nowIndex === 2">
        </li>
      </ul>
      <div class="text-list">
        <!--商品列表-->
        <ul class="list" id="list">
          <li v-for="goods in shopParam.GoodsList" :key="goods.id">
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
        <div id="nodata" v-show="nodata">
          <img src="~@/assets/imagesRecode//noData.png" alt="">
        </div>
      </div>
    </div>
    <!-- 弹框开始 -->
    <div class="details_alertForm" style="z-index:1000" v-if="notAssignIn">
      <div class="dog_alert"></div>
      <div class="text">
        <ul class="box">
          <li>
            店铺尚未开通<br> 点击立即申请，可免费入驻店铺哟~
          </li>
        </ul>
        <div class="button">
          <p class="cancle" @click.stop="backList()">返回店铺列表</p>
          <p class="submit">立即申请</p>
        </div>
      </div>
    </div>
    <!-- 弹框结束 -->
  </div>
</template>
<script>
import ajax from "@utils/config";
import topBG from "@/components/topBG.vue";
import topBox from "@/components/topBox.vue";
import sellerHeader from "@/components/sellerHeader.vue";
import TheStoreHead from "@/components/TheStoreHead";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";

export default {
  components: {
    topBG,
    topBox,
    sellerHeader,
    TheStoreHead
  },
  data() {
    return {
      params: {
        supplierId: "",
        pageIndex: 1,
        pageSize: 30,
        goodsName: "",
        goodsPrice: 0, //价格排序 1升序 2降序 0默认
        saleCount: 0 //销量排序 1升序 2降序 0默认
      },
      shopParam: {
        servicePhoneNo: "",
        supplierName: "",
        userImage: "",
        GoodsList: []
      },
      bannerList: [], //banner
      total: 0,
      nowIndex: 0,
      nodata: true,
      topSell: true, //销量排序
      priceSell: true, //价格排序
      notAssignIn: false //店铺未入住
    };
  },
  computed: {},
  created() {
    // 当页面重新刷新的时候
    let pageIndex = this.$route.query.pageIndex;
    this.params.pageIndex = pageIndex ? pageIndex * 1 : 1;
    this.params.supplierId = this.$route.query.id || "";
    this.getProductList();
    this.getBanner();
  },
  mounted() {},
  watch: {
    //  解决路由相同参数不同回退不能刷新的问题
    $route(newVal, oldVal) {
      if (newVal != oldVal) {
        let pageIndex = this.$route.query.pageIndex;
        // 路由改变时，如果顶部存在分页 页码；则使用路由页码；否则为1；
        this.params.supplierId = this.$route.query.id || "";
        this.params.pageIndex = pageIndex ? pageIndex * 1 : 1;
        this.getProductList();
      }
    }
  },
  methods: {
    /**
     * 获取店铺商品列表
     */
    getProductList() {
      if (this.params.supplierId === "notAssignIn") {
        this.notAssignIn = true;
        this.params.supplierId = "";
      }
      ajax({
        url: "product-api-impl/app/myShopBySupplierId",
        optionParams: this.params
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            let data = res.data ? res.data : {};
            this.total = res.data.total;
            this.shopParam = data;
            // 商品列表不为空隐藏
            this.nodata = !this.shopParam.GoodsList.length ? true : false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 返回店铺列表
     */

    backList() {
      this.$router.push({ path: "/purchase/storeList?search=" });
    },
    /**
     * 去商品详情
     * @param {Number} goodsId 商品id
     * @param {Number} supplierId 店铺id
     */
    goDetail(goodsId, supplierId) {
      this.$router.push({
        path: `/purchase/productDetails?id=${goodsId}&supplierid=${supplierId}`
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
      this.getProductList();
    },
    /**
     * 获取店铺商品列表
     */
    getBanner() {
      ajax({
        url: `/product-api-impl/banner/getBannerListBySupplierId?supplierId=${this.$route.query.id}`,
        optionParams: {}
      })
        .fetch()
        .then(res => {
          if (res.code === 200) {
            this.bannerList = res.data;
            this.$nextTick(() => {
              //渲染结束
              // mySwiper 里面的属性按需配置，详情见官网
              let mySwiper = new Swiper(".swiper-container", {
                pagination: ".swiper-pagination",
                autoplay: 5000, // 可设置数值来指定播放速度
                autoplayDisableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
                speed: 1000, // 切换图片速度
                loop: true,
                pagination: ".pagination",
                paginationClickable: true //值为true时，点击分页器的指示点时会发生Swiper。
              });
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
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
        path: `/purchase/shopList?id=${this.params.supplierId}&pageIndex=${this.params.pageIndex}`
      });
      this[parameter].pageIndex = val;
      this[method]();
    }
  },
  filters: {}
};
</script>
<style lang='scss'>
@import "./scss/shopList.scss";
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #fff;
  margin: 0 5px;
  opacity: 0.8;
  border: 1px solid #fff;
  cursor: pointer;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #e2231a!important;
}
#nodata {
  text-align: center;
  padding: 166px 0;
}
</style>