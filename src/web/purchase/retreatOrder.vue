<template>
  <div>
      <!-- 顶部 top -->
    <div id="header-top" class="header-top"></div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header"></div>
    <!-- 退换货申请 -->
    <div id="retreatOrder" class="body-center">
        <div class="retreatOrder-inner">
            <div class="order-modules status">
                <h3 class="title">当前订单状态：<span id="orderStatus"></span></h3>
                <!-- 待卖家处理申请 -->
                <div class="inner" id="noNumber1" style="display: none">
                    <!-- <div class="surplus-time">订单还剩<span id="surplusTime">0:00:00</span>卖家自动同意退款退货</div> -->
                    <p class="applyTime">退款申请时间：<span class="times">1970-01-01 00:00:00</span></p>
                </div>
                <!-- 待卖家收到退货 -->
                <div class="inner" id="noNumber2" style="display: none">
                    <!--<div class="surplus-time">订单还剩<span id="surplusTime">0:00:00</span>自动确认退款成功</div>-->
                    <p class="applyTime">退款申请时间：<span class="times">1970-01-01 00:00:00</span></p>
                    <p class="applyTime">审核时间：<span class="timea">1970-01-01 00:00:00</span></p>
                </div>
                <!-- 退款成功 -->
                <div class="inner" id="noNumber3" style="display: none">
                    <div class="surplus-time">已经退款成功了哟~</div>
                    <p class="applyTime">退款成功时间：<span class="times">1970-01-01 00:00:00</span></p>
                     <p class="applyTime">审核时间：<span class="timea"> 1970-01-01 00:00:00</span></p>
                      <p class="applyTime">审核时间：<span class="timeb">1970-01-01 00:00:00</span></p>
                </div>
            </div>
            <div class="order-modules info" id="retrunInfo">
                <div class="title">
                    <h3>退换货信息</h3>
                </div>
                <div class="orderInfo-main"></div>
            </div>
            <div class="order-modules info" id="orderInfo">
                <div class="title">
                    <h3>订单信息</h3>
                </div>
                <div class="orderInfo-main"></div>
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
@import './scss/retreatOrder.scss';
</style>