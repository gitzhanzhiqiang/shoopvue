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
                    <li class="hover">
                         <a href="javascript:;">我的地址</a>
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
                    <!--位置导航-->
                    <div class="crumb">
                         <span>收货地址</span>
                         <span onClick="addNewAddress()">创建新地址</span>
                    </div>
                    <!--地址列表-->
                    <ul class="list" id="list">
                         <li v-for="item in  addressData">
                              <span class="default" v-if="item.isDefault">默认地址</span>
                              <span class="to-default" v-else>设为默认</span>
                              <span>{{item.name}} </span>
                              <span>{{item.addressDetail}} </span>
                              <span>{{item.phone}}</span>
                              <span class="edit-address" @click="updateAddress(item,1)">修改地址</span>
                              <span class="delete">删除</span>
                         </li>
                    </ul>
               </div>
               <!-- 编辑地址-弹框开始 -->
               <div class="alertForm" id="alertForm" rules="rules" label-width="152" position-verification="" v-if="showPupop">
                    <div class="dog_alert"></div>
                    <div class="text">
                         <div class="title">
                              <span>修改地址</span>
                              <img src="~@/assets/imagesRecode/delete.png" alt="" @click="showPupop=!showPupop">
                         </div>
                         <div class="box">
                              <div class="form-item">
                                   <label class="fl">收货人姓名：</label>
                                   <div class="verification-el-input fl">
                                        <input name="name" class="verification-input" v-model="pupopForm.name" type="text" placeholder="请输入收货人姓名" requir="true" msg="请填写收货人姓名！">
                                   </div>
                              </div>
                              <div class="form-item">
                                   <label class="fl">手机号码：</label>
                                   <div class="verification-el-input fl">
                                        <input name="phone" class="verification-input" v-model="pupopForm.phone" type="text" placeholder="请输入11位手机号" requir="true" msg="请输入11位手机号！">
                                   </div>
                              </div>
                              <div class="form-item first">
                                   <label class="fl">联系人地址：</label>
                                   <ul id="select_data" class="fl">
                                        <li class="fl" v-for="item in addressDetailPupop" style="display: inline-block;">
                                             <div class="verification-el-input" style="display: inline-block;">
                                                  <select name="addressList" style="display: inline-block;">
                                                       <!--<select name="addressList" style="display: inline-block;" v-model="couponSelected" @change="getCouponSelected()">-->
                                                       <option value="">请选择</option>
                                                       <option :value="iitem.id" v-for="iitem in item">{{iitem.provinceName}}</option>
                                                  </select>
                                             </div>
                                        </li>
                                   </ul>
                              </div>
                              <div class="form-item">
                                   <label class="fl">详细地址：</label>
                                   <div class="verification-el-input fl">
                                        <input name="addressSupple" class="verification-input" v-model="pupopForm.addressSupple" type="text" placeholder="例：天堂小区1幢1单元233室" requir="true" msg="请填写联系人详细地址！">
                                   </div>
                              </div>
                         </div>
                         <div class="button">
                              <p class="cancle" @click="showPupop=false">取消</p>
                              <p class="submit" onclick="form_submit()">提交</p>
                         </div>
                    </div>
               </div>
               <!-- 弹框结束 -->
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
          sellerBG
     },
     data() {
          return {
               addressData: [],
               addressDetailPupop: [],
               showPupop: false,
               params: {
                    pageIndex: 1,
                    pageSize: 10,
               },
               pupopForm: {
                    name: "",//姓名
                    phone: "",//电话
                    addressList: [],//完整的地址编号列表
                    addressSupple: "",//详细地址
                    isDefault: "",//是否默认
                    zoneId: "",//当前层级
                    id: "",//当前地址id
                    selected: [], //
               },

          }
     },
     computed: {},
     created() {
          this.getTable();
          this.getAddress();
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
               ajax({
                    url: "member-api-impl/user/deliveryAddressList",
                    optionParams: this.params
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              this.addressData = response.data ? response.data : [];
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
          // 获取地址详情
          getAddressDetail(id) {
               ajax({
                    url: "member-api-impl/user/addressDetail",
                    optionParams: {
                         addressId: id
                    }
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              let data = response.data.list ? response.data.list : [];
                              // console.log("data==",response.data.list);
                              data = data.reverse();
                              // console.log("data==",data);
                              // pupopForm  selected
                              this.pupopForm.selected = data;
                              console.log("this.pupopForm.selected==", this.pupopForm.selected);
                              data.map(iitem => {
                                   this.getAddress(iitem.code);
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
          },
          // 修改地址
          updateAddress(item, type) {
               this.showPupop = true;
               this.pupopForm = item;
               // console.log("item==",item);
               // console.count();
               this.getAddressDetail(item.id);

          },
          getAddress(id, number) {
               ajax({
                    url: "member-api-impl/address/selByParentId",
                    optionParams: { parentId: id ? id : 0 }
               }).post()
                    .then(response => {
                         if (response.code === 200) {
                              // this.addressData = response.data ? response.data : [];
                              let data = response.data ? response.data : [];
                              // console.log("data===",data);
                              if (data.length) {
                                   this.addressDetailPupop.push(data);
                              }
                              console.log("this.addressDetailPupop==", this.addressDetailPupop);
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
          }
     },
     filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/myAddress.scss';
</style>
