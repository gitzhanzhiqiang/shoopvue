<template>
     <div class="body-center clearfix">
          <div class="header-wapper" id="header-wapper">
               <h1 class="logo fl">
                    <a href="/" style="width:256px;height:47px"></a>
               </h1>
               <div id="seachbox" class="seachbox fl">
                    <ul class="seach-tab">
                         <li class="active">商品搜索</li>
                         <li>店铺搜索</li>
                    </ul>
                    <div class="seach-input clearfix">
                         <input type="text" class="s-input fl" onkeyup="return seachQuery(event)" id="s-input" placeholder="请输入关键词搜索~" value="">
                         <button class="s-btn fl" id="seachBtn">搜索</button>
                    </div>
                    <ul class="seach-menu"></ul>
               </div>
          </div>
     </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
     components: {},
     data() {
          return {

          };
     },
     computed: {
     },
     created() {
     },
     methods: {

     },
     filters: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commin.scss";
</style>