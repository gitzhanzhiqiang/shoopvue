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
                    <p>添加商品</p>
                    <p>编辑商品</p>
               </div>
               <div class="text">
                    <!--position-verification只有一个值 bottom-->
                    <div class="form form-common-verification" id="form" rules="rules" label-width="120" position-verification="">
                         <form id="ajaxForm" target="nm_iframe" enctype="multipart/form-data" action="" method="post">
                              <!--list-->
                              <ul class="list" id="list">
                                   <li>
                                        <p><label>新商品1</label></p>
                                        <div class="form-item">
                                             <label class="fl">商品名称</label>
                                             <div class="verification-el-input">
                                                  <input name="name" class="verification-input" type="text" placeholder="商品名称" requir="true" msg="名称不能为空！">
                                             </div>
                                        </div>
                                        <div class="form-item">
                                             <label class="fl">商品卖点</label>
                                             <div class="verification-el-input">
                                                  <input name="sellingExplains" class="verification-input" onkeydown="inputMaxLength(this, 50)" type="text" placeholder="商品卖点"
                                                       requir="" msg="商品卖点不能为空！">
                                             </div>
                                        </div>
                                        <input name="id" class="verification-input" value="" type="text" style="display: none;">
                                        <input name="rank" class="verification-input" type="text" value="1" style="display: none;">
                                        <div class="form-item first">
                                             <label class="fl">商品分类</label>
                                             <ul id="select_data">
                                                  <li class="fl">
                                                       <div class="verification-el-input">
                                                            <select name="type"   class="verification-input" requir="true" msg="请选择">
                                                                 <option value="">请选择</option>
                                                            </select>
                                                       </div>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div class="form-item first">
                                             <label class="fl">运费模板</label>
                                             <ul id="templatedownList">
                                                  <li class="fl">
                                                       <div class="verification-el-input">
                                                            <select name="carriageTemplateId"   class="verification-input" requir="true" msg="请选择">
                                                                 <option value="">请选择</option>
                                                            </select>
                                                       </div>
                                                  </li>
                                             </ul>
                                        </div>
                                        <input name="imageAdds" class="verification-input" type="text" value="" style="display: none;">
                                        <input name="detailImageAdds" class="verification-input" type="text" value="" style="display: none;">
                                        <div class="form-item photo one">
                                             <label class="fl">设置封面</label>
                                             <div class="verification-el-input fl">
                                                  <img src="" alt="">
                                                  <input name="imageAddress" class="verification-input" type="file" accept="image/*" requir="true" msg="不能为空！">
                                                  <div class='isShow'>
                                                       <div class="background"></div>
                                                       <div class="deltree"></div>
                                                       <div class="deltree_text">删除图片</div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="form-item photo  carousel">
                                             <label class="fl">轮播图</label>
                                             <div class="verification-el-input fl">
                                                  <img src="" alt="">
                                                  <input name="detailImageAddress" class="verification-input" type="file" accept="image/*" requir="true" msg="不能为空！">
                                                  <div class='isShow'>
                                                       <div class="background"></div>
                                                       <div class="deltree"></div>
                                                       <div class="deltree_text">删除图片</div>
                                                  </div>
                                             </div>
                                        </div>
                                        <!--<div class="form-item">
                                             <label class="fl">单价</label>
                                             <div class="verification-el-input">
                                                  <input name="price" class="verification-input" type="text" placeholder="￥ 00.00" requir="true" msg="单价不能为空">
                                             </div>
                                        </div>
                                        <div class="form-item">
                                             <label class="fl">折扣价</label>
                                             <div class="verification-el-input">
                                                  <input name="discounPrice" class="verification-input" type="text" placeholder="￥ 00.00">
                                             </div>
                                        </div>-->
                                        <!--<div class="form-item">
                                             <label class="fl">净含量</label>
                                             <div class="verification-el-input">
                                                  <input name="weight" class="verification-input" type="text" placeholder="0" requir="true" msg="净含量不能为空">
                                             </div>
                                        </div>
                                        <div class="form-item">
                                             <label class="fl">重量</label>
                                             <div class="verification-el-input">
                                                  <input name="quality" class="verification-input" type="text" placeholder="0" requir="true" msg="重量不能为空">
                                             </div>
                                        </div>-->
                                        <!--<div class="form-item">
                                             <label class="fl">库存数量</label>
                                             <div class="verification-el-input">
                                                  <input name="inventory" type="text" class="verification-input" placeholder="200" requir="true" msg="库存数量不能为空">
                                             </div>
                                        </div>-->
                                        <div class="form-item property">
                                             <label class="fl">商品属性</label>
                                             <input type="text" name="attributes" style="display: none;">
                                             <div class="verification-el-input fl">
                                                  <ul>
                                                       <!--<li>
                                                            <p>
                                                                 <span class="fl">属性名：</span>
                                                                 <input class="fl" type="text" placeholder="请输入">
                                                                 <img class="fl del" src="~@/assets/imagesRecode//del.png" alt="">
                                                            </p>
                                                            <p><span>内容：</span><input type="text" placeholder="请输入"></p>
                                                       </li>-->
                                                  </ul>
                                                  <div class="addproperty">
                                                       <div>添加属性</div><span>(最多可添加15个属性)</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="form-item inputFont">
                                             <label class="fl">商品说明</label>
                                             <div class="verification-el-input">
                                                  <textarea id="text1" style="display: none;" class="verification-input fl" name="explains"   cols="55" rows="4" maxlength="200"
                                                       onkeydown="inputMaxLength(this, 200)" requir="true" msg="商品说明不能为空" placeholder="填写商品说明"></textarea>
                                             </div>
                                             <div class="fl" style="width:800px;overflow: hidden;">
                                                  <div id="editor"></div>
                                             </div>
                                             <!--<div class="fl">
                                                  <textarea id="editor_id" name="content" style="width:700px;height:300px;"></textarea>
                                             </div>-->
                                        </div>
                                        <!--<div class="form-item inputFont">
                                             <label class="fl">发货地址</label>
                                             <div class="verification-el-input">
                                                  <textarea class="verification-input fl" name="startAddress"   cols="55" rows="4" maxlength="200" onkeydown="inputMaxLength(this, 200)"
                                                       requir="true" msg="发货地址不能为空" placeholder="填写发货地址"></textarea>
                                             </div>
                                        </div>-->
                                        <div class="form-item">
                                             <label class="fl">商品返点</label>
                                             <div class="verification-el-input">
                                                  <input name="totalPoint" class="verification-input" type="text" onkeyup="twoDecimalPlaces(this)" placeholder=" 商品返点" requir="true"
                                                       msg="商品返点不能为空">%
                                             </div>
                                        </div>
                                        <div class="form-item up">
                                             <label class="fl">是否上架</label>
                                             <div class="verification-el-input">
                                                  <!--1上架 2不上架-->
                                                  <span>否</span><i class="active" status="2"></i>
                                                  <span>是</span><i status="1"></i>
                                                  <span class="verification-relus">请选择</span>
                                                  <input value="2" name="putaway" type="text" style="display: none;">
                                             </div>
                                        </div>
                                        <div class="form-item exchange">
                                             <label class="fl">支持退换</label>
                                             <!--0 不支持 1支持-->
                                             <div class="verification-el-input">
                                                  <span>否</span><i class="active" status="0"></i>
                                                  <span>是</span><i status="1"></i>
                                                  <input value="0" name="isExchange" type="text" style="display: none;">
                                                  <span class="verification-relus">请选择</span>
                                             </div>
                                        </div>
                                        <!-- <div class="handle">
                                <div class="open fl">
                                    <img src="images/open.png" alt="">展开
                                </div>
                                <div class="close fl">
                                    <img src="images/close.png" alt="">收起
                                </div>
                                <div class="delect fl">
                                    <img src="images/delect.png" alt="">删除
                                </div>
                            </div> -->
                                        <div class="close-div">
                                             <span>已编辑的商品名称</span>
                                        </div>
                                   </li>
                              </ul>
                         </form>
                    </div>
                    <!-- <div class="button"> <button class="fl">添加第2件商品</button></div> -->
                    <div class="end-btn">
                         <button class="fr" onClick="form_submit('#form')">下一步，编辑价格库存</button>
                         <a href="javascript:history.go(-1)" class="fr">返回上一页</a>
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
          iindex:4,
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
@import './scss/addProducts.scss';
</style>
