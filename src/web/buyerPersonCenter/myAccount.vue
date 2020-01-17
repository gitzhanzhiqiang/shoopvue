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
                    <li class="hover">
                         <a href="javascript:;">我的账户</a>
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
                    <div class="top_balance">
                         <p class="tip fl">可用余额
                              <span>¥ {{myBalanceData.balanceMoney}}</span>
                         </p>
                         <a href="javascript:;" class="button fl" @click="$router.push('/buyerPersonCenter/withdrawal')">提现</a>
                    </div>
                    <div class="bottom_details">
                         <h1>交易明细</h1>
                         <!--交易明细列表开始-->
                         <ul class="list" id="list" v-if="accountMoneyList.length">
                              <li v-for="item in accountMoneyList">
                                   <div class="fl">
                                        <p>交易类型：
                                             <span>{{item.types|accountMoneyTypeFilter}}</span>
                                        </p>
                                        <!--<p>交易内容：<span>{{item.applyTime}}</span></p>-->
                                   </div>
                                   <div class="fl">
                                        <p>操作金额：
                                             <span>¥ {{item.money}}</span>
                                        </p>
                                        <p>交易时间：
                                             <span>{{item.applyTime}}</span>
                                        </p>
                                   </div>
                                   <div class="fl">
                                        <!--<p>可用余额：<span>¥ {{item.applyTime}}</span></p>-->
                                   </div>
                              </li>
                         </ul>
                         <!--交易明细列表结束-->
                         <!--翻页-->
                         <div class="zxf_pagediv shoppingCenter">
                              <div v-if="total" class="pagination-container">
                                   <el-pagination background @size-change="(value)=> handleSizeChange(value, 'params', 'getTable')" @current-change="(value)=> handleCurrentPageChange(value, 'params', 'getTable')" :current-page.sync="params.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
                                   </el-pagination>
                              </div>
                         </div>
                         <!-- 没有数据提示 -->
                         <div class="noData" v-if="!accountMoneyList.length">
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
import baseURL from "@/assets/js/ajax/baseURL";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
import sellerBG from "@/components/sellerBG.vue";
export default {
     components: {
          sellerBG,
     },
     data() {
          return {
               myBalanceData: {},
               accountMoneyList: [],
               params: {
                    pageIndex: 1,
                    pageSize: 10
               },
               total: 0,
          }
     },
     computed: {},
     created() {
          this.getTable();
          this.getMyBalance();
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
                    url: "member-api-impl/accountMoney/getAccountMoneyPageByUserId",
                    optionParams: this.params
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.accountMoneyList = response.data.records ? response.data.records : [];
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
          // 获取余额
          getMyBalance() {
               ajax({
                    url: "/member-api-impl/user/myBalance",
                    optionParams: {}
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.myBalanceData = response.data ? response.data : {};
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
@import './scss/myAccount.scss';
</style>
