<template>
     <div>

          <!-- 头部 header -->
          <div id="s-header" class="s-header">
               <seller-header></seller-header>
               <slider-menua @goUrl='goUrl' :navProp="7"></slider-menua>
          </div>
          <div class="content">
               <div class="top">
                    <!--<ul>
                         <li>爱心首页<span>></span></li>
                         <li>新闻资讯<span>></span></li>
                         <li>最新动态<span>></span></li>
                         <li>正文</li>
                    </ul>-->
                    <div class="title">
                         <div> {{article.title}}</div>
                         <div>
                              <p class="fl">发布时间：
                                   <span>{{ article.createTime }}</span>
                              </p>
                              <p class="fr">文章来源：
                                   <span>{{ article.articleSource }}</span>
                              </p>
                         </div>
                    </div>
               </div>
               <div class="bottom content1" v-html="article.content"></div>
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
               article: {
                    title: "",
                    createTime: "",
                    articleSource: "",
                    content: ""
               }
          };
     },
     created() {
          let id = this.$route.query.id;
          this.getContent(id);
     },
     methods: {
          /**
           * 获取新闻详情
           * @param {Number} id 新闻的id 从路由获取
           */
          getContent(id) {
               ajax({
                    url: "support-api-impl/newsClassify/seleNewsArticleById",
                    optionParams: {
                         articleId: id
                    }
               })
                    .post()
                    .then(response => {
                         if (response.code === 200) {
                              let data = response.data ? response.data : {};
                              this.article = data;
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
          goUrl() { },
          goUrlBox() { }
     },
     filters: {}
};
</script>
<style lang='scss' scoped>
@import "./scss/newsContent.scss";
</style>