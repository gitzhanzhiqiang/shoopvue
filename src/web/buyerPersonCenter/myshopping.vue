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
                    <li class="hover">
                         <a href="javascript:;">我的爱心购</a>
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
                    <div class="info" id="info">
                         <div class="accountInfo fl">
                              <!-- 点击头像和数字进入我的资料 -->
                              <div class="fl info-photo" @click="$router.push('/buyerPersonCenter/myProfile')"><img :src="accountDetailData.userImage" alt=""></div>
                              <div class="number fl">
                                   <p>爱心购会员
                                        <span>（{{accountDetailData.phone|phoneFilter}}）</span>
                                   </p>
                                   <p>ID:
                                        <span>{{accountDetailData.userNum}}</span>
                                   </p>
                              </div>
                         </div>
                         <div class="fr">
                              <p class="balance fl">
                                   我的余额：
                                   <span>{{myBalanceData.balanceMoney}}</span>
                              </p>
                              <p class="fl withdrawal" @click="$router.push('/buyerPersonCenter/withdrawal')">提现</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from "@utils/config";
import sellerBG from "@/components/sellerBG.vue";
export default {
     components: {
          sellerBG,
     },
     data() {
          return {
               myBalanceData: {},  //我的账号余额
               accountDetailData: {
                    phone: '',
                    userNum: '',
                    userImage: '',
               },  //账号详情
          }
     },
     computed: {},
     created() {
          this.getAccountDetail();
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
          // 获取账户信息
          getAccountDetail() {
               ajax({
                    url: "/member-api-impl/user/accountDetail",
                    optionParams: {}
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.accountDetailData = response.data ? response.data : {};

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
     },
     filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/myshopping.scss';
</style>
