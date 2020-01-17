<template>
  <div>
    <!-- 头部 header -->
    <div id="s-header" class="s-header">
      <seller-header :hidden="hideInput"></seller-header>
    </div>
    <div class="content">
      <div class="body-center">
        <!--地址列表-->
        <div class="adress" style="display: block;">
          <p class="top">
            <span class="fl">确认收货地址</span>
            <a class="fl" href="javascript:;" @click="showAlert = true;isEdit = false">创建新地址</a>
            <span class="fr"><a href="javascript:;" @click="$router.push('/buyerPersonCenter/myAddress')">管理收货地址</a></span>
          </p>
          <ul>
            <li v-for="(address, index) in addressList" :key="index" @click="selectAddress(address)">
              <span :class="address.select?'fl selected':'fl noSelect'"></span>
              <p class="fl">
                <span>{{address.name}}</span><span>{{address.addressDetail}}</span><span>{{address.phone}}</span>
                <span v-if="address.isDefault">默认地址</span>
              </p>
              <a class="edit-address selected fr" href="javascript:;" v-if="address.select" @click="editAddress(address.id)">修改地址</a>
            </li>
          </ul>
        </div>

        <!--订单信息-->
        <div class="orderInformation">
          <p>确认订单信息</p>
          <ul class="order-item">
            <li>
              <div v-for="company in supplierList" :key="company.supplierId">
                <div class="store">
                  <img src="./images/shop_icon.png" alt="">
                  <span>{{ company.storeSupplierName }}</span>
                </div>
                <div v-for="(goods, index) in company.shipWayList" :key="index">
                  <div class="top" v-for="(item, idx) in goods.goodsList" :key="idx">
                    <img class="fl" :src="item.imageAddress" alt="">
                    <div class="fl">
                      <p>{{item.name}}</p>
                      <p>¥ <span> {{item.actualPrice}}</span></p>
                      <p>数量：<span>{{item.num}}</span></p>
                      <p v-for="category in item.goodsSpecificationList" :key="category.id">
                        <span>{{category.categoryName}} : {{category.name}}</span>&nbsp;&nbsp;
                      </p>
                    </div>
                  </div>
                  <div class="bottom">
                    <span class="fl">备注:</span>
                    <textarea class="jsremark fl" value="" placeholder="请输入（100字）" maxlength="100"></textarea>
                    <p class="fl">
                      <span>运费：¥ {{goods.fee}}</span>
                      <span class="fl">总合计</span><a href="javascript:;" class="fl">¥ {{goodInfo.totalMoney}}</a>
                    </p>
                  </div>
                  <div class="invoice">
                    <p class="checkbox noSelect"><label><i class="icon"></i><input type="checkbox"> 开具发票</label>
                      <span>创建新抬头</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!--付款信息-->
        <div class="paymentInformation">
          <p>确认付款信息</p>
          <ul>
            <li>
              <span class="fl">实付款：</span><span class="fl totalMoney">¥ 0</span>
            </li>
            <li>
              <span class="fl">总数量：</span><span class="fl total">0</span>
            </li>
          </ul>
          <div class="button" id="submitOrder"><img src="images/loading.gif" alt="">提交订单
          </div>
        </div>
        <!-- 编辑地址-弹框开始 -->
        <div class="alertForm" label-width="152" v-show="showAlert">
          <div class="dog_alert"></div>
          <div class="text">
            <div class="title">{{isEdit?'修改地址':'新增地址'}}
            </div>
            <div class="box">
              <div class="form-item">
                <label class="fl">收货人姓名：</label>
                <div class="verification-el-input fl">
                  <input name="name" class="verification-input" type="text" placeholder="请输入收货人姓名" v-model="formObj.username" required>
                </div>
              </div>
              <div class="form-item">
                <label class="fl">手机号码：</label>
                <div class="verification-el-input fl">
                  <input name="phone" class="verification-input" type="text" placeholder="请输入11位手机号" v-model="formObj.userTel" required>
                </div>
              </div>
              <div class="form-item first">
                <label class="fl">联系人地址：</label>
                <ul id="select_data" class="fl">
                  <!-- 省 -->
                  <li class="fl">
                    <div class="verification-el-input">
                      <select name="addressList" @change="control($event, 1)" v-model="input_1">
                        <option disabled hidden selected>请选择</option>
                        <option :value="prov.id" v-for="prov in provinceList" :key="prov.id">{{prov.provinceName}}</option>
                      </select>
                    </div>
                  </li>

                  <!-- 市 -->
                  <li class="fl">
                    <div class="verification-el-input" v-if="showCity">
                      <select name="addressList" @change="control($event, 2)" v-model="input_2">
                        <option disabled hidden selected>请选择</option>
                        <option :value="prov.id" v-for="prov in cityList" :key="prov.id">{{prov.provinceName}}</option>
                      </select>
                    </div>
                  </li>

                  <!-- 区 -->
                  <li class="fl" v-if="showArea">
                    <div class="verification-el-input">
                      <select name="addressList" @change="control($event, 3)" v-model="input_3">
                        <option disabled hidden selected>请选择</option>
                        <option :value="prov.id" v-for="prov in areaList" :key="prov.id">{{prov.provinceName}}</option>
                      </select>
                    </div>
                  </li>

                  <!-- 镇 -->
                  <li class="fl" v-if="showTown">
                    <div class="verification-el-input">
                      <select name="addressList" @change="control($event, 4)" v-model="input_4">
                        <option disabled hidden selected>请选择</option>
                        <option :value="prov.id" v-for="prov in townList" :key="prov.id">{{prov.provinceName}}</option>
                      </select>
                    </div>
                  </li>

                  <!-- 村 -->
                  <li class="fl" v-if="showVillage">
                    <div class="verification-el-input">
                      <select name="addressList" @change="control($event, 5)" v-model="input_5">
                        <option disabled hidden selected>请选择</option>
                        <option :value="prov.id" v-for="prov in villageList" :key="prov.id">{{prov.provinceName}}</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="form-item">
                <label class="fl">详细地址：</label>
                <div class="verification-el-input fl">
                  <input name="addressSupple" class="verification-input" type="text" placeholder="例：天堂小区1幢1单元233室" v-model="formObj.addressSupple" required>
                </div>
              </div>
            </div>
            <div class="button">
              <p class="cancle" @click="showAlert=false">取消</p>
              <p class="submit" @click="modifyAddress">提交</p>
            </div>
          </div>
        </div>
        <!-- 弹框结束 -->

        <!-- 开发票-弹框开始 -->
        <div class="alertForma" id="alertForma" rules="rules" label-width="152" position-verification="">
          <div class="dog_alert"></div>
          <div class="text">
            <div class="title">
              创建抬头
              <!--<img src="image/delete.png" alt="" onClick="CloseAlert()">-->
            </div>
            <div class="box">
              <div class="form-item first">
                <label class="fl">发票类型：</label>
                <ul id="select_data" class="fl">
                  <li class="fl">
                    <div class="verification-el-input">
                      <select name="invoiceType" id="invoiceType" class="verification-input" requir="true" msg="请选择">
                        <!--<option value="">请选择</option>-->
                        <option value="1">普通发票</option>
                        <option value="2">增值税专用发票</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="form-item first">
                <label class="fl">抬头类型：</label>
                <ul id="select_data" class="fl">
                  <li class="fl">
                    <div class="verification-el-input">
                      <select name="titleTypes" id="titleTypes" class="verification-input" requir="true" msg="请选择">
                        <option value="">请选择</option>
                        <option value="1">个人</option>
                        <option value="2">企业</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="form-item">
                <label class="fl">发票抬头：</label>
                <div class="verification-el-input fl">
                  <input name="content" class="verification-input" type="text" placeholder="请填写发票抬头" requir="true" msg="">
                </div>
              </div>
              <div class="form-item">
                <label class="fl">纳税人识别号：</label>
                <div class="verification-el-input fl">
                  <input name="taxNumber" class="verification-input" type="text" placeholder="请填写有效税号信息" requir="true" msg="">
                </div>
              </div>
              <!--增值税专用发票-->
              <div class="zengzhi">

                <div class="form-item">
                  <label class="fl">注册地址：</label>
                  <div class="verification-el-input fl">
                    <input name="enterpriseAddress" class="verification-input" type="text" placeholder="请填写注册地址" requir="true" msg="">
                  </div>
                </div>
                <div class="form-item">
                  <label class="fl">注册电话：</label>
                  <div class="verification-el-input fl">
                    <input name="enterprisePhone" class="verification-input" type="text" placeholder="请填写注册电话" requir="true" msg="">
                  </div>
                </div>
                <div class="form-item">
                  <label class="fl">开户银行：</label>
                  <div class="verification-el-input fl">
                    <input name="bankDeposit" class="verification-input" type="text" placeholder="请填写开户银行" requir="true" msg="">
                  </div>
                </div>
                <div class="form-item">
                  <label class="fl">银行账户：</label>
                  <div class="verification-el-input fl">
                    <input name="bankAccount" class="verification-input" type="text" placeholder="请填写银行账户" requir="true" msg="">
                  </div>
                </div>

              </div>

              <div class="form-item">
                <p class="moren">
                  <img class="selected" src="~@/assets/imagesRecode/dz_xuanz.png" />设为默认抬头
                </p>
              </div>
            </div>
            <div class="button">
              <p class="cancle" onClick="CloseAlerta()">取消</p>
              <p class="submit" onclick="submitfapiao()">提交</p>
            </div>
          </div>
        </div>
        <!-- 弹框结束 -->

      </div>
    </div>
  </div>
