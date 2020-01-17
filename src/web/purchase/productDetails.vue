<template>
  <div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header">
      <seller-header :hidden="hideInput"></seller-header>
    </div>

    <div class="details">
      <ul>
        <!--图片放大-->
        <li class="details_img">
          <div id=preview>
            <!-- <div class=jqzoom id=spec-n1>
              <img :src="dynamicIMG" jqimg="images/img04.jpg" width="440" height="416px">
            </div> -->
            <div style="width: 440px;height: 440px;margin-left: 19px;">
              <pic-zoom :url="dynamicIMG" :scale="2"></pic-zoom>
            </div>
            <div id=spec-n5>
              <div class=control id=spec-left>
                <img src="./images/left.gif" />
              </div>
              <div id=spec-list>
                <ul class=list-h>
                  <li v-for="(pic, index) in GoodsIMG" :key="index" @mouseover="changeIMG(pic)"><img :src="pic"> </li>
                </ul>
              </div>
              <div class=control id=spec-right>
                <img src="./images/right.gif" />
              </div>

            </div>
          </div>
        </li>
        <!--商品详情及规格-->
        <li class="details_neiron">
          <h3 class="details_title">{{GoodsDeatil.name}}</h3>
          <p class="details_jiesao" v-if="GoodsDeatil.sellingExplains">{{GoodsDeatil.sellingExplains}}</p>

          <p class="meiyuan">
            <!-- ￥<span>{{goodsInventoryList[0].actualPrice === goodsInventoryList[goodsInventoryList.length - 1].actualPrice?goodsInventoryList[0].actualPrice:goodsInventoryList[0].actualPrice + '~' + goodsInventoryList[goodsInventoryList.length - 1].actualPrice}}</span> -->

            ￥<span>{{goods.actualPrice}}</span>
            <span v-if="GoodsDeatil.discounPrice" style="color:#999999;font-size: 16px;">原价：<s>￥{{GoodsDeatil.price}}</s></span>
          </p>

          <p class="dizhi">
            <!-- 登录情况下 -->
            <span v-if="isLogin">配送：{{GoodsDeatil.startAddress}} {{GoodsDeatil.deliveryAddress? `至 ${GoodsDeatil.deliveryAddress}` : ""}} </span>

            <!-- 未登录情况下 -->
            <span v-else>配送：{{GoodsDeatil.startAddress}} 至 <a href="/login?isDetail=1">去登陆</a> </span>
            <span>运费：{{GoodsDeatil.isFree == 2 ? '包邮' : `¥${GoodsDeatil.carriageTemplateMoney}`}}</span>
          </p>
          <div class="guige">
            <!-- 规格第一层 -->
            <div class="specifi" v-if="slot_one.length">
              <p>{{categoryOne}}</p>
              <!-- :class="item.imageAddress?(item.hasInventory?'ataspec':'ataspec noinv'):(item.hasInventory?'ataspea':'ataspea noinv')" -->
              <div :class="(item.imageAddress?(item.hasInventory?styleForIMG[0]:styleForIMG):(item.hasInventory?styleForWord[0]:styleForWord))" :style="{'border':(nowIndex === index && centerBool?'1px solid red':'')}" v-for="(item, index) in slot_one" :key="index" @click="selectGood(item, index);beGrary(item);changeIMG(item.imageAddress, 1)">
                {{ !item.imageAddress? item.name:"" }}
                <img :src="item.imageAddress" v-if="item.imageAddress" />
                <b v-if="item.imageAddress">{{item.name}}</b>
              </div>
            </div>

            <!-- 规格第二层 -->
            <div class="sizs" v-if="slot_two.length">
              <p>{{categoryTwo}}</p>
              <div :class="(item.hasInventory?'ataspec':'ataspec noinv')" :style="{'border':(secIndex === index && centerBool_two?'1px solid red':'')}" v-for="(item, index) in slot_two" :key="index" @click="selectGood(item, index);beGrary(item)">
                {{item.name}}
              </div>
            </div>

            <!-- 规格第三层 -->
            <div class="sizeof" v-if="slot_thr.length">
              <p>{{categoryThr}}</p>
              <div class="ataspec" :class="((item.hasInventory?'ataspec':'ataspec noinv'))" v-for="(item, index) in slot_thr" :style="{'border':(thirIndex === index && centerBool_thr?'1px solid red':'')}" :key="index" @click="selectGood(item, index)">
                {{item.name}}
              </div>
            </div>
          </div>

          <div class="details_mod">
            <div class="details_off">

            </div>
            <div class="details_on">
              <div class="shuliang">
                <input type="text" v-model="inputVal">
                <div>
                  <ul>
                    <li class="jia" @click="countOperate(1)">+</li>
                    <li class="jian" @click="countOperate(0)">-</li>
                  </ul>
                </div>
              </div>
              <input type="button" value="加入购物车" class="gouwuche" @click="addCart" />
              <input type="button" value="立即购买" class="lijigoumai" @click="goPage(0)" />
            </div>
          </div>

          <div class="shouchang">
            <ul>
              <li class="yuexiao">总销量：<span>{{GoodsDeatil.soldNumber}}笔</span></li>
              <li class="yuexiao kucuna">库存：<span>{{goods.inventory}}</span>件</li>
              <li :class="((isCollection && isLogin)? 'shoucang':'noshoucang')" @click="collection">点我收藏</li>
              <li class="kefu" @click="goPage(1)">联系客服</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <!-- 按钮 -->
    <div id="shop" class="shop">
      <div class="inner">
        <p>
          <i class="shopname-icon"><img src="./images/store.png"></i>
          <span class="shopname">{{GoodsDeatil.supplierName}}</span>
        </p>
        <div id="goshop" class="shop-btn" @click="goStorePage">
          进入店铺
        </div>
      </div>
    </div>

    <!-- 下方评论及详情 -->
    <div class="pingjia">
      <!--tab-->
      <h3>
        <span :class="showContent? 'pingjia_on':'none'" @click="showContent = true">商品详情</span>
        <span :class="!showContent ? 'pingjia_on':'none'" @click="showContent = false">宝贝评论</span>
      </h3>

      <!--商品详情-->
      <div class="tab_xiangqing" v-show="showContent">
        <div class="shangpin" v-html="GoodsDeatil.explains"></div>
      </div>

      <!--商品评价-->
      <div class="tab_pinglu" v-show="!showContent">
        <ul>
          <li v-for="(per, index) in evaluationList" :key="index">
            <div class="touxiang">
              <div class="tou_img">
                <img :src="per.userImage || basehead">
              </div>
              <span class="mingchen">{{per.isAnon == 2? "匿名用户": per.nickname }}</span>
            </div>
            <div class="neiron">
              <img v-for="i in per.rank" :key="i" src="./images/start1.png" />
              <img v-for="z in (5-per.rank)" :key="z+'a'" src="./images/start2.png" />
              <p class="nei_ron">
                {{per.content? per.content:"暂无评论"}}
              </p>
              <span class="txt_tata">{{per.createTime}}
                <span v-for="(etc, idx) in per.specifValueJson" :key="idx">
                  <span v-for="(val, key, idx) in etc" :key="idx">
                    {{key}}:{{val}}
                  </span>
                </span>
              </span>
            </div>
          </li>
          <li v-if="!evaluationList.length">暂无评论列表</li>
        </ul>
        <!-- 分页 -->
        <div v-if="total" class="pagination-container">
          <el-pagination background @current-change="(value)=> handleCurrentPageChange(value, 'evuParam', 'getEvalutation')" :current-page.sync="evuParam.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="evuParam.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import topBG from "@/components/topBG.vue";
