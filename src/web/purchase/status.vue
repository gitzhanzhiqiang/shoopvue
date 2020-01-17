<template>
  <div>
      <!-- 顶部 top -->
    <div id="header-top" class="header-top"></div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header"></div>

    <!-- 状态成功页面 -->
    <div id="status" class="body-center">
        <div class="status-inner">
            <div class="status-img error" id="stusImg"></div>
            <p class="status-text" id="stusTxt">支付成功</p>
            <p class="status-money" id="stusMoney"></p>
            <div class="status-operation" id="stusBtn">
                <a href="javascript:" class="status-btn cole22">返回首页</a>
                <!--<a href="javascript:" class="status-btn colfff">查看</a>-->
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
@import './scss/status.scss';
</style>