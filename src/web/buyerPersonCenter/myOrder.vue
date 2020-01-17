<template>
     <div>
          <!--中心的头部搜索-->
          <div id="s-header" class="s-header my">
               <seller-BG></seller-BG>
          </div>

          <!--主要内容-->
          <div class="content-centre body-center">
               <!--侧边导航-->
               <ul class="text-left-nav fl">
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myshopping')">我的爱心购</a>
                    </li>
                    <li class="hover">
                         <a href="javascript:;">我的订单</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myCart')">我的购物车</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myCollecting')">我的收藏</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/mylooked')">我的浏览</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myProfile')">我的资料</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myAccount')">我的账户</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myAddress')">我的地址</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myEvaluation')">我的评价</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myGrade')">我的积分</a>
                    </li>
                    <!-- <li><a href="javascript:;">我的卡券</a></li> -->
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myMessage')">我的消息</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/securityCenter')">安全中心</a>
                    </li>
               </ul>
               <!-- 右侧内容 -->
               <div class="text-right fr">
                    <ul class="nav" id="nav">
                         <li class="fl" status="">
                              <span class="hover">全部订单</span>
                         </li>
                         <li class="fl" status=0>
                              <span>待付款</span>
                              <span class="red">0</span>
                         </li>
                         <li class="fl" status=1>
                              <span>待发货</span>
                              <span class="red">0</span>
                         </li>
                         <li class="fl" status=2>
                              <span>待收货</span>
                              <span class="red">0</span>
                         </li>
                         <li class="fl" status=4>
                              <span>待评价</span>
                              <span class="red">0</span>
                         </li>
                         <li class="fl" status=-1>
                              <span>退换售后</span>
                         </li>
                    </ul>
                    <!-- 订单开始 -->
                    <div class="order">
                         <!-- 表头开始 -->
                         <ul class="order-header">
                              <li>商品</li>
                              <li>单价</li>
                              <li>数量</li>
                              <li>商品操作</li>
                              <li>实付款</li>
                              <li>交易状态</li>
                              <li>交易操作</li>
                         </ul>
                         <!-- 表头结束 -->
                         <!--订单列表开始-->
                         <ul class="list" id="list">
                              <li v-for="item in orderList">
                                   <div class="top">
                                        <div class="fl">{{item.createTime|parseTime('{y}-{m}-{d}')}}</div>
                                        <div class="fl">订单号:{{item.orderNumber}}</div>
                                        <div class="fl" @click="$router.push({path:'/purchase/shopList',query:{id:item.storeSupplierId}})"><img class="store" src="~@web/buyerPersonCenter/image/store.png" alt="">{{item.storeSupplierName}}</div>
                                        <div class="fl" @click="contactService(item.storeSupplierId)"><img class="service" src="~@web/buyerPersonCenter/image/service.png" alt="">联系客服</div>
                                   </div>
                                   <div class="bottom" v-for="iitem in item.listDetail">
                                        <div class="fl">
                                             <img :src="iitem.goodsImage" alt="">
                                             <h1>
                                                  <p>{{iitem.goodsName}}</p>
                                                  <p v-for="(iiitem,index) in iitem.specifValueJson">
                                                       <span v-for="(value,key,index) in iiitem">{{key+':'+value}}</span>
                                                  </p>
                                             </h1>
                                        </div>
                                        <div class="fl">{{iitem.goodsMoney}}元</div>
                                        <div class="fl"> x{{iitem.goodsNum}}</div>
                                        <div class="fl">
                                             <p class="button refund money" v-if="iitem.status == 1 || iitem.status == 2 || iitem.status == 3">退款</p>
                                             <p class="button refund goods" v-if="iitem.status == 3">换货</p>
                                             <p class="button refund argue" v-if="iitem.status == 9" @click="argue(item.id)">争议退款</p>
                                             <p class="button refund writeNum" v-if="iitem.status == 6 && iitem.orderReturnPO.exchangeStatus == 2" @click="inputEmsNum=true">填写单号</p>
                                             <p class="button refund writeNum" v-if="iitem.status == 7 && iitem.orderReturnPO.backStatus == 7" @click="inputEmsNum=true">填写单号</p>
                                        </div>
                                        <div class="fl">
                                             <p>{{iitem.orderMoney | goodPriceTotalFilter(iitem.shippingFee)}}元</p>
                                             <p>(含运费：{{iitem.shippingFee|forma2}}元)</p>
                                        </div>
                                        <!--//除去退货退款的操作按钮-->
                                        <!--// -1已取消,0待付款,1待发货,2待收货,3已签收,4待评价,5已完成 6换货 7退款-->
                                        <div class="fl">
                                             <p v-if="iitem.status == -1">已取消</p>
                                             <p v-if="iitem.status == 0">待付款</p>
                                             <p v-if="iitem.status == 1">待发货</p>
                                             <p v-if="iitem.status == 2">待收货</p>
                                             <p v-if="iitem.status == 3">已签收</p>
                                             <p v-if="iitem.status == 4">待评价</p>
                                             <p v-if="iitem.status == 5">已完成</p>

                                             <!--//退货-->
                                             <template v-if="iitem.status == 6">
                                                  <p v-if="iitem.orderReturnPO.exchangeStatus == -1">不同意</p>
                                                  <p v-if="iitem.orderReturnPO.exchangeStatus == 0">同意换货</p>
                                                  <p v-if="iitem.orderReturnPO.exchangeStatus == 1">待换货</p>
                                                  <p v-if="iitem.orderReturnPO.exchangeStatus == 2">换货中</p>
                                                  <p v-if="iitem.orderReturnPO.exchangeStatus == 3">已换货,待评价</p>
                                                  <p v-if="iitem.orderReturnPO.exchangeStatus == 4">换货评价完成</p>
                                                  <p class="button CheckLook goods" style="border: none;">查看换货</p>
                                             </template>
                                             <!--//退款-->
                                             <!--backStatus (integer, optional): 0不退款 1待退款 2已同意,退货中 3已退款 ,-->
                                             <template v-if="iitem.status == 7">
                                                  <p v-if="iitem.orderReturnPO.backStatus == -1">不同意</p>
                                                  <p v-if="iitem.orderReturnPO.backStatus == 0">不同意</p>
                                                  <p v-if="iitem.orderReturnPO.backStatus == 1">待退款</p>
                                                  <p v-if="iitem.orderReturnPO.backStatus == 2">退货中</p>
                                                  <p v-if="iitem.orderReturnPO.backStatus == 3">已退款</p>
                                                  <p class="button CheckLook money" style="border: none;">查看退款</p>
                                             </template>
                                             <p class="detail orderDetail" @click="$router.push({path:'/purchase/orderDetails',query:{id:iitem.id,type:3}})">订单详情</p>
                                             <p class="check" v-if="iitem.status == 2 || iitem.status == 3 || iitem.status == 4 || iitem.status == 5" @click="$router.push({path:'/purchase/logisticsInformation',query:{id:iitem.id}})">查看物流</p>
                                        </div>
                                        <div class="fr">
                                             <!--//交易操作模块-->
                                             <!--判断时间是否已经过期-->
                                             <p v-if="iitem.status == 0 && (iitem.createTime|time)" @click="goNowPay(iitem.id,iitem.orderMoney,iitem.shippingFee)">立即支付</p>
                                             <template v-else="iitem.status != 0">
                                                  <!--dom += '<p class="button ' + buttonClass + '">' + button + '</p>';-->
                                                  <p class="button" v-if="iitem.status == -1">已取消</p>
                                                  <!--<p class="button" v-if="iitem.status == 1">待发货</p>-->
                                                  <!--<p class="button" v-if="iitem.status == 2">待收货</p>-->
                                                  <p class="button" v-if="iitem.status == 3">确认收货</p>
                                                  <p class="button" v-if="iitem.status == 4" @click="$router.push({path:'/purchase/commentCommodity',query:{id:iitem.id}})">立即评价</p>
                                                  <p class="button  buyAgain" v-if="iitem.status == 5 || iitem.exchangeStatus == 3" @click="buyAgain(iitem.id)">再次购买</p>
                                             </template>
                                             <!--//根据前面判断得到的交易操作按钮-->
                                             <!--<p class="button pay">立即支付</p>-->
                                             <!--<p v-if="iitem.status == -1"></p>-->
                                             <!--<p v-if="iitem.status == 1">待发货</p>-->
                                             <p v-if="iitem.status == 2 || iitem.status == 3">确认收货</p>
                                             <p v-if="iitem.status == 4">立即评价</p>
                                             <!--<p v-if="iitem.status == 5" @click="buyAgain(iitem.id)">再次购买</p>-->
                                             <p class="button confirmGoods" v-if="iitem.exchangeStatus == 2">确认收货</p>
                                             <!--<p class="button buyAgain" v-if="iitem.exchangeStatus == 3">再次购买</p>-->
                                             <p v-if="iitem.status == 5 && iitem.exchangeStatus==3" class="pingjiaClass">立即评价</p>
                                             <!--//剩余时间-->
                                             <p class="restTime" v-if="iitem.remainderDays">还剩:{{iitem.remainderDays}}</p>
                                             <template v-if="iitem.status == 2 || iitem.status == 3 || iitem.status == 6">
                                                  <template v-if="!iitem.prolongDate && iitem.exchangeStatus == 2">
                                                       <p class="longerTime">延长收货</p>
                                                  </template>
                                             </template>
                                             <!--<p class="more">
                                         更多操作
                                         <a href="javascript:;">
                                             <span class="updateAddress" @click="">修改地址</span>
                                             <span class="cancelOrder">取消订单</span>
                                         </a>
                                     </p>-->
                                        </div>
                                   </div>
                              </li>
                         </ul>
                         <!-- 订单列表结束 -->
                         <!--翻页-->
                         <div class="zxf_pagediv shoppingCenter">
                              <div v-if="total" class="pagination-container">
                                   <el-pagination background @size-change="(value)=> handleSizeChange(value, 'params', 'getTable')" @current-change="(value)=> handleCurrentPageChange(value, 'params', 'getTable')" :current-page.sync="params.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
                                   </el-pagination>
                              </div>
                         </div>
                    </div>
                    <!-- 订单结束 -->
                    <!-- 没有订单提示 -->
                    <div class="noOrder">
                         <img src="~@/assets/imagesRecode/noData.png" alt="">
                         <p>你还没有下过单哦，来看看我们的热门商品吧
                              <a href="../index.html#hotGoods">热门商品</a>
                         </p>
                    </div>
                    <!-- 消息弹框开始 -->
                    <div class="details_alertForm chatWith" v-if="inputChat">
                         <div class="dog_alert"></div>
                         <div class="text">
                              <div class="title">联系客服<img src="~@/assets/imagesRecode/delete.png" alt="" onClick="CloseAlertMsg()"></div>
                              <ul class="box">
                                   <li>
                                        <span class="fl">内容</span>
                                        <textarea rows="3" cols="20" placeholder="请输入内容~" class="fl"></textarea>
                                   </li>
                              </ul>
                              <div class="button">
                                   <p class="cancle" @click="inputChat=!inputChat">取消</p>
                                   <p class="submit" onClick="CloseAlertMsg()">提交</p>
                              </div>
                         </div>
                    </div>
                    <!-- 消息弹框结束 -->

                    <!-- 填写物流单号 -->
                    <div class="details_alertForm writeNumber" v-if="inputEmsNum">
                         <div class="dog_alert"></div>
                         <div class="text">
                              <div class="title">填写物流单号</div>
                              <!-- <div class="item">
                             <span>物流名称</span>
                             <select name="emsName" msg="请选择" class="selectNum">
                                 <option value="1">1天</option>
                             </select>
                         </div> -->
                              <div class="item">
                                   <span>物流单号</span>
                                   <input type="text" name="emsNum" class="selectNum" style="width: 180px;">
                              </div>
                              <div class="button" style="margin-top: 71px;">
                                   <p class="cancle" onClick="CloseWriteNumber()">取消</p>
                                   <p class="submit" onClick="submitForm()">提交</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from "@utils/config";
