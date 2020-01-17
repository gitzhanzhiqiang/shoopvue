<template>
     <div>
          <!--中心的头部搜索-->
          <div id="s-header" class="s-header my">
               <seller-BG></seller-BG>
          </div>

          <!--主要内容-->
          <div class="content-centre body-center">
               <!--侧边导航-->
               <ul class="text-left-nav fl">
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myshopping')">我的爱心购</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myOrder')">我的订单</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myCart')">我的购物车</a>
                    </li>
                    <li class="hover">
                         <a href="javascript:;">我的收藏</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/mylooked')">我的浏览</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myProfile')">我的资料</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myAccount')">我的账户</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myAddress')">我的地址</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myEvaluation')">我的评价</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myGrade')">我的积分</a>
                    </li>
                    <!-- <li><a href="javascript:;">我的卡券</a></li> -->
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myMessage')">我的消息</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/securityCenter')">安全中心</a>
                    </li>
               </ul>
               <!-- 右侧内容 -->
               <div class="text-right fr">
                    <!--全选、删除-->
                    <div class="handle">
                         <div class="fl checkout checkout-all" @click="checkSelect(myGoodsCollectionData.list,1)">
                              <div :class="[myGoodsCollectionData.Allshow?'Selected':'noSelected']"></div>
                         </div>
                         <span class="selectAll" @click="checkSelect(myGoodsCollectionData,1)">全选 </span>
                         <span class="delete" @click="delGood(myGoodsCollectionData.list,1)">批量删除</span>
                    </div>

                    <!--商品列表-->
                    <ul class="list" id="list">
                         <li v-for="item in myGoodsCollectionData.list">
                              <img :src="item.imageAddress" alt="" @click="goDetail(item.id,item.storeSupplierId,item.supplierId)">
                              <p class="price">¥ {{item.actualPrice}}</p>
                              <p class="key-word">{{item.name|nameSubstring}}</p>
                              <!--<P class="location"><span></span>杭州</P>-->
                              <!--删除商品-->
                              <div class="del" v-show="item.show">
                                   <!--<div class="del" @mouseover="showDelPop(item,0)" @mouseout="showDelPop(item,0)">-->
                                   <div class="fl checkout checkout-one" @click="checkSelect(item,0)">
                                        <div :class="[item.show?'Selected':'noSelected']"></div>
                                   </div>
                                   <span class="delete fr" @click="delGood(item,0)">删除</span>
                              </div>
                         </li>
                    </ul>

                    <!--翻页-->
                    <div class="zxf_pagediv shoppingCenter">
                         <div v-if="total" class="pagination-container">
                              <el-pagination background @size-change="(value)=> handleSizeChange(value, 'params', 'getTable')" @current-change="(value)=> handleCurrentPageChange(value, 'params', 'getTable')" :current-page.sync="params.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
                              </el-pagination>
                         </div>
                    </div>

                    <!-- 没有数据显示 -->
                    <div id="nodata" style="display: none;">
                         <img src="~@/assets/imagesRecode/noData.png" alt="">
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from "@utils/config";
import sellerBG from "@/components/sellerBG.vue";
import baseURL from "@/assets/js/ajax/baseURL";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
     components: {
          sellerBG
     },
     data() {
          return {
               total: 100,
               params: {
                    pageSize: 10,
                    pageIndex: 1,
               },
               myGoodsCollectionData: { list: [], Allshow: false },
               total: 0,
          }
     },
     computed: {},
     created() {
          this.getTable();
     },
     mounted() { },
     methods: {
          goUrl(path) {
               let pathTmp = this.$route.path;
               if (pathTmp != path) {
                    this.$router.push(path);
               }
          },
          goUrlBox() { },
          getTable() {
               ajax({
                    url: "/member-api-impl/user/myGoodsCollection",
                    optionParams: this.params
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.myGoodsCollectionData.list = response.data.CollectionGoodsList ? response.data.CollectionGoodsList : [];
                              this.myGoodsCollectionData.list.map((item) => {
                                   this.$set(item, "show", false);
                              })
                              this.total = response.data.total;
                         } else {
                              this.$message({
                                   message: response.msg,
                                   type: "warning"
                              });
                         }
                    })
                    .catch(error => {
                         console.log(error);
                         this.loading = false;
                    });
          },
          // 选中效果
          checkSelect(data, type) {
               if (type) {
                    data.map(item => {
                         item.show = !item.show;
                    })
                    this.myGoodsCollectionData.Allshow = !this.myGoodsCollectionData.Allshow;
               } else {
                    data.show = !data.show;
               }
          },
          // 跳转商品详情页面
          goDetail(goodsid, storesupplierid, supplierId) {
               if (supplierId == -1) {
                    return;
               }
               this.$router.push({ path: "/purchase/productDetails", query: { id: goodsid, supplierid: storesupplierid } });
          },
          // 商品刪除
          delGood(data, type) {
               // typy 0 单个 1 批量
               let arr = [];
               if (type) {
                    data.map(item => {
                         if (item.show) {
                              arr.push({
                                   storeSupplierId: item.storeSupplierId,
                                   goodsId: Number(item.id)
                              })
                         }
                    })
                    if (!arr.length) {
                         this.$message({
                              message: "未选中收藏的商品",
                              type: "warning"
                         });
                         return;
                    }
               } else {
                    arr.push({
                         storeSupplierId: data.storeSupplierId,
                         goodsId: Number(data.id)
                    })
               }

               this.$confirm('确认删除吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
               }).then(() => {
                    ajax({
                         url: "/member-api-impl/userInfo/CollectionAction",
                         optionParams: {
                              productIds: arr,
                              type: 2
                         }
                    }).post()
                         .then(response => {
                              if (response.code === 200) {
                                   this.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                   });
                                   // 批量删除
                                   if (type) {
                                        if (arr.length == data.length) {
                                             this.myGoodsCollectionData.Allshow = false;
                                        }
                                   }
                                   this.getTable();
                              } else {
                                   this.$message({
                                        message: response.msg,
                                        type: "warning"
                                   });
                              }
                         })
                         .catch(error => {
                              console.log(error);
                              this.loading = false;
                         });


               }).catch(() => {
                    this.$message({
                         type: 'info',
                         message: '已取消删除'
                    });
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
               this[parameter].pageIndex = val;
               this[method]();
          },
     },
     filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/myCollecting.scss';
</style>
