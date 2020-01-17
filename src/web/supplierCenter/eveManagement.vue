<template>
  <div>
     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData' @goUrl="goUrl"></left-nav>
          </div>
          <div class="text-right fl">
               <div class="title">
                    <p>卖家中心 > 评价管理</p>
               </div>
               <div class="text">
                    <ul class="text_header">
                         <li class="flone">评分</li>
                         <li class="fltwo">评价</li>
                         <li class="flthree">商品</li>
                    </ul>
                    <ul class="text_list" id="text_list_d">
                         <!--<li>
               				<div class="text_list_one">
               					<p>迪丽热巴</p>
               					<span>
               						<img src="./images/start1.png"/>
	               					<img src="./images/start1.png"/>
	               					<img src="./images/start1.png"/>
	               					<img src="./images/start1.png"/>
	               					<img src="./images/start1.png"/>
	               				</span>
               				</div>
               				<div class="text_list_two">
               					<p>
               						大富科技三打两建逢狼时刻的减肥的抗衰老见识到了跨境电商发来看建档立卡富家大室看风景水电费打飞机看的书法家看电视剧弗兰克的设计费适得府君书大立科技弗兰克斯的减肥来看电视剧逢狼时刻的减肥了圣诞节逢狼时刻的减肥是的浪费肯德基烦死了会计分录速度快解放路看电视剧发了多少看分数奥斯卡级大佬看电视剧撒开的骄傲施蒂利克街坊邻居
               					</p>
               					<span>2019-05-22 12:12</span>
               				</div>
               				<div class="text_list_three">
               					<h4>新鲜农夫苹果无农药无污染可口香甜红苹果</h4>
               					<p>规格名：规格值规格值规格值规格值规格值</p>
               				</div>
               			</li>-->
                    </ul>

                    <div class="zxf_pagediv" style="text-align: center;"></div>

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
          iindex:6,
        }, 
     } 
  },
  computed: {},
  created() {
    
  },
  mounted() {},
  methods: {
     goUrl(){} 
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import '@web/sellerCenter/scss/eveManagement.scss';
</style>
