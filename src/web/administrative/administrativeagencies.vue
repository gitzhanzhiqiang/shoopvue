<template>
  <div>
     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <ul class="centre-left-nav fl">
               <li class="hover"><a href="javascript:;">政府/机构信息</a><span></span></li>
               <li><a href="javascript:;" @click="$router.push('/administrative/villagedata')">乡村数据</a></li>
          </ul>
          <!-- 右侧内容 -->
          <div class="text-right fr">
               <div class="title">
                    <p>政府/机构信息 > 认证信息</p>
               </div>
               <!--position-verification只有一个值 bottom-->
               <div class="form fr form-common-verification" id="form" rules="rules" label-width="" position-verification="">
                    <form id="ajaxForm" target="nm_iframe" enctype="multipart/form-data" action="" method="post">
                         <div class="form-item first">
                              <label class="fl">管辖区域：</label>
                              <ul id="select_data">
                                   <li class="fl">
                                        <div class="verification-el-input">
                                             <select name="addressList"   class="verification-input" requir="true" msg="请选择">
                                                  <option value="">请选择</option>
                                             </select>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                         <div class="form-item">
                              <label class="fl">地址:</label>
                              <div class="verification-el-input fl">
                                   <input name="address" class="verification-input" type="text" placeholder="联系人详细地址" requir="true" msg="请具体到街道门牌号！">
                              </div>
                         </div>
                         <div class="form-item">
                              <label class="fl">姓名:</label>
                              <div class="verification-el-input fl">
                                   <input name="phoneName" class="verification-input" type="text" placeholder="联系人姓名" requir="true" msg="联系人姓名不能为空！">
                              </div>
                         </div>
                         <div class="form-item">
                              <label class="fl">电话:</label>
                              <div class="verification-el-input fl">
                                   <input name="phone" class="verification-input" type="text" placeholder="联系人手机号" requir="true" msg="手机号码不能为空" props="phone">
                              </div>
                         </div>
                         <div class="form-item">
                              <label class="fl">邮箱:</label>
                              <div class="verification-el-input fl">
                                   <input name="mailbox" type="text" placeholder="联系人邮箱号">
                              </div>
                         </div>
                         <div class="form-item last">
                              <label class="fl">证照:</label>
                              <ul>

                                   <li class="fl">
                                        <div class="verification-el-input">
                                             <p>营业执照</p>
                                             <div class="img">
                                                  <img src="" alt="">
                                                  <input type="file" name="bussinessPic" id="aa" accept="image/*" class="verification-input" requir="true" msg="图片不能为空" style="display: block;">
                                             </div>
                                             <div class="isShow">
                                                  <div class="parent "></div>
                                                  <p class="top_background "></p>
                                                  <p class="p ">删除图片</p>
                                             </div>

                                        </div>
                                   </li>
                                   <li class="fl">
                                        <div class="verification-el-input">
                                             <p>身份证正面</p>
                                             <div class="img">
                                                  <img src="" alt="">
                                                  <input type="file" name="frontIdcardPic" accept="image/*" class="verification-input" requir="true" msg="图片不能为空">
                                             </div>
                                             <div class="isShow">
                                                  <div class="parent "></div>
                                                  <p class="top_background "></p>
                                                  <p class="p">删除图片</p>
                                             </div>
                                        </div>
                                   </li>
                                   <li class="fl">
                                        <div class="verification-el-input">
                                             <p>身份证反面</p>
                                             <div class="img">
                                                  <img src="" alt="">
                                                  <input type="file" name="backIdcardPic" accept="image/*" class="verification-input" requir="true" msg="图片不能为空">
                                             </div>
                                             <div class="isShow">
                                                  <div class="parent "></div>
                                                  <p class="top_background "></p>
                                                  <p class="p ">删除图片</p>
                                             </div>
                                        </div>
                                   </li>
                                   <!--<li class="fl">
                                        <div class="verification-el-input">
                                             <p>手持身份证照片</p>
                                             <div class="img">
                                                  <img src="" alt="">
                                                  <input type="file" name="handIdcardPic" accept="image/*" class="verification-input" requir="true" msg="图片不能为空">
                                             </div>
                                             <div class="isShow">
                                                  <div class="parent "></div>
                                                  <p class="top_background "></p>
                                                  <p class="p ">删除图片</p>
                                             </div>
                                        </div>
                                   </li>
                                   <li class="fl">
                                        <div class="verification-el-input">
                                             <p>银行卡</p>
                                             <div class="img">
                                                  <img src="" alt="">
                                                  <input type="file" name="frontBankcardPic" accept="image/*" class="verification-input" requir="true" msg="图片不能为空">
                                             </div>
                                             <div class="isShow">
                                                  <div class="parent "></div>
                                                  <p class="top_background "></p>
                                                  <p class="p">删除图片</p>
                                             </div>
                                        </div>
                                   </li>-->
                              </ul>
                         </div>
                    </form>
                    <div class="button">
                         <button class="fr" onclick="form_submit('#form')">确认</button>
                    </div>
               </div>
          </div>
          <!-- <div class="title_ti"> -->
          <!-- <p class="title_ti_p">帮扶信息</p> -->
          <!--<span class="title_ti_span">添加</span>-->
          <!-- <i class="title_ti_i"></i> -->
          <!-- </div> -->
          <div class="text_le">
               <div class="left_text">
                    <ul class="text_ul">
                         <li class="fl"><span>帮扶村数量</span>
                              <p></p>
                         </li>
                         <li class="fl"><span>非经营性收入总额</span>
                              <p></p>
                         </li>
                         <li class="fl"><span>完成进度</span>
                              <p></p>
                         </li>
                         <li class="fl"><span>目标剩余额度</span>
                              <p></p>
                         </li>
                    </ul>
               </div>
               <div class="data-right">
                    <div class="data-echarts">
                         <div class="echats progress" id="progress" style="width:450px;height:270px"></div>
                    </div>
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
export default {
  components: {
  },
  data() {
	return{
        
     } 
  },
  computed: {},
  created() {
    
  },
  mounted() {},
  methods: {
      
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import './scss/administrativeagencies.scss';
</style>