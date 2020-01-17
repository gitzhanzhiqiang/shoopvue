<template>
  <div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header">
      <seller-header @getKeyWords="getStoreList"></seller-header>
    </div>
    <div class="content">
      <!-- 筛选导航 -->
      <ul class="type-nav notBuleBackground">
        <li class="fl" @click="searchCondition()">
          <span :class="nowIndex === 0? 'active' : 'none'">默认</span>
        </li>
        <li class="fl notBuleBackground">
          <span :class="nowIndex === 1? 'active' : 'none'" @click="searchCondition(1)">销量</span>
          <img src="~@/assets/imagesRecode/moren.png" alt="" v-if="nowIndex !== 1">
          <img src="~@/assets/imagesRecode/shang.png" alt="" v-if="!topSell && nowIndex === 1">
          <img src="~@/assets/imagesRecode/xia.png" alt="" v-if="topSell && nowIndex === 1">
        </li>
        <li class="fr notBuleBackground">
          <span class="source" @click="showAddress = !showAddress">{{ seat }}</span>
          <i><img src="~@/assets/imagesRecode/moren.png" /></i>
        </li>
        <dl class="adslist" id="adslist" v-show="showAddress">
          <dd>
            <a class="adrs-item" href="javascript:" v-for="prov in addressList" :key="prov.id" @click="selectAddress(prov.id, prov.provinceName)"> {{ prov.locationLevel === 1 ? prov.provinceName:"" }}</a>
          </dd>
          <dd>
            <a class="adrs-item" href="javascript:" v-for="prov in addressList" :key="prov.id" @click="selectAddress(prov.id, prov.provinceName)"> {{ prov.locationLevel === 2 ? prov.provinceName:"" }}</a>
          </dd>
          <dd>
            <a class="adrs-item" href="javascript:" v-for="prov in addressList" :key="prov.id" @click="getCityOF(prov.id)"> {{ prov.locationLevel === 3 ? prov.provinceName:"" }}</a>
          </dd>
        </dl>
        <!-- 省份下属城市 -->
        <dl class="cityList" v-show="cityList.length && showAddress">
          <dd>
            <a class="adrs-item" href="javascript:" v-for="city in cityList" :key="city.id" @click="selectAddress(city.id, city.provinceName)"> {{ city.provinceName }}</a>
          </dd>
        </dl>
      </ul>

      <!-- 商店列表 -->
      <div class="shopList">
        <div id="shopList">
          <div class="perShop" v-for="store in storeList" :key="store.name">
            <div class="perShop-left" @click="goStore(store)">
              <div>
                <img :src="store.shopHeadPhoto || baseHead" :alt="store.alias">
              </div>
              <div>
                <h2 v-if="store.alias">{{ store.alias }}</h2>
                <h2 v-else>
                  <span v-for="(nameP, index) in store.tprovinceList" :key="nameP.name">
                    {{index === (store.tprovinceList.length-1) ? nameP.provinceName:""}}
                  </span>
                </h2>
              </div>
              <div class="perShop_bo">
                <p>销量： {{ store.salesNum }}</p>
                <p>所在地：
                  <span v-for="(address, i) in store.tprovinceList" :key="address.name">
                    {{(i == 0 || i == 2 || i == 4) ? address.provinceName:""}}
                  </span>
                </p>
              </div>
            </div>
            <div class="perShop-right fr">
              <ul class="product-nav">
                <li class="fl" v-for="goods in store.goodsDetailList" :key="goods.id">
                  <img v-if="store.applyStatus == 1" @click="goDetail(goods.goodsId, store.supplierId)" :src="goods.imageAddress" alt="">
                  <img v-else :src="goods.imageAddress" alt="">
                  <span>¥{{goods.actualPrice }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 分页 -->
        <div v-if="total" class="pagination-container">
          <el-pagination background @size-change="(value)=> handleSizeChange(value, 'params', 'getStoreList')" @current-change="(value)=> handleCurrentPageChange(value, 'params', 'getStoreList')" :current-page.sync="params.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
        </div>
        <!-- 没有数据显示 -->
        <div id="nodata" v-show="nodata">
          <img src="~@/assets/imagesRecode//noData.png" alt="">
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

export default {
  components: {
    sellerHeader,
    topBG,
    topBox
  },
  data() {
    return {
      baseHead: require("./images/storeList.png"),
      params: {
        pageIndex: 1,
        pageSize: 5,
        alias: "",
        addressIds: "",
        saleCount: 0 //销量排序 1升序 2降序 0默认
      },
      storeList: [],
      addressList: [], //地址列表
      cityList: [], //城市列表
      nowIndex: 0,
      total: 0, //商品总条数
      topSell: true, //销量排序
      priceSell: true, //价格排序
      nodata: false, //控制没有商品 显示图片
      showAddress: false,
      seat: "所在地"
    };
  },
  created() {
    let keyWords = this.$route.query.search;
    // 当页面重新刷新的时候
    let pageIndex = this.$route.query.pageIndex;
    this.params.pageIndex = pageIndex ? pageIndex * 1 : 1;
    this.getStoreList(keyWords);
    this.getAddress();
  },
  watch: {
    //  解决路由相同参数不同回退不能刷新的问题
    $route(newVal, oldVal) {
      if (newVal != oldVal) {
        // 路由搜索关键词
        let keyWords = this.$route.query.search;
        let pageIndex = this.$route.query.pageIndex;
        // 路由改变时，如果顶部存在分页 页码；则使用路由页码；否则为1；
        this.params.pageIndex = pageIndex ? pageIndex * 1 : 1;
        this.getStoreList(keyWords);
      }
    }
  },
  methods: {
    /**
     * 获取商品列表
     * @param {String} goodsName 商品名称
     * 可能从子组件传来 或者 从路由获取
     */
    getStoreList(goodsName = "") {
      this.params.alias = goodsName;
      ajax({
        url: "member-api-impl/merchant/getMerchantShopList",
        optionParams: this.params
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.storeList = res.data ? res.data.records : [];
            this.total = res.data.total;

            // 商品列表不为空隐藏
            this.nodata = !this.storeList.length ? true : false;
            this.cityList = [];
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 获取地址
     */
    getAddress() {
      ajax({
        url: "member-api-impl/address/getLocationProvinceList",
        optionParams: {}
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.addressList = res.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 根据省份获取下属城市
     * @param {Number} provinID 省掉id
     */
    getCityByProvince(provinID) {
      ajax({
        url: "member-api-impl/address/selByParentId",
        optionParams: {
          parentId: provinID
        }
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.cityList = res.data ? res.data : [];
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 选择指定地址的店铺
     * @param {Number} addressID 地址id default = ""
     * @param {String} addressName 地址名称 default = "所在地"
     */
    selectAddress(addressID = "", addressName = "所在地") {
      let obj = {
        addressIds: addressID,
        pageIndex: 1
      };
      Object.assign(this.params, obj);
      // 将所在地赋值为当前选择的地点 并隐藏地址选择
      this.seat = addressName;
      this.showAddress = false;
      this.getStoreList();
    },
    /**
     * 根据省份显示下属城市
     * @param {Number} provinID 省id
     */
    getCityOF(provinID) {
      this.getCityByProvince(provinID);
    },
    /**
     * 改变搜索条件函数 选谁谁红
     * @param {Number} nowIndex defult = 0;
     * 0 综合 1 销量 2价格
     */
    searchCondition(nowIndex = 0) {
      let obj = { saleCount: 0 };
      this.nowIndex = nowIndex;
      if (!nowIndex) {
        this.topSell = true;
      } else if (nowIndex === 1) {
        this.topSell = !this.topSell;
        obj.saleCount = !this.topSell ? 1 : 2;
      }
      obj.pageIndex = 1;
      Object.assign(this.params, obj);
      let keyWords = this.$route.query.search;
      this.getStoreList(keyWords);
    },
    /**
     * 去店铺首页
     * @param {Object} store 单个店铺对象
     */
    goStore(store) {
      let [applyStatus, id] = [store.applyStatus, store.supplierId];
      if (applyStatus === 1) {
        this.$router.push({ path: `/purchase/shopList?id=${id}` });
      } else {
        if (applyStatus === -1) {
          id = "notAssignIn";
        }
        this.$router.push({ path: `/purchase/shopList?id=${id}` });
      }
    },
    /**
     * 去商品详情
     * @param {Number} goodsId 商品id
     * @param {Number} supplierId 店铺id
     */
    goDetail(goodsId, supplierId) {
      this.$router.push({ path:`/purchase/productDetails?id=${goodsId}&supplierid=${supplierId}`})
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
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      // 下面主要是用于存储每一页的页码数据
      this.showAddress = false;
      this.$router.push({
        path: `/purchase/storelist?search=${this.$route.query.search}&pageIndex=${this.params.pageIndex}`
      });
      this[parameter].pageIndex = val;
      this[method]();
    }
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import "./scss/storeList.scss";
#nodata {
  text-align: center;
  padding: 166px 0;
}
.notBuleBackground {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>