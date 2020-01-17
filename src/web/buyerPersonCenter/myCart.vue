<template>
     <div>
          <!--中心的头部搜索-->
          <!-- 头部 header -->
          <div id="s-header" class="s-header">
               <seller-header :hidden="hideInput"></seller-header>
          </div>

          <!--主要内容-->
          <div class="content" id="goshopchar">
               <!--位置导航-->
               <div class="crumb">
                    <p>我的购物车</p>
               </div>
               <!--列表头-->
               <ul class="list-header">
                    <li class="fl checkout-all">
                         <label>
                              <!--<input type="checkbox" class="selectAll" style="display: none">
                              <div class="noSelected fl"></div>
                              <span>全选 </span>-->
                         </label>
                    </li>
                    <li class="fl">商品信息 </li>
                    <li class="fl">单价</li>
                    <li class="fl">数量</li>
                    <li class="fl">金额</li>
                    <li class="fl rateNum">积分</li>
                    <li class="fl">操作</li>
               </ul>
               <!--店铺列表-->
               <ul class="list">
                    <li class="shopList" v-for="(item,index) in shopCartData.list">
                         <div class="store-info">
                              <div class="fl checkout-part" @click="checkitem('',item)">
                                   <div :class="[item.show?'Selected':'noSelected']"></div>
                              </div>
                              <span class="fl store-logo"></span>
                              <a href="javascript:;" @click="$router.push({path:'/purchase/shopList',query:{id:item.id}})" class="fl">{{item.storeSupplierName}}</a>
                              <span class="fl serviceBtn" @click="contactService(item.storeSupplierId)">联系客服</span>
                              <span class="fl service-logo"></span>
                         </div>
                         <ul class="list-one">
                              <li class="goodsDetail" v-for="(iitem,iindex) in item.goodsList">
                                   <div class="fl checkout-one" @click="checkitem(item,iitem,1)">
                                        <div :class="[iitem.show?'Selected':'noSelected']">
                                        </div>
                                   </div>
                                   <img :src="iitem.imageAddress" @click="goDetail(item.storeUserId,iitem.id)">
                                   <span class="goodsId" style="display: none;">{{iitem.id}}</span>
                                   <span class="goodsInventory" style="display: none;" title="库存数量">{{iitem.inventory}}</span>
                                   <div class="key-word fl">
                                        <p class="name" @click="goDetail(item.storeUserId,iitem.id)">{{iitem.name}}</p>
                                        <p class="weight">
                                             <span v-for="(iiitem,index) in iitem.goodsSpecificationList">
                                                  <span>{{iiitem.categoryName+':'+iiitem.name}}</span>
                                             </span>
                                        </p>
                                   </div>
                                   <div class="fl unitPrice" data-money="150">{{iitem.goodsInventoryPO.actualPrice|forma2}}元</div>
                                   <div class="fl count">
                                        <span class="fl minus" @click="shopCarNumAddSub(iitem)"></span>
                                        <input class="inputNum" type="text" :value='iitem.shopCarNum' @keyup="positiveIntegerMoney($event,iitem)">
                                        <span class="fl plus" @click="shopCarNumAddSub(iitem,1)"></span>
                                   </div>
                                   <div class="fl totalPrice NowtotalPrice">{{iitem.shopCarNum*iitem.shopCarCountMoney}}元</div>
                                   <div class="fl integralNum">{{iitem.shopCarNum*iitem.integralCount}}积分</div>
                                   <div class="fl handle-btn">
                                        <button class="nowPay" @click="nowPayBtn(item.storeSupplierId,iitem,item.supplierId)">立即购买</button>
                                        <p class="delGoods" @click="delData(iitem.shopCarId,0)">删除商品</p>
                                   </div>
                              </li>
                         </ul>
                    </li>
                    <!-- 没有数据显示 -->
                    <div id="nodata" v-if="shopCartData.lenght<1">
                         <img src="~@/assets/imagesRecode/noData.png" alt="">
                    </div>
               </ul>
               <!--底部结算-->
               <!--relative 底部位置不固定   fixed 底部位置固定-->
               <div class="bottom-pay relative" style="position: fixed;bottom: 0;">
                    <div class="fl">
                         <label>
                              <input type="checkbox" class="selectAll" style="display: none">
                              <div class="fl" :class="[shopCartData.allShow?'Selected':'noSelected']" @click="allShow()"></div>
                              <span class="select-all">全选 </span>
                         </label>
                         <!-- <div class="fl checkout-del">
                              <div class="noSelected"></div>
                         </div>
                         <span class="select-all selectAll">全选 </span> -->
                         <span class="del bottomDel" @click="delData(0,1)">删除</span>
                         <span class="del clearAll" @click="clearAllBtn">清除全部失效商品</span>
                    </div>
                    <div class="fr pay">
                         <span class="selected">已选中
                              <span class="highlight totalNum">{{shopCartData.selectGoodNum}}</span>件商品</span>
                         <!--<span class="totalNot">失效商品总数<span class="highlight totalNot">0</span>件</span>-->
                         <span class="total-amount">合计(不含运费)：
                              <span class="highlight totalPrice">{{shopCartData.selectGoodPrice}}</span>元</span>
                         <button class="submitBtn" @click="nowPayBtn(0,0,0,1)">结 算</button>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from "@utils/config";
