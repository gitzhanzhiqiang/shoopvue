<template>
  <div class="indexPage" v-infinite-scroll="load">
    <!-- 头部 header -->
    <div id="s-header" class="s-header">
      <seller-header></seller-header>
      <slider-menua></slider-menua>
    </div>
    <!-- banner -->
    <div class="banner">
      <div class="body-center">
        <div class="left fl">
          <div class="swiper-container img">
            <div class="swiper-wrapper img">
              <div class="swiper-slide" v-for="pic in bannerList" :key="pic.id">
                <a :href="pic.url"><img :src='pic.picture' alt=""></a>
              </div>
            </div>
          </div>
          <div class="pagination"></div>
        </div>
      </div>
    </div>

    <!-- 中间四个box -->
    <div class="fourBox" id="fourBox">
      <div class="box" v-for="item in firstGroupList" :key="item.id" @click="goPage(item)">
        <div class="title">{{ item.brandName }}</div>
        <img :src="item.pictureUrl" alt="商品">
      </div>
    </div>

    <!-- 限时抢购新增 -->
    <div class="limitTime" id="limitTime">
      <div class="topTitle">
        <img src="~@/assets/imagesRecode/xsg.png" alt="限时抢购">
        <span class="title" v-for="(item, index) in buyinglist" v-if="index == buyinglistIndex">
          <div v-if="item.time == 1">已结束</div>
          <div v-if="item.time == 2">抢购中</div>
          <div v-if="item.time == 3">即将开抢</div>
        </span>
        <div class="time" v-show="flg">
          <span>{{time.h}}</span>:
          <span>{{time.i}}</span>:
          <span>{{time.s}}</span>
        </div>
        <div class="more fr" @click="goPage({groupType:32, id: buyinglist[buyinglistIndex].id})">更多</div>
      </div>
      <div class="goodsBox">
        <div v-for="(item, index) in buyinglist" :key="index" v-if="buyinglistIndex == index" >
          <div class="goods" v-for="(itm, index) in item.goodsFamilyList" :key="index" @click="goPage(itm, 1)">
            <div class="left"><img :src="itm.imageAddress" alt="" border="0"></div>
            <div class="right">
              <p class="goodsName">{{itm.name}}</p>
              <span class="explains" v-html="itm.explains"></span>
              <div class="progress">
                <div></div>
              </div>
              <span>已抢购4840件</span>
              <div class="price">
                ¥{{itm.goodsMoney}}
                <del>¥{{itm.goodsMaxMoney}}</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 广告图 -->
    <div class="aixincd">
      <img :src="firstGroup.pcPictureUrl" style="height:260px" @click="goPage({groupType:32, id:firstGroup.id})">
    </div>

    <!-- 好评如潮 -->
    <div class="praise" id="goodPraise">
      <div class="title">
        <img src="~@/assets/imagesRecode/praise.png" alt="">
      </div>
      <div class="left">
        <img src="~@/assets/imagesRecode/test.png" alt="" @click="goPage({groupType:6, id:null})">
      </div>
      <div class="right" id="datahao">
        <div class="box fl" v-for="(item,index) in raveReviewsList" :key="index" @click="goPage(item, 1)">
          <img :src="item.imageAddress" alt="" border="0">
          <p>{{item.name}}</p>
          <div class="price">￥{{item.goodsMoney}}
            <del>￥{{item.goodsMaxMoney}}</del>
          </div>
        </div>
      </div>
    </div>
    <!-- 新品上线 -->
    <div class="praise" id="newProduct">
      <div class="title" style="padding-top: 7px;">
        <img src="~@/assets/imagesRecode/newProduct.png" alt="">
      </div>
      <div class="left">
        <img src="~@/assets/imagesRecode/test2.png" alt="" @click="goPage({groupType:7, id:null})">
      </div>
      <div class="right" id="dataxin">
        <div class="box fl" v-for="(item, index) in newProductLineList" :key="index" @click="goPage(item, 1)">
          <img :src="item.imageAddress" alt="" border="0">
          <p>{{item.name}}</p>
          <div class="price">￥{{item.goodsMoney}}
            <del>￥{{item.goodsMaxMoney}}</del>
          </div>
        </div>

      </div>
    </div>

    <!-- 底部栏 -->
    <div class="bottomList">
      <ul class="fl nav_ul">
        <li v-for="item in type" class="fl" :class="{move:item.isShow}" @click="topTab(item)" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <div class="bottomGoods">
      <div class="box fl" v-for="item in list_bottom" :key="item.id" @click="goPage(item, 1)">
        <div style="width: 232px;height: 232px; overflow: hidden;"><img :src="item.imageAddress" alt=""></div>
        <p>{{item.name}}</p>
        <div class="price">¥ {{item.goodsMoney}}
          <del>¥ {{item.goodsMaxMoney}}</del>
        </div>
      </div>
    </div>
    <!--侧边漂浮边栏-->
    <div class="side_bar hide">
      <ul>
        <li>
          <a href="#header-top"><img src="~@/assets/imagesRecode/daohang/daohang.png" alt="">导航</a>
        </li>
        <li>
          <a href="#limitTime"><img src="~@/assets/imagesRecode/daohang/praise.png" alt="">限时抢购</a>
        </li>
        <li>
          <a href="#goodPraise"><img src="~@/assets/imagesRecode/daohang/good.png" alt="">好评如潮</a>
        </li>
        <li>
          <a href="#newProduct"><img src="~@/assets/imagesRecode/daohang/newProduct.png" alt="">新品上新</a>
        </li>
        <li class="goCar">
          <a href="javascript:;" @click="$router.push('/buyerPersonCenter/myCart')"><img src="~@/assets/imagesRecode/daohang/buycar.png" alt="">购物车</a>
        </li>
        <li>
          <a href="#header-top"><img src="~@/assets/imagesRecode/daohang/backtop.png" alt="">返回顶部</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import { parseTime } from "@filters";
