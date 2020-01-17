<template>
  <div>
      <!--公共头部-->
        <div id="header-top" class="header-top">
            <top-BG></top-BG>
			      <top-Box @goUrlBox="goUrlBox"></top-Box>
        </div>
        <!--中心的头部搜索-->
        <div id="s-header" class="s-header my">
            <seller-BG></seller-BG>
        </div>

     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <ul class="text-left-nav fl">
                <li><a href="javascript:;">我的爱心购</a></li>
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/myOrder')">我的订单</a></li>
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/myCart')">我的购物车</a></li>
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/myCollecting')">我的收藏</a></li>
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/mylooked')">我的浏览</a></li>
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/myProfile')">我的资料</a></li>
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/myAccount')">我的账户</a></li>
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/myAddress')">我的地址</a></li>
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/myEvaluation')">我的评价</a></li>
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/myGrade')">我的积分</a></li>
                <!-- <li><a href="javascript:;">我的卡券</a></li> -->
                <li><a href="javascript:;" @click="goUrl('/buyerPersonCenter/myMessage')">我的消息</a></li>
                <li class="hover"><a href="javascript:;">安全中心</a></li>
            </ul>
          <!-- 右侧内容 -->
          <div class="text-right fr">
               <!--位置导航-->
               <div class="crumb">
                    <p>安全中心</p>
               </div>
               <!--列表-->
               <ul class="list">
                    <li>
                         <span>手机号码： </span>
                         <span>{{userInfoViewData.userPhone|phoneFilter}} </span>
                         <span class="edit-phone">修改</span>
                    </li>
                    <li style="display: none;">
                         <span>交易密码： </span>
                         <span>已设置 </span>
                         <span class="edit-password">修改</span>
                         <!--<span>未设置 </span>
                         <span class="create-password">设置</span>-->
                    </li>
                    <li>
                         <span>绑定银行卡： </span>
                         <span></span>
                         <span class="bind" @click="bindBank()">绑定</span>
                    </li>
                    <div class="bindBankList">
                      <li v-for="item in userInfoViewData.backInfoList" v-if="userInfoViewData.backInfoList.length">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;银行卡：</span>
                        <span>{{item.bankName}}({{item.bankCard|bankCardHide}})</span><span class="unbind" id="1" @click="bindBank(1)">解绑</span>
                      </li>
                    </div>
               </ul>
          </div>
          <!-- 弹框-修改手机号码-->
          <div class="alertForm" id="alertForm-phone" v-if="updatePhoneShow">
               <div class="dog_alert"></div>
               <div class="text">
                    <div class="title">修改手机号<img src="image/delete.png" alt="" @click="updatePhoneShow=!updatePhoneShow"></div>
                    <div class="box">
                         <div class="form-item">
                              <label class="fl">新手机号：</label>
                              <div class="verification-el-input fl">
                                   <input name="newPhone" class="verification-input" type="text" placeholder="请输入手机号" requir="true" msg="请输入手机号!">
                              </div>
                         </div>
                         <div class="form-item captcha-input">
                              <label class="fl">图形验证码：</label>
                              <div class="verification-el-input fl">
                                   <input name="captcha" class="verification-input" type="text" placeholder="请输入图形验证码" requir="true" msg="请输入图形验证码！">
                              </div>
                              <span class="captcha">
                            <img onclick="getCode()" src="" alt="">
                        </span>
                         </div>
                         <div class="form-item captcha-input">
                              <label class="fl">手机验证码：</label>
                              <div class="verification-el-input fl">
                                   <input name="phoneCaptcha" class="verification-input" type="text" placeholder="请输入短信验证码" requir="true" msg="请输入短信验证码！">
                              </div>
                              <span class="get-captcha fl" @click="getIphoneCode(1)">获取</span>
                              <p class="time fl">还剩 <span>0</span></p>
                         </div>
                    </div>
                    <div class="button">
                         <p class="cancle" @click="updatePhoneShow=!updatePhoneShow">取消</p>
                         <p class="submit" onclick="subIphone()">提交</p>
                    </div>
               </div>
          </div>
          <!-- 弹框-设置交易密码-->
          <div class="alertForm" id="alertForm-create-password" v-if="setpwdShow">
               <div class="dog_alert"></div>
               <div class="text">
                    <div class="title">设置交易密码<img src="image/delete.png" alt=""  @click="setpwdShow=!setpwdShow"></div>
                    <div class="box">
                         <div class="form-item">
                              <label class="fl">交易密码：</label>
                              <div class="verification-el-input fl">
                                   <input name="password" class="verification-input" type="text" placeholder="由六位数字组成" requir="true" msg="请输入交易密码!">
                              </div>
                         </div>
                         <div class="form-item">
                              <label class="fl">确认密码：</label>
                              <div class="verification-el-input fl">
                                   <input name="password" class="verification-input" type="text" placeholder="请再次输入设置的交易密码" requir="true" msg="请再次输入设置的交易密码!">
                              </div>
                         </div>
                    </div>
                    <div class="button">
                         <p class="cancle"  @click="setpwdShow=!setpwdShow">取消</p>
                         <p class="submit">提交</p>
                    </div>
               </div>
          </div>
          <!-- 弹框-修改交易密码-->
          <div class="alertForm" id="alertForm-edit-password" v-if="updatepwdShow">
               <div class="dog_alert"></div>
               <div class="text">
                    <div class="title">修改交易密码<img src="image/delete.png" alt=""   @click="updatepwdShow=!updatepwdShow"></div>
                    <div class="box">
                         <div class="form-item">
                              <label class="fl">旧交易密码：</label>
                              <div class="verification-el-input fl">
                                   <input name="password" class="verification-input" type="text" placeholder="由六位数字组成" requir="true" msg="请输入旧交易密码!">
                              </div>
                         </div>
                         <div class="form-item">
                              <label class="fl">新交易密码：</label>
                              <div class="verification-el-input fl">
                                   <input name="password" class="verification-input" type="text" placeholder="由六位数字组成" requir="true" msg="请输入新交易密码!">
                              </div>
                         </div>
                         <div class="form-item">
                              <label class="fl">确认密码：</label>
                              <div class="verification-el-input fl">
                                   <input name="password" class="verification-input" type="text" placeholder="请再次输入设置的交易密码" requir="true" msg="请再次输入设置的交易密码!">
                              </div>
                         </div>
                    </div>
                    <div class="button">
                         <p class="cancle" @click="updatepwdShow=!updatepwdShow">取消</p>
                         <p class="submit">提交</p>
                    </div>
               </div>
          </div>
          <!-- 弹框-绑定银行卡-->
          <div class="alertForm" id="alertForm-bind" v-if="updateBankShow">
               <div class="dog_alert"></div>
               <div class="text">
                    <div class="title">
                         <span>{{popupTitle}}></span><img src="~@/assets/imagesRecode/delete.png" alt="" @click="updateBankShow=!updateBankShow">
                    </div>
                    <div class="box">
                        <div v-if="popupTitle!='解绑银行卡'">
                          <div class="form-item bankBind">
                                <label class="fl">持卡人姓名：</label>
                                <div class="verification-el-input fl">
                                    <input name="name" v-model="popupForm.name" class="verification-input" type="text" placeholder="请填写银行卡持有人姓名" requir="true" msg="请填写银行卡持有人姓名!">
                                </div>
                          </div>
                          <div class="form-item bankBind">
                                <label class="fl">证件号：</label>
                                <div class="verification-el-input fl">
                                    <input name="idCard" v-model="popupForm.idCard" class="verification-input" type="text" placeholder="请输入身份证号" requir="true" msg="请输入身份证号!">
                                </div>
                          </div>
                          <div class="form-item bankBind">
                                <label class="fl">银行卡号：</label>
                                <div class="verification-el-input fl">
                                    <input name="bankCard" v-model="popupForm.bankCard" class="verification-input" type="text" placeholder="由十九位数字组成" requir="true" msg="请输入银行卡号!">
                                </div>
                          </div>
                        </div>
                          <div class="form-item">
                                <label class="fl">预留手机号：</label>
                                <div class="verification-el-input fl">
                                    <input name="phone" v-model="popupForm.phone" class="verification-input" type="text" placeholder="请输入银行预留手机号" requir="true" msg="请输入银行预留手机号!">
                                </div>
                          </div>
                         <div class="form-item captcha-input">
                              <label class="fl">手机验证码：</label>
                              <div class="verification-el-input fl">
                                   <input name="phoneCaptcha" v-model="popupForm.phoneCaptcha" class="verification-input" type="text" placeholder="请输入短信验证码" requir="true" msg="请输入短信验证码！">
                              </div>
                              <span class="get-captcha fl" v-show="!showTime" @click="getIphoneCode(0)">获取</span>
                              <p class="time fl" v-show="showTime">还剩 <span>{{timeCount}}</span></p>
                         </div>
                    </div>
                    <div class="button">
                         <p class="cancle" @click="updateBankShow=!updateBankShow">取消</p>
                         <p class="submit" @click="subBank()">提交</p>
                    </div>
               </div>
          </div>
     </div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import top from "@/components/top.vue";
