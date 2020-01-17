<template>
  <div>

     <!--主要内容-->
     <div class="content-centre body-center">
          <!--侧边导航-->
          <div id="centre-left-nav" class="fl">
            <left-nav :munuData='munuData'></left-nav>
          </div>
          <!-- 右边内容 -->
          <div class="text-right fr">
               <div class="title">
                    <p>价格库存</p>
               </div>
               <div class="text">
                    <div class="item specification">
                         <label for="" class="fl">商品规格:</label>
                         <div class="fl">
                              <ul class="list"></ul>
                              <div class="top">
                                   <button class="add">添加</button>
                                   <button class="creatTable">生成/刷新规格明细</button>
                                   <button class="sort">自定义排序</button>
                              </div>
                              <div class="bottom">
                                   <div class="batch">
                                        <div class="fl">批量设置</div>
                                        <div class="fl">
                                             单价：<input type="text" onkeyup="twoDecimalPlaces(this)" onblur="setValue(this, 0)"
                                                  placeholder="请输入">
                                        </div>
                                        <div class="fl">
                                             折扣价：<input type="text" onkeyup="twoDecimalPlaces(this)" onblur="setValue(this, 1)"
                                                  placeholder="请输入">
                                        </div>
                                        <div class="fl">
                                             库存：<input type="text" onkeyup="positiveIntegerMoney(this)" onblur="setValue(this, 2)"
                                                  placeholder="请输入">
                                        </div>
                                   </div>
                                   <table>
                                        <!--<tr class="firstTr">
                                             <td>规格名</td>
                                             <td>尺寸</td>
                                             <td>款式</td>
                                             <td>单价（元）</td>
                                             <td>折扣价（元）</td>
                                             <td>库存</td>
                                             <td>编码</td>
                                        </tr>
                                        <tr>
                                             <td>4</td>
                                             <td>4</td>
                                             <td>4</td>
                                             <td>
                                                  <input type="text" onkeyup="twoDecimalPlaces(this)" placeholder="请输入">
                                             </td>
                                             <td>
                                                  <input type="text" onkeyup="twoDecimalPlaces(this)" placeholder="请输入">
                                             </td>
                                             <td>
                                                  <input type="text" onkeyup="positiveIntegerMoney(this)" placeholder="请输入">
                                             </td>
                                             <td>
                                                  <input type="text" placeholder="请输入">
                                             </td>
                                        </tr>
                                        <tr>
                                             <td>4</td>
                                             <td>4</td>
                                             <td>4</td>
                                             <td>
                                                  <input type="text" onkeyup="twoDecimalPlaces(this)" placeholder="请输入">
                                             </td>
                                             <td>
                                                  <input type="text" onkeyup="twoDecimalPlaces(this)" placeholder="请输入">
                                             </td>
                                             <td>
                                                  <input type="text" onkeyup="positiveIntegerMoney(this)" placeholder="请输入">
                                             </td>
                                             <td>
                                                  <input type="text" placeholder="请输入">
                                             </td>
                                        </tr>-->
                                   </table>
                              </div>
                         </div>
                    </div>
                    <div class="item nospecification">
                         <label for="" class="fl">商品单价:</label>
                         <div class="fl">
                              <input name="aprice" type="text" onkeyup="twoDecimalPlaces(this)" placeholder="请输入">
                         </div>
                    </div>
                    <div class="item nospecification">
                         <label for="" class="fl">折扣价:</label>
                         <div class="fl">
                              <input name="adiscounPrice" type="text" onkeyup="twoDecimalPlaces(this)" placeholder="请输入(不可超过商品单价)">
                         </div>
                    </div>
                    <div class="item nospecification">
                         <label for="" class="fl">库存数量:</label>
                         <div class="fl">
                              <input name="ainventory" type="text" onkeyup="twoDecimalPlaces(this)" placeholder="请输入">
                         </div>
                    </div>
                    <div class="item">
                         <label for="" class="fl">温馨提示:</label>
                         <div class="hint fl">
                              <p>1.商品单价、折扣价的填写只针对单规格商品，如有多个规格，请添加商品规格，编辑规格明细；</p>
                              <p>2.商品规格编辑好后需要点击【生成/刷新规格明细】才会更新最新的规格明细，最后提交已规格明细内容为准；</p>
                              <p>3.商品库存数据在商品上架时再次编辑后可能会出现一定差异，请注意留意；</p>
                         </div>
                    </div>
                    <div class="btn">
                         <button onclick="go_url()">上一步</button>
                         <button onclick="submitData()">完成提交商品</button>
                    </div>
               </div>
          </div>
     </div>
     <!--留言弹窗-->
     <div class="alertForm leaveMsg1">
          <div class="dog_alert"></div>
          <div class="text">
               <h3>拖动规格进行排序<img class="fr" src="~@/assets/imagesRecode/delete.png" alt="" onClick="CloseAlert()"></h3>
               <p class="title">*同一个类别才能进行排序</p>
               <div class="textdata">
                    <!--<h4>颜色</h4>
                    <div class="item_container aa">
                         <div class="item_content">
                              <ul>
                                   <li>
                                        <div class="item">0</div>
                                   </li>
                                   <li>
                                        <div class="item">1</div>
                                   </li>
                                   <li>
                                        <div class="item">2</div>
                                   </li>
                                   <li>
                                        <div class="item">3</div>
                                   </li>
                                   <li>
                                        <div class="item">4</div>
                                   </li>
                                   <li>
                                        <div class="item">5</div>
                                   </li>
                                   <li>
                                        <div class="item">6</div>
                                   </li>
                                   <li>
                                        <div class="item">7</div>
                                   </li>
                                   <li>
                                        <div class="item">8</div>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    </div>-->
               </div>
               <div class="btn">
                    <button onClick="CloseAlert()">取消排序</button>
                    <button onClick="sortSubmit()">确定排序</button>
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
@import '@web/sellerCenter/scss/addSpecification.scss';
</style>
