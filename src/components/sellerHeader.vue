<template>
<!--首页公共中部-->
  <div class="body-center clearfix">
    <div class="header-wapper" id="header-wapper">
      <h1 class="logo fl">
        <a href="javascript:;" style="width:256px;height:47px" @click="$router.push('/index')"></a>
      </h1>
      <div id="seachbox" class="seachbox fl" v-if="!hidden">
        <ul class="seach-tab">
          <li :class="(isGoodSearch? 'active' : 'none')" @click="switchSearch(0)">商品搜索</li>
          <li :class="(!isGoodSearch?'active' : 'none')" @click="switchSearch(1)">店铺搜索</li>
        </ul>
        <div class="seach-input clearfix">
          <input type="text" class="s-input fl" id="s-input" placeholder="请输入关键词搜索~" v-model="keyWords" @keydown.enter="goPage">
          <button class="s-btn fl" id="seachBtn" @click="goPage" @keydown.enter="goPage">搜索</button>
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
      keyWords: "",
      isGoodSearch: true //表示搜索商品； false 表示搜索店铺；
    };
  },
  computed: {},
  created() {
    this.keyWords = this.$route.query.search || "";
    if (this.$route.name === "storeList") {
      this.isGoodSearch = false;
    }
  },
  props: {
    // 控制输入框的显示变量，默认显示。父组件传true 则会隐藏输入框
    hidden: {
      type: Boolean,
      default: false
    }
  },
   watch: {
    //  解决路由相同参数不同回退不能刷新的问题
    $route(newVal, oldVal) {
      if (newVal != oldVal) {
        // 此部重新给赋值
        this.keyWords = this.$route.query.search;
      }
    }
  },
  methods: {
    goPage() {
      this.$emit('getKeyWords', this.keyWords);
      if (this.isGoodSearch) {
        this.$router.push({
          path: `/purchase/productList?search=${this.keyWords}`
        });
      } else {
        this.$router.push({
          path: `/purchase/storeList?search=${this.keyWords}`
        });
      }
    },
    /**
     * 切换搜索方式
     * @param {Number} type 0 商品 1店铺
     */
    switchSearch(type) {
      this.isGoodSearch = !type ? true : false;
    },
  },
  filters: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commin.scss";
.none {}
</style>