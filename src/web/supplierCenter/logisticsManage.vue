<template>
  <div>
    <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <div id="centre-left-nav" class="fl">
              <left-nav :munuData='munuData' @goUrl="goUrl"></left-nav>
          </div>
          <!-- 右边内容 -->
          <div class="text-right fl">
               <!--title-->
               <div class="title">
                    <p class="fl">卖家中心 > 物流管理</p>
                    <div class="search fr">
                         <input type="text" class="fl" id="idvalue" placeholder="输入订单快速搜索~">
                         <button class="fl" id="searchs">搜索</button>
                    </div>
               </div>

               <!--订单分类导航-->
               <div class="head">
                    <ul class="nav fl" id="nav">
                         <li class="fl" status="0">
                              <span class="fl hover">待发货订单</span><span class="fl type1">0</span>
                         </li>
                         <li class="fl" status="1">
                              <span class="fl">已发货订单</span><span class="fl type1">0</span>
                         </li>
                         <li class="fl" status="2">
                              <span class="fl">已签收订单</span><span class="fl type1">0</span>
                         </li>
                    </ul>
                    <!--筛选-->
                    <!--<div class="filter fr">
                         <span class="fl">筛选条件：</span>
                         <select class="fl" name="" id="chooses">
                             <option value="">所有订单</option>
                              <option value="0">卖家商品</option>
                              <option value="1">供应商商品</option>
                         </select>
                    </div>-->
                    <div class="addNew fr">
                         <span>客户号管理</span>
                    </div>
               </div>

               <!--订单列表-->
               <ul class="list" id="list">
                    <!--<li>
                         <div class="store">
                              <span>2019-01-12</span>
                              <span>美丽新村</span>
                              <span>订单号：778855512325232</span>
                         </div>
                         <ol class="list-one">
                              <li>
                                   <img src="./images/product.png" alt="" class="fl">
                                   <div class="key fl">
                                        <p>新鲜农夫苹果无农药无污染可口香甜红苹果</p>
                                        <p>规格名：规格值；规格名：规格值；规格名：规格值</p>
                                   </div>
                                   <div class="number fl">
                                        <p>单价 ¥ 188.88</p>
                                        <p>数量 1</p>
                                   </div>
                                   <div class="sum fl">
                                        <div class="receive-info">
                                             <span class="label fl">收货信息</span>
                                             <span class="address fl">浙江省杭州市江干区下沙学源街第500号 刘梓宁 17816541247</span>
                                        </div>
                                   </div>
                              </li>
                              <li>
                                   <img src="./images/product.png" alt="" class="fl">
                                   <div class="key fl">
                                        <p>新鲜农夫苹果无农药无污染可口香甜红苹果</p>
                                        <p>规格名：规格值；规格名：规格值；规格名：规格值</p>
                                   </div>
                                   <div class="number fl">
                                        <p>单价 ¥ 188.88</p>
                                        <p>数量 1</p>
                                   </div>
                              </li>
                         </ol>
                         <div class="bottom">
                              <span class="fl status">订单状态：已签收</span>
                              <span class="fr details">订单详情</span>
                              <span class="fr details">物流详情</span>
                              <span class="fr countdown">还剩  20:11:00</span>
                         </div>
                    </li>-->
               </ul>

          </div>

          <!--弹窗-->
          <div class="alertForm leaveMsg">
               <div class="dog_alert"></div>
               <div class="text">
                    <h3>物流<img class="fr" src="~@/assets/imagesRecode/delete.png" alt="" onClick="CloseAlert()"></h3>
                    <div class="input">
                         <ul class="tab">
                              <li class="fl hove">在线下单</li>
                              <li class="fl">自己联系物流</li>
                              <li class="fl">无需物流</li>
                         </ul>
                         <div class="tab_div">
                              <div class="oli">
                                   <div class="five shipments">
                                        <span>发货方：</span>
                                        <select name=""   placeholder="请选择"></select>
                                   </div>
                                   <div>
                                        <span>发货方补充地址：</span>
                                        <input name="sellerAddressSupple" type="text" placeholder="请填写">
                                   </div>
                                   <div>
                                        <span>发货方手机号：</span>
                                        <input name="sellPhone" type="text" placeholder="请填写">
                                   </div>
                                   <div>
                                        <span>是否通知上门揽收</span>
                                        <div class="notice">
                                        	<p class="has" daid='0'>
                                        		<img class="fl"  src="~@/assets/imagesRecode/dz_xuanz.png" alt="">
                                        		通知
                                        	</p>
                                        	<p daid='1'>
                                        		<img class="fl"  src="~@/assets/imagesRecode/dz_meixuan.png" alt="">
                                        		不通知
                                        	</p>
                                        </div>
                                   </div>
                                   <div>
                                        <span>卖家邮编：</span>
                                        <input onkeyup="positiveIntegerMoney(this)" name="sellerPostCode" maxlength="6" type="text" placeholder="请填写6位邮编">
                                   </div>
                                   <div class="five take">
                                        <span>收货方：</span>
                                        <select name=""   placeholder="请选择"></select>
                                   </div>
                                   <div>
                                        <span>收货方补充地址：</span>
                                        <input name="buyerAddressSupple" type="text" placeholder="请填写">
                                   </div>
                                   <div>
                                        <span>买家邮编：</span>
                                        <input onkeyup="positiveIntegerMoney(this)" name="buyerPostCode" maxlength="6" type="text" placeholder="请填写6位邮编">
                                   </div>
                                   <div>
                                        <span>物流公司：</span>
                                        <select class="expressVO" name="expressId"   placeholder="请选择">
                                        <option value="">选择</option>
                                   </select>
                                   </div>
                                   <div>
                                        <span>邮费：</span>
                                        <select class="expressPaymentVO" name="payType"   placeholder="请选择">
                                       <option value="">选择</option>
                                   </select>
                                   </div>
                                   <div>
                                        <span>快递方式：</span>
                                        <select class="expressSendTypeVO" name="expType"   placeholder="请选择">
                                        <option value="">选择</option>
                                   </select>
                                   </div>
                                   <div>
                                        <span>包裹数：</span>
                                        <input type="text" name="quantity" value="1" onkeyup="positiveIntegerMoney(this, 30)" placeholder="请填写(不大于30)">
                                   </div>
                                   <div>
                                        <span>备注：</span>
                                        <textarea placeholder="请填写" name="remark"   onkeydown="inputMaxLength(this, 200)" maxlength="200"></textarea>
                                   </div>
                              </div>
                              <div class="oli">
                                   <div>
                                        <span>物流公司：</span>
                                        <select class="expressVO" name="expressId"   placeholder="请选择">
                                        <option value="">选择</option>
                                   </select>
                                   </div>
                                    <div>
	                                    <span>发货方手机号：</span>
	                                    <input name="sellPhone" type="text" placeholder="请填写">
	                               </div>
                                   <div>
                                        <span>物流单号：</span>
                                        <input name="expressTicket" type="text" placeholder="请填写">
                                   </div>
                              </div>
                              <div class="oli">
                              	 <div>
	                                    <span>发货方手机号：</span>
	                                    <input name="sellPhone" type="text" placeholder="请填写">
	                               </div>
                              </div>
                         </div>
                         <div class="btn">
                              <button onClick="submitLeaveMessage()">确定</button>
                              <button onClick="CloseAlert()">取消</button>
                         </div>
                    </div>
               </div>
          </div>
          <div class="alertForm leaveMsg1">
               <div class="dog_alert"></div>
               <div class="text">
                    <h3><img class="fr" src="~@/assets/imagesRecode/delete.png" alt="" onClick="CloseAlert()"></h3>
                    <div class="input">

                    </div>
               </div>
          </div>
     </div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import leftNav from "@/components/leftNav.vue";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
  components: {
    leftNav
  },
  data() {
	return{
        munuData:{
          munuType:1,
          iindex:2,
        } 
     } 
  },
  computed: {},
  created() {
    
  },
  mounted() {},
  methods: {
     goUrl(){

     } 
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import '@web/sellerCenter/scss/logisticsManage.scss';
</style>
