<template>
  <div class="custom-nodata" v-if="isShow">
    <div class="custom-nodata-inner">
      <img class="custom-nodata-img" :src="imgSrc" alt>
      <br>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  /**
   * 使用说明：
   * <nodata :isShow="boolean">要显示的文字</nodata>
   */
  components: {},
  props: ["isShow"],
  data() {
    return {
      imgSrc: require("@/assets/images/wuyaoq.png")
    };
  },
  computed: {},
  created() {},
  methods: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.custom-nodata {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .custom-nodata-inner {
    display: inline;
    text-align: center;
  }

  .custom-nodata-img {
    display: block;
    margin: 10px auto;
  }
}
</style>
