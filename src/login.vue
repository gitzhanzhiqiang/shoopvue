<template>
  <div>
    <!--头部-->
    <div class="login-header content">
      <!--左边-->
      <a href="index"><img class="fl" src="~@/assets/imagesRecode/login/logohong1.png" alt=""></a>
    </div>
    <!-- 中间登录模板 -->
    <div class="login-center" :style="{ backgroundImage: 'url(' + (loginType ? (loginType === 1? loginImg1:(loginType === 2? loginImg2 : (loginType === 3?loginImg3:loginImg4))) : baseImg) + ')'}">
      <div class="content">
        <div class="fl">
          <!--<p>村/户店商</p>
                    <p>用 激 情、用双手创造美好未来。 </p>
                    <p>平台只针对那些符合条件的贫困群体进行帮扶。<br/>请相关群体按照平台要求完成工商登记，按照平台格式进行注册。</p>-->
        </div>
        <div class="fr code">
          <ul>
            <li>
              <div class="fl">
                <p>扫码登录</p>
              </div>
              <div class="fr">
                <p>账号登录</p>
              </div>
            </li>
            <!-- <li>使用微信/爱心购APP扫码登录</li> -->
            <li>
              <div class="qr"></div>
            </li>
            <li>
              <a href="javascirpt:;" class="wx"></a>
              <a href="javascirpt:;" class="alipay"></a>
              <a href="javascirpt:;" class="qq"></a>
            </li>
          </ul>
        </div>
        <div class="fr account">
          <ul>
            <li>
              <div class="fl active">账号登录</div>
              <div class="fr">扫码登录</div>
            </li>
            <!-- <li>使用微信/爱心购APP扫码登录</li> -->
            <li>
              <input maxlength="11" type="text" v-model="loginParam.phone" placeholder="请输入手机号">
              <div class="two">
                <input maxlength="4" type="text" v-model="loginParam.imageCode" placeholder="请输入验证码">
                <img :src="imgCodePic" alt="" @click="getImgCode">
              </div>
              <input maxlength="6" type="text" v-model="loginParam.authCode" placeholder="输入短信验证码">
              <span class="getcode" @click="getPhoneCode" v-if="!isSend">获取短信验证码</span>
              <span class="count_down" v-if="isSend">{{`${num}秒`}}</span>
              <div class="protocol">
                <div>
                  <span @click="isChoose = !isChoose">
                    <img class="fl" v-show="!isChoose" src="~@/assets/imagesRecode/login/dz_meixuan.png">
                    <img class="fl" v-show="isChoose" src="~@/assets/imagesRecode/login/dz_xuanz.png">
                  </span>
                  <span>登录即注册，需同意</span>
                  <a href="UserRegProtocol" target="_blank">《平台用户服务协议》</a>、
                  <a href="PrivacyProtocol" target="_blank">《隐私保护与信息授权协议》</a>
                  <!--<a href="./UserAuthProtocol.html" target="_blank">《用户授权协议》</a>-->
                </div>
              </div>
            </li>
            <li class="last">
              <a href="javascirpt:;" class="wx"></a>
              <a href="javascirpt:;" class="alipay"></a>
              <a href="javascirpt:;" class="qq"></a>
              <button @click="loginForm">登录</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <ul class="login-footer content">
      <li>关于我们<span></span></li>
      <li @click="goPage('PrivacyProtocol')">隐私条款<span></span></li>
      <li @click="goPage('agreement/faq')">常见问题<span></span></li>
      <li @click="goPage('downLoadApp')">APP下载</li>
    </ul>
  </div>
