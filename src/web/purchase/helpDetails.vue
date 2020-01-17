<template>
  <div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header">
      <seller-header :hidden="hideInput"></seller-header>
    </div>
    <div class="content" id="help">
      <div class="body-center">
        <h3>{{ question.name }}</h3>
        <p>{{ question.text }}</p>
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
      question: {
        name: "",
        text: ""
      },
       hideInput: true,
    };
  },
  created() {
    let id = this.$route.query.id;
    this.getDetail(id);
  },
  methods: {
    getDetail(id) {
      ajax({
        url: "member-api-impl/helpservice/getHelpServiceById",
        optionParams: {
          id: id
        }
      })
        .post()
        .then(response => {
          if (response.code === 200) {
            let data = response.data ? response.data : [];
            this.question = data;
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
    goUrl() {},
    goUrlBox() {}
  }
};
</script>
<style lang='scss' scoped>
@import "./scss/helpDetails.scss";
</style>