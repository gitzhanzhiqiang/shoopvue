<template>
  <div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header"></div>
    <!-- 订单详情页面 -->
    <div id="orderDetails" class="body-center">
        <div class="orderDetails-inner">
            <div class="order-modules status">
                <div class="fr backButton">订单列表</div>
                <div class="title">
                    <h3>当前订单状态：</h3><span id="orderStatus"></span>
                </div>
                <!-- // status -1已取消, 0待付款,1待发货,2待收货,3已签收,4待评价,5已完成 6换货 7退货 , -->
                <!-- 待付款 -->
                <div class="inner" id="replay" style="display: none">
                    <p class="surplus-status">订单还剩<span id="surplusTime">0:00:00</span>就失效啦</p>
                    <a href="javascript:" class="button">立即付款</a>
                    <a href="javascript:">取消订单</a>
                </div>
                <!-- 待发货 -->
                <div class="inner" id="hair" style="display: none">
                    <p class="seller">等待卖家发货中...，点我 <a href="../sellerCenter/logisticsManage.html">立即发货</a></p>
                    <p class="noseller">等待卖家发货中...，点我 <a href="javascript:" class="im">联系卖家</a>
                    </p>
                </div>
                <!-- 待收货/已签收 -->
                <div class="inner" id="Receivingsigning" style="display: none">
                    <p class="surplus-status">订单还剩<span id="surplusTime">0:00:00</span>就自动收货啦</p>
                    <a href="javascript:" id="collectShop" class="button noseller">确定收货</a>
                    <a href="javascript:" id="extendShop" class="noseller">延长收货</a>
                    <p class="noseller aftermarket">如果商品有问题，点我 <a href="javascript:" onclick="refundShop('2')">申请换货</a>
                    </p>
                    <p class="noseller aftermarket">如果你不想购买了，点我 <a href="javascript:" onclick="refundShop('1')">申请退货</a>
                    </p>
                </div>
                <!-- 待评价 -->
                <div class="inner" id="evaluate" style="display: none">
                    <p class="surplus-status">交易成功</p>
                    <a href="javascript:" class="noseller pingjia">立即评价</a>
                    <p class="seller">如果没有收到货，或收到货后出现问题，点我 <a href="javascript:" class="im">联系卖家</a></p>
                </div>
                <!-- 已完成 -->
                <div class="inner" id="orderOk" style="display: none">
                    <p class="surplus-status">当前订单已完成</p>
                    <a href="javascript:" class="noseller againPlay">再次购买</a>
                    <a href="javascript:" class="noseller im">联系卖家</a>
                </div>
                <!-- 6换货 -->
                <div class="inner" id="change" style="display: none">
                    <!-- <p class="surplus-status">订单还剩<span id="surplusTime">0:00:00</span>卖家自动同意换货申请</p> -->
                    <p class="applyTime">换货申请时间：<span>2019-12-12 00:00:00</span></p>
                </div>
                <!-- 7退货 -->
                <div class="inner" id="retreat" style="display: none">
                    <!-- <p class="surplus-status">订单还剩<span id="surplusTime">0:00:00</span>卖家自动同意退货申请</p> -->
                    <p class="applyTime">退款申请时间：<span>2019-12-12 00:00:00</span></p>
                    <!-- <p class="forbiden">卖家已拒绝退货申请,时间：<span>2019-12-12 00:00:00</span></p> -->
                </div>
                <!-- 8原因： -->
                <div class="inner" id="reason" style="display: none">
                    <!-- <p class="surplus-status">订单还剩<span id="surplusTime">0:00:00</span>卖家自动同意退货申请</p> -->
                    <p class="applyTime">原因：<span>ooo</span></p>
                </div>
            </div>
            <div class="order-modules logistics" id="logistics">
                <div class="title">
                    <h3>物流信息</h3><span id="orderStatus"></span>
                </div>
                <div class="inner">
                    <div class="company">物流公司：<span></span></div>
                    <div class="Waybill-no">运单号码：<span></span></div>
                    <div class="logistics-info">
                        <div class="title">物流跟踪：</div>
                        <dl class="logistics-list">
                            <dt>
                                <span class="date">2019-05-24</span>
                                <span class="wike"></span>
                            </dt>
                            <dd>
                                <span class="time">10:37:01</span>
                                <p>包裹正在等待揽收</p>
                            </dd>
                        </dl>

                         </div>
                    </div>
                </div>
            </div>
            <div class="order-modules info" id="orderInfo">
                <div class="title">
                    <h3 style="padding-left: 90px;">订单信息</h3>
                </div>
                <div class="orderInfo-main"></div>
            </div>

            <div class="order-modules replayinfo" id="replayInfo">
                <h3 class="title" style="padding-left: 85px;">付款信息</h3>
                <div class="inner">
                    <p class="monery">实付款：<span class="orderMoney"></span></p>
                    <p>寄送至：<span class="receiveAddress"></span></p>
                    <p>收货人：<span class="consigneeName"></span></p>
                    <p>电话号码：<span class="consigneePhone"></span></p>
                </div>
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
@import './scss/orderDetails.scss';
</style>