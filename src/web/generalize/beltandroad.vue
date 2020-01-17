<template>
     <div>
          <!-- 头部 header -->
          <div id="s-header" class="s-header">
               <seller-header></seller-header>
               <slider-menua @goUrl="goUrl" :navProp="4"></slider-menua>
          </div>
          <!-- banner -->
          <div class="banner"></div>
          <div class="banner_nav">
               <b>一带一路</b>
               <ul class="fl">
                    <li class="fl">母婴用品 </li>
                    <li class="fl">生活用品</li>
                    <li class="fl">酒饮食品</li>
                    <li class="fl">家居用品</li>
                    <li class="fl">出行用品</li>
                    <li class="fl">运动用品</li>
                    <li class="fl">文化用品</li>
                    <li class="fl">办公用品</li>
                    <li class="fl">装修用品</li>
                    <!--<li class="fl last">更多
                         <img src="images/biao.png" alt="">
                         <ul>
                              <li>543</li>
                              <li>543</li>
                              <li>543</li>
                         </ul>
                    </li>-->
               </ul>
          </div>
          <div class="rural">
               <div class="body-center">
                    <ul class="list-head">
                         <li class="fl">
                              <img src="~@/assets/imagesRecode/generalize/eluosi.png" alt="">
                         </li>
                         <li class="fl">商品暂未分类</li>
                         <span class="cityList">
                              <!--<li class="fl oli hover">宁波</li>
                                   <li class="fl oli">温州</li>
                                   <li class="fl oli">杭州</li>
                                   <li class="fl oli">宁波</li>-->
                         </span>

                    </ul>
                    <div class="list_bottom">
                         <dl class="fl" v-for="item in list_bottom">
                              <dt>
                                   <img :src="item.imageAddress" alt="">
                              </dt>
                              <dd>
                                   <p>￥ {{item.goodsMoney}}</p>
                                   <p>{{item.name}}</p>
                                   <button class="fr">加入购物车</button>
                              </dd>
                         </dl>

                    </div>
                    <!-- 没有数据显示 -->
                    <div id="nodata" style="display: none;">
                         <img src="~@/assets/imagesRecode/noData.png" alt="">
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from "@utils/config";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
import sellerHeader from "@/components/sellerHeader.vue";
import sliderMenua from "@/components/sliderMenua.vue";
export default {
     components: {
          sellerHeader,
          sliderMenua
     },
     data() {
          return {
               params: {
                    address: '',
                    type: 9,
               },
               list_bottom: [],
          }
     },
     computed: {},
     created() {
          this.getList()
     },
     mounted() { },
     methods: {
          goUrl() { },
          getList() {
               ajax({
                    url: 'product-api-impl/goodsGroup/searchGoodsByGroupType',
                    optionParams: this.params
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.list_bottom = response.data.list ? response.data.list : []
                         } else {
                              this.$message.warning(response.msg);
                              console.log(response)
                         }

                    })
                    .catch(error => {
                         console.log(error)
                    })
          },
     },
     filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/beltandroad.scss';
</style>