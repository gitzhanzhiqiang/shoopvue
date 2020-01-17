<template>
  <div>
     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData' @goUrl="goUrl"></left-nav>
          </div>
          <div class="text-topup fr">
               <div class="title">
                    <p>充值</p>
               </div>
               <div class="text">
                    <div class="text_top">
                         <p>充值完成后请刷新页面以查看余额</p>
                         <div>当前余额： <span>0</span> 元</div>
                    </div>
                    <div class="text_bottom">
                         <p>输入充值金额</p>
                         <input type="text" placeholder="输入充值金额后，选择对应支付方式">
                         <div>
                              <a href="javascript:;" class="zhifubao"></a>
                              <a href="javascript:;" class="weixin"></a>
                              <a href="javascript:;" class="yinlian"></a>
                         </div>
                    </div>
               </div>
          </div>
          <div class="text-withdraw fr">
               <div class="title">
                    <p>提现</p>
               </div>
               <div class="text">
                    <div class="text_top">
                         <p>提现发起后请耐心等待到账</p>
                         <div class="name">
                              账户：<span></span>
                         </div>
                         <div class="money">当前余额： <span></span> 元</div>
                    </div>
                    <div class="text_center">
                         <div>
                              <p class="fl">输入提现金额</p>
                              <p class="fr complete" >全部提现</p>
                         </div>
                         <input type="text" id="input"  placeholder="输入提现金额后，选择提现账户">
                         <div class="btn_div">
                              <button class="submit">确认提现</button>
                         </div>
                    </div>
                    <div class="text_bottom" style="display: none;">
                         <div>
                              <p class="fl">选择提现账户</p>
                              <a class="fr" href="javascript:;" onClick="go_addurl()">添加</a>
                         </div>
                         <ul id="list">
                              <li>
                                   <i></i>
                                   <span>张*枔</span>
                                   <span class="account">178****1457</span>
                                   <span class="type">账户类型：支付宝</span>
                              </li>
                              <li>
                                   <i></i>
                                   <span>张*枔</span>
                                   <span class="account">178****1457</span>
                                   <span class="type">账户类型：支付宝</span>
                              </li>
                              <li>
                                   <i></i>
                                   <span>张*枔</span>
                                   <span class="account">178****1457</span>
                                   <span class="type">账户类型：支付宝</span>
                              </li>
                         </ul>
                         <div class="btn_div">
                              <button class="fr">确认提现</button>
                         </div>
                    </div>
               </div>
          </div>

          <div class="button">
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
@import './scss/sellercenter.scss';
/*//@import '@web/sellerCenter/scss/sellercenter.scss';*/
</style>