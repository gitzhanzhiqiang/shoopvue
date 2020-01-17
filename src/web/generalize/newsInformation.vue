<template>
     <div>
          <!-- 头部 header -->
          <div id="s-header" class="s-header">
               <seller-header></seller-header>
               <slider-menua @goUrl='goUrl' :navProp="7"></slider-menua>
          </div>
          <!-- banner -->
          <div class="banner"></div>
          <!--最新动态-->
          <div class="recentNews">
               <div class="body-center">
                    <div class="top">
                         <h3 class="fl">最新动态</h3>
                         <p class="fr" @click="goMore(1)">更多> </p>
                    </div>
                    <ul>
                         <li class="side" v-for="news in newsList" :key="news.id" @click="goContent(news.id)">{{news.title}}</li>
                    </ul>
               </div>
          </div>
          <!--内容展示-->
          <div class="exhibition">
               <div class="body-center">
                    <div class="fl">
                         <div class="top">
                              <h3 class="fl">消薄活动</h3>
                              <p class="fr" @click="goMore(2)">更多></p>
                         </div>
                         <ul>
                              <li class="side" v-for="news in KillPoorAcitivity" :key="news.id" @click="goContent(news.id)">{{news.title}}</li>
                         </ul>
                    </div>
                    <div class="fr">
                         <div class="top">
                              <h3 class="fl">法律法规</h3>
                              <p class="fr" @click="goMore(3)">更多></p>
                         </div>
                         <ul>
                              <li class="side" v-for="news in lawerList" :key="news.id" @click="goContent(news.id)">{{news.title}}</li>
                         </ul>
                    </div>
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
               newsList: [], //最新动态
               KillPoorAcitivity: [], //消波活动
               lawerList: [] //法律法规
          };
     },
     computed: {},
     created() {
          this.getNewsList();
          this.getKillPoorAcitivity();
          this.getLawerList();
     },
     mounted() { },
     methods: {
          // 获取最新动态
          getNewsList() {
               ajax({
                    url: "/support-api-impl/newsClassify/seleNewsClassifyById",
                    optionParams: {
                         classifyId: 1,
                         pageSize: 6,
                         pageIndex: 1
                    }
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
          // 获取薄弱活动
          getKillPoorAcitivity() {
               ajax({
                    url: "/support-api-impl/newsClassify/seleNewsClassifyById",
                    optionParams: {
                         classifyId: 2,
                         pageSize: 5,
                         pageIndex: 1
                    }
               })
                    .post()
                    .then(response => {
                         if (response.code === 200) {
                              let data = response.data.newsArticleVOList
                                   ? response.data.newsArticleVOList
                                   : [];
                              this.KillPoorAcitivity = data;
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
          // 获取法律法规
          getLawerList() {
               ajax({
                    url: "support-api-impl/newsClassify/seleNewsClassifyById",
                    optionParams: {
                         classifyId: 3,
                         pageSize: 6,
                         pageIndex: 1
                    }
               })
                    .post()
                    .then(response => {
                         if (response.code === 200) {
                              let data = response.data.newsArticleVOList
                                   ? response.data.newsArticleVOList
                                   : [];
                              this.lawerList = data;
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
           * 查看更多
           * @param {Number} id 不同模块的id
           * 1最新资讯 2消博 3法律法规
           */
          goMore(id) {
               this.$router.push(`newsList?block=${id}`);
          },
          /**
           * 进入新闻详情页面
           * @param {Number} id 新闻的id
           */
          goContent(id) {
               this.$router.push(`newsContent?id=${id}`)
          },
          goUrl() { }
     }
};
</script>
<style lang='scss' scoped>
@import "./scss/newsInformation.scss";
</style>