import topBox from "@/components/topBox.vue";
import sellerHeader from "@/components/sellerHeader.vue";
import PicZoom from "vue-piczoom";
import Cookies from "js-cookie";

const log = console.log;
export default {
  components: {
    topBG,
    topBox,
    sellerHeader,
    PicZoom
  },
  data() {
    return {
      basehead: require("@/assets/imagesRecode/anon.png"),
      params: {
        id: "",
        supplierId: ""
      },
      evuParam: {
        id: "",
        pageIndex: 1,
        pageSize: 10
      },
      total: 0,
      count: 1,
      nowIndex: 0,
      secIndex: 0,
      thirIndex: 0,
      allInventory: 0,
      hideInput: true,
      showContent: true,
      isCollection: false,
      centerBool: true, //中间变量
      centerBool_two: true,
      centerBool_thr: true,
      isLogin: "",
      categoryNameOne: "",
      categoryNameTwo: "",
      categoryNameThr: "",
      GoodsDeatil: {},
      GoodsIMG: [],
      evaluationList: [], //评论列表
      slot_one: [], //规格1
      slot_two: [], //规格2
      slot_thr: [], //规格3
      goodsInventoryList: [], //库存
      zeroInventoryList: [], //0库存
      styleForIMG: ["ataspec", "ataspec noinv"], //规格图片样式
      styleForWord: ["ataspea", "ataspea noinv"], //规格文字样式
      goods: {
        inventory: 0,
        price: 0,
        discounPrice: 0,
        actualPrice: 0
      },
      tmp: {
        firstSlot: "",
        secendSlot: "",
        thirdSlot: ""
      },
      dynamicIMG: ""
    };
  },
  computed: {
    // 动态输入库存，自动去不符合的字符串 实时更正
    inputVal: {
      get() {
        return this.count;
      },
      set(val) {
        // 将不符合的字符串替换为空格
        this.count = val.replace(/[^\d]/g, " ");
        this.count = this.count.trim();
        if (this.count > this.goods.inventory) {
          this.$message({
            message: "超过最大库存",
            type: "error"
          });
          this.count = 1;
        }
      }
    }
  },
  watch: {},
  created() {
    this.isLogin = Cookies.get("token");
    this.params = this.$route.query;
    this.getEvalutation();
    this.getGoodsDetail();
  },
  mounted() {},
  methods: {
    // 加入购物车
    addCart() {
      if (!this.isLogin) return;
      // 规格一存在 且 中间变量为false 则要选择规格 下同
      // 另一种不存在规格的商品也不影响执行
      const hasSelected = (categoryName, centerBoolean) => {
        if (categoryName && !centerBoolean) {
          this.$message({
            message: "请选择规格",
            type: "error"
          });
          return false;
        }
        return true;
      };
      let first = hasSelected(this.categoryOne, this.centerBool);
      let second = hasSelected(this.categoryTwo, this.centerBool_two);
      let third = hasSelected(this.categoryThr, this.centerBool_thr);
      if (!first) return;
      if (!second) return;
      if (!third) return;
      ajax({
        url: "product-api-impl/shopcar/addAndUpdateShopCar",
        optionParams: {
          goodsId: this.goods.familyId, //商品id
          goodsAddNum: this.count, //商品数量
          storeSupplierId: this.GoodsDeatil.supplierId, //商品所属供应商id
          goodsInventoryId: this.goods.id
        }
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.$message({
              message: "已加入购物车，可在购物车内查看~",
              type: "success"
            });
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 改变商品预览图
     * @param {String} pic default = ""
     * @param {Number} type default = "", type 1 从商品规格来
     */
    changeIMG(pic = "", type = "") {
      if (!pic) return;
      if (!this.centerBool && type) {
        pic = this.GoodsIMG[0];
      }
      this.dynamicIMG = pic;
    },
    /**
     * 背景变灰
     * @param {Object} obj
     */
    beGrary(obj) {
      this.slot_thr.forEach(j => {
        this.$set(j, "hasInventory", true);
      });
      let tmp = this.tmp;
      if (obj.slot === 1) {
        tmp.firstSlot = obj.id;
      }
      if (obj.slot === 2) {
        tmp.secendSlot = obj.id;
      }
      if (obj.slot === 3) {
        tmp.thirdSlot = obj.id;
      }
      let arr = this.zeroInventoryList.find(item => {
        return (
          item.firstSlot === tmp.firstSlot && item.secendSlot === tmp.secendSlot
        );
      });
      if (arr) {
        this.slot_thr.forEach(j => {
          if (j.id === arr.thirdSlot) {
            this.$set(j, "hasInventory", false);
          }
        });
      }
    },
    /**
     * 选择商品
     * @param {Object} item 选择对象
     * @param {Number} index 当前索引
     */
    selectGood(item, index) {
      if (!item.hasInventory) return;
      let obj = this.tmp;
      let slot = item.slot;
      if (slot === 1) {
        if (index === this.nowIndex && this.centerBool) {
          this.centerBool = false;
        } else {
          this.centerBool = true;
        }
        this.nowIndex = index;
        obj.firstSlot = item.id;
      } else if (slot === 2) {
        if (index === this.secIndex && this.centerBool_two) {
          this.centerBool_two = false;
        } else {
          this.centerBool_two = true;
        }
        this.secIndex = index;
        obj.secendSlot = item.id;
      } else {
        if (index === this.thirIndex && this.centerBool_thr) {
          this.centerBool_thr = false;
        } else {
          this.centerBool_thr = true;
        }
        this.thirIndex = index;
        obj.thirdSlot = item.id;
      }

      this.goods = this.goodsInventoryList.find(item => {
        if (
          item.firstSlot === obj.firstSlot &&
          item.secendSlot === obj.secendSlot &&
          item.thirdSlot === obj.thirdSlot
        ) {
          return item;
        }
      });
    },
    /**
     * 获取商品详情
     */
    getGoodsDetail() {
      ajax({
        url: `product-api-impl/app/goodsById?id=${this.params.id}&supplierId=${this.params.supplierid}`,
        optionParams: {}
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.isCollection = res.data.bool;
            let data = res.data.GoodsDeatil;
            this.GoodsDeatil = data;
            this.GoodsIMG = data.detailImageAddress.split(",");
            this.dynamicIMG = this.GoodsIMG[0];
            this.goodsInventoryList = data.goodsInventoryList;
            data.goodsSpecificationList.map(item => {
              item.hasInventory = true;
              item.isSelected = false;
            });
            const category = (type, categoryName) => {
              return data.goodsSpecificationList.filter(
                item => item.slot === type
              );
            };
            this.slot_one = category(1);
            this.slot_two = category(2);
            this.slot_thr = category(3);

            const categoryName = arr => {
              return arr.length ? arr[0].categoryName : null;
            };
            this.categoryOne = categoryName(this.slot_one); //规格1名称
            this.categoryTwo = categoryName(this.slot_two); //规格2名称
            this.categoryThr = categoryName(this.slot_thr); //规格3名称

            let sum = 0;
            this.goodsInventoryList.map(item => {
              sum += item.inventory;
              if (!item.inventory) {
                this.zeroInventoryList.push(item);
              }
            });
            this.goods.inventory = sum; //默认取总库存 ，但此goods对象会动态变化
            this.allInventory = sum; //总库存

            // 规格一存在的话默认选规格一第一个 下同
            if (this.categoryOne) {
              this.selectGood(this.slot_one[0], 0);
              this.centerBool = true;
            } else {
              // 不存在规格 默认取库存第一个
              this.goods = this.goodsInventoryList[0];
            }
            if (this.categoryTwo) {
              this.selectGood(this.slot_two[0], 0);
              this.centerBool_two = true;
            }
            if (this.categoryThr) {
              this.selectGood(this.slot_thr[0], 0);
              this.centerBool_thr = true;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 获取评论列表
     */
    getEvalutation() {
      this.evuParam.id = this.$route.query.id;
      ajax({
        url: "product-api-impl/app/getGoodsEstimateList",
        optionParams: this.evuParam
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.evaluationList = res.data.list;
            this.total = res.data.total;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 去店铺首页
    goStorePage() {
      this.$router.push({
        path: `/purchase/shopList?id=${this.GoodsDeatil.supplierId}`
      });
    },
    /**
     * 跳转页面
     * @param {Number} type 0 购买 1聊天；
     */
    goPage(type) {
      let str;
      if (!this.isLogin) {
        str = "/login?isDetail=1";
      } else {
        if (!type) {
          const hasSelected = (categoryName, centerBoolean) => {
            if (categoryName && !centerBoolean) {
              this.$message({
                message: "请选择规格",
                type: "error"
              });
              return false;
            }
            return true;
          };
          let first = hasSelected(this.categoryOne, this.centerBool);
          let second = hasSelected(this.categoryTwo, this.centerBool_two);
          let third = hasSelected(this.categoryThr, this.centerBool_thr);
          if (!first) return;
          if (!second) return;
          if (!third) return;
          let tmp = [{
            goodsId: this.goods.familyId, //商品id
            num: this.count, //商品数量
            storeSupplierId: this.GoodsDeatil.supplierId, //商品所属供应商id
            goodsInventoryId: this.goods.id
          }]
          tmp.toString()
          str = `/purchase/confirmOrder?list=${JSON.stringify(tmp)}&addressId=${this.GoodsDeatil.supplierId}`;
        } else {
          str = "/chitchat";
        }
      }
      this.$router.push(str);
    },
    /**
     *收藏操作
     */
    collection() {
      if (!this.isLogin) {
        this.$router.push("/login?isDetail=1");
      }
      this.isCollection = !this.isCollection;
      ajax({
        url: "member-api-impl/userInfo/CollectionAction",
        optionParams: {
          productIds: [
            {
              goodsId: this.GoodsDeatil.id,
              storeSupplierId: this.GoodsDeatil.supplierId
            }
          ], //产品id
          type: !this.isCollection ? 2 : 1 //type标识 1-添加收藏 2-取消收藏
        }
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            let msg = this.isCollection ? "收藏成功！" : "取消成功！";
            this.$message({
              message: msg,
              type: "success"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 数量操作
     * @param {Number} type
     * 1 + 0 -
     */
    countOperate(type) {
      if (type) {
        this.count++;
      } else {
        this.count--;
        if (this.count === 0) {
          this.count = 1;
        }
      }
      if (this.count > this.goods.inventory) {
        this.$message({
          message: "超过最大库存",
          type: "error"
        });
        this.count = 1;
      }
    },
    // 改变每一页的条数
    handleSizeChange(val, parameter, method) {
      this[parameter].pageSize = val;
      this[parameter].pageIndex = 1; //从第一页开始
      this[method]();
    },
    // 切换页码
    handleCurrentPageChange(val, parameter, method) {
      // 没切换页码重新让滚动条回到顶部
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
      this[parameter].pageIndex = val;
      this[method]();
    },
    handleInput(e) {
      this.count = e.target.value.replace(/[^\d]/g, " ");
      this.count = this.count.trim();
    }
  },
  filters: {}
};
</script>
<style lang='scss'>
@import "./scss/productDetails.scss";
.none {
  color: #000;
}
.noinv {
  background: #f3f3f3 !important;
}

.magnifier-box img {
  width: 100%;
  height: 100%;
}
</style>