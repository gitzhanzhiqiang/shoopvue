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
                    <p>数据统计</p>
               </div>
               <div class="text">
                    <ul class="nav" id="nav">
                         <li class="fl">
                              <span>起始日期</span>
                              <input type="text" id="J-xl" readonly>
                         </li>
                         <li class="fl">
                              <span>截止日期</span>
                              <input type="text" id="J-xl-end" readonly>
                         </li>
                         <li class="fl">
                              <button>确定</button>
                         </li>
                    </ul>
                    <!--tab头-->
                    <ul class="table-header">
                         <li class="fl">商户名<span></span></li>
                         <li class="fl">手机号<span></span></li>
                         <li class="fl">销售总额<span></span></li>
                         <li class="fl">分润额</li>
                    </ul>
                    <!--list-->
                    <ul class="list" id="list"></ul>
                    <!--翻页-->
                    <div class="zxf_pagediv"></div>
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
          munuType:1,
          iindex:7,
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
@import '@web/sellerCenter/scss/dataStatistics.scss';
</style>
