<template>
  <div>
    <!-- 顶部 top -->
    <div id="header-top" class="header-top">
    
      <top-Box @goUrlBox="goUrlBox"></top-Box>
    </div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header">
      <seller-header></seller-header>
    </div>
    <!--顶部-->
    <div class="code">
      <div class="body-center">
        <div class="fl">
          <dl>
            <dt><img src="~@/assets/imagesRecode/downLoadApp/merchant.png" alt=""></dt>
            <dd>
              <p>商家版下载</p>
              <p>扫一扫即可下载</p>
            </dd>
          </dl>
        </div>
        <div class="fl">
          <dl>
            <dt><img src="~@/assets/imagesRecode/downLoadApp/user.png" alt=""></dt>
            <dd>
              <p>用户版下载</p>
              <p>扫一扫即可下载</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!--底部-->
  </div>
</template>
<script>
import ajax from "@utils/config";
import topBox from "@/components/topBox.vue";
import sellerHeader from "@/components/sellerHeader.vue";
export default {
  components: {
    topBox,
    sellerHeader,
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    // this.reLoad();
    // this.clearStorage();
  },
  mounted() {},
  methods: {
    goUrl() {},
    goUrlBox() {}
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import "@/assets/scss/downLoad.scss";
</style>
