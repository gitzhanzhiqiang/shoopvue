<template>
  <div>
     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData' @goUrl="goUrl"></left-nav>
          </div>
          <!-- 右边内容 -->
          <div class="text-right fr">
               <div class="title">
                    <p>客户服务</p>
               </div>
               <div class="text">
                    <ul class="nav" id="nav">
                         <li class="fl">
                              <span class="hover" status='' refundStatus=''>全部</span>
                         </li>
                         <li class="fl">
                              <span backStatus=1 returnType=1>仅退款（未发货）</span>
                              <span>0</span>
                         </li>
                         <li class="fl">
                              <span backStatus=2 returnType=1>仅退款（已发货）</span>
                              <span>0</span>
                         </li>
                         <li class="fl">
                              <span backStatus=3 returnType=1>退货（已发货）</span>
                              <span>0</span>
                         </li>
                         <li class="fl">
                              <span backStatus='' returnType=2>换货</span>
                              <span>0</span>
                         </li>
                    </ul>
                    <!--tab头-->
                    <ul class="table-header">
                         <li class="fl">商品名<span></span></li>
                         <li class="fl">单价<span></span></li>
                         <li class="fl">数量<span></span></li>
                         <li class="fl">发货信息</li>
                    </ul>
                    <!--list-->
                    <ul class="list" id="list">
                         <!-- <li>
                              订单头部
                              <div class="list-head">
                                   <div class="table-one">
                                        <div class="fl date">2019-03-20</div>
                                        <div class="fl">订单号：43243243454354545543543543</div>
                                   </div>
                              </div>
                              订单内容
                              <div class="list-content first">
                                   <div class="fl list-text">
                                        <img src="~@/assets/imagesRecode//star.png" alt="" class="fl">
                                        <div class="fl">
                                             <h3>五谷杂粮组合30日礼盒粥包营 养早餐八宝粥散装</h3>
                                             <p>净含量3000克</p>
                                        </div>
                                   </div>
                                   <div class="fl number">
                                        <div class="fl price">￥180.00</div>
                                        <div class="fl">x1</div>
                                   </div>
                                   <div class="fl logistics">
                                        <div><span>收货信息：</span><span>浙江省杭州市江干区下沙学源街500号 刘梓宁 17816541247 </span></div>
                                        <div><span>物流公司：</span><span>未选择物流公司</span></div>
                                   </div>
                              </div>
                              <div class="list-content">
                                   <div class="fl list-text">
                                        <img src="~@/assets/imagesRecode//star.png" alt="" class="fl">
                                        <div class="fl">
                                             <h3>五谷杂粮组合30日礼盒粥包营 养早餐八宝粥散装</h3>
                                             <p>净含量3000克</p>
                                        </div>
                                   </div>
                                   <div class="fl number">
                                        <div class="fl price">￥180.00</div>
                                        <div class="fl">x1</div>
                                   </div>
                                   <div class="fl logistics">
                                        <div><span>收货信息：</span><span>浙江省杭州市江干区下沙学源街500号 刘梓宁 17816541247 </span></div>
                                        <div><span>物流公司：</span><span>未选择物流公司</span></div>
                                   </div>
                              </div>
                              订单操作
                              <div class="list-button">
                                   <p class="fr">换货</p>
                              </div>
                         </li> -->
                    </ul>
                    <!--翻页-->
                    <div class="zxf_pagediv"></div>
               </div>
          </div>
     </div>
     <!--留言弹窗-->
     <div class="alertForm leaveMsg1">
          <div class="dog_alert"></div>
          <div class="text">
               <h3>退货/退款详情<img class="fr" src="~@/assets/imagesRecode/delete.png" alt="" onClick="CloseAlert()"></h3>
               <div class="textdata">
                    <div><label for="" class="fl">申请时间:</label><span class="fl">申请时间申请时间申请时间申请时间申请时间申请时间</span></div>
                    <div><label for="" class="fl">买家姓名:</label><span class="fl">543</span></div>
                    <div><label for="" class="fl">退换货原因:</label><span class="fl">543</span></div>
                    <div><label for="" class="fl">退换货图片:</label><span class="fl"><img src="" alt=""></span></div>
               </div>
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
          iindex:5,
        }, 
     } 
  },
  computed: {},
  created() {
    
  },
  mounted() {},
  methods: {
      goUrl(){
        
      } 
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/customerService.scss';
</style>
