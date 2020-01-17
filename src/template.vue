<template>
     <div class="psspd">
          <top-Box></top-Box>
          <router-view></router-view>
          <foot></foot>
     </div>
</template>
<script>
import foot from "@/components/footer.vue";
import topBox from "@/components/topBox.vue";
export default {
     components: {
          topBox,
          foot
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
