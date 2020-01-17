<template>
  <div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header">
      <seller-header></seller-header>
      <slider-menua @goUrl='goUrl' :navProp="7"></slider-menua>
    </div>
    <!-- banner -->
    <div class="banner"></div>
    <!--内容展示-->
    <div class="exhibition">
      <div class="body-center">
        <div class="top">
          <h3>{{pageParam.classifyId === 1 ? "最新活动": (pageParam.classifyId === 2?'消薄活动':'法律法规')}}</h3>
        </div>
        <ul>
          <li v-for="news in newsList" :key="news.id" @click="goContent(news.id)">{{news.title}}</li>
        </ul>
        <div class="zxf_pagediv"></div>
      </div>
    </div>
    <div class="s-footer" id="s-footer"></div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import sellerHeader from "@/components/sellerHeader.vue";
import sliderMenua from "@/components/sliderMenua.vue";
export default {
  components: {
    sellerHeader,
    sliderMenua
  },
  data() {
    return {
      pageParam: {
        pageIndex: 0,
        pageSize: 15,
        classifyId: null
      },
      newsList: []
    };
  },
  created() {
    this.pageParam.classifyId = this.$route.query.block;
    this.getList();
  },
  methods: {
    // 获取最新动态
    getList() {
      ajax({
        url: "/support-api-impl/newsClassify/seleNewsClassifyById",
        optionParams: this.pageParam
      })
        .post()
        .then(response => {
          if (response.code === 200) {
            let data = response.data.newsArticleVOList
              ? response.data.newsArticleVOList
              : [];

            this.newsList = data;
          } else {
            this.$message({
              message: response.msg,
              type: "warning"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 进入新闻详情页面
     * @param {Number} id 新闻的id
     */
    goContent(id) {
      this.$router.push(`newsContent?id=${id}`);
    },
    goUrl() {},
    goUrlBox() {}
  }
};
</script>
<style lang='scss' scoped>
@import "./scss/newsList.scss";
</style>