import sellerBG from "@/components/sellerBG.vue";
import baseURL from "@/assets/js/ajax/baseURL";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
     components: {
          sellerBG,
     },
     data() {
          return {
               total: 100,
               params: {
                    pageSize: 10,
                    pageIndex: 1,
                    status: '',
               },
               orderList: [],
               inputEmsNum: false, //运单填写
               inputChat: false, //消息弹框
          }
     },
     computed: {},
     created() {
          this.getTable();
     },
     mounted() { },
     methods: {
          goUrl(path) {
               let pathTmp = this.$route.path;
               if (pathTmp != path) {
                    this.$router.push(path);
               }
          },
          goUrlBox() { },
          getTable() {
               if (this.params.status < 0) {
                    this.returnGoods();
                    return;
               }
               ajax({
                    url: "/order-api-impl/order/getOrderinfoPageByStatus",
                    optionParams: this.params
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.orderList = response.data.records ? response.data.records : [];
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
                    });
          },
          // status -1
          returnGoods() {
               ajax({
                    url: "/order-api-impl/order/getBuyerReturnOrderList",
                    optionParams: {
                         pageIndex: parameter.pageIndex,
                         pageSize: parameter.pageSize,
                    }
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.orderList = response.data.records ? response.data.records : [];
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
                    });
          },
          // 立即支付
          goNowPay(id, money, fee) {
               let totalMoney = money + fee;
               this.$router.push({ path: '/purchase/payment', query: { orderId: id, orderPayMoney: totalMoney } })
          },
          // 再次购买
          buyAgain(id) {
               this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
               }).then(() => {
                    ajax({
                         url: "product-api-impl/shopcar/addAndUpdateShopCarRepurchase",
                         optionParams: this.params
                    }).post()
                         .then(response => {
                              if (response.code === 200) {

                                   this.$message({
                                        type: 'success',
                                        message: '购买成功!'
                                   });
                                   this.$router.push('/buyerPersonCenter/myCart')
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


               }).catch(() => {
                    this.$message({
                         type: 'info',
                         message: '已取消删除'
                    });
               });


          },
          // 取消订单
          cancelOrder(id) {
               this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
               }).then(() => {
                    ajax({
                         url: "order-api-impl/order/cancelOrderinfo?id='" + id,
                         optionParams: this.params
                    }).post()
                         .then(response => {
                              if (response.code === 200) {
                                   this.$message({
                                        type: 'success',
                                        message: '删除成功!'
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


               }).catch(() => {
                    this.$message({
                         type: 'info',
                         message: '已取消删除'
                    });
               });

          },
          //发起争议退款
          argue(id) {
               this.$confirm('是否发起争议退款？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
               }).then(() => {
                    ajax({
                         url: "order-api-impl/argueOperate/addArgueOperate?id='" + id,
                         optionParams: {
                              orderId: id
                         }
                    }).post()
                         .then(response => {
                              if (response.code === 200) {

                                   this.$message({
                                        type: 'success',
                                        message: '删除成功!'
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


               }).catch(() => {
                    this.$message({
                         type: 'info',
                         message: '已取消删除'
                    });
               });


          },
          //联系客服
          contactService(storeUserId) {
               if (storeUserId && storeUserId != -1) {
                    //   window.location.href = '../chitchat.html?id=' + storeUserId + '&isSupplier=1';
                    this.$router.push({ path: "/chitchat", query: { id: storeUserId, isSupplier: 1 } })
               } else {
                    setMessage({
                         type: 'warning',
                         msg: '店铺不存在'
                    })
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
               this[parameter].pageIndex = val;
               this[method]();
          },

     },
     filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/myOrder.scss';
</style>
