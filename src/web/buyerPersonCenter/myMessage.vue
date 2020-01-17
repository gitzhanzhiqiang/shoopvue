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
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myOrder')">我的订单</a>
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
                    <li class="hover">
                         <a href="javascript:;">我的消息</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/securityCenter')">安全中心</a>
                    </li>
               </ul>
               <!-- 右侧内容 -->
               <div class="text-right fr">
                    <h1>我的消息</h1>
                    <!-- tab切换开始 -->
                    <div class="tab" id="tab">
                         <span class="hover" types='' id="tcont">
                              全部
                              <!--<b>99+</b>-->
                         </span>
                         <span types='0' id='tcontb'>
                              个人消息
                         </span>
                         <span types='1' id="tconta">
                              系统消息
                         </span>
                    </div>
                    <!-- tab切换结束 -->
                    <!--我的消息列表开始-->
                    <ul class="list" id="list">
                         <li v-for="item in chatList">
                              <img :src="item.sidImage" alt="" v-if="item.id==userInfo.id">
                              <img :src="item.sidImage" alt="" v-else>
                              <div>
                                   <h5>
                                        <template v-if="item.id==userInfo.id">
                                             {{item.sidNickName}}
                                        </template>
                                        <template v-else>
                                             {{item.ridNickName}}
                                        </template>
                                        <span>{{item.pushTime}}</span>
                                   </h5>
                                   <p>{{item.messageBody}}</p>
                              </div>
                         </li>
                    </ul>
                    <!--我的消息列表结束-->
                    <!--翻页-->
                    <div class="zxf_pagediv shoppingCenter">
                         <div v-if="total" class="pagination-container">
                              <el-pagination background @size-change="(value)=> handleSizeChange(value, 'params', 'getTable')" @current-change="(value)=> handleCurrentPageChange(value, 'params', 'getTable')" :current-page.sync="params.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
                              </el-pagination>
                         </div>
                    </div>
                    <!-- 没有数据提示 -->
                    <div class="noData">
                         <img src="~@/assets/imagesRecode/noData.png" alt="">
                         <p>暂无数据哦！</p>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from "@utils/config";
import sellerBG from "@/components/sellerBG.vue";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
     components: {
          sellerBG
     },
     data() {
          return {
               total: 100,
               params: {
                    // pageSize: 10,
                    // pageIndex: 1,
                    sid: '',
                    type: '-1'
               },
               chatList: []
          }
     },
     computed: {},
     created() {
          let userInfo = this.$Cookies.get("userInfo")? JSON.parse(this.$Cookies.get("userInfo")): {};
          this.params.sid = userInfo.id
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
          getTable() {
               console.log(this.params)
               ajax({
                    url: "member-api-impl/im/chatList",
                    optionParams: this.params
               }).fetch()
                    .then(response => {
                         if (response.code === 200) {
                              this.chatList = response.data.data ? response.data.data : [];
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
@import './scss/myMessage.scss';
</style>
