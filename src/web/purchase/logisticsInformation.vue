<template>
  <div>
     <!-- 头部 header -->
     <div id="s-header" class="s-header"></div>
     <div class="content">
          <div class="body-center">
               <h3>物流信息</h3>
               <div class="top">
                    <ul>
                         <li class="fl">
                              <div><img src="images/logisticsimg1.png" alt=""></div>
                              <p>待揽件</p>
                         </li>
                         <li class="fl">
                              <div><img src="images/logisticsimg2.png" alt=""></div>
                              <p>运输中</p>
                         </li>
                         <li class="fl">
                              <div><img src="images/logisticsimg3.png" alt=""></div>
                              <p>派送中</p>
                         </li>
                         <li class="fl">
                              <div><img src="images/logisticsimg4.png" alt=""></div>
                              <p>已签收</p>
                         </li>
                    </ul>
               </div>
               <ul class="list">
                    <!-- <li>
                         <div class="fl left">2019-05-22<span>周三</span></div>
                         <div class="fl right">
                              <p>13:59:48<span>商品已经下单</span></p>
                              <p>13:59:48<span>商品已经下单</span></p>
                              <p>13:59:48<span>商品已经下单</span></p>
                         </div>
                    </li>
                    <li>
                         <div class="fl left">2019-05-22<span>周三</span></div>
                         <div class="fl right">
                              <p>13:59:48<span>商品已经下单</span></p>
                              <p>13:59:48<span>商品已经下单</span></p>
                              <p>13:59:48<span>商品已经下单</span></p>

                         </div>
                    </li> -->
               </ul>
               <div class="text">
                    <p>
                         运单号码:<span></span>物流公司:<span></span>客服电话:<span></span>
                    </p>
                    <p>
                         发货地址:<span>浙江省杭州搜花见花开揽件林俊杰非官方154号（钢铁侠&nbsp;寄）</span>&nbsp;&nbsp;<span>2321432423*432432</span>
                    </p>
                    <p>
                         收货地址:<span>浙江省杭州搜花见花开揽件林俊杰非官方154号（钢铁侠&nbsp;寄）</span>&nbsp;&nbsp;<span>2321432423*432432</span>
                    </p>
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
@import './scss/logisticsInformation.scss';
</style>