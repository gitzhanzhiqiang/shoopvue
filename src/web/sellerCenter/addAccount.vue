<template>
  <div>
     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData' @goUrl="goUrl"></left-nav>
          </div>
          <div class="text-right fr">
               <div class="title">
                    <p>添加账户</p>
               </div>
               <div class="text">
                    <div class="text_top">
                         <p>选择账户类型</p>
                         <ul id="account_type">
                              <li class="zhifubao">
                                   <img src="~@/assets/imagesRecode//zhifubao.png" alt="">
                                   <i class="active"></i>
                              </li>
                              <li class="weixin">
                                   <img src="~@/assets/imagesRecode//weixin.png" alt="">
                                   <i></i>
                              </li>
                              <li class="yinlian">
                                   <img src="~@/assets/imagesRecode//yinlian.png" alt="">
                                   <i></i>
                              </li>
                         </ul>
                    </div>
                    <div class="text_bottom alipay">
                         <p>填写支付宝账户信息</p>
                         <!--position-verification只有一个值 bottom-->
                         <div class="form fr form-common-verification" id="form" rules="rules" label-width="" position-verification="">
                              <div class="form-item">
                                   <label class="fl">支付宝账号：</label>
                                   <div class="verification-el-input fl">
                                        <input class="verification-input" type="text" placeholder="此处填写支付宝账号或手机号" required msg="账号不能为空！">
                                   </div>
                              </div>
                              <div class="form-item">
                                   <label class="fl">姓名:</label>
                                   <div class="verification-el-input fl">
                                        <input class="verification-input" type="text" placeholder="此处填写银行账户开户姓名" required msg="联系人姓名不能为空！">
                                   </div>
                              </div>
                              <div class="button"><button class="fr" onclick="form_submit('#form')">保存</button></div>
                         </div>
                    </div>
                    <div class="text_bottom wechat">
                         <p>填写微信账户信息</p>
                         <!--position-verification只有一个值 bottom-->
                         <div class="form fr form-common-verification" id="form" rules="rules" label-width="" position-verification="">
                              <div class="form-item">
                                   <label class="fl">微信账号：</label>
                                   <div class="verification-el-input fl">
                                        <input class="verification-input" type="text" placeholder="此处填写微信账号或手机号" required msg="账号不能为空！">
                                   </div>
                              </div>
                              <div class="form-item">
                                   <label class="fl">姓名:</label>
                                   <div class="verification-el-input fl">
                                        <input class="verification-input" type="text" placeholder="此处填写银行账户开户姓名" required msg="联系人姓名不能为空！">
                                   </div>
                              </div>
                              <div class="button"><button class="fr" onclick="form_submit('#form')">保存</button></div>
                         </div>
                    </div>
                    <div class="text_bottom unionpay">
                         <p>填写银联账户信息</p>
                         <!--position-verification只有一个值 bottom-->
                         <div class="form fr form-common-verification" id="form" rules="rules" label-width="" position-verification="">
                              <div class="form-item">
                                   <label class="fl">银行卡号：</label>
                                   <div class="verification-el-input fl">
                                        <input class="verification-input" type="text" placeholder="此处填写银行卡号" required msg="银行卡号不能为空！">
                                   </div>
                              </div>
                              <div class="form-item">
                                   <label class="fl">手机号：</label>
                                   <div class="verification-el-input fl">
                                        <input class="verification-input" type="text" placeholder="此处填写银行账户预留手机号" required msg="手机号码不能为空" props="phone">
                                   </div>
                              </div>
                              <div class="form-item">
                                   <label class="fl">姓名:</label>
                                   <div class="verification-el-input fl">
                                        <input class="verification-input" type="text" placeholder="此处填写银行账户开户姓名" required msg="联系人姓名不能为空！">
                                   </div>
                              </div>
                              <div class="button"><button class="fr" onclick="form_submit('#form')">保存</button></div>
                         </div>
                    </div>
               </div>
          </div>

          <div class="comeback fl">
               <a href="javascript:history.go(-1)">返回上一页</a>
          </div>

     </div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import leftNav from "@/components/leftNav.vue";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
  components: {
    leftNav
  },
  data() {
	return{
        munuData:{
          munuType:0,
          iindex:0,
        }, 
     } 
  },
  computed: {},
  created() {
    
  },
  mounted() {},
  methods: {
      
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/addAccount.scss';
/*//@import '@web/sellerCenter/scss/sellercenter.scss';*/
</style>
