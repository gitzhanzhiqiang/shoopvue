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
                    <p>运费模板</p>
               </div>
               <div class="text">
                    <div class="add">
                         <a href="javasc:;" @click="$router.push('/sellerCenter/freightCompile?template=1')">新增模板</a>
                    </div>
                    <ul class="list">
                         <!--<li>
                              <table>
                                   <tr class="first">
                                        <td colspan="2">包邮模板</td>
                                        <td colspan="4">
                                             最后编辑时间：2018-04-19 23:30
                                             <span class="btn">复制模板</span>
                                             <span class="btn">修改</span>
                                             <span class="btn">删除</span>
                                        </td>
                                   </tr>
                                   <tr>
                                        <td width="20%">运费方式</td>
                                        <td width="20%">运送到</td>
                                        <td width="15%">首件（个）</td>
                                        <td width="15%">运费（元）</td>
                                        <td width="15%">续件（个）</td>
                                        <td>运费（元）</td>
                                   </tr>
                                   <tr>
                                        <td>43</td>
                                        <td>43</td>
                                        <td>43</td>
                                        <td>43</td>
                                        <td>43</td>
                                        <td>43</td>
                                   </tr>
                              </table>
                         </li>-->
                    </ul>
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
          iindex:3,
        }, 
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
@import './scss/sellercenter.scss';
/*//@import '@web/sellerCenter/scss/sellercenter.scss';*/
</style>