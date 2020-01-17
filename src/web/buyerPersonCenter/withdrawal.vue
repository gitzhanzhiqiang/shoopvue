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
                    <h1>提现</h1>
                    <ul>
                         <li>
                              <div class="title">
                                   实际到账金额
                              </div>
                              <div class="value">
                                   ¥
                                   <span>0.00</span>
                              </div>
                         </li>
                         <li>
                              <span class="title">可提金额：</span>
                              <span class="money">{{myBalanceData.balanceMoney}} 元</span>
                              <span class="title">手续费：</span>
                              <span class="poundage">0.00 元</span>
                         </li>
                         <li>
                              <span class="title">提现金额：</span>
                              <input type="text" placeholder="¥ 99.99" v-model="money">
                              <a href="javascript:;" @click="money = myBalanceData.balanceMoney">全部提现</a>
                         </li>
                         <li>
                              <span class="title">提现银行卡：</span>
                              <span class="bank" id="bank" v-text="(bank ? bank : '该用户暂无银行卡')"></span>
                         </li>
                         <!-- <li>
                                        <span class="title">交易密码：</span>
                                        <input type="text" placeholder="请输入交易密码">
                                    </li> -->
                         <li>
                              <p class="button" v-if="bank">提现</p>
                         </li>
                    </ul>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from "@utils/config";
import sellerBG from "@/components/sellerBG.vue";
export default {
     components: {
          sellerBG
     },
     data() {
          return {
               myBalanceData: {},  //我的账号余额
               bank: '',
               money: ''
          }
     },
     computed: {},
     created() {
          this.getMyBalance();
          this.getUserBankCard();
     },
     mounted() { },
     methods: {
          goUrl(path) {
               let pathTmp = this.$route.path;
               if (pathTmp != path) {
                    this.$router.push(path);
               }
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
          getUserBankCard() {
               ajax({
                    url: "/member-api-impl/user/myBalance",
                    optionParams: {}
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.bank = response.data.bankCard;
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
          }
     },
     filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/withdrawal.scss';
</style>
