<template>
  <div>
      <div class="content operationPage">

          <div class="content">
               <h2 class="fontwB">爱心购“消薄”平台退款退货流程</h2>
               <div class="contentText">
                    <p class="pad10_10"> 用户好，欢迎您入驻爱心购“消薄”平台！</p>
                    <p class="pad10_10">爱心购“消薄”平台将在以下简称为“本平台”，而爱心购“消薄”平台退款退货流程将在以下简称为“本流程”。</p>
                    <p class="pad10_10">根据国家法律法规变化及网络运营需要，本平台有权对本流程不时地进行修改，如本流程有任何变更或修订，本平台将以公告形式通知用户。用户可随时登陆查阅最新流程，关注并阅读本平台最新版的流程及公告。 </p>
                    <p class="pad10_10 fontwB">一、退货流程</p>
                    <p class="pad10_10">如果您遇到交易问题与商家协商需要退货的，您可以根据订单状态进行如下操作呢：</p>
                    <p class="pad10_10">1、若订单显示为“待发货”</p>
                    <p class="pad10_10">商家还处于未发货状态，您需要换货。请点击“我的订单”页面找到该笔订单，在“换货/退款”处，点击“退款”。填写退货相关信息与说明，点击“提交”按钮，系统状态由“待退货”转为“退货中”，与商家退货退款协议达成，商家通过“同意退货”，系统就能为您退款了。</p>
                    <p class="pad10_10">2、若订单显示为“待收货”</p>
                    <p class="pad10_10">如果您已收到货或订单在途中需要退货的，点击“我的订单”页面找到该笔订单，在“换货/退款”处，点击“退款”。填写退货相关信息与说明，点击“提交”按钮，与商家退货退款协议达成，商家通过“同意退货”进行确认，系统状态由“待退货”转为“退货中”，你就可以与商家客服沟通退货细节，进行退货操作。商家收到商品后，通过点击“确认退货”，系统就能为您退款了。</p>

                    <p class="pad10_10 fontwB">二、换货流程</p>
                    <p class="pad10_10">1、若订单显示为“待发货”</p>
                    <p class="pad10_10">商家还处于未发货状态，您需要换货。请点击“我的订单”页面找到该笔订单，在“换货/退款”处，点击“换货”。填写相关换货信息与说明，点击“提交”按钮，与商家换货协议达成，商家通过“同意换货”进行确认。当通过点击“确认换货”，表明商家已经完成换货流程，系统状态由“待换货”转为“已换货”，您就可以等着收货和确认收货了。</p>

                    <p class="pad10_10">2、若订单显示为“待收货”</p>
                    <p class="pad10_10">如果您已收到货或订单在途中需要退货的，请点击“我的订单”页面找到该笔订单，在“换货/退款”处，点击“换货”。填写相关换货信息与说明，点击“提交”按钮，与商家换货协议达成，商家通过“同意换货”进行确认，页面由“待换货”转为“换货中”，你就可以与商家客服沟通换货细节，进行换货操作。商家收到商品后，通过点击“确认换货”，向您发出新的货品，系统提示为“已换货”，您就可以等着收货和确认收货。</p>
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