import baseURL from "@/assets/js/ajax/baseURL";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
import { Common } from "@/common/common";
import sellerHeader from "@/components/sellerHeader.vue";

export default {
     components: {
          sellerHeader
     },
     data() {
          return {
               params: {
                    pageIndex: 1,
                    pageSize: 10
               },
               shopCartData: {
                    list: [
                         { goodsList: [] }
                    ],
                    allShow: false,
                    selectGoodNum: 0,//选中商品数量
                    selectGoodPrice: 0,//选中商品总价
               },
               hideInput: true,
          }
     },
     computed: {
     },
     watch: {
     },
     //  selectGoodNum  selectGoodPrice
     created() {
          this.getshopCarList();
     },
     mounted() { },
     methods: {
          goUrl(path) {
               let pathTmp = this.$route.path;
               if (pathTmp != path) {
                    this.$router.push(path);
               }
          },
          // 获取购物车数据
          getshopCarList() {
               ajax({
                    url: "/product-api-impl/shopcar/shopCarGoodsList",
                    optionParams: this.params
               })
                    .post()
                    .then(response => {
                         if (response.code === 200) {
                              this.shopCartData.list = response.data.returnList ? response.data.returnList : [];
                              this.shopCartData.list.map(item => {
                                   this.$set(item, 'show', false);
                                   item.goodsList.map(iitem => {
                                        this.$set(iitem, 'show', false);
                                   })
                              })
                              this.total = response.data.total;
                         } else {
                              this.$message({
                                   message: response.msg,
                                   type: "warning"
                              });
                         }
                    })
                    .catch(error => {
                         console.log(error);
                         this.loading = false;
                    });
          },
          // 商品数量增减 1 加 0减
          shopCarNumAddSub(item, type) {
               let goodData = item.shopCarNum, selectGoodNum = 0, selectGoodPrice = 0;
               if (type) {
                    goodData++;
               } else {
                    goodData--;
                    if (goodData < 1) {
                         goodData = 0;
                         return;
                    }
               }
               // shopCarCountMoney  integralCount
               item.shopCarNum = goodData;
               // 已全选
               if (this.shopCartData.allShow) {
                    this.shopCartData.list.map(item => {
                         item.goodsList.map(iitem => {
                              selectGoodNum += iitem.shopCarNum * 1;
                              selectGoodPrice += iitem.shopCarNum * iitem.shopCarCountMoney * 1;
                         })
                    })
               }
               this.shopCartData.selectGoodNum = selectGoodNum;
               this.shopCartData.selectGoodPrice = selectGoodPrice;

          },
          // 商品立即购买
          nowPayBtn(storeSupplierId, iitem, supplierId, type) {
               // console.log("item==",storeSupplierId,shopCarNum,iitem)
               if (type) {
                    this.$message({
                         type: 'warning',
                         message: '程序猿还在开发中~'
                    });
               }
               let goodsId = iitem.id,
                    supId = storeSupplierId,
                    goodsInventoryId = iitem.goodsInventoryPO.id,
                    goodsNum = iitem.shopCarNum,
                    arr = [];
               arr.push({
                    storeSupplierId: supId,
                    goodsId: goodsId,
                    num: goodsNum,
                    goodsInventoryId: goodsInventoryId,
               });
               // console.log("arr=supplierId=",item);
               arr = JSON.stringify(arr);
               if (supplierId != -1) {
                    this.$router.push({ path: "/purchase/confirmOrder", query: { list: arr } });
               }
          },
          // 跳转商品详情页面
          goDetail(storesupplierid, goodsid) {
               this.$router.push({
                    path: "/purchase/productDetails",
                    query: { id: goodsid, supplierid: storesupplierid }
               });
          },
          // 底部删除购物车
          bottomDelBtn() {
               var arr = [];
               $('li .list-one li .Selected').closest('ul.list-one').each(function(i, item) {
                    var supplierid = $(this).closest('li').attr('storeSupplierId');
                    $(this).find('li .Selected').each(function(k, itm) {
                         var goodsid = $(this).closest('li').attr('carIds');
                         console.log(goodsid)
                         arr.push(goodsid);
                    })
               })
               if (arr.length <= 0) {
                    setMessage({
                         type: 'warning',
                         msg: '请至少选择一件商品！'
                    })
                    return false;
               }
          },
          // 购物车底部清楚已失效
          clearAllBtn() {
               var arr = [];
               var allClearShopList = $(".list .expired");
               if (allClearShopList.length > 0) {
                    ajax({
                         url: "product-api-impl/shopcar/deleteShopCarInvalidGoods",
                         methods: "post",
                         data: {},
                         success: function(response) {
                              if (response.code == 200) {
                                   setMessage({
                                        type: "success",
                                        msg: "清除成功"
                                   });
                                   // $('.confirmation-common').css('display', 'none');
                                   window.location.reload();
                              } else {
                                   setMessage({
                                        type: "warning",
                                        msg: response.msg
                                   });
                              }
                         },
                         error: function(response) {
                              console.log(response);
                         }
                    });
               } else {
                    setMessage({
                         type: "warning",
                         msg: "购物车暂无失效商品！"
                    });
               }
          },
          positiveIntegerMoney(e, item) {
               let obj = {
                    input: e,
               }
               item.shopCarNum = Common.positiveIntegerMoney(obj)
               //  console.log("iitem==",iitem);
          },
          // 选中效果 type 0 店铺被操作，1 商品被操作
          checkitem(firstitem, item, type) {
               item.show = !item.show;
               let count = 0, selected = 0;
               if (type) {
                    firstitem.goodsList.map(iitem => {
                         if (iitem.show) {
                              count++;
                         }
                    })
                    if (firstitem.goodsList.length == count) {
                         firstitem.show = true;
                    } else {
                         firstitem.show = false;
                    }
               } else {
                    item.goodsList.map(iitem => {
                         if (item.show) {
                              iitem.show = true;
                         } else {
                              iitem.show = false;
                         }
                    })
               }

               // 判断是否有未勾选中
               this.shopCartData.list.map(item => {
                    if (!item.show) {
                         this.shopCartData.allShow = false;
                         this.shopCartData.selectGoodNum = 0;
                         this.shopCartData.selectGoodPrice = 0;
                         return;
                    } else {
                         selected++;
                    }
                    item.goodsList.map(iitem => {
                         // iitem.show = allShow;
                         if (!iitem.show) {
                              this.shopCartData.allShow = false;
                              this.shopCartData.selectGoodNum = 0;
                              this.shopCartData.selectGoodPrice = 0;
                              return;
                         }
                    })
               })
               // 值相等说明全部选中
               if (this.shopCartData.list.length == selected) {
                    this.shopCartData.allShow = true;
                    let selectGoodNum = 0, selectGoodPrice = 0;

                    this.shopCartData.list.map(item => {
                         item.goodsList.map(iitem => {
                              selectGoodNum += iitem.shopCarNum * 1;
                              selectGoodPrice += iitem.shopCarNum * iitem.shopCarCountMoney * 1;
                         })
                    })
                    // 显示全选价格和数量
                    this.shopCartData.selectGoodNum = selectGoodNum;
                    this.shopCartData.selectGoodPrice = selectGoodPrice;
               }



          },
          // 底部全选操作
          allShow() {
               this.shopCartData.allShow = !this.shopCartData.allShow;
               let allShow = this.shopCartData.allShow, selectGoodNum = 0, selectGoodPrice = 0;
               this.shopCartData.list.map(item => {
                    item.show = allShow;
                    item.goodsList.map(iitem => {
                         iitem.show = allShow;
                         if (this.shopCartData.allShow) {
                              selectGoodNum += iitem.shopCarNum * 1;
                              selectGoodPrice += iitem.shopCarNum * iitem.shopCarCountMoney * 1;
                         }
                    })
               })
               //  console.log("selectGoodNum==",selectGoodNum);
               // 显示全选价格和数量
               this.shopCartData.selectGoodNum = selectGoodNum;
               this.shopCartData.selectGoodPrice = selectGoodPrice;

          },

          // delData(goodsId, supId,carIds);
          // 多个
          // delData(arr, 0,0, 1);
          // 删除购物车 type 0 单个商品
          delData(carIds, type) {
               var params = [];

               // 删除商品传值形式
               // {"carIds":["1577328967062"]}
               if (type != 1) {
                    params.push(carIds)
               } else {
                    this.shopCartData.list.map(item => {
                         item.goodsList.map(iitem => {
                              if (iitem.show) {
                                   params.push(iitem.shopCarId)
                              }
                         })
                    })

               }

               this.$confirm('确认删除吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
               }).then(() => {
                    ajax({
                         url: "product-api-impl/shopcar/deleteShopCarGoods",
                         optionParams: { carIds: params }
                    }).post()
                         .then(response => {
                              if (response.code === 200) {
                                   this.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                   });
                                   this.getshopCarList();
                              } else {
                                   this.$message({
                                        message: response.msg,
                                        type: "warning"
                                   });
                              }
                         })
                         .catch(error => {
                              console.log(error);
                              this.loading = false;
                         });

               }).catch(() => {
                    this.$message({
                         type: 'info',
                         message: '已取消删除'
                    });
               });

          },
          // 滑动加载更多
          // $('body').scroll(function () {
          //     _throttle(300, function () {
          //         var scrollTop = $(this).scrollTop();
          //         var scrollHeight = $(document).height();
          //         var windowHeight = $(this).height();
          //         if (scrollTop + windowHeight >= scrollHeight) {
          //             if (totalCount > params.pageIndex * params.pageSize) {
          //                 params.pageIndex++;
          //                 getshopCarList();
          //             }
          //         }
          //     })();
          // 操作节流
          // var _throttle = function (wait, fn) {
          //     var pre = 0,
          //         result;

          //     return function () {
          //         var now = (new Date()).getTime();
          //         if (now - pre > wait) {
          //             result = fn.apply();
          //             pre = now;
          //             return result;
          //         }
          //     }
          // };
          // })
          goUrlBox() { }
     },
     filters: {}
};
</script>
<style lang='scss' scoped>
@import "./scss/myCart.scss";
</style>
