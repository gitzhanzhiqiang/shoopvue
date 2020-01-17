<template>
     <div id="header-top" class="header-top" v-show="isShow == -1">
          <div class="topBg">
               <img src="~@/assets/imagesRecode/component/tophead.png" alt="">
          </div>
          <div class="bottom">
               <div class="body-center " id="topbox">
                    <span @click="goPage(1)" class="seller-center point" v-if="!isLogin">爱心采购商</span>
                    <span @click="goPage(2)" class="seller-center point" v-if="userInfo.types === 1 || !isLogin">村/户店商</span>
                    <span @click="goPage(3)" class="seller-center point" v-if="userInfo.types === 2 || !isLogin">爱心供应商</span>
                    <span @click="goPage(4)" class="seller-center point" v-if="!isLogin">行政/机构</span>

                    <!-- 认证 -->
                    <span @click="goPage(2)" class="seller-center point" v-if="userInfo.types === 0 ">村/户店商</span>
                    <span @click="goPage(3)" class="seller-center point" v-if="userInfo.types === 0 ">爱心供销商</span>
                    <span @click="goPage(4)" class="seller-center point" v-if="userInfo.types === 0 ">政府/机构认证</span>

                    <ul class="site-nav fr">
                         <!-- 登录情况下 -->
                         <li class="site-nav-menu" v-if="isLogin">
                              <a href="javascript:" class="user-name">
                                   <i class="user-icon">
                                        <img :src="(userInfo.userImage? userInfo.userImage : baseHead)" width="100%" height="100%" style="display:block" alt="">
                                   </i>
                                   {{userInfo && userInfo.nickname}}
                              </a>
                              <span style="font-size: 14px;color:#666;  cursor: pointer;" id="loginout" @click="loginOUT">退出</span>
                         </li>
                         <!-- 未登录情况下 -->
                         <li class="site-nav-menu" v-if="!isLogin">
                              <a href="/login" @click="$router.push('/login')" class="top-login">请登录</a>
                              <a href="/login" @click="$router.push('/login')" class="top-register">免费注册</a>
                         </li>
                         <li class="site-nav-pipe"></li>
                         <li class="site-nav-menu">
                              <a href="javascript:;" @click="goUrlBox('/buyerPersonCenter/myshopping', 1)">我的爱心购
                                   <i class="arrow-icon"></i>
                              </a>
                         </li>
                         <li class="site-nav-pipe"></li>
                         <li class="site-nav-menu">
                              <a href="javascript:;" @click="goUrlBox('/buyerPersonCenter/myOrder', 1)">我的订单</a>
                         </li>
                         <li class="site-nav-pipe"></li>
                         <li class="site-nav-menu">
                              <a href="javascript:;" @click="goUrlBox('/buyerPersonCenter/myCart', 1)">
                                   <i class="cart-icon"></i>购物车</a>
                         </li>
                         <li class="site-nav-pipe"></li>
                         <li class="site-nav-menu">
                              <a href="javascript:;" @click="goUrlBox('/downLoadApp')">
                                   <i class="download-icon"></i>下载APP</a>
                         </li>
                         <li class="site-nav-pipe"></li>
                         <li class="site-nav-menu">
                              <a href="javascript:;" @click="goUrlBox('/purchase/helpCenter')">帮助中心</a>
                         </li>
                    </ul>
               </div>
          </div>
     </div>
</template>

<script>
import Cookies from "js-cookie";
import ajax from "@utils/config";
export default {
     components: {
     },
     data() {
          return {
               userInfo: {},
               isLogin: false,
               headPicture: "",
               baseHead: require("@/assets/imagesRecode/headicon.png")
          };
     },
     computed: {
          isShow () {
               let path = this.$route.path;
               return path.indexOf('agreement');
          }
     },
     created() {
          this.userInfo = Cookies.get("userInfo")? JSON.parse(Cookies.get("userInfo")): {};
          if (Cookies.get("token")) {
               this.isLogin = true;
          }
     },
     methods: {
          goUrlBox(path, status) {
               // 未登录调回登录页
               if (!this.isLogin && status) {
                    this.$router.replace({ path: "/login" });
                    return;
               }

               let pathTmp = this.$route.path;
               if (pathTmp != path) {
                    this.$router.push(path);
               }
          },
          // 退出登录
          loginOUT() {
               ajax({
                    url: "/member-api-impl/longin/logout",
                    optionParams: {
                         loginType: 1,
                         token: Cookies.get("token")
                    }
               })
                    .post()
                    .then(response => {
                         if (response.code === 200) {
                              Cookies.set("token", "", {
                                   expires: -1
                              });

                              Cookies.set("userInfo", "", {
                                   expires: -1
                              });

                              this.$router.push({ path: "/login" });
                         }
                    })
                    .catch(error => {
                         console.log(error);
                    });
          },
          goPage(type) {
               // 登录情况下
               if (this.isLogin) {
                    if (type === 1) {
                         this.$router.push({ path: "/index" });
                    } else if (type === 2) {
                         this.$router.push({ path: "/sellerCenter/sellercenter" });
                    } else if (type === 3) {
                         this.$router.push({ path: "/supplierCenter/sellercenter" });
                    } else {
                         this.$router.push({ path: "/administrative/administrativeagencies" });
                    }
               } else {
                    // 未登录
                    this.$router.push({ path: `/login?type=${type}` });
               }
          }
     },
     filters: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commin.scss";
.header-top {
  .top {
    width: 100%;
    height: 100px;
    background: #f22723;
    text-align: center;
  }
  .bottom {
    margin: 0 auto;
    width: 1200px;
    height: 30px;
    background: #ebebeb;
  }
  .seller-center {
    line-height: 30px;
    font-size: 12px;
    color: #666;
  }
  .site-nav {
    float: right;
    li {
      float: left;
    }
    .site-nav-pipe {
      width: 1px;
      height: 16px;
      line-height: 16px;
      color: #666;
      background: #666;
      margin: 7px 15px;
    }
    .site-nav-menu {
      a {
        font-size: 12px;
        line-height: 30px;
        color: #666;
      }
      .top-login {
        margin-right: 10px;
        color: #e2231a;
      }
      .user-icon {
        width: 17px;
        height: 17px;
        background: #f6d1cf;
        border-radius: 4px;
      }
      .user-name {
        margin-right: 10px;
        font-size: 14px;
        color: #fe9d48;
      }
    }
    i {
      line-height: 30px;
      margin-top: -3px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
    }
    .cart-icon {
      width: 17px;
      height: 15px;
      background: url('~@/assets/imagesRecode/component/shopping-cart.png') no-repeat;
    }
    .download-icon {
      width: 12px;
      height: 19px;
      background: url('~@/assets/imagesRecode/component/download.png') no-repeat;
    }
  }
}
.topBg {
     width: 100%;
     height: 100px;
     background: #f22723;
     text-align: center;
}

.topBg img {
     width: 1200px;
}

.point {
     margin-left: 20px;
     cursor: pointer;
}

.point:first-child {
     margin-left: 0;
}

#topbox {
     padding: 0 20px !important;
     width: 1160px !important;
}
</style>