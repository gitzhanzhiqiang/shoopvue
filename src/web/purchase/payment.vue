<template>
  <div>
      <!-- 顶部 top -->
     <div id="header-top" class="header-top"></div>
     <!-- 头部 header -->
     <div id="s-header" class="s-header"></div>

     <!-- 订单付款页面 -->
     <div id="payment" class="body-center">
          <div class="payment-inner">
               <h3 class="title">支付方式</h3>
               <div class="surplus-time" id="surplusTime">支付剩余时间<span>0:30:00</span></div>
               <div class="mode clearfix" id="payment-mode">
                    <span>选择方式：</span>
                    <ul class="mode-ul clearfix">
                         <!-- <li class="mode-item active">认证支付</li> -->
                         <li class="mode-item active">支付宝支付</li>
                         <li class="mode-item">网银支付</li>
                         <li class="mode-item">快捷支付</li>
                    </ul>
               </div>
               <!-- 认证支付 -->
               <!-- <div class="payment-sec authPay clearfix" style="display:block" data-index="1">
                <span>选择银行：</span>
                <ul class="all-bank fl" id="authBank">
                </ul>
                <div class="paybtn fl" style="display: none">立即支付</div>
            </div> -->
               <!-- 支付宝支付 -->
               <div class="payment-sec buyplay-zfb clearfix" style="display:block" data-index="1">
                    <span>支付宝支付：</span>
                    <div class="code fl" id="qrcode_apliy"></div>
                    <div class="payForAnother"><label for=""><input type="checkbox" id="payForAnother" val="1">代付</label></div>

               </div>
               <!-- 网银支付 -->
               <div class="payment-sec e-bank clearfix" style="display:none" data-index="2">
                    <!-- <span>选择银行：</span>
                <ul class="all-bank fl" id="eBank">
                </ul>
                <div class="paybtn fl">立即支付</div> -->
                    <ul>
                    </ul>
               </div>

               <!-- 微信支付 -->
               <div class="payment-sec buyplay-wechart clearfix" style="display:none" data-index="3">
                    <div class="first">
                         <div>
                              <span class="fl">请选择银行卡：</span>
                              <div class="code fl" id="qrcode_wx">
                                   <select class="bankList" name=""  ></select>
                              </div>
                         </div>
                         <div><button onclick="subpay()">确认</button></div>
                    </div>
                    <div class="two" >
                         <div>
                              <span class="fl">请输入验证码：</span>
                                <input maxlength="6" type="text" placeholder="请输入验证码">
                         </div>
                         <div>
                              <button onclick="goBack()">上一步</button>
                              <button onclick="fastPayment()">确认</button>
                         </div>
                    </div>
               </div>
          </div>
          <div class="bottom_button">
               <button onclick="go_orderDetails()">支付成功，查看我的订单</button>
          </div>
     </div> 
  </div>
</template>
<script>
import ajax from "@utils/config";
import top from "@/components/top.vue";
import bottom from "@/components/footer.vue";
import baseURL from "@/assets/js/ajax/baseURL";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
  components: {
    top,
    bottom,
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
@import './scss/payment.scss';
</style>