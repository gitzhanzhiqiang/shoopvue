<template>
  <div>
    <!--主要内容-->
    <div class="content-centre body-center">
        <!--侧边导航-->
        <div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData' @goUrl="goUrl"></left-nav>
          </div>
        <!-- 右边内容 -->
        <div class="text-right fl">
            <!--title-->
            <div class="title">
                <p class="fl">移动端店铺广告图管理</p>
            </div>

            <!--订单分类导航-->
            <div class="head">
                <div class="addNew fl">
                    <span>添加</span>
                </div>
            </div>

            <div class="form-item expressage">
                <ul>
                    <li>
                        <table id="tb">
                            <tr>
                                <td colspan="2">
                                    <span>ID</span>
                                </td>
                                <td>
                                    <span>名称</span>
                                </td>
                                <td>
                                    <span>图片</span>
                                </td>
                                <td>
                                    <span>显示端口</span>
                                </td>
                                <td>
                                    <span>显示顺序</span>
                                </td>
                                <td>
                                    <span>操作</span>
                                </td>
                            </tr>
                            <!-- <tr class="oli" id="oli">
                                <td colspan="2">
                                    <span>1</span>
                                </td>
                                <td>
                                    <span>2</span>
                                </td>
                                <td class="imgTd">
                                    <span class="lookPic">查看图片</span>
                                    <div class="imgBox">
                                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574922320535&di=01ed56bccb2db3afa343989d6efeddab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F02%2F20190202162339_dWxuQ.jpeg"
                                            alt="">
                                    </div>
                                </td>
                                <td>
                                    <span>3</span>
                                </td>
                                <td>
                                    <span class="del">删除</span>
                                    <span class="add">编辑</span>
                                </td>
                            </tr> -->
                        </table>
                    </li>
                </ul>
            </div>

        </div>

        
        <!--弹窗-->
            <div class="alertForm leaveMsg">
                <div class="dog_alert"></div>
                <div class="text">
                    <h3>
                        <span>添加banner</span>
                        <img class="fr" src="~@/assets/imagesRecode/delete.png" alt="" onClick="CloseAlert()">
                    </h3>
                    <div class="form form-common-verification" id="form" rules="rules" label-width="120"
                        position-verification="">
                        <form id="ajaxForm" target="nm_iframe" enctype="multipart/form-data" action="" method="post">
                            <div class="input">
                                <div class="tab_div">
                                    <div class="oli">
                                        <div>
                                            <span>名称:</span>
                                            <input name="bannerName" type="text" placeholder="请填写">
                                        </div>
                                        <div>
                                            <span>显示端口:</span>
                                            <label style="margin-right: 30px;"><input style="width:15px;margin-right: 5px;" name="displayWay"
                                                    type="radio" value="1" checked />移动端</label>
                                            <label style="margin-right: 30px;"><input style="width:15px;margin-right: 5px;" name="displayWay"
                                                    type="radio" value="2" />PC</label>
                                        </div>
                                        <div>
                                            <span>显示顺序:</span>
                                            <input name="sort" type="text" placeholder="请填写">
                                        </div>
                                        <input name="imageAdds" class="verification-input" type="text" value=""
                                            style="display: none;">
                                        <input name="detailImageAdds" class="verification-input" type="text" value=""
                                            style="display: none;">
                                        <div class="form-item photo one">
                                            <label class="fl">添加图片:</label>
                                            <div class="verification-el-input fl">
                                                <img src="" alt="" class="ddd">
                                                <input name="picFile" class="verification-input" type="file"
                                                    accept="image/*" requir="true" msg="不能为空！">
                                                <div class='isShow'>
                                                    <div class="background"></div>
                                                    <div class="deltree"></div>
                                                    <div class="deltree_text">
                                                        删除
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn">
                                        <button onClick="submitLeaveMessage()" type="Button">确定</button>
                                        <button onClick="CloseAlert()" type="Button">取消</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
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
          munuType:0,
          iindex:8,
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
@import './scss/advertisementManage.scss';
</style>
