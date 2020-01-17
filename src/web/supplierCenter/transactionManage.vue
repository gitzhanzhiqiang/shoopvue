<template>
  <div>

     <!--主要内容-->
		<div class="content-centre body-center">
			<!--侧边导航-->
			<div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData' @goUrl="goUrl"></left-nav>
      </div>
			<!--右边内容-->
			<div class="text-right fl">
				<!--title-->
				<div class="title">
					<p class="fl">卖家中心 > 交易管理</p>
					<div class="search fr">
						<input type="text" id="idvalue" class="fl" placeholder="输入订单快速搜索~">
						<button class="fl" id="searchs">搜索</button>
					</div>
				</div>

				<!--订单分类导航-->
				<div class="head">
					<ul class="nav fl" id="nav">
						<li class="fl" status=""><span class="hover">所有订单</span></li>
						<li class="fl" status="0">
							<span class="fl">待付款</span><span class="fl">0</span>
						</li>
						<li class="fl" status="1">
							<span class="fl">待发货</span><span class="fl">0</span>
						</li>
						<li class="fl" status="2">
							<span class="fl">待收货</span><span class="fl">0</span>
						</li>
						<li class="fl" status="4">
							<span class="fl">待评价</span><span class="fl">0</span>
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
				</div>

				<!--订单列表-->
				<ul class="list" id="list">
					<!-- <li>
                         <!--表头店铺信息-->
					<!--<div class="li-top">
                              <div class="store fl">
                                   <span>2019-01-12</span>
                                   <span>美丽新村</span>
                                   <span>订单号：778855512325232</span>
                                   <span class="tag">开发票</span>
                                   <span class="tag">有备注</span>
                              </div>
                              <span class="fr purchaser"><i></i><b>联系买家</b></span>
                              <span class="fr supplier"><i></i><b>联系供应商</b></span>
                         </div>-->
					<!--列表订单信息-->
					<!-- <ol class="list-one">
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
                                        <p>实付 ¥ 198.88</p>
                                        <p>含运费 ¥ 10.00</p>
                                        <p>状态 代付款</p>
                                   </div>
                                   <div class="handle fl">
                                        <p class="countdown">还剩 20:11:00</p>
                                        <p class="btn cancel-order">取消订单</p>
                                        <span class="fr more">更多<i></i>
                                             <div class="dropdown">
                                                  <dl>
                                                       <dd>订单详情</dd>
                                                  </dl>
                                             </div>
                                        </span>
                                   </div>
                              </li>
                         </ol>
                    </li>-->

				</ul>
				<div class="zxf_pagediv" style="text-align: center;background: white;"></div>
			</div>
		</div>
		
		
     	
     <!--留言弹窗-->
     <div class="alertForm leaveMsg">
          <div class="dog_alert"></div>
          <div class="text">
               <h3>留言<img class="fr" src="~@/assets/imagesRecode/1736@2x.png" alt="" onClick="CloseAlert()"></h3>
               <div class="input">
                    <textarea name=""   cols="30" rows="10" placeholder="在此输入留言（200字以内）" onkeydown="inputMaxLength(this, 200)" maxlength="200"></textarea>
                    <p>在此输入留言（200字以内）</p>
               </div>
               <div class="btn">
                    <button onClick="CloseAlert()">取消</button>
                    <button onClick="submitLeaveMessage(1)">确定</button>
               </div>
          </div>
     </div>
     <!--退货弹窗-->
     <div class="alertForm reject">
          <div class="dog_alert"></div>
          <div class="text">
               <h3>退货<img class="fr" src="~@/assets/imagesRecode/1736@2x.png" alt="" onClick="CloseAlert()"></h3>
               <div class="input">
                    <textarea name=""   cols="30" rows="10" placeholder="在此输入退货原因（200字以内）" onkeydown="inputMaxLength(this, 200)" maxlength="200"></textarea>
                    <p>在此输入退货原因（200字以内）</p>
               </div>
               <div class="btn">
                    <button onClick="CloseAlert()">取消</button>
                    <button onClick="submitLeaveMessage(2)">确定</button>
               </div>
          </div>
     </div>
     <!--留言弹窗-->
     <div class="alertForm refund">
          <div class="dog_alert"></div>
          <div class="text">
               <h3>退款<img class="fr" src="~@/assets/imagesRecode/1736@2x.png" alt="" onClick="CloseAlert()"></h3>
               <div class="input">
                    <textarea name=""   cols="30" rows="10" placeholder="在此输入退款原因（200字以内）" onkeydown="inputMaxLength(this, 200)" maxlength="200"></textarea>
                    <p>在此输入退款原因（200字以内）</p>
               </div>
               <div class="btn">
                    <button onClick="CloseAlert()">取消</button>
                    <button>确定</button>
               </div>
          </div>
     </div>
     <!--留言弹窗-->
     <div class="alertForm leaveMsg1">
          <div class="dog_alert"></div>
          <div class="text">
               <h3>退货/退款详情<img class="fr" src="~@/assets/imagesRecode/1736@2x.png" alt="" onClick="CloseAlert()"></h3>
               <div class="textdata">
                    <div><label for="" class="fl">申请时间:</label><span class="fl">申请时间申请时间申请时间申请时间申请时间申请时间</span></div>
                    <div><label for="" class="fl">买家姓名:</label><span class="fl">543</span></div>
                    <div><label for="" class="fl">退换货原因:</label><span class="fl">543</span></div>
                    <div><label for="" class="fl">退换货图片:</label><span class="fl"><img src="" alt=""></span></div>
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
          iindex:1,
        }
     } 
  },
  computed: {},
  created() {
    
  },
  mounted() {},
  methods: {
    goUrl(){
      console.log("2131231");
    }  
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import '@web/sellerCenter/scss/transactionManage.scss';
</style>
