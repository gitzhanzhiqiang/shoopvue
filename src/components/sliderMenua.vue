<template>
     <div id="sliderMenua">
          <div id="sliderMenu" class="slider-menu" @mouseleave="showMenu = false">
               <!-- 菜单 -->
               <div class="menu-nav fl">
                    <h3 id="cate-theme" @mouseover="showMenu=true"><img src="~@/assets/imagesRecode/component/kun.png" width="16px" height="14px" alt="">
                         <b>品牌商城</b>
                    </h3>
                    <div @mouseleave="showMenu=false" v-show="showMenu">
                         <ul id="cate-menu" class="cate-menu">
                              <li :class="(nowIndex === i?'ac cate-menu-item actived': 'cate-menu-item')" v-for="(menu, i) in menuList" :key="menu.id" @mouseover="nowIndex=i">
                                   <img :src="menu.iconAddress" style="position: absolute;left: 10px;top: 16px;width: 14px;height: 14px;">
                                   <a href="javascript:;" @click="goPage(menu)" class="">{{menu.name}}</a>
                                   <em><img src="~@/assets/imagesRecode/component/syj.png"></em>
                              </li>
                         </ul>
                         <div class="cate-pop" id="cate-pop">
                              <dl class="cate-pop-col clearfix" v-for="child in nowArr" :key="child.id">
                                   <dt class="cate-pop-tit fl">
                                        <a href="javascript:;" @click="goPage(child)">{{child.name}}</a>&gt;
                                   </dt>
                                   <dd class="cate-pop-con fl" v-if="child.childList">
                                        <a href="javascript:;" @click="goPage(item)" v-for="item in child.childList" :key="item.id">{{item.name}}</a>
                                   </dd>
                              </dl>
                         </div>
                    </div>
               </div>

               <!-- 导航 -->
               <div class="navitems fr">
                    <ul class="navitems-group">
                         <li v-for="(item,index) in forwardTypeList" :key="index">
                              <a :class="{hover:item.show}" href="javascript:;" @click="goDetail(item)">{{item.name}}</a>
                         </li>
                    </ul>
                    <div class="navitems-select" id="navitems-select">
                         <ul></ul>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import ajax from "@utils/config";
import Cookies from "js-cookie";
export default {
     components: {},
     props: {
          navProp: {
               type: Number,
               default: -1
          }
     },
     data() {
          return {
               menuList: [],
               forwardTypeList: [],
               showMenu: false,
               nowIndex: 0
          };
     },
     computed: {
          nowArr() {
               if (this.menuList.length) {
                    return this.menuList[this.nowIndex].childList;
               } else {
                    return {};
               }
          }
     },
     created() {
          this.getMenuList();
     },
     methods: {
          goPage(item) {
               this.$router.push(`/purchase/productList?search=${item.name}`);
          },
          goDetail(item) {
               if (item.jumpWay === 2) {
                    // 暂时注释，后期需要用上面的这个，同时需要后台配路由
                    // window.open(item.url, "_self");
                    this.$router.push(item.path);
                    return;
               }
               this.goPage(item);
          },
          goUrl() {
               let pathTmp = this.$route.path;
               this.forwardTypeList.map(item => {
                    if (item.path == pathTmp) {
                         item.show = true;
                    }
               });
          },
          /**
           * 获取店铺商品列表
           */
          getMenuList() {
               ajax({
                    url: "member-api-impl/user/getHomePageInfo",
                    optionParams: {
                         loginType: 2
                    }
               })
                    .post()
                    .then(res => {
                         if (res.code === 200) {
                              this.menuList = res.data.goodsType.menuList;
                              this.forwardTypeList = res.data.forwardTypeList;
                              this.forwardTypeList.map(item => {
                                   item.show = false;
                                   if (item.url) {
                                        // 暂时注释，后期需要用上面的这个，同时需要后台配路由 配了之后下面可以删
                                        let arr = item.url.split("/");
                                        try {
                                             item.path = `/${arr[3]}/${arr[4].replace(".html", "")}`;
                                        } catch (error) {
                                             throw "此非网站内部跳转！";
                                        }
                                   }
                              });
                              this.goUrl();
                         }
                    })
                    .catch(error => {
                         console.log(error);
                    });
          }
     },
     filters: {}
};
</script>

<style lang="scss">
.ac {
     a {
          color: #c52721 !important;
     }
}

.s-header .slider-menu .menu-nav .cate-menu .cate-menu-item.actived {
     background: #fff;
}
</style>