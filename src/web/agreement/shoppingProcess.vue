<template>
  <div>
      <div class="content operationPage">
          <div class="content">
               <h2 class="fontwB">爱心购“消薄”平台购物流程</h2>
               <div class="contentText">
                    <p class="fontwB pad10_10">一、用户注册</p>
                    <p class="pad10_10">打开爱心购“消薄”平台首页，在右上方，点击“免费注册”按钮；</p>
                    <p class="pad10_10">进入到注册页面，请填写您手机、验证码，获取短信验证码、填写短信验证码，点击同意按钮（登录即注册，同意《爱心购“消薄”平台服务协议》、《爱心购“消薄”平台隐私保护与信息授权协议》），再点击“登录”按钮，如果所填信息无误，即完成平台用户注册。</p>


                    <p class="pad10_10 fontwB">二、挑选商品</p>
                    <p class="pad10_10">通过分类浏览或直接搜索来查找商品，点击商品图片后，进入商品详情浏览，或按照商品图片上按钮提示，将商品加入购物车。</p>
                    <p class="pad10_10">关于商品问题，可点击“联系客服”按钮，与商家进行沟通。</p>

                    <p class="pad10_10 fontwB">三、提交订单</p>
                    <p class="pad10_10">在商品详情处或者购物车里点击“立即购买”，进行订单提交页面。</p>
                    <p class="pad10_10">填写收货地址。</p>
                    <p class="pad10_10">1、如有特殊要求，“备注”处进行填写。</p>
                    <p class="pad10_10">2、如需要发票，请点击“开具发票”按钮，按照图示，填写相关开票信息。</p>
                    <p class="pad10_10">3、合作店铺选择，按照提示项进行选择。</p>
                    <p class="pad10_10">4、确认付款信息。</p>
                    <p class="pad10_10">5、以上确认无误，点击“提交订单”按钮</p>

                    <p class="pad10_10 fontwB">四、支付货款</p>
                    <p class="pad10_10">进入货款支付页面，点击选择支付方式，进行货款支付。</p>
                    <p class="pad10_10 fontwB"> 五、确认订单状态</p>
                    <p class="pad10_10">如要确认订单状态，请返回首页，点击“我的订单”，查看订单状态。如显示“待付款”，请稍作等待一分钟，刷新页面。如刷新后的页面，仍显示“待付款”，请检查付款是否成功；如显示“待发货”，说明付款已经成功，商家正在准备发货；如显示“待收货”，说明商家已经发货，用户随即也会收到物流通知，用户根据物流信息，进行取货。</p>

                    <p class="pad10_10 fontwB">六、收货及评价</p>
                    <p class="pad10_10">当你收到货物，如果满意，请在“我的订单”，点击“确认收货”按钮，货款才会打给商家。</p>
                    <p class="pad10_10">如果您想换货或退款，请在“我的订单”，点击相关按钮，按照爱心购“消薄”平台退换货流程进行相关操作。</p>
                    <p class="pad10_10">您收到商品后，可在“我的订单”，点击“立即评价”按钮，对商品进行评价。</p>
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
