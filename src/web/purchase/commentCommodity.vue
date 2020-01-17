<template>
  <div>
     <div class="s-header" id="s-header"></div>
     <div class="content">
          <div class="body-center">
               <h3>当前订单状态：给与评价</h3>
               <div class="shopList" id="shopList"> </div>
               <div class="button" id="appraise">发表评价</div>
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
@import './scss/commentCommodity.scss';
</style>