<template>
     <div class="body-center">
          <div class="fl left" @click="$router.push('/index')"><img class="fl logo" src="~@/assets/imagesRecode/component/s-logo.png" alt=""></div>
          <ul class="fr right">
               <li class="fl right_nav">
                    <a href="javascript:;" @click='$router.push("/supplierCenter/sellercenter")'>爱心供应商</a>
               </li>
               <li class="fl right_nav">
                    <a href="javascript:;" @click='$router.push("/administrative/administrativeagencies")'>政府/机构信息</a>
               </li>
               <li class="fl last">
                    <a href="javascript:" @click='$router.push("/personCenter/accountInfo")'><img class="fl" src="~@/assets/imagesRecode/component/star.png" alt=""></a>
               </li>
          </ul>
     </div>
</template>

<script>
// import ajax from '@utils/config';
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
     watch: {

     }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commin.scss";
</style>