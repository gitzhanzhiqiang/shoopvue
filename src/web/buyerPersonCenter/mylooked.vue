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
                    <li class="hover">
                         <a href="javascript:;">我的浏览</a>
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
                    <!--筛选-->
                    <div class="filtrate">
                         <el-date-picker v-model="timeDate" type="date" placeholder="选择日期">
                         </el-date-picker>
                         <span @click="timeScreening(timeDate)">筛选</span>
                    </div>
                    <!--商品列表-->
                    <ul class="list" id="list">
                         <li v-for="item in historyPageData">
                              <img :src="item.goods.imageAddress" alt="">
                              <p class="price">¥ {{item.goods.actualPrice}}</p>
                              <p class="key-word">{{item.goods.name|nameSubstring}}</p>
                              <!--<P class="location"><span></span>杭州</P>-->
                              <!--删除商品-->
                              <div class="del">
                                   <span class="delete" @click="delGood(item)">删除</span>
                              </div>
                         </li>
                    </ul>

                    <!--翻页-->
                    <div class="zxf_pagediv">
                         <div v-if="total" class="pagination-container">
                              <el-pagination background @size-change="(value)=> handleSizeChange(value, 'params', 'getTable')" @current-change="(value)=> handleCurrentPageChange(value, 'params', 'getTable')" :current-page.sync="params.pageIndex" :page-sizes="[10,20,30, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
                              </el-pagination>
                         </div>
                    </div>

                    <!-- 没有数据显示 -->
                    <div id="nodata" v-show="historyPageData.lenght<1">
                         <img src="~@/assets/imagesRecode/noData.png" alt="">
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import ajax from "@utils/config";
import sellerBG from "@/components/sellerBG.vue";
import { parseTime } from '@/filters';
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
     components: {
          sellerBG
     },
     data() {
          return {
               historyPageData: [],
               params: {
                    year: "2019",
                    month: "12",
                    day: "23",
                    pageIndex: 1,
                    pageSize: 10,
               },
               total: 0,
               timeDate: parseTime(new Date(), '{y}-{m}-{d}'),
          }
     },
     computed: {},
     created() {
          let dateTime = this.timeDate.split('-');
          this.params.year = dateTime[0];
          this.params.month = dateTime[1];
          this.params.day = dateTime[2];
          console.log("this.params===", this.params);
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
          getTable(time) {
               if (!time) {
                    return;
               }
               let dateTime = time.split('-');
               this.params.year = dateTime[0];
               this.params.month = dateTime[1];
               this.params.day = dateTime[2];

               ajax({
                    url: "product-api-impl/app/getUserBrowsingHistoryPage",
                    optionParams: this.params
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.historyPageData = response.data.list ? response.data.list : [];

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
          // 按时间筛选
          timeScreening(date) {
               // console.log("date==",parseTime(date,'{y}-{m}-{d}'));
               this.getTable(parseTime(date, '{y}-{m}-{d}'));
          },
          // 商品刪除
          delGood(data, type) {

               this.$confirm('确认删除吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
               }).then(() => {

                    ajax({
                         url: "product-api-impl/app/delUserBrowsingHistory",
                         optionParams: {
                              childDTOList: [{
                                   historyId: data.historyId,
                                   time: data.browsingTime
                              }],
                              delAll: false
                         }
                    }).post()
                         .then(response => {
                              if (response.code === 200) {
                                   this.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                   });
                                   this.getTable();
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
@import './scss/mylooked.scss';
</style>
