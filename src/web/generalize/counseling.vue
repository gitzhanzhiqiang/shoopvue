<template>
  <div>
    <!-- 顶部 top -->
     <div id="header-top" class="header-top"></div>
     <!-- 头部 header -->
     <div id="s-header" class="s-header"></div>
     <!-- banner -->
     <div class="banner"></div>
     <!--乡村导航-->
     <div class="rural">
          <div class="body-center">
               <ul class="list-head">
                    <li class="fl">
                         <img src="~@/assets/imagesRecode/generalize/counselingTitle.png" alt="">
                    </li>
                    <li class="fl oli hover" code="29">咨询服务</li>
                    <li class="fl oli" code="16">文化创意服务</li>
                    <li class="fl oli" code="17">信息服务</li>
                    <li class="fl oli " code="18">技术服务</li>
                    <li class="fl oli" code="19">企业管理服务</li>
                     <li class="fl oli" code="20"> 建筑服务</li>
                      <li class="fl oli" code="21">Ppp服务</li>
               </ul>
              <div class="list_bottom">
					<!--<dl class="fl">
                         <dt>
                              <img src="images/1.png" alt="">
                         </dt>
                         <dd>
                              <p>￥ 120.00</p>
                              <p>油桃油桃油桃新鲜水鲜水</p>
                              <button class="fr">加入购物车</button>
                         </dd>
                    </dl>-->
				</div>
          </div>
     </div>
     <div class="s-footer" id="s-footer"></div> 
  </div>
</template>
<script>
import ajax from "@utils/config";
import top from "@/components/top.vue";
import bottom from "@/components/footer.vue";
import baseURL from "@/assets/js/ajax/baseURL";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
import topBG from "@/components/topBG.vue";
import topBox from "@/components/topBox.vue";
import sellerHeader from "@/components/sellerHeader.vue";
import sliderMenua from "@/components/sliderMenua.vue";
export default {
  components: {
    top,
    bottom,
    topBG,
    topBox,
    sellerHeader,
    sliderMenua,
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
@import './scss/counseling.scss';
</style>