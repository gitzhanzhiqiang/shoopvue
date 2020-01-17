<template>
     <div class="body-center">
          <div class="fl left">
               <a href="javascript:;" @click="$router.push('/index')">爱心购首页</a>
          </div>
          <ul class="fr right">
               <li class="fl" @click="$router.push('/downLoadApp')">
                    <img class="fl" src="" alt="">
                    <span class="fl">下载APP</span>
                    <span class="fl write">|</span>
               </li>
               <li class="fl" id="loginout">退出登录</li>
          </ul>
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