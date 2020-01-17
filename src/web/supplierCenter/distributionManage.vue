<template>
  <div>

     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData'></left-nav>
          </div>
          <!-- 右边内容 -->
          <div class="text-right fr">
               <div class="title">
                    <p>分销管理</p>
               </div>
               <div class="text">
                    <ul class="nav" id="nav">
                         <li class="fl"><span class="hover">全部</span></li>
                    </ul>
                    <!--tab头-->
                    <ul class="table-header">
                         <li class="fl">店铺名称<span></span></li>
                         <li class="fl">销售额<span></span></li>
                         <li class="fl">分润</li>
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
@import '@web/sellerCenter/scss/distributionManage.scss';
</style>
