<template>
  <div class="banner">
    <el-carousel arrow="never" height="408px">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.img" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
    <div class="registrations">
      <div class="regist" style="margin-top: 40px;">
        <p>不死鸟注册用户</p>
        <h3>
          1985211
          <span>人</span>
        </h3>
      </div>
      <div class="regist" style="margin-top: 20px;margin-bottom: 20px;">
        <p>客户累计赚取</p>
        <h3>
          108915
          <span>万元</span>
        </h3>
      </div>
      <div class="bottoml">立即注册领取红包</div>
      <div class="bottomd">立即登陆</div>
    </div>
  </div>
</template>
<script>
import ajax from "@utils/config";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    //获取banner图
    getBanner() {
      ajax({
        url: "index/bannerList",
        optionParams: {}
      })
        .fetch()
        .then(response => {
          if (response.code === 200) {
            this.bannerList = response.data;
          } else {
            console.error(response);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commin.scss";
//轮播图样式
.banner {
  position: relative;
  width: 100%;
  height: 408px;
  img {
    width: 100%;
  }
  .registrations {
    position: absolute;
    top: 0;
    left: 50%;
    margin-top: 30px;
    margin-left: 290px;
    width: 310px;
    height: 348px;
    background: rgba(255, 255, 255, 1);
    z-index: 999;

    .regist {
      width: 100%;
      overflow: hidden;

      p {
        text-align: center;
        font-size: 16px;
        font-family: MicrosoftYaHeiLight;
        font-weight: 300;
        color: rgba(139, 143, 151, 1);
        line-height: 30px;
      }

      h3 {
        text-align: center;
        font-size: 40px;
        font-family: MicrosoftYaHei;
        font-weight: bold;
        color: rgba(255, 106, 70, 1);

        span {
          font-size: 16px;
        }
      }
    }

    .bottoml {
      width: 220px;
      height: 48px;
      background: rgba(255, 168, 70, 1);
      border-radius: 2px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 48px;
      margin: 0 auto;
    }

    .bottomd {
      text-align: center;
      line-height: 48px;
      font-size: 14px;
      font-family: MicrosoftYaHeiLight;
      font-weight: bold;
      color: rgba(139, 143, 151, 1);
    }
  }
}
</style>
