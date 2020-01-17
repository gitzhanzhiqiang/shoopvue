<template>
  <div>

     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <ul class="centre-left-nav fl">
               <li><a href="javascript:;" @click="$router.push('/administrative/administrativeagencies')">政府/机构信息</a></li>
               <li class="hover"><a href="javascript:;">乡村数据</a><span></span></li>
          </ul>
          <div class="text-right fr">
               <div class="title">
                    <p>政府/机构信息 > 乡村数据</p>
               </div>
               <div class="data-left">
                    <div class="data-table">
                         <ul class="data-table-th">
                              <li style="width: 131px;">帮扶村数量 <span></span></li>
                              <li style="width: 171px;">非经营性收入总额<span></span></li>
                              <li style="width: 121px;">销售收入<span></span></li>
                              <li style="width: 150px;">劳务收入</li>
                         </ul>
                         <div class="data-top-content">
                         </div>
                    </div>
                    <div class="data-table">
                         <ul class="data-table-th">
                              <li style="width: 131px;">服务收入 <span></span></li>
                              <li style="width: 171px;">租赁收入<span></span></li>
                              <li style="width: 121px;">管理收入<span></span></li>
                              <li style="width: 150px;">完成进度</li>
                         </ul>
                         <div class="data-bottom-content">
                         </div>
                    </div>
               </div>
               <!-- ECharts单文件引入 -->
               <div class="data-right">
                    <div class="data-echarts">
                         <div class="data-content-ract" id="ractbar" style="width: 100%; height:260px;"></div>
                    </div>
                    <div class="data-echarts">
                         <div class="echats progress" id="progress" style="width: 203px;height:206px"></div>
                         <div class="echats balance" id="balance" style="width: 203px;height:206px"></div>
                    </div>
               </div>
          </div>
     </div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import baseURL from "@/assets/js/ajax/baseURL";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
  components: {
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
@import './scss/villagedata.scss';
</style>