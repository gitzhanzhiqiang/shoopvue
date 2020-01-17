<template>
     <div class="psspd">
          <!--公共头部-->
          <div class="header sellerHeader" id="header">
               <seller-Topheader></seller-Topheader>
          </div>
          <!--中心的头部搜索-->
          <div class="header-seach" id="header-seach">
               <seller-Tab></seller-Tab>
          </div>
          <router-view></router-view>
     </div>
</template>
<script>
import sellerTopheader from "@/components/sellerTopheader.vue";
import sellerTab from "@/components/sellerTab.vue";
export default {
     components: {
          sellerTopheader,
          sellerTab
     },
     data() {
          return {
          };
     },
     mounted() {
     },
     beforeDestroy() {
     },
     created() { },
     methods: {
     }
};
</script>
<style lang='scss' scoped>

</style>
