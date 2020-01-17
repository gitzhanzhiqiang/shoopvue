<template>
  <div>

    <!--主要内容-->
    <div class="content-centre body-center">
        <!--侧边导航-->
        <div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData' @goUrl="goUrl"></left-nav>
          </div>
        <!-- 右边内容 -->
        <div class="text-right fr">
            <div class="title">
                <p>公告管理</p>
            </div>
            <div class="text">
                <div class="form form-common-verification" id="form" rules="rules" label-width="120"
                    position-verification="">
                    <!-- <form id="ajaxForm" target="nm_iframe" enctype="multipart/form-data" action="" method="post"> -->
                        <!--list-->
                        <ul class="list" id="list">
                            <li>
                                <!-- 公告标题 -->
                                <div class="form-item">
                                    <label class="fl">公告标题</label>
                                    <div class="verification-el-input">
                                        <input name="title" class="verification-input" type="text" placeholder="请填写标题"
                                            requir="true" msg="请填写标题">
                                    </div>
                                </div>
                                <!-- 富文本 -->
                                <div class="form-item inputFont">
                                    <label class="fl">商品说明</label>
                                    <div class="verification-el-input">
                                        <textarea id="text1" style="display: none;" class="verification-input fl"
                                            name="mainBody"   cols="55" rows="4" maxlength="200"
                                            onkeydown="inputMaxLength(this, 200)" requir="true" msg="请填写内容"
                                            placeholder="请填写内容"></textarea>
                                    </div>
                                    <div class="fl" style="width:800px;overflow: hidden;">
                                        <div id="editor"></div>
                                    </div>
                                </div>
                                <!-- 是否显示 -->
                                <div class="form-item exchange">
                                    <label class="fl">是否显示</label>
                                    <div class="verification-el-input">
                                        <span>显示</span><i class="active" status="1"></i>
                                        <span>隐藏</span><i status="2"></i>
                                        <input value="1" name="status" type="text" style="display: none;">
                                        <span class="verification-relus">请选择</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    <!-- </form> -->
                </div>

                <div class="end-btn">
                    <button class="fr" onClick="submitForm()">确认修改</button>
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
          iindex:8,
        }, 
     } 
  },
  computed: {},
  created() {
    
  },
  mounted() {},
  methods: {
      goUrl(){}
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import '@web/sellerCenter/scss/addProducts.scss';
</style>
