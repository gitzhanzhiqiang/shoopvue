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
                    <p>商品管理</p>
               </div>
               <div class="text">
                    <ul class="nav" id="nav">
                         <li class="fl list"><span class="hover" putAway=''>全部</span></li>
                         <li class="fl list">
                              <span putAway='1'>已上架</span><span>0</span>
                         </li>
                         <li class="fl list">
                              <span putAway='2'>未上架</span><span>0</span>
                         </li>
                         <li class="fl" @click="$router.push('/supplierCenter/addProducts')">
                              <button class="add">添加商品</button>
                         </li>
                         <!-- <li class="fl">
                        <button class="apply">申请分销商品</button>
                    </li> -->
                    </ul>
                    <!--tab头-->
                    <ul class="table-header">
                         <li class="fl">商品名称<span></span></li>
                         <li class="fl">价格<span></span></li>
                         <li class="fl">库存<span></span></li>
                         <li class="fl">总销量<span></span></li>
                         <li class="fl">创建时间<span></span></li>
                         <!--<li class="fl">结束时间<span></span></li>-->
                         <li class="fl">操作</li>
                    </ul>
                    <!-- 操作按钮 -->
                    <div class="handle-btn">
                         <div class="fl checkout">
                              <div class="noSelected"></div>
                         </div>
                         <div class="fl">
                              <span>全选</span>
                              <button class="del">删除</button>
                              <button class="up">上架</button>
                         </div>
                    </div>
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
          iindex:4,
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
@import '@web/sellerCenter/scss/productsManage.scss';
</style>
