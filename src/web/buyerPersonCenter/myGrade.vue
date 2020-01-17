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
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myEvaluation')">我的评价</a>
                    </li>
                    <li class="hover">
                         <a href="javascript:;">我的积分</a>
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
                    <div class="text-right-level">
                         <ul>
                              <li>
                                   <p class="level-title fl">可用积分</p>
                                   <p class="fl level-number">{{accountGradeData.integral}}</p>
                              </li>
                              <li>
                                   <p class="level-title fl">买家等级</p>
                                   <p class="fl">
                                        <span class="icon">{{accountGradeData.gradeName}}</span>
                                        <template>
                                             <img v-for="item in accountGradeData.gradeStar" src="~@web/buyerPersonCenter/image/jifen_xin.png" alt="">
                                        </template>
                                        <img v-for="item in accountGradeData.gradeGray" src="~@web/buyerPersonCenter/image/jifen_meishengji.png" alt="">
                                   </p>
                              </li>
                              <li>
                                   <p class="level-title fl">下一等级</p>
                                   <div class="process fl">
                                        <p class="line pink">
                                             <i></i>
                                             <span></span>
                                        </p>
                                        <p class="line red fl">
                                             <i></i>
                                             <span>0</span>
                                        </p>
                                   </div>
                                   <p class="icon fl">{{accountGradeData.gradeNextName}}</p>
                              </li>
                         </ul>
                    </div>
                    <div class="text-right-gradeDetails">
                         <h1>积分详情</h1>
                         <!--我的积分详情列表开始-->
                         <ul class="list" id="list" v-if="accountGradeData.listIntegral.length">
                              <li v-for="item in accountGradeData.listIntegral">
                                   <p>{{item.goodsName}}</p>
                                   <p>{{item.finishTime}}
                                        <span class="fr">{{item.integral}}</span>
                                   </p>
                              </li>
                         </ul>
                         <!--列表结束-->
                         <!--翻页-->
                         <div class="zxf_pagediv shoppingCenter">
                              <div v-if="total" class="pagination-container">
                                   <el-pagination background @size-change="(value)=> handleSizeChange(value, 'params', 'getTable')" @current-change="(value)=> handleCurrentPageChange(value, 'params', 'getTable')" :current-page.sync="params.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
                                   </el-pagination>
                              </div>
                         </div>
                         <!-- 没有数据提示 -->
                         <div class="noData" v-if="!accountGradeData.listIntegral.length">
                              <img src="~@/assets/imagesRecode/noData.png" alt="">
                              <p>暂无数据哦！</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from "@utils/config";
import sellerBG from "@/components/sellerBG.vue";
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
               accountGradeData: {
                    listIntegral: [],
               },
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
                    url: "member-api-impl/user/accountGrade",
                    optionParams: {}
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.accountGradeData = response.data ? response.data : {};
                              // gradeStar
                              let gradeGray = 5 - this.accountGradeData.gradeStar;
                              this.$set(this.accountGradeData, 'gradeGray', gradeGray)
                              // console.log("this.accountGradeData==",this.accountGradeData);
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
@import './scss/myGrade.scss';
</style>
