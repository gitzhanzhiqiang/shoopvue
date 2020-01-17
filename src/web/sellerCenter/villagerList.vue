<template>
  <div>

      <!--主要内容-->
      <div class="content-centre body-center">
            <!--侧边导航-->
            <div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData' @goUrl="goUrl"></left-nav>
          </div>
            <!--右边内容 -->
            <div class="text-right fr">
                <div class="title">
                      <p>村民名录</p>
                </div>
                <div class="text">
                      <ul class="nav" id="nav">
                          <li class="fl tab" status="3"><span class="hover">全部</span></li>
                          <li class="fl tab" status="0">
                                <span>申请列表</span>
                                <!--<span>6</span>-->
                          </li>
                          <li class="fl" style="display: none;">
                                <span>模板</span><span>12</span>
                          </li>
                          <li class="fl">
                                <button onClick="downLoad()">下载模板</button>
                          </li>
                          <li class="fl upLoad">
                                <form id="ajaxForm" target="nm_iframe" enctype="multipart/form-data" action="" method="post">
                                    <div class="fl">
                                          <button>导入分配列表</button>
                                          <input id="file" type="file" name="file" accept=".xlsx">
                                    </div>
                                    <!--<i class="fl">//列表文件路径</i>-->
                                </form>
                          </li>
                      </ul>
                      <!--tab头-->
                      <ul class="table-header">
                          <li class="fl">姓名<span></span></li>
                          <li class="fl">手机号<span></span></li>
                          <li class="fl">身份证号<span></span></li>
                          <li class="fl">历史分配总额<span></span></li>
                          <li class="fl">操作</li>
                      </ul>
                      <!--list-->
                      <div id="list">
                          <ul class="list">
                                <!--<li>
                          <dl>
                                <dt class="fl">张宏<span></span></dt>
                                <dt class="fl">17894561578<span></span></dt>
                                <dt class="fl">321461198309030017<span></span></dt>
                                <dt class="fl">￥170683.13<span></span></dt>
                                <dt class="fl">删除</dt>
                          </dl>
                      </li>
                      <li>
                          <dl>
                                <dt class="fl">张宏<span></span></dt>
                                <dt class="fl">17894561578<span></span></dt>
                                <dt class="fl">321461198309030017<span></span></dt>
                                <dt class="fl">￥170683.13<span></span></dt>
                                <dt class="fl">
                                    <p>不同意</p>
                                    <button>同意</button>
                                </dt>
                          </dl>
                      </li>-->
                          </ul>
                      </div>
                      <!--翻页-->
                      <div class="zxf_pagediv"></div>
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
          munuType:0,
          iindex:0,
        }, 
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
@import './scss/sellercenter.scss';
/*//@import '@web/sellerCenter/scss/sellercenter.scss';*/
</style>