</template>
<script>
import ajax from "@utils/config";
import Cookies from "js-cookie";
export default {
  components: {},
  data() {
    return {
      bg: {
        backgroundImage:
          "url(" + require("@/assets/images/denglu-banner.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      loginParam: {
        phone: "",
        imageCode: "",
        margCode: "",
        authCode: "",
        loginType: 1
      },
      loginImg1: require("@/assets/imagesRecode/purchasingLogin.png"),
      loginImg2: require("@/assets/imagesRecode/villageLogin.png"),
      loginImg3: require("@/assets/imagesRecode/supplierLogin.png"),
      loginImg4: require("@/assets/imagesRecode/administrationLogin.png"),
      baseImg: require("@/assets/imagesRecode/loginbg.png"),
      isSend: false,
      isChoose: false,
      timer: null,
      imgCodePic: "",
      num: 120, //倒计时秒数
      timeID: null, //定时器id
      loginType: null
    };
  },
  created() {
    this.getImgCode();
    this.loginType = this.$route.query.type * 1 || null;
  },
  mounted() {},
  methods: {
    // 获取图形验证码
    getImgCode() {
      if (this.timeID) {
        clearTimeout(this.timeID);
        this.num = 120;
        this.isSend = false;
      }
      ajax({
        url: "/member-api-impl/longin/getImagecCode",
        optionParams: {}
      })
        .post()
        .then(response => {
          if (response.code === 200) {
            let data = response.data ? response.data : [];
            this.loginParam.margCode = data[0];
            this.imgCodePic = `data:image/png;base64,${data[1]}`;
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
    // 获取手机验证码
    getPhoneCode() {
      if (!this.$validate.validatPhone(this.loginParam.phone)) {
        this.$message({
          message: "请输入正确的手机号",
          type: "warning"
        });
        return;
      }
      if (!this.loginParam.imageCode) {
        this.$message({
          message: "请输入图形验证码",
          type: "warning"
        });
        return;
      }
      this.isSend = true;
      this.countDown();
      ajax({
        url: "/member-api-impl/longin/getcode",
        optionParams: this.loginParam
      })
        .post()
        .then(response => {
          if (response.code === 200) {
            let data = response.data ? response.data : [];
            this.$message({
              message: "发送成功！",
              type: "success"
            });
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
    // 登录
    loginForm() {
      this.loginParam.loginType = 1;
      this.loginParam.imageAuthCode = this.loginParam.imageCode;
      if (!this.$validate.validatPhone(this.loginParam.phone)) {
        this.$message({
          message: "请输入正确的手机号",
          type: "warning"
        });
        return;
      }
      if (!this.loginParam.imageCode) {
        this.$message({
          message: "请输入图形验证码",
          type: "warning"
        });
        return;
      }
      if (!this.loginParam.authCode) {
        this.$message({
          message: "请输入手机验证码",
          type: "warning"
        });
        return;
      }
      if (!this.isChoose) {
        this.$message({
          message: "请勾选登录协议",
          type: "warning"
        });
        return;
      }
      ajax({
        url: "/member-api-impl/longin/phoneLogin",
        optionParams: this.loginParam
      })
        .post()
        .then(response => {
          if (response.code === 200) {
            let data = response.data ? response.data : [];
            Cookies.set("token", data.token, {
              expires: 365,
              // secure: true //此项仅在https下生效
            });

            Cookies.set("userInfo", JSON.stringify(data), {
              expires: 365,
              // secure: true
            });
            // 以下按需跳转
            if (this.loginType === 1 || !this.loginType) {
              if (this.$route.query.isDetail) {
                this.$router.go(-1);
              }
              this.$router.push({ path: "/index" });
            } else if (this.loginType === 2) {
              this.$router.push({ path: "/sellerCenter/sellercenter" });
            } else if (this.loginType === 3) {
              this.$router.push({ path: "/supplierCenter/sellercenter" });
            } else {
              this.$router.push({
                path: "/administrative/administrativeagencies"
              });
            }
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
    // 倒计时
    countDown() {
      this.num--;
      if (this.num) {
        this.timeID = setTimeout(this.countDown, 1000);
      } else {
        clearInterval(this.timeID);
        this.num = 120;
        this.isSend = false;
      }
    },
    goPage(path) {
      this.$router.push(path);
    }
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import "@/assets/scss/login.scss";
</style>