</template>
<script>
import ajax from "@utils/config";
import sellerHeader from "@/components/sellerHeader.vue";

export default {
  components: {
    sellerHeader
  },
  data() {
    return {
      input_1: "请选择",
      input_2: "请选择",
      input_3: "请选择",
      input_4: "请选择",
      input_5: "请选择",
      addressID: "",
      param: {},
      goodInfo: {},
      supplierList: [],
      addressList: [],
      provinceList: [], //省
      cityList: [], //市
      areaList: [], //区
      townList: [], //镇
      villageList: [], //村
      addList: [],
      hideInput: true,
      showAlert: false,
      isEdit: true,
      showCity: false, //控制市级显示
      showArea: false, //区级显示
      showTown: false, //镇
      showVillage: false, //村
      formObj: {
        username: "",
        userTel: "",
        addressSupple: ""
      },
      addressDetail: {} //地址详情
    };
  },
  computed: {},
  created() {
    let tmp = this.$route.query;
    this.param = {
      list: JSON.parse(tmp.list),
      addressId: ""
    };
    this.getTheOrderDetail();
    this.getAddress();
    this.addressConnect();
  },
  watch: {
    // 控制表单显示，改变之后重置
    showAlert(newVal, oldVal) {
      if (!newVal) {
        this.showCity = false;
        this.showArea = false;
        this.showTown = false;
        this.showVillage = false;
        this.cityList = []; //市
        this.areaList = []; //区
        this.townList = []; //镇
        this.villageList = []; //村
        this.addList = [];
        this.formObj = {
          username: "",
          userTel: "",
          addressSupple: ""
        };
        this.input_1 = "请选择";
        this.input_2 = "请选择";
        this.input_3 = "请选择";
        this.input_4 = "请选择";
        this.input_5 = "请选择";
      }
    },
    // 控制市级显示的变量，改变之后相应的需要置空数组 否则会造成影响；
    // 以下链式反应
    showCity(newVal) {
      if (!newVal) {
        this.input_2 = "请选择";
        this.cityList = [];
      }
    },
    // 区变量
    showArea(newVal) {
      if (!newVal) {
        this.input_3 = "请选择";
        this.areaList = [];
      }
    },
    // 镇变量
    showTown(newVal) {
      if (!newVal) {
        this.input_4 = "请选择";
        this.townList = [];
      }
    },
    // 村变量
    showVillage(newVal) {
      if (!newVal) {
        this.input_5 = "请选择";
        this.villageList = [];
      }
    }
  },
  mounted() {},
  methods: {
    /**
     * 编辑地址
     * @param {Object} addressID 地址id
     */
    editAddress(addressID) {
      this.showAlert = true;
      this.isEdit = true;
      this.addressID = addressID;
      ajax({
        url: "member-api-impl/user/addressDetail",
        optionParams: {
          addressId: addressID
        }
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            let detail = res.data;
            this.formObj = {
              username: detail.name,
              userTel: detail.phone,
              addressSupple: detail.addressSupple
            };
            let tmpArr = detail.list.reverse();
            let count = 1;
            tmpArr.map((item, index) => {
              // 由于control函数的参数穿的是一个 event事件对象。于是这里模拟一个event对象
              let event = {
                target: {
                  value: item.code
                }
              };
              // 模拟点击并返显
              this.control(event, count);
              count++;
              if (index === 0) {
                this.input_1 = item.code;
              }
              if (index === 1) {
                this.input_2 = item.code;
              }
              if (index === 2) {
                this.input_3 = item.code;
              }
              if (index === 3) {
                this.input_4 = item.code;
              }
              if (index === 4) {
                this.input_5 = item.code;
              }
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    /**
     * 添加地址
     */
    modifyAddress() {
      if (this.input_5 === '请选择') {
        this.$message({
          message: "请填写完整地址！",
          type: "error"
        });
        return;
      }
      let lastVAL = this.addList[this.addList.length - 1];
      ajax({
        url: !this.isEdit
          ? "member-api-impl/user/addAddress"
          : "member-api-impl/user/updAddress",
        optionParams: {
          name: this.formObj.username,
          phone: this.formObj.userTel,
          addressSupple: this.formObj.addressSupple,
          isDefault: 0,
          zoneId: lastVAL,
          id: this.isEdit ? this.addressID : ""
        }
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.$message({
              message: res.msg,
              type: "success"
            });
            this.showAlert = false;
            this.getAddress();
            this.getTheOrderDetail();
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 地址级联
     * @param {Object} event 当时点击的事件对象
     * @param {Number} type 控制省市区镇村 1省 2市 3区 4镇 5村
     */
    control(event, type) {
      let id = event.target.value;
      this.addList = this.addList.filter(item => {
        if (item != undefined) return item;
      });
      //以下到ajax之前
      //例如：此时我选择完了浙江省的精确到村 或者精确到部分的地址；此时我想选择江苏省的精确地址
      // 相应的就需要把省级以后的下拉选择框隐藏
      if (type === 1 && id) {
        // 下面的boolean控制相应的级联选择显示，只要发生变化就会被watch函数监听 从而触发重置；
        this.showCity = false;
        this.showArea = false;
        this.showTown = false;
        this.showVillage = false;
        // 下面的数组是传给后端的 由于之前选择了浙江省的精确地址；这边重新选江苏省的就需要置空
        this.addList = [];
      }
      // 下面是市级，以下思路和上面一样
      if (type === 2 && id) {
        this.showArea = false;
        this.showTown = false;
        this.showVillage = false;
        this.addList.length = 1;
      }
      if (type === 3 && id) {
        this.showTown = false;
        this.showVillage = false;
        this.addList.length = 2;
      }
      if (type === 4 && id) {
        this.showVillage = false;
        this.addList.length = 3;
      }
      if (type === 5 && id) {
        this.addList.length = 4;
      }
      this.addList.push(id);
      ajax({
        url: "member-api-impl/address/selByParentId",
        optionParams: {
          parentId: id
        }
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            let data = res.data;
            if (type === 1) {
              this.showCity = true;
              this.cityList = data;
            }
            if (type === 2) {
              this.showArea = true;
              this.areaList = data;
            }
            if (type === 3) {
              this.showTown = true;
              this.townList = data;
            }
            if (type === 4) {
              this.showVillage = true;
              this.villageList = data;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 获取默认省份 只调用一次
     * @param {Number} id 默认毕传的0 获取所有省份
     */
    addressConnect(id = 0) {
      ajax({
        url: "member-api-impl/address/selByParentId",
        optionParams: {
          parentId: id
        }
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            let data = res.data;
            this.provinceList = data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 选择地址 控制前面的单选框
     * @param {Object} addressItem 地址对象
     */
    selectAddress(addressItem) {
      this.addressList.map(addressItem => {
        this.$set(addressItem, "select", false);
      });
      this.$set(addressItem, "select", true);
      // 选择后动态改变地址
      this.param.addressId = addressItem.id;
      this.getTheOrderDetail();
    },
    // 获取用户的地址列表
    getAddress() {
      ajax({
        url: "member-api-impl/user/deliveryAddressList",
        optionParams: this.param
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.addressList = res.data;
            this.addressList.map((item, index) => {
              this.$set(item, "select", false);
              if (item.isDefault) this.$set(item, "select", true);
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 获取订单详情
    getTheOrderDetail() {
      ajax({
        url: "product-api-impl/app/confirmGoodsList",
        optionParams: this.param
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            this.goodInfo = res.data;
            this.supplierList = this.goodInfo.supplierList;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  filters: {}
};
</script>
<style lang='scss' scoped>
@import "./scss/confirmOrder.scss";
</style>