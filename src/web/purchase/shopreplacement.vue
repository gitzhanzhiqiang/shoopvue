<template>
  <div>
     <!-- 顶部 top -->
    <div id="header-top" class="header-top"></div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header"></div>
    <!-- 退换货申请 -->
    <div id="shopreplacement" class="body-center">
        <div class="shopreplacement-inner">
            <div class="expu-info">
                <h3 class="title">退换商品 </h3>
                <form id="ajaxForm" target="nm_iframe" enctype="multipart/form-data" action="" method="post">
                    <div class="orderInfo"></div>
                    <div class="tuihuan-info">
                        <dl class="class-item money">
                            <dt class="tit">退款金额：</dt>
                            <dd class="com">
                                <input type="text" class="inpt" disabled value="¥ 0.00">
                                <p>最多 ¥<span>0.00</span> 含发货邮费 ¥<span>0.00</span> </p>
                            </dd>
                        </dl>
                        <dl class="class-item reason">
                            <dt class="tit">退换原因：</dt>
                            <dd class="com">
                            </dd>
                        </dl>
                        <dl class="class-item explain">
                            <dt class="tit">退换说明：</dt>
                            <dd class="com">
                                <textarea name="backDescription" placeholder="请输入（100字）"
                                    onkeydown="inputMaxLength(this, 100)"></textarea>
                            </dd>
                        </dl>
                        <dl class="class-item pingz">
                            <dt class="tit">上传凭证：</dt>
                            <dd class="com" id="uploadPingz"></dd>
                        </dl>
                        <input class="submit" type="button" value="提交">
                    </div>
                </form>
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
import Cookies from "js-cookie";
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
@import './scss/shopreplacement.scss';
</style>