<template>
  <div>
   

     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <ul class="centre-left-nav fl" id="centre-left-nav">
               <li><a href="javascript:;"  @click="$router.push('/personCenter/accountInfo')">账号资料</a></li>
               <li class="hover"><a href="javascript:;">账户信息</a><span></span></li>
               <li class="types_1" style="display: none;"><a href="sellerInformation.html">卖家资料</a></li>
               <li class="types_2" style="display: none;"><a href="SupplierInformation.html">供销商资料</a></li>
          </ul>
          <!-- 账户信息 -->
          <div class="text-right fr" id="accountInfo">
               <div class="title">
                    <p>我的 > 账户信息</p>
               </div>
               <div class="text-right-bottom">
                    <div class="title">
                         <img src="image/cardIcon.png" alt="">
                         <span>银行卡信息</span>
                    </div>
                    <ul class="cardInfo">
                         <!--<li> 
                              <img src="../common/images/yinlian.png" alt=""> 
                         </li>-->
                         <li class="edit">
                              <img src="image/add.png" alt="">
                              <p>添加银行卡</p>
                         </li>
                    </ul>
               </div>

          </div>
     </div> 
  </div>
</template>
<script>
import ajax from "@utils/config";
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
@import './scss/addAccount.scss';
</style>