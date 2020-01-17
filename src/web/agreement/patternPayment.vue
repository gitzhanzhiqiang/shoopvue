<template>
  <div>
      <div class="content operationPage">
          <div class="content">
               <h2 class="fontwB">爱心购“消薄”平台支付方式</h2>
               <div class="contentText">
                    <p class="fontwB pad10_10">一、进入支付页面</p>
                    <p class="pad10_10">您有三种方式可进入平台支付页面，一是在商品详情页面，二是在购物车，三是提交订单后，也可在“我的订单“里，点击对应的“立即支付”按钮。</p>
                    <p class="fontwB pad10_10">二、支付方式</p>
                    <p class="pad10_10">爱心购“消薄”平台，采用在线支付，有支付宝支付、网银支付、微信支付等方式。您选择好支付方式后，可根据相应的页面提示进行操作。</p>


               </div>
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
    bottom
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
@import '@/assets/scss/agreement.scss';
</style>
