<template>
  <div>
      <div class="app_chat">
          <div class="main">
               <div class="jimi">
                    <!-- 左边区域 -->
                    <div class="left-pane" style="display: none">
                         <div class="jimi-left">
                              <!-- 头像包括搜索框 -->
                              <div class="jimi-left-header">
                                   <img src="common/images/head.jpg" alt="head" />
                                   <span>郑方形</span>
                                   <!--<div class="inputSearch">
                                        <img src="common/images/search.png" alt="search">
                                        <input type="text" value="搜索最近联系人">
                                   </div>-->
                              </div>

                              <!-- 联系人 -->
                              <div class="jimi-left-content">
                                   <!--<div class="perMessage">
                                        <img src="common/images/head.jpg" alt="h" class="sheet2">
                                        <span class="name fontCommon">官方客服</span>
                                   </div>-->
                              </div>
                         </div>
                    </div>

                    <!-- 右 -->
                    <div class="right-pane">
                         <!-- 聊天部分头部 -->
                         <div class="head">
                              <img class="title" src="common/images/star.png" alt="head">
                              <span class="names">解忧杂货铺</span>
                              <div class="operation">
                                   <span type="1"><img src="common/images/dele.png" alt=""></span>
                                   <!--<span type="2"><img src="common/images/small.png" alt=""></span>-->
                              </div>
                         </div>

                         <div class="body">
                              <div class="body_left">
                                   <!-- 聊天内容部分 -->
                                   <div class="chatBox">
                                        <div class="chattingRecords"><span id='gengduo'>更多聊天记录</span></div>
                                        <!--<div class="personA">
                                             <div class="personNameA fontCommon">官方弟弟</div>
                                             <div class="personContent">
                                                  <img src="common/images/head.jpg" alt="">
                                                  <span class="triangle"></span>
                                                  <span class="talkContent fontCommon">您好，有什么可以帮您？</span>
                                             </div>
                                        </div>
                                        <div class="personA">
                                             <div class="personNameA fontCommon">官方弟弟</div>
                                             <div class="personContent">
                                                  <img src="common/images/head.jpg" alt="">
                                                  <span class="talkContent fontCommon">666666666666666666</span>
                                                  <span class="triangle"></span>
                                             </div>
                                        </div>
                                        <div class="personA">
                                             <div class="personNameA fontCommon">哈哈</div>
                                             <div class="personContent">
                                                  <img src="common/images/head.jpg">
                                                  <span class="triangle"></span>
                                                  <span class="talkContent fontCommon">
                                                      <img src="common/images/head.jpg">
                                                  </span>
                                             </div>
                                        </div>-->
                                        <!--<div class="personB">
                                             <div class="personNameB fontCommon">郑方形</div>
                                             <div class="clearFloat"></div>
                                             <div class="personContentB">
                                                  <img src="common/images/head.jpg" alt="">
                                                  <span class="talkContentB fontCommon">你好</span>
                                                  <span class="triangleB"></span>
                                             </div>
                                             <div class="clearFloat"></div>
                                        </div>

                                        <div class="personB">
                                             <div class="personNameB fontCommon">郑方形</div>
                                             <div class="clearFloat"></div>
                                             <div class="personContentB">
                                                  <img src="common/images/head.jpg" alt="">
                                                  <span class="talkContentB fontCommon">ss</span>
                                                  <span class="triangleB"></span>
                                             </div>
                                             <div class="clearFloat"></div>
                                        </div>

                                        <div class="personB">
                                             <div class="personNameB fontCommon">郑方形</div>
                                             <div class="clearFloat"></div>
                                             <div class="personContentB">
                                                  <img src="common/images/head.jpg" alt="">
                                                  <span class="talkContentB fontCommon">ss</span>
                                                  <span class="triangleB"></span>
                                             </div>
                                             <div class="clearFloat"></div>
                                        </div>-->
                                   </div>

                                   <!-- 聊天输入窗口 -->
                                   <div class="inputBox">
                                        <div class="inputBox_top">
                                             <img src="common/images/simile.png" alt="bq">
                                             <img src="common/images/picture.png" alt="tp">
                                             <form class="ajaxForm" target="nm_iframe" enctype="multipart/form-data" action="" style="display: inline-block;" method="post">
                                                  <input name="bussinessPic" accept="image/*" type="file" class="upload" />
                                                  <input type="text" name="sid" style="display: none;">
                                             </form>
                                             <button class="fr" id="sendProduct">发送商品链接</button>
                                             <!--<img src="/images/heart.png" alt="ax">-->
                                        </div>
                                        <!-- 输入区域 -->
                                        <pre contenteditable="true" class="textarea" id="cc"></pre>

                                        <!-- 发送按钮 -->
                                        <div class="inputBox_bottom">
                                             <span class="btn2" id="dd">发送</span>
                                        </div>
                                        <!-- 表情 -->
                                        <div class="emojstext" id="emoj">
                                             <span style="color:#F0ED96">🙉</span>
                                             <span style="color:rgb(240,237,155);">👶</span>
                                             <span style="color:rgb(240,237,160);">👨</span>
                                             <span style="color:rgb(240,237,165);">👵</span>
                                             <span style="color:rgb(240,237,170);">🙀</span>
                                             <span style="color:rgb(240,237,175);">🙊</span>
                                             <span style="color:rgb(240,237,180);">👦</span>
                                             <span style="color:rgb(240,237,185);">👩</span>
                                             <span style="color:rgb(240,237,190);">😄</span>
                                             <span style="color:rgb(240,237,195);">😃</span>
                                             <span style="color:rgb(240,237,200);">😀</span>
                                             <span style="color:rgb(240,237,215);">😉</span>
                                             <span style="color:rgb(240,237,220);">😚</span>
                                             <span style="color:rgb(240,237,225);">😗</span>
                                             <span style="color:rgb(240,237,230);">😙</span>
                                             <span style="color:rgb(240,237,235);">😜</span>
                                             <span style="color:rgb(240,237,240);">😝</span>
                                             <span style="color:rgb(240,237,245);">😛</span>
                                             <span style="color:rgb(240,237,250);">😁</span>
                                             <span style="color:rgb(240,237,255);">😔</span>
                                             <span style="color:rgb(240,231,255);">😌</span>
                                             <span style="color:rgb(240,231,250);">😒</span>
                                             <span style="color:rgb(240,231,245);">😞</span>
                                             <span style="color:rgb(240,231,240);">😣</span>
                                             <span style="color:rgb(240,231,235);">😢</span>
                                             <span style="color:rgb(240,231,230);">😂</span>
                                             <span style="color:rgb(240,231,225);">😭</span>
                                             <span style="color:rgb(240,231,220);">😪</span>
                                             <span style="color:rgb(240,231,215);">😥</span>
                                             <span style="color:rgb(240,231,210);">😰</span>
                                             <span style="color:rgb(240,231,205);">😅</span>
                                             <span style="color:rgb(240,231,200);">😩</span>
                                             <span style="color:rgb(240,231,195);">😫</span>
                                             <span style="color:rgb(240,231,190);">😨</span>
                                             <span style="color:rgb(240,231,185);">😱</span>
                                             <span style="color:rgb(240,231,180);">😠</span>
                                             <span style="color:rgb(240,231,175);">😤</span>
                                             <span style="color:rgb(240,231,170);">😖</span>
                                             <span style="color:rgb(240,231,165);">😆</span>
                                             <span style="color:rgb(240,231,160);">😋</span>
                                             <span style="color:rgb(240,231,155);">😷</span>
                                             <span style="color:rgb(240,231,150);">😎</span>
                                             <span style="color:rgb(240,231,145);">😴</span>
                                             <span style="color:rgb(240,231,140);">😵</span>
                                             <span style="color:rgb(240,231,135);">😟</span>
                                             <span style="color:rgb(240,231,130);">😦</span>
                                             <span style="color:rgb(240,231,125);">😧</span>
                                             <span style="color:rgb(240,231,120);">😈</span>
                                             <span style="color:rgb(240,231,115);">👿</span>
                                             <span style="color:rgb(240,231,110);">😮</span>
                                             <span style="color:rgb(240,231,105);">😬</span>
                                             <span style="color:rgb(240,231,100);">😐</span>
                                             <span style="color:rgb(240,231,95);">😕</span>
                                             <span style="color:rgb(240,231,90);">😯</span>
                                             <span style="color:rgb(240,231,85);">😶</span>
                                             <span style="color:rgb(240,231,80);">😇</span>
                                             <span style="color:rgb(240,231,75);">😏</span>
                                             <span style="color:rgb(240,231,70);">😑</span>
                                             <span style="color:rgb(240,231,65);">👲</span>
                                             <span style="color:rgb(240,231,60);">👳</span>
                                             <span style="color:rgb(240,231,55);">👮</span>
                                             <span style="color:rgb(240,231,50);">👷</span>
                                             <span style="color:rgb(240,231,45);">💂</span>
                                             <span style="color:rgb(240,231,40);">👶</span>
                                             <span style="color:rgb(240,231,35);">👦</span>
                                             <span style="color:rgb(240,231,30);">👧</span>
                                             <span style="color:rgb(240,231,25);">👨</span>
                                             <span style="color:rgb(240,231,20);">👩</span>
                                             <span style="color:rgb(240,231,15);">👴</span>
                                             <span style="color:rgb(240,231,10);">👵</span>
                                             <span style="color:rgb(240,231,5);">👱</span>
                                             <span style="color:rgb(240,231,0);">👼</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
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
import baseURL from "@/assets/js/ajax/baseURL";
import { validate } from "@/assets/js/validation";
export default {
  components: {
    top,
    bottom,
    
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
@import '@/assets/scss/chitchat.scss';
</style>