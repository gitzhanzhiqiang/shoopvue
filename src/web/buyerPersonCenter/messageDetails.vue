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
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/myMessage')">我的消息</a>
                    </li>
                    <li>
                         <a href="javascript:;" @click="goUrl('/buyerPersonCenter/securityCenter')">安全中心</a>
                    </li>
               </ul>
               <!-- 右侧内容 -->
               <div class="text-right fr">
                    <h1>我的消息 > 消息详情</h1>
                    <!--消息详情列表开始-->
                    <ul class="details_list" id="details_list">
                         <!-- <li>
                         <h5>消息标题消息标题消息标题消息标题消息标题</h5>
                         <p>消息正文消息正文消息正文消息正文消息正文消息正文消息正文消息正文</p>
                         <div>
                             <span>留言人的id</span>
                             <span>2019-05-23 17:52:37</span>
                         </div>
                     </li> -->
                    </ul>
                    <!--消息详情列表结束-->
                    <div class="button">
                         <p class="reply">回复</p>
                    </div>
                    <!--翻页-->
                    <div class="zxf_pagediv"></div>
                    <!-- 弹框开始 -->
                    <div class="details_alertForm">
                         <div class="dog_alert"></div>
                         <div class="text">
                              <div class="title">回复消息<img src="image/delete.png" alt="" onClick="CloseAlert()"></div>
                              <ul class="box">
                                   <li>
                                        <span class="fl">标题</span>
                                        <input type="text" placeholder="给你的这条消息起个名字吧" class="fl">
                                   </li>
                                   <li>
                                        <span class="fl">正文</span>
                                        <textarea rows="3" cols="20" placeholder="把你想回复的话打出来~" class="fl"></textarea>
                                   </li>
                              </ul>
                              <div class="button">
                                   <p class="cancle" onClick="CloseAlert()">取消</p>
                                   <p class="submit">提交</p>
                              </div>
                         </div>
                    </div>
                    <!-- 弹框结束 -->
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

          }
     },
     computed: {},
     created() {

     },
     mounted() { },
     methods: {
          goUrl(path) {
               let pathTmp = this.$route.path;
               if (pathTmp != path) {
                    this.$router.push(path);
               }
          },
     },
     filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/myMessage.scss';
</style>