import sellerHeader from "@/components/sellerHeader.vue";
import sliderMenua from "@/components/sliderMenua.vue";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";

export default {
  components: {
    sellerHeader,
    sliderMenua
  },
  data() {
    return {
      listLoading: false, //表格加载
      parameter: {
        address: "",
        type: 9
      },
      time: {
        h: "00",
        i: "00",
        s: "00"
      },
      params: {
        groupName: "",
        type: 9,
        pageIndex: 1,
        pageSize: 20
      },
      flashSaleList: {},
      firstGroup: {}, //广告图
      raveReviewsList: [], //好评如潮
      newProductLineList: [], //新品上线集合
      bannerList: [], //banner
      buyinglist: [], //限时抢购时间
      type: [
        { name: "一带一路", isShow: true, val: "9" },
        { name: "母婴用品", isShow: false, val: "31" },
        { name: "办公用品", isShow: false, val: "12" },
        { name: "生活用品", isShow: false, val: "13" },
        { name: "餐馆用品", isShow: false, val: "14" },
        { name: "数码家电", isShow: false, val: "33" },
        { name: "酒饮食品", isShow: false, val: "34" },
        { name: "户外运动", isShow: false, val: "35" },
        { name: "服装服饰", isShow: false, val: "36" }
      ],
      list_bottom: [],
      firstGroupList: [],
      xiesu: true,
      buyinglistIndex: 0, //抢购的index
      flg: "",
      idx: "",
      timeName: "" //倒计时
    };
  },
  computed: {},
  created() {
    this.getBanner();
  },
  mounted() {
    this.listdome();
    this.getList();
    $(window).scroll(function() {
      var scroll_len = $(window).scrollTop();
      if (scroll_len > 10) {
        $(".side_bar").fadeIn();
      } else {
        $(".side_bar").fadeOut();
      }
    });
  },
  methods: {
    /**
     * 获取店铺商品列表
     */
    getBanner() {
      ajax({
        url: "member-api-impl/user/getHomePageInfo",
        optionParams: {
          loginType: 2
        }
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.bannerList = res.data.bannerList;
            console.log(this.bannerList);
            this.$nextTick(() => {
              //渲染结束
              // mySwiper 里面的属性按需配置，详情见官网
              let mySwiper = new Swiper(".swiper-container", {
                pagination: ".swiper-pagination",
                autoplay: 5000, // 可设置数值来指定播放速度
                autoplayDisableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
                speed: 1000, // 切换图片速度
                loop: true,
                pagination: ".pagination",
                paginationClickable: true //值为true时，点击分页器的指示点时会发生Swiper。
              });
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 跳转页面
     */
    goPage(item, type) {
      let path = `/purchase/productList?groupType=${item.groupType}&h5GroupId=${item.id}`;
      if (type) {
        path = `/purchase/productDetails?id=${item.id}&supplierid=${item.supplierId}`;
      }
      this.$router.push(path);
    },

    load() {
      if (this.xiesu) {
        this.params.pageIndex += 1;
        this.getList();
      }
    },
    listdome() {
      ajax({
        url: "product-api-impl/goodsGroup/getHomePageInfoGoods",
        optionParams: {
          type: 12,
          loginType: 1
        }
      })
        .post()
        .then(response => {
          if (response.code === 200) {
            let data = response.data;
            this.buyinglist = data.flashSaleList ? data.flashSaleList : []; //限时抢购
            this.flashSaleList = data.flashSaleList; // 限时抢购
            this.firstGroup = data.firstGroup || {}; // 广告图
            this.firstGroupList = data.firstGroupList || []; // 今日爆款
            this.raveReviewsList = data.raveReviewsList || []; //好评如潮
            this.newProductLineList = data.newProductLineList || []; //新品上线
            this.timeLimitDataTidy(); //限时抢购
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getList() {
      ajax({
        url: "product-api-impl/goodsGroup/searchGoodsByGroupType",
        optionParams: this.params
      })
        .post()
        .then(response => {
          if (response.code === 200) {
            if (response.data.list.length != 0) {
              this.xiesu = true;
              let data = response.data.list;
              data.map((item, index) => {
                this.list_bottom.push(item);
              });
            } else {
              this.xiesu = false;
            }
          } else {
            this.$message.warning(response.msg);
            console.log(response);
            this.listLoading = false;
          }
          this.listLoading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    topTab(item) {
      this.type.map(item => {
        item.isShow = false;
      });
      item.isShow = true;
      this.list_bottom = [];
      this.params.pageIndex = 1;
      this.params.type = item.val;
      this.getList();
    },
    // 限时数据整理
    timeLimitDataTidy() {
      this.flg = ""; //先清空
      // flg代表是不是在时间段内 用于倒计时的时候判断是否出现
      let time = parseTime(new Date(), "{h}:{i}");
      let idx;
      this.buyinglist.map((item, index) => {
        this.$set(item, "time", 1);
        if (item.endTime > time && item.startTime <= time) {
          this.flg = index + 1;
          idx = index;
        }
      });
      if (this.flg) {
        //在时间段中
        this.buyinglist.map((item, index) => {
          if (idx == index) {
            //抢购中
            this.$set(item, "time", 2);
          }
          if (idx < index) {
            //未开始
            this.$set(item, "time", 3);
          }
        });
      }
      //不在时间段中
      if (!this.flg) {
        // 还有未开始的选择最近的一个未开始的
        for (let i = 0; i < this.buyinglist.length; i++) {
          if (time < this.buyinglist[i].endTime) {
            idx = i;
            break;
          }
        }
        if (idx && idx == 0) {
          //代表有未开始的， 开始整理状态 第一个未开始及以后置为未开始状态
          this.buyinglist.map((item, index) => {
            if (index >= idx) {
              item.time = 3;
            }
          });
        }
        //     等于空代表没有未开始的 默认最后一个
        if (!idx && idx != 0) {
          idx = this.buyinglist.length - 1;
        } else {
          // 重置状态
          this.buyinglist.map((item, index) => {
            if (index >= idx) {
              //有未开始的
              item.time = 3;
            }
          });
        }
      }
      this.buyinglistIndex = idx;
      this.timer(idx); //开启定时器
    },
    timer(idx) {
      if (this.flg) {
        this.timeName = setInterval(() => {
          let start = new Date().getTime();
          let end =
            parseTime(new Date(), "{y}/{m}/{d}") +
            " " +
            this.buyinglist[idx].endTime;
          end = new Date(end).getTime();
          this.getDuration(end - start);
        }, 1000);
      } else {
        setTimeout(() => {
          this.timeLimitDataTidy(); //一直监控
        }, 1000);
      }
    },
    // 返回时间
    getDuration(my_time) {
      var days = my_time / 1000 / 60 / 60 / 24;
      var daysRound = Math.floor(days);
      var hours = my_time / 1000 / 60 / 60 - 24 * daysRound;
      var hoursRound = Math.floor(hours);
      var minutes = my_time / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound;
      var minutesRound = Math.floor(minutes);
      var seconds = my_time / 1000 -24 * 60 * 60 * daysRound -60 * 60 * hoursRound -60 * minutesRound;
      // console.log('转换时间:', daysRound + '天', hoursRound + '时', minutesRound + '分', seconds + '秒');
      var time = hoursRound + ":" + minutesRound + ":" + seconds;
      this.time = {
        h: hoursRound < 10 ? 0 + "" + hoursRound : hoursRound,
        i: minutesRound < 10 ? 0 + "" + minutesRound : minutesRound,
        s:parseInt(seconds) < 10? 0 + "" + parseInt(seconds): parseInt(seconds)
      };
      // 判断等于0时直接重新渲染
      if (
        parseInt(hoursRound) == 0 &&
        parseInt(minutesRound) == 0 &&
        parseInt(seconds) == 0
      ) {
        console.log("结束");
        clearInterval(this.timeName);
        setTimeout(() => {
          this.timeLimitDataTidy();
        }, 1000);
      }
    }
  },

  filters: {}
};
</script>
<style lang='scss' scoped>
@import "./scss/index.scss";
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #fff;
  margin: 0 5px;
  opacity: 0.8;
  border: 1px solid #fff;
  cursor: pointer;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #e2231a !important;
}
</style>
