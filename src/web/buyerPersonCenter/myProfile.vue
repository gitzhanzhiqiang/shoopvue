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
                    <li class="hover">
                         <a href="javascript:;">我的资料</a>
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
                    <h1>基础资料</h1>
                    <ul id="list">
                         <li>
                              <div class="fl">ID:</div>
                              <div class="fl">{{accountDetailData.userNum}}</div>
                         </li>
                         <li>
                              <div class="fl">昵称:</div>
                              <div class="fl nickname">
                                   <input type="text" :readonly="readonly" v-model="accountDetailData.nickname">
                              </div>
                              <div class="updated fl" @click="readonly=false">修改</div>
                         </li>
                         <li>
                              <div class="fl">性别:</div>
                              <!--// 0男 1 女-->
                              <div class="fl" @click="accountDetailData.sex=0">
                                   <p class="sex" :class="[accountDetailData.sex=='0'?'Select':'noSelect']"></p>
                                   男
                              </div>
                              <div class="fl" @click="accountDetailData.sex=1">
                                   <p class="sex" :class="[accountDetailData.sex==1?'Select':'noSelect']"></p>
                                   女
                              </div>
                         </li>
                         <li>
                              <div class="fl">头像:</div>
                              <form id="ajaxForm" target="nm_iframe" enctype="multipart/form-data" action="" method="post" class="fl">
                                   <div class="fl info-photo">
                                        <img id="fileImg" src="" alt="">
                                        <p><input name="userImage" type="file" accept="image/*"></p>
                                        <span>请上传图片</span>
                                   </div>
                              </form>
                         </li>
                    </ul>
                    <div class="button" onclick="form_submit()">提交</div>
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
               accountDetailData: {},
               readonly: true,
          }
     },
     computed: {},
     created() {
          this.getAccountDetail();
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
          // 获取数据
          getAccountDetail() {
               ajax({
                    url: "member-api-impl/user/accountDetail",
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
@import './scss/myProfile.scss';
</style>
