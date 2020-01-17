<template>
  <div>
     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <ul class="centre-left-nav fl">
               <li class="hover"><a href="javascript:;">账号资料</a><span></span></li>
               <li><a href="addAccount.html">账户信息</a></li>
               <li class="types_1" style="display: none;"><a href="sellerInformation.html">卖家资料</a></li>
               <li class="types_2" style="display: none;"><a href="SupplierInformation.html">供销商资料</a></li>
          </ul>
          <div class="text-right fr">
               <div class="title">
                    <p>我的 > 账号资料 > 修改联系方式</p>
               </div>
               <!--position-verification只有一个值 bottom-->
               <div class="form fr form-common-verification" id="form" rules="rules" label-width="" position-verification="">
                    <div class="form-item">
                         <label class="fl">手机：</label>
                         <div class="verification-el-input fl">
                              <input maxlength="11" class="verification-input fl" type="text" placeholder="请输入联系人手机号" requir="true" msg="手机号码不能为空" props="phone"
                                   id="phone" onkeydown="inputMaxLength(this, 11)">
                              <p class="fl getcode">
                                   <span>获取短信验证码</span>
                                   <span class="time">0</span>
                              </p>

                         </div>
                    </div>
                    <div class="form-item">
                         <label class="fl">验证码：</label>
                         <div class="verification-el-input fl">
                              <input maxlength="4" class="verification-input fl" type="text" placeholder="请输入验证码" requir="true" msg="验证码不能为空" id="pictureCode"
                                   onkeydown="inputMaxLength(this, 4)">
                              <img src="" alt="" id="imgcode" onClick="getImgCode()">
                         </div>
                    </div>
                    <div class="form-item">
                         <label class="fl">短信验证码：</label>
                         <div class="verification-el-input fl">
                              <input maxlength="6" class="verification-input fl" type="text" placeholder="请输入短信验证码" requir="true" msg="短信验证码不能为空" id="phoneCode"
                                   onkeydown="inputMaxLength(this, 6)">
                         </div>
                    </div>
                    <div class="form-item">
                         <label class="fl">微信：</label>
                         <div class="verification-el-input fl">
                              <input type="text" readonly>
                         </div>
                    </div>
                    <!-- <div class="form-item">
                    <label class="fl">邮箱：</label>
                    <div class="verification-el-input fl">
                        <input type="text" placeholder="请输入联系人邮箱号">
                    </div>
                </div>
                <div class="form-item last">
                    <label class="fl">地址：</label>
                    <div class="verification-el-input fl">
                        <input class="verification-input" type="text" placeholder="请输入联系人详细地址" required msg="请具体到街道门牌号！">
                    </div>
                </div> -->
                    <div class="button"><button class="fr" onclick="form_submit('#form')">保存</button></div>
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
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
  components: {
  },
  data() {
	return{
        
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
@import './scss/editContact.scss';
</style>