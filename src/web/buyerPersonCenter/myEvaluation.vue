<template>
     <div>
          <!--公共头部-->
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
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myCollecting')">我的收藏</a>
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
                    <li class="hover">
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
                    <h1>我的评价</h1>
                    <!--我的评价列表开始-->
                    <ul class="list" id="list" v-if="userCommentData.length">
                         <li v-for="item in userCommentData">
                              <img :src="item.image" alt="">
                              <div>
                                   <p>{{item.content}}</p>
                                   <p>{{item.time}}</p>
                              </div>
                         </li>
                    </ul>
                    <!--我的评价列表结束-->
                    <!--翻页-->
                    <div class="zxf_pagediv shoppingCenter">
                         <div v-if="total" class="pagination-container">
                              <el-pagination background @size-change="(value)=> handleSizeChange(value, 'params', 'getTable')" @current-change="(value)=> handleCurrentPageChange(value, 'params', 'getTable')" :current-page.sync="params.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
                              </el-pagination>
                         </div>
                    </div>
                    <!-- 没有评价提示 -->
                    <div class="noData" v-if="!userCommentData.length">
                         <img src="~@/assets/imagesRecode/noData.png" alt="">
                         <p>暂无评价哦！</p>
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
               userCommentData: [],
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
          getTable() {
               ajax({
                    url: "product-api-impl/userestimate/getUserComment",
                    optionParams: this.params
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.userCommentData = response.data.data ? response.data.data : [];
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
                    });
          },
          goUrlBox() { },
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
@import './scss/myEvaluation.scss';
</style>
