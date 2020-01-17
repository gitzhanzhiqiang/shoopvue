<template>
  <div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header">
      <seller-header></seller-header>
      <slider-menua @goUrl='goUrl' :navProp="1"></slider-menua>
    </div>
    <!-- banner -->
    <div class="banner"></div>
    <div class="banner_nav">
      <b>乡村土特产</b>
      <!--<img class="fl" src="images/xxxxcttc.png" alt="">-->
      <ul class="fl">
        <li class="fl">农特产品</li>
        <li class="fl">手工艺品</li>
        <!--<li class="fl last">更多
                    <img src="images/biao.png" alt="">
                    <ul>
                         <li>543</li>
                         <li>543</li>
                         <li>543</li>
                    </ul>
               </li>-->
      </ul>
    </div>
    <div class="eacharts">
      <div class="map">
        <img class="mapImg" :src="ling" alt="Planets" usemap="#planetmap" hidefocus="true" />
        <map name="planetmap" id="planetmap">
          <!--左 上 宽 高-->
          <!--onfocus="blur(this);" -->
          <area onfocus="blur(this);" @click="mpaClick('xinjiang',65)" shape="polygon" coords="167,70,169,87,193,122,229,137,243,161,229,172,204,193,175,210,174,232,62,232,43,242,37,225,16,184,38,156,89,141,105,113,118,104,130,87,158,84" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('xizang', 54)" shape="polygon" coords="44,247,99,242,154,238,158,273,207,309,256,319,256,356,152,350,112,348,44,284" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('qinghai', 63)" shape="polygon" coords="168,224,182,224,182,214,229,214,248,223,283,227,308,258,286,280,283,295,264,279,243,279,236,304,217,294,170,276" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('gansu', 62)" shape="polygon" coords="209,202,241,173,257,178,266,194,297,219,313,218,318,234,335,258,347,275,335,295,311,271,305,234,265,210" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('sichuan', 51)" shape="polygon" coords="249,300,283,307,310,290,339,305,367,312,339,334,335,357,306,357,296,381,267,349,265,322" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('yunnan', 53)" shape="polygon" coords=" 258,365,295,396,322,389,327,433,285,442,272,451,255,408" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('neimenggu', 15)" shape="polygon" coords="262,168,327,180,405,152,458,105,477,96,442,72,470,28,503,35,507,64,491,85,492,116,506,141,463,154,426,165,390,204,367,226,351,206,287,188" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('ningxia', 64)" shape="polygon" coords="331,235,341,230,347,212,350,227,356,234,349,239,348,257,340,257" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('shanxi1', 61)" shape="polygon" coords="344,296,370,265,378,251,367,236,390,215,390,285,383,306" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('chongqing', 50)" shape="polygon" coords="377,311,390,321,371,330,382,357,373,348,346,346,374,319" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('guizhou', 52)" shape="polygon" coords="353,360,377,360,379,393,336,404,327,380" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('guangxi', 45)" shape="polygon" coords="334,412,371,407,404,393,405,408,414,420,387,448,351,431,351,423" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('shanxi', 14)" shape="polygon" coords="398,267,424,261,424,196,401,208" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('henan', 41)" shape="polygon" coords="399,275,427,265,438,253,451,272,443,302" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('hubei', 42)" shape="polygon" coords="401,298,457,319,461,332,399,333,381,337,396,321" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('hunan', 43)" shape="polygon" coords="384,349,404,340,435,350,437,369,440,394,414,394,411,384,388,385" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('guangdong', 44)" shape="polygon" coords="423,410,441,402,450,411,485,417,399,458" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('hainan', 46)" shape="polygon" coords="406,474,405,489,396,496,382,488,395,474" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('jiangxi', 36)" shape="polygon" coords="441,347,487,337,492,350,481,358,464,400,456,400,445,335" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('fujian', 35)" shape="polygon" coords="485,361,517,366,489,413,472,397" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('taiwan', 100)" shape="polygon" coords="536,391,542,391,536,435,524,425" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('zhejiang', 33)" shape="polygon" coords="492,338,508,317,513,324,529,324,530,340,519,359,502,359" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('shanghai', 31)" shape="polygon" coords="521,309,522,304,533,306,528,311,523,311" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('jiangsu', 32)" shape="polygon" coords=" 467,268,505,269,514,289,525,297,507,309,493,301,498,287" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('anhui', 34)" shape="polygon" coords=" 453,292,468,276,487,304,499,314,487,328,466,328,463,302" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('shandong', 37)" shape="polygon" coords="450,244,473,221,490,232,503,221,519,224,489,254,480,263,454,258" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('hebei', 13)" shape="polygon" coords=" 441,196,457,205,467,216,443,244,429,242,435,225,439,218,431,216,431,176,461,166,487,190,475,201,457,177,448,177" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('beijing', 11)" shape="polygon" coords="455,181,466,184,456,199,446,199" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('tianjin', 12)" shape="polygon" coords="466,191,471,201,467,209,460,207,460,195" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('liaoning', 21)" shape="polygon" coords="480,179,521,142,544,165,512,198,510,171,490,185" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('jilin',22)" shape="polygon" coords="501,120,510,106,578,125,556,151" href="javascript:;" alt="" />
          <area onfocus="blur(this);" @click="mpaClick('heilongjiang', 23)" shape="polygon" coords="596,49,598,90,583,80,583,111,508,111,518,52,509,23,476,10,506,10,533,48,570,66,587,63" href="javascript:;" alt="" />
        
        
        
        </map>
      </div>
    </div>
    <!--乡村导航-->
    <div class="rural">
      <div class="body-center">
        <ul class="list-head">
          <li class="fl">
            <img src="images/ruralSpecialtyTitle.png" alt="">
          </li>
          <li class="fl">热门地区</li>
          <span class="cityList">
            <li class="fl oli" :class="{hover:item.isShow}" @click="topTab(item)" v-for="item in cityList">{{item.provinceName}}</li>
                              <!--<li class="fl oli">温州</li>
                              <li class="fl oli">杭州</li>
                              <li class="fl oli">宁波</li>-->
          </span>

        </ul>
        <div class="list_bottom">
          <dl class="fl" v-for="item in list_bottom">
            <dt>
              <img :src="item.imageAddress" alt="">
            </dt>
            <dd>
              <p>￥ {{item.goodsMoney}}</p>
              <p>{{item.name}}</p>
              <button class="fr">加入购物车</button>
            </dd>
          </dl>
        </div>
        <!-- 没有数据显示 -->
        <div id="nodata" style="display: none;">
          <img src="~@/assets/imagesRecode//noData.png" alt="">
        </div>
      </div>
    </div>
    <div class="s-footer" id="s-footer"></div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
