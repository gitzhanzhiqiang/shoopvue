<template>
     <div>
          <div class="s-footer" id="s-footer">
            <div class="s-footer">
                <div class="help_center body-center">
                    <dl class="mod_dl">
                        <div class="mod_wrap">
                            <dt><i class="ifont"></i><span>用户指南</span></dt>
                            <dd><span><a href="javascript:;" @click="goUrl('/agreement/shoppingProcess')">购物流程</a></span><span><a href="javascript:;" @click="goUrl('/agreement/patternPayment')">支付方式 </a></span><span><a href="javascript:;" @click="goUrl('/agreement/faq')">常见问题</a></span></dd>
                        </div>
                    </dl>
                    <dl class="mod_dl">
                        <div class="mod_wrap">
                            <dt><i class="ifont"></i><span>售后服务</span></dt>
                            <dd><span><a href="javascript:;" @click="goUrl('/agreement/service')">售后服务政策 </a></span><span><a href="javascript:;" @click="goUrl('/agreement/liabilityExemption')">免责商品说明 </a></span><span><a href="javascript:;" @click="goUrl('/agreement/salesReturn')">退换货流程 </a></span></dd>
                        </div>
                    </dl>
                    <dl class="mod_dl">
                        <div class="mod_wrap">
                            <dt><i class="ifont"></i><span>商家服务</span></dt>
                            <dd><span><a href="javascript:;" @click="goUrl('/agreement/enter')">商家入驻流程</a></span><span><a href="javascript:;" @click="goUrl('/agreement/newBusinesses')">平台新商家需知</a></span><span><a href="javascript:;" @click="goUrl('/agreement/administrativeRules')">商户管理规则</a></span></dd>
                        </div>
                    </dl>
                    <dl class="mod_dl">
                        <div class="mod_wrap">
                            <dt><i class="ifont"></i><span>了解我们</span></dt>
                            <dd><span><a href="javascript:;" @click="goUrl('/agreement/platformIntroduction')">平台基本介绍</a></span><span><a href="javascript:;" @click="goUrl('/agreement/helpIntroduce')">平台帮扶创新介绍</a></span><span><a href="javascript:;" @click="goUrl('/agreement/supportProcess')">平台公益帮扶流程</a></span></dd>
                        </div>
                    </dl>
                    <div class="lianxi">
                        <p><img src="~@/assets/imagesRecode/footer/dianhua.png" alt="">服务热线：</p>
                        <h2 style="margin-bottom: 10px;">0571-88030278</h2>
                        <p><img src="~@/assets/imagesRecode/footer/dizhi.png" alt="">联系地址：</p>
                        <h3>浙江省杭州市下城区白石巷318号南楼2003室</h3>
                    </div>
                </div>
                <div class="site_footer">
                    <div class="body-center">
                        <div class="footer_hd">
                            <div class="inner">
                                <p><a href="http://www.beian.miit.gov.cn/">© 浙江中经发联盟控股有限公司 版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙ICP备18045337号-5</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>
<script>
import ajax from '@utils/config';
export default {
     components: {},
     data() {
          return {

          }
     },
     computed: {},
     created() {

     },
     mounted() { },
     methods: {
         //打开工信部网站
         openUrl() {
             window.open('http://www.miibeian.gov.cn/');
         },
         goUrl(path){
             let pathTmp= this.$route.path;
             if(pathTmp!=path){
                this.$router.push(path);
             }
         },
     },
     filters: {

     }
}
</script>
<style lang='scss' scoped>
@import '@/assets/scss/commin.scss';
.s-footer {
     position: relative;
     overflow: hidden;
     background: rgba(65, 65, 65, 1);
     clear: both;
}

.s-footer .help_center {
     overflow: hidden;
     padding-top: 40px;
     height: 165px;
}

.s-footer .help_center .mod_dl {
     float: left;
     width: 15%;
}

.s-footer .help_center .lianxi {
     float: right;
}

.s-footer .help_center .lianxi p {
     font-size: 14px;
     font-family: MicrosoftYaHeiLight;
     font-weight: bold;
     color: #fff;
     line-height: 30px;
}

.s-footer .help_center .lianxi p a {
     color: rgba(51, 51, 51, 1);
}

.s-footer .help_center .lianxi h2 {
     padding-left: 23px;
     font-size: 18px;
     font-family: MicrosoftYaHei-Bold;
     font-weight: bold;
     color: rgba(255, 255, 255, 1);
}

.s-footer .help_center .lianxi h3 {
     width: 180px;
     padding-left: 23px;
     font-size: 12px;
     font-family: MicrosoftYaHeiLight;
     font-weight: 300;
     color: rgba(255, 255, 255, 1);
     line-height: 16px;
}

.s-footer .help_center .lianxi p img {
     width: 14px;
     height: 12px;
     margin-right: 10px;
}

.s-footer .help_center .mod_wrap {
     padding: 0 12px;
}

.s-footer .help_center .mod_wrap dt {
     margin-bottom: 5px;
     overflow: hidden;
}

.s-footer .help_center .mod_wrap dt i {
     float: left;
     *display: inline;
     font-size: 32px;
     color: #999;
}

.s-footer .help_center .mod_wrap dt span {
     float: left;
     padding-top: 12px;
     color: #FFFFFF;
     font-weight: bold;
     font-size: 14px;
     font-family: PingFang-SC-Bold, PingFang-SC;
}

.s-footer .help_center .mod_wrap dd {
     letter-spacing: normal;
     word-spacing: normal;
     vertical-align: top;
     margin-right: 10px;
}

.s-footer .help_center .mod_wrap dd span {
     display: block;
}

.s-footer .help_center .mod_wrap dd a {
     margin-right: 5px;
     font-size: 12px;
     color: rgba(255, 255, 255, 1);
}

.s-footer .site_footer {
     background: #fff;
     height: 59px;
     padding-bottom: 9px;
     background: rgba(37, 37, 37, 1);
}

.s-footer .site_footer .footer_hd {
     padding-top: 7px;
}

.s-footer .site_footer .footer_hd .inner {
     padding-bottom: 8px;
     margin-bottom: 8px;
     line-height: 27px;
     overflow: hidden;
}

.s-footer .site_footer .footer_hd .inner p {
     line-height: 59px;
     text-align: center;
     font-size: 12px;
     font-family: MicrosoftYaHeiLight;
     font-weight: 300;
     color: rgba(179, 179, 179, 1);
}

.s-footer .site_footer .footer_hd .inner p a {
     color: rgba(179, 179, 179, 1);
}

.s-footer .site_footer .footer_bd {}

.s-footer .site_footer .footer_bd p {
     padding-bottom: 8px;
     overflow: hidden;
}
</style>