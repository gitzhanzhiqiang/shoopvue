<template>
  <div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header">
      <seller-header :hidden="hideInput"></seller-header>
    </div>

    <div class="content">
      <div class="body-center">
        <p>常见问题</p>
        <ul id="list">
          <li v-for="question in helpList" :key="question.id" @click="goDetail(question.id)">
            <h3>{{question.name}}</h3>
            <p>{{question.text}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import sellerHeader from "@/components/sellerHeader.vue";
export default {
  components: {
    sellerHeader
  },
  data() {
    return {
      helpList: [],
      hideInput: true,
    };
  },
  created() {
       this.getHelpList();
  },
  methods: {
    getHelpList() {
      ajax({
        url: "member-api-impl/helpservice/getHelpServiceList",
        optionParams: {}
      })
        .post()
        .then(response => {
          if (response.code === 200) {
            let data = response.data ? response.data : [];
            this.helpList = data;
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
     * 进入问题详情页面
     * @param {Number} id 新闻的id
     */
    goDetail(id) {
      this.$router.push(`helpDetails?id=${id}`);
    },
    goUrl() {},
    goUrlBox() {}
  },
};
</script>
<style lang='scss' scoped>
@import "./scss/helpCenter.scss";
</style>