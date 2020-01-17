<template>
  <div id="footer" class="footer tester">
    <div class="footerTable">
      <table style="border-spacing:0px 10px;">
        <tr>
          <td>
              <div class="footLogo">
                <img src="~@/assets/imgNew/logo2.png" alt="" title="">
              </div>
          </td>
          <td>
            <div>合作伙伴</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="btn" @click="goUrl('/copyrightNotice')">版权说明</div>
          </td>
          <td rowspan='2' class="corporateName">
            <div>浙江大学区域经济开放与发展研究中心 | 浙江大学博士生报告团 | 浙江大学求是学社  | 新加坡国立大学 | 浙江理工大学 | 浙江工商大学 | 宁波大学 | 华商律师事务所 | 兰迪律师事务所 | Transnational Corporations Review</div>
          </td>
        </tr>
        <tr>
          <td class="btn" @click="goUrl('/aboutUs')">联系我们</td>
        </tr>
        <tr>
          <td class="btn" @click="goUrl('/aboutUs')">关于浙壹财经</td>
          <td>
            <div>
              <!--<div>浙ICP备18048695号-1&copy; 黑尘科技（杭州）有限公司</div>-->
              Copyright@2018版权所有 浙ipc备xxxxxx号 版权所有 浙ipc备xxxxxx号
            </div>
          </td>
        </tr>
        <!--<tr>
          <td rowspan='2'> 
            <div><img src="~@/assets/imgNew/Bitmap3.png" alt=""></div>
          </td>
          <td> <div>微信公众号</div></td>
        </tr>-->
       </table>
       <div class="rightImg">
         <img src="~@/assets/imgNew/Bitmap3.png" alt="">
         <div class="rightImgText">微信公众号</div>
       </div>
    </div>
    <!--<img src="~@/assets/imgNew/logo.png" alt="" title="">-->
    <!--<div class="footer-copyright">浙ICP备18048695号-1&copy; 黑尘科技（杭州）有限公司</div>-->
  </div>
</template>
<script>
export default {
  methods: {
    goUrl(path){
      let pathTmp = this.$route.path;
      if(pathTmp != path){
        this.$router.push(path)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commin.scss";
#footer {
  
  height:232px;
  background:rgba(59,59,59,1);
  background: #3B3B3B;
  color: #fff;
  
  font-size:12px;
  font-family:PingFang-SC-Regular,PingFang-SC;
  width: 100%;
  /*display: none;*/
}
 .footer .footerTable{
   padding: 35px 23.57%;
   /*display: table;*/
   text-align: left;
   vertical-align: middle;
   position: relative;
   color:rgba(196,196,196,1);
}
.footer .footerTable tr{
  /*margin-bottom: 10px;*/
}
.footer .footerTable tr td:first-child{
  padding-right: 61px;
}
.corporateName{
  width: 464px;
  text-align: left;
  line-height: 20px;
  font-family:PingFang-SC-Regular,PingFang-SC;
  font-weight:400;
  /*color:rgba(255,255,255,1);*/
  color:rgba(196,196,196,1);
}
.rightImg{
  /*position: relative;*/
  right: 23.57%;
  /*text-align: center;*/
  /*float: right;*/
  position: absolute;
  top: 35px;
  /*bottom: 0;*/
  display: inline-block;
  text-align: center;
}
.rightImg .rightImgText{
  margin-top: 12px;
}
.btn{
  cursor: pointer;
}
</style>