import bottom from "@/components/footer.vue";
import sellerBG from "@/components/sellerBG.vue";
import topBG from "@/components/topBG.vue";
import topBox from "@/components/topBox.vue";
import baseURL from "@/assets/js/ajax/baseURL";
import { validate } from "@/assets/js/validation";
import Cookies from "js-cookie";
export default {
  components: {
    top,
    bottom,
    topBG,
    topBox,
    sellerBG,
  },
  data() {
	return{
       userInfoViewData:{
         backInfoList:[],
       },  
       updateBankShow:false,//是否显示解绑银行卡
       updatePhoneShow:false,//更新手机号码
       updatepwdShow:false,//修改交易密码
       setpwdShow:false,//设置交易密码
      //  绑定银行卡
        popupTitle:'绑定银行卡',
        popupForm:{
          name:"",//持卡姓名
          idCard:"",//证件号码
          bankCard:"",//银行卡
          phone:"",//手机号码
          phoneCaptcha:"",//验证码
          mobileSerial:"",//标识 帮绑定银行卡需要
        },
        showTime:false,//绑定银行卡倒计时
        timeCount:10,
     } 
  },
  computed: {},
  created() {
    this.getUserInfoView();
  },
  mounted() {},
  methods: {
    goUrl(path){
        let pathTmp= this.$route.path;
        if(pathTmp!=path){
          this.$router.push(path);
        }
    },  
    goUrlBox(){},
    // 获取数据
    getUserInfoView() {
      ajax({
        url: "member-api-impl/userInfo/getUserInfoView",
        optionParams: {}
      }).post()
        .then(response => {
          if (response.code === 200) {
            this.userInfoViewData = response.data ? response.data : {};
            this.userInfoViewData.backInfoList=[
                {"id":1,"bankName":"工商银行","bankLogo":"https://img.ixgoo.cn/shopbanklogo/logo-icbc.jpeg","bankCard":"6212261202033913709"}
            ]
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
    // 绑定银行卡 type 1 解绑 0 绑定
    bindBank(type){
      this.updateBankShow = !this.updateBankShow;
      if(!type){
        this.popupTitle = "绑定银行卡";
      }else{
        this.popupTitle = "解绑银行卡";
      }
    },
    // 银行卡信息提交
    subBank(){
      let url = 'member-api-impl/collectionAgreement/addOpenSAccount',
          obj = {
              bankAccount: this.popupForm.name,
              idNumber: this.popupForm.idCard,
              bankCard: this.popupForm.bankCard,
              phone: this.popupForm.phone,
              authCode: this.popupForm.phoneCaptcha,
              mobileSerial: this.popupForm.mobileSerial,
          };
      if(this.popupTitle='解绑银行卡'){
        url = 'member-api-impl/collectionAgreement/delOpenSAccount';
         obj = {
           id:this.popupForm.id,
           authCode:this.popupForm.authCode,
           mobileSerial: this.popupForm.mobileSerial,
         };
      }

      ajax({
        url: url,
        optionParams: obj
      }).post()
        .then(response => {
          if (response.code === 200) {
            console.log("response==",response);

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
    // 获取验证码 type 0 绑定银行卡 1 修改绑定手机号码
  getIphoneCode(type) {
    // this.timeCount=6;
    this.showTime = !this.showTime;
    this.countDown();
    let phone=this.popupForm.phone;

    if(!phone){
      // validate.phoneFormat=
      this.$message({
        message: "手机号码不能为空",
        type: "warning"
      });
      return;
    }else{
      let phoneFormat= validate.phoneFormat(phone);
      if(!phoneFormat){
        this.$message({
        message: "手机号码格式不正确",
        type: "warning"
      });
      return;
      }
    }

    if(!this.popupForm.phoneCaptcha){
      // validate.phoneFormat=
      this.$message({
        message: "请重新获取验证码",
        type: "warning"
      });
      return;
    }
    //  mobileSerial = '';
     let obj = {};
     let url = 'member-api-impl/longin/getcode';
     if(type){
       url = 'member-api-impl/collectionAgreement/sendMessage';

     }else{
      //  绑定银行卡
       if(this.popupTitle == "绑定银行卡"){

       }else{

       }
     }
     
     ajax({
        url: url,
        optionParams: obj
      }).post()
        .then(response => {
          if (response.code === 200) {
            console.log("response==",response);

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



     // 获取修改手机号的
    //  if (type) {
    //       if (!$('#alertForm-phone input[name="newPhone"]').val()) {
    //            setMessage({
    //                 type: 'warning',
    //                 msg: '手机号码不能为空'
    //            })
    //            return false;
    //       }
    //       if (!validate.validatPhone($('#alertForm-phone input[name="newPhone"]').val())) {
    //            setMessage({
    //                 type: 'warning',
    //                 msg: '手机号码格式不正确'
    //            })
    //            return false;
    //       }
    //       if (!$('#alertForm-phone input[name="captcha"]').val()) {
    //            setMessage({
    //                 type: 'warning',
    //                 msg: '图形验证码不能为空'
    //            })
    //            return false;
    //       }
    //       obj = {
    //            phone: $('#alertForm-phone input[name="newPhone"]').val(),
    //            imageCode: $('#alertForm-phone input[name="captcha"]').val(),
    //            margCode: code,
    //            codeType: 2
    //       }
    //  }
    //  else {
    //       // 获取银行卡的
    //       if (!$(id + ' input[name="phone"]').val()) {
    //            setMessage({
    //                 type: 'warning',
    //                 msg: '手机号码不能为空'
    //            })
    //            return false;
    //       }
    //       if (!validate.validatPhone($(id + ' input[name="phone"]').val())) {
    //            setMessage({
    //                 type: 'warning',
    //                 msg: '手机号码格式不正确'
    //            })
    //            return false;
    //       }
    //       if ($(id).find('.text span').html() == '绑定银行卡') {
    //            obj = {
    //                 type: 4,
    //                 phone: $(id + ' input[name="phone"]').val(),
    //            }
    //       } else {
    //            obj = {
    //                 type: 5,
    //                 phone: $(id + ' input[name="phone"]').val(),
    //                 id: $('#alertForm-bind .title span').attr('id')
    //            }
    //       }
    //       url = 'member-api-impl/collectionAgreement/sendMessage';
    //  }
    //  ajax({
    //       url: url,
    //       methods: 'post',
    //       data: obj,
    //       success: function (response) {
    //            var data = response.data ? response.data : {};
    //            if (response.code == 200) {
    //                 setMessage({
    //                      type: 'success',
    //                      msg: '获取验证码成功'
    //                 })
    //                 $(id + ' .time span').html(60)
    //                 $(id + ' .get-captcha').css('display', 'none');
    //                 $(id + ' .time').css('display', 'block');
    //                 var time = setInterval(function () {
    //                      if ($(id + ' .time span').html() == 0) {
    //                           clearInterval('time');
    //                           $(id + ' .get-captcha').css('display', 'block');
    //                           $(id + ' .time').css('display', 'none');
    //                      }
    //                      $(id + ' .time span').html($(id + ' .time span').html() * 1 - 1)
    //                 }, 1000)
    //                 if (id == '#alertForm-bind') {
    //                      mobileSerial = data.mobileSerial; //标识 帮绑定银行卡需要
    //                 }
    //            } else {
    //                 setMessage({
    //                      type: 'warning',
    //                      msg: response.msg
    //                 })
    //            }

    //       },
    //       error: function (response) {
    //            console.log(response)
    //       }
    //  })
    },
    // 倒计时
    countDown() {
      this.timeCount--;
      if (this.timeCount) {
        this.timeID = setTimeout(this.countDown, 1000);
      } else {
        clearInterval(this.timeID);
        this.timeCount = 10;
        this.showTime = false;
      }
    },
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/securityCenter.scss';
</style>
