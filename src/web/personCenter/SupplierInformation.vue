<template>
  <div>
     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <ul class="centre-left-nav fl">
               <li class="hover"><a href="javascript:;">账号资料</a><span></span></li>
               <li><a href="javascript:;"  @click="$router.push('/personCenter/addAccount')">账户信息</a></li>
               <li class="types_1" style="display: none;"><a href="javascript:;"  @click="$router.push('/personCenter/sellerInformation')">卖家资料</a></li>
               <li class="types_2 hover" style="display: none;"><a href="javascript:;">供销商资料</a></li>
          </ul>
          <!-- 右侧内容 -->
          <div class="text-right fr">
               <div class="title">
                    <p>我的 > 卖家资料</p>
               </div>
               <div class="text-right-box">
                    <!--头像和账户-->
                    <div class="text-right-top">
                         <div class="info" id="info">
                              <form id="ajaxForm" target="nm_iframe" enctype="multipart/form-data" action="" method="post">
                                   <div class="fl info-photo">
                                        <input name="userImage" type="file" accept="image/*">
                                   </div>
                              </form>
                              <ul class="f1 info-account"></ul>
                         </div>
                    </div>
                    <!--个人信息-->
                    <ul class="text-right-bottom">
                         <li>
                              <span class="fl left">商户类型：</span>
                              <span class="fl center typea"></span>
                         </li>
                         <li>
                              <span class="fl left">负责人/企业法人姓名：</span>
                              <span class="fl center accountType"></span>
                         </li>
                         <li>
                              <span class="fl left">联系人电话：</span>
                              <span class="fl center phone"></span>
                         </li>
                         <li>
                              <span class="fl left">联系地址：</span>
                              <span class="fl center address"></span>
                         </li>
                         <li>
                              <span class="fl left">客服电话：</span>
                              <span class="fl center appid">1447155122</span>
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
@import './scss/sellerInformation.scss';
</style>