import sellerHeader from "@/components/sellerHeader.vue";
import sliderMenua from "@/components/sliderMenua.vue";
export default {
  components: {
    sellerHeader,
    sliderMenua
  },
  data() {
    return {
    	ling: require("./images/china.png"),
      params: {
        address: "",
        type: 3,
      },
      list_bottom: [],
      cityList:[],//城市
    };
  },
  computed: {},
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    goUrl() {},
    getList() {
      ajax({
        url: "product-api-impl/goodsGroup/searchGoodsByGroupType",
        optionParams: this.params
      })
        .post()
        .then(response => {
          if (response.code === 200) {
            this.list_bottom = response.data.list ? response.data.list : [];
          } else {
            this.$message.warning(response.msg);
            console.log(response);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    mpaClick(mapName, id){
    	this.ling = require("./images/"+mapName+".png")
    	this.params.address = id
    	 this.getList();
    	this.getcity(id);
    },
    topTab(item) {
      this.cityList.map(item => {
        item.isShow = false;
      });
      item.isShow = true;
       this.getList();
    },
    //   获取城市
    getcity(id){
    	 ajax({
        url: "member-api-impl/address/selByParentId",
        optionParams: {
        	 parentId: id
        }
      })
        .post()
        .then(response => {
          if (response.code === 200) {
          	this.cityList = response.data ? response.data : [];
          	this.cityList.map((item)=>{
          		this.$set(item, 'isShow', false)
          	})
          } else {
            this.$message.warning(response.msg);
            console.log(response);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import "./scss/ruralSpecialty.scss";
</style>