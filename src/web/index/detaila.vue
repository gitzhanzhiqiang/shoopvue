<template>

	<div class="detail">
		<div class="liudao">
			您当前所在位置：  不死鸟  >  P2P债转 > 平台
		</div>
		<div class="debtxin">
			<div class="debtxin_left">
				<div class="debtxin_left_top">
					<h1>
						<img v-if="detailData.logo" :src="detailData.logo" />
						<img v-if="!detailData.logo" src="~@/assets/images/moren.png" />
						{{detailData.pfName}}
						<span v-for='(itmc,index) in detailData.labels' v-if='index<3'>{{itmc.name}}</span>
					</h1>
				</div>
				<div class="qianz">
					<h1 v-if='detailData.totalAmount == 0'><span>总金额</span> {{detailData.totalAmount}}</h1>
					<h1 v-else><span>总金额</span> {{detailData.totalAmount|formatMoney}}</h1>
				</div>
				<div class="debtxin_left_bom">
					<ul>
						<li><span>总发布</span> {{detailData.totalCount}}</li>
						<li><span style="margin-left: 10px;">总成交</span>&nbsp;{{detailData.countSuccess}}</li>
						<li v-if='detailData.avgRate == 0'><span style="margin-left: 45px;">平均折扣</span>&nbsp;{{detailData.avgRate}} <b>折</b></li>
						<li v-else><span style="margin-left: 45px;">平均折扣</span>&nbsp;{{(detailData.avgRate)|formatMoney}} <b>折</b></li>
					</ul>
				</div>
			</div>
			<div class="moli"></div>
			<div class="debtxin_right">
				<h2>{{detailData.pfName}}折扣趋势</h2>
				<div class="quxian">
					<tendency id="bar_type" :tendencyData="tendencyData"></tendency>
				</div>
			</div>
		</div>
		<div class="toptype">
			<ul>
				<li v-for="(itm,index) in listtype" :class="{actw:itm.isShow}" :key="index" @click="toptypeti(index)">{{itm.title}}</li>
			</ul>
		</div>
		<div class="debtdataBottom" v-if='listtype[0].isShow === true'>
            <ul class="debtdataBottom-list">
              <li @click="optionParams.amountSort = 0;optionParams.discountAmountSort = 0;optionParams.discountRateSort = 0;getApplyLista();">默认

              </li>
              <li v-if="optionParams.amountSort === 0" @click="optionParams.amountSort = 2;optionParams.discountAmountSort = 0;optionParams.discountRateSort = 0;getApplyLista();">转让金额
                <img src="./img/shan.png" v-if="optionParams.amountSort === 0">
                <img src="./img/xiaa.png" v-if="optionParams.amountSort === 1">
                <img src="./img/xiab.png" v-if="optionParams.amountSort === 2">
              </li>
              <li v-if="optionParams.amountSort === 1" @click="optionParams.amountSort = 0;optionParams.discountAmountSort = 0;optionParams.discountRateSort = 0;getApplyLista();">转让金额
                <img src="./img/shan.png" v-if="optionParams.amountSort === 0">
                <img src="./img/xiaa.png" v-if="optionParams.amountSort === 2">
                <img src="./img/xiab.png" v-if="optionParams.amountSort === 1">
              </li>
              <li v-if="optionParams.amountSort === 2" @click="optionParams.amountSort = 1;optionParams.discountAmountSort = 0;optionParams.discountRateSort = 0;getApplyLista();">转让金额
                <img src="./img/shan.png" v-if="optionParams.amountSort === 0">
                <img src="./img/xiaa.png" v-if="optionParams.amountSort === 2">
                <img src="./img/xiab.png" v-if="optionParams.amountSort === 1">
              </li>
              <!-- 折扣金额 -->
              <li v-if="optionParams.discountAmountSort === 0" @click="optionParams.discountAmountSort = 2;optionParams.amountSort = 0;optionParams.discountRateSort = 0;getApplyLista();">折扣金额
                <img src="./img/shan.png" v-if="optionParams.discountAmountSort === 0">
                <img src="./img/xiaa.png" v-if="optionParams.discountAmountSort === 1">
                <img src="./img/xiab.png" v-if="optionParams.discountAmountSort === 2">
              </li>
              <li  v-if="optionParams.discountAmountSort === 1" @click="optionParams.discountAmountSort = 0;optionParams.amountSort = 0;optionParams.discountRateSort = 0;getApplyLista();">折扣金额
                <img src="./img/shan.png" v-if="optionParams.discountAmountSort === 0">
                <img src="./img/xiaa.png" v-if="optionParams.discountAmountSort === 2">
                <img src="./img/xiab.png" v-if="optionParams.discountAmountSort === 1">
              </li>
              <li v-if="optionParams.discountAmountSort === 2" @click="optionParams.discountAmountSort = 1;optionParams.amountSort = 0;optionParams.discountRateSort = 0;getApplyLista();">折扣金额
                <img src="./img/shan.png" v-if="optionParams.discountAmountSort === 0">
                <img src="./img/xiaa.png" v-if="optionParams.discountAmountSort === 2">
                <img src="./img/xiab.png" v-if="optionParams.discountAmountSort === 1">
              </li>
              <!-- 转让折扣 -->
              <li  v-if="optionParams.discountRateSort === 0" @click="optionParams.discountRateSort = 2;optionParams.amountSort = 0;optionParams.discountAmountSort = 0;getApplyLista();">转让折扣
                <img src="./img/shan.png" v-if="optionParams.discountRateSort === 0">
                <img src="./img/xiaa.png" v-if="optionParams.discountRateSort === 1">
                <img src="./img/xiab.png" v-if="optionParams.discountRateSort === 2">
              </li>
              <li  v-if="optionParams.discountRateSort === 1" @click="optionParams.discountRateSort = 0;optionParams.amountSort = 0;optionParams.discountAmountSort = 0;getApplyLista();">转让折扣
                <img src="./img/shan.png" v-if="optionParams.discountRateSort === 0">
                <img src="./img/xiaa.png" v-if="optionParams.discountRateSort === 2">
                <img src="./img/xiab.png" v-if="optionParams.discountRateSort === 1">
              </li>
              <li  v-if="optionParams.discountRateSort === 2" @click="optionParams.discountRateSort = 1;optionParams.amountSort = 0;optionParams.discountAmountSort = 0;getApplyLista();">转让折扣
                <img src="./img/shan.png" v-if="optionParams.discountRateSort === 0">
                <img src="./img/xiaa.png" v-if="optionParams.discountRateSort === 2">
                <img src="./img/xiab.png" v-if="optionParams.discountRateSort === 1">
              </li>
            </ul>
          </div>
		
		
		<div class="liebiao" v-if="allData.length && listtype[0].isShow === true" style="margin-bottom: 40px;">
          	<div class="liebiao_left" v-for="(item,index) in allData" :key="index">
          			<div class="liebiao_left_top">
          					<h1>
          						<a @click="$router.push({path:'/detaila',query:{id:item.pfName }})">{{item.pfName}}</a>
          						<span v-for='(itmc,index) in item.labels' :key="index" v-if="index < 3">{{itmc.name}}</span>
          						<b @click="goUrl(item.link)">
          							<img src="./img/stlian.png"/>
          							预览链接
          						</b>
          					</h1>
          					<p v-if="item.repayStatus == 1">正常</p>
          					<p v-if="item.repayStatus == 2">逾期</p>
          					<p v-if="item.bdType == 1">信贷</p>
          					<p v-if="item.bdType == 2">企贷</p>
          					<p v-if="item.bdType == 3">房贷</p>
          					<p v-if="item.bdType == 4">车贷</p>
          					<p v-if="item.bdType == 5">自投</p>
          					<div>平台信息</div>
          			</div>
          			<div class="liebiao_left_bo" @click="$router.push({path:'/debtList/detail',query:{id:item.id }})">
          					<ul>
          						<li><span>转让金额</span><br/>{{item.amount | formatMoney}}</li>
          						<li><span style="margin-left: 20px;">折扣金额</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;{{item.discountAmount | formatMoney}}</li>
          						<li><h4>{{item.discountRate | formatMoney}}<b>折</b></h4></li>
          					</ul>
          			</div>
          	</div>
          </div>
		
         <div class="xinxi_meia" v-if="!allData.length && listtype[0].isShow === true">
				<img src="~@/assets/images/wunei.png"/>
				<p>暂无内容</p>
			</div>


        	<div class="xinxi" v-if='listtype[1].isShow === true'>
        		<div class="xinxi_w" v-if="xindata.length" v-for="itm in xindata" @click="$router.push({path:'/newdetaila',query:{id:itm.id,dailogShow:xinParams.pfId,index:1 }})">
        			<h3>{{itm.title}}<span>{{itm.createTime}} &nbsp;&nbsp;&nbsp;&nbsp;></span></h3>
        			<p>来源：{{itm.source}}</p>
        		</div>
        		<div class="xinxi_mei" v-if="!xindata.length">
        			<img src="~@/assets/images/wunei.png"/>
        			<p>暂无内容</p>
        		</div>
        	</div>
        	<div class="gonggao" v-if='listtype[2].isShow === true'>
        		<div class="xinxi_w" v-if="xindata.length" v-for="itm in xindata" @click="$router.push({path:'/newdetaila',query:{id:itm.id,dailogShow:xinParams.pfId,index:2}})">
        			<h3>{{itm.title}}<span>{{itm.createTime}} &nbsp;&nbsp;&nbsp;&nbsp;></span></h3>
        			<p>来源：{{itm.source}}</p>
        		</div>
        		<div class="xinxi_mei" v-if="!xindata.length">
        			<img src="~@/assets/images/wunei.png"/>
        			<p>暂无内容</p>
        		</div>
        	</div>
        	<div class="jiankuang"  v-if='listtype[3].isShow === true'>
        		<div class="xinxi_w">
        			<h3>债转规则</h3>
					<p>{{detailData.rule}}</p>
        		</div>
        	</div>
        <!-- 分页 -->
        <div v-if="total && listtype[0].isShow === true" class="pagination-container">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentPageChange" :current-page.sync="optionParams.page" :page-sizes="[10,20,30,50]" :page-size="optionParams.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div>

          <!-- 分页 -->
        <div v-if="listtype[1].isShow === true || listtype[2].isShow === true" class="pagination-container">
          <el-pagination @size-change="handleSizeChangea" @current-change="handleCurrentPageChangea" :current-page.sync="xinParams.page" :page-sizes="[10,20,30,50]" :page-size="xinParams.limit" layout="total, sizes, prev, pager, next, jumper" :total="totala">
          </el-pagination>
        </div>
		<div class="blank"></div>
		<!-- 输入债权密码 -->
		<el-dialog title="债权密码" :visible.sync="dialogPwd" width="30%" :show-close="false">
			<!-- form表单 -->
			<el-form :model="delayData" :rules="rules" ref="delayData" label-width="120px" class="demo-delayData">
				<el-row>
					<el-col :span="24">
						<el-form-item label="债权密码:" prop="tranPwd">
							<el-input v-model="delayData.tranPwd" type='password' maxlength="6" placeholder="请输入债权密码"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submit('delayData')">提交</el-button>
							<el-button @click="resetForm('delayData');dialogPwd = false;delayData.tranPwd = '';">取消</el-button>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</el-dialog>
		<!-- 设置qq号码 -->
            <el-dialog title="承接确认" :visible.sync="dialogEditLoginQQ" width="30%" :show-close="false">
                <!-- form表单 -->
                <el-form :model="delayData" :rules="rules" ref="delayData" label-width="120px" class="demo-loginPwdForm">
                    <el-row>
                        <el-col :span="24">
                        	<p style="height: 40px;text-indent: 3em;font-size: 16px;">是否确认承接该债权？</p>
                            <el-form-item label="QQ号码:" prop="qqCode">
                                <el-input v-model="setupqq.qqCode" maxlength="16" placeholder="请输入QQ号码 , 方便交易对接？ 选填！"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button  type="primary" @click="qqshezhi()">提交</el-button>
                                <el-button @click="dialogEditLoginQQ = false;">取消</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-dialog>
		<!-- 折扣趋势 -->
		<el-dialog title="折扣趋势" :visible.sync="dialogShow" width="80%" :show-close="true">
			<tendency id="bar_type" :tendencyData="tendencyData"></tendency>
		</el-dialog>
			<!-- 折扣趋势 -->
	    <el-dialog title="折扣趋势" :visible.sync="isShow" width="80%" :show-close="true">
	      <tendency :id="tendencyId" :tendencyData="tendencyDataa"></tendency>
	    </el-dialog>
			<!-- 分享 -->
		<el-dialog title="分享债权信息" :visible.sync="centerDialogVisible" width="39%" center>
			<p class="text">分享出去，让更多人看到，会增加债转成功率哦</p>
			<textarea id="cpLink" readonly v-model="dizhi"></textarea>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="shareBox" class="copybtn">复制链接</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
import ajax from '@utils/config';
import { parseTime } from '@/filters';
import tendency from '@/components/tendency1.vue';
import Cookies from 'js-cookie';
export default {
	components: {
		tendency
	},
	data() {
		var validTranPwd = (rule, value, callback) => {
			if (String(value).length != 6) {
				callback(new Error('交易密码格式错误'));
				return false;
			}
			callback();
		};
		return {
			leftBackground: {
	        background: 'url(' + require("./img/oodd.png") + ') no-repeat center',
	        'background-size': '100% 100%',
	    },
			bg:{
				backgroundImage: "url(" + require("@/assets/images/backItem.png") + ")",
				backgroundRepeat: "repeat",
				backgroundSize: "100% 100%",
			},
			optionParams: {
				pfName:'',
		        favorites: [],
		        amountSort: 0,
		        dateFrom: "",
		        dateTo: "",
		        discountAmountSort: 0,
		        discountRateSort: 0,
		        isAsc: false,
		        limit: 10,
		        page: 1,
		        isAssure: 0,
		        isOrient: 0,
		        isPrepay: 0,
		        isSafe:0,
		        status: []
		      },
			detailData: {},
			dialogShow: false,
			tendencyData: [],
			tendencyDataa: [],
			tendencyName: '',
			isShow: false,
			dialogEditLoginQQ:false,
			dialogPwd: false,
			isBindCard: null,
			orderId: '',
			dizhi:'',
			userId: '',
			delayData: {
				tranPwd: '',
			},
			rules: {
				tranPwd: [
					{ required: true, message: "债权密码不能为空", trigger: "blur" },
					{ validator: validTranPwd, trigger: 'blur' }
				],
			},
			userInfo:{},
			response:{},
			setupqq:{
            	qqCode:'',
           },
           listtype: [
                { title: '债权转让', index: 0, isShow: true },
                { title: '舆情信息', index: 1, isShow: false },
                { title: '平台公告', index: 2, isShow: false },
                 { title: '平台简况', index: 3, isShow: false },
            ],
           allData:[],
            params: {
		        activetype: '',//债权转让类型
		        activestatus: '',//债权转让状态
		        isSafe:'',
		      },
		      total:0,
		      tendencyId:'',
			centerDialogVisible: false,
			xinParams: {
		        limit: 10,
		        page: 1,
		        pfId:'',
		        type:'',
		         project:1,
		      },
		      totala:0,
		      xindata:[],
		}
	},
	computed: {
	},
	created() {
		this.orderId = this.$route.query.id?this.$route.query.id:Cookies.get('orderId');
		this.optionParams.pfName = this.$route.query.id?this.$route.query.id:Cookies.get('orderId');
		Cookies.set('orderId',this.orderId)
		this.dizhi = 'https://www.bsnzz.com/detaila?id=' + this.orderId  //https://www.bsnzz.com/  //http://192.168.0.121:8081/web/tg/  //http://192.168.0.107:8080/#/
		Cookies.set('orderId',this.orderId);
		this.checkdebt('1', 1);
		this.getApplyList()
		//this.getApplyList();
		//this.getTable();
		//this.shareBox();
		
	},
	mounted() {
	},
	methods: {

		checkdebt(key, type) {
      if (type == 0) {
        this.params.activestatus = key;
        if (key === '') {
          this.optionParams.isAssure = 0;
          this.optionParams.isOrient = 0;
          this.optionParams.isPrepay = 0;
        } else if (key === '1') {
          this.optionParams.isAssure = 0;
          this.optionParams.isOrient = 0;
          this.optionParams.isPrepay = 1;
        } else if (key === '2') {
          this.optionParams.isAssure = 0;
          this.optionParams.isOrient = 1;
          this.optionParams.isPrepay = 0;
        } else if (key === '3') {
          this.optionParams.isAssure = 1;
          this.optionParams.isOrient = 0;
          this.optionParams.isPrepay = 0;
        } else {

        }
        this.getApplyLista();
      } else if (type == 1) {
        this.params.activetype = key;
        if (key === '') {
          this.optionParams.status = [];
        } else if (key === '1') {
          this.optionParams.status = [0];
        } else if (key === '2') {
          this.optionParams.status = [1];
        } else if (key === '3') {
          this.optionParams.status = [2];
        }
        this.getApplyLista();

      } else if (type == 2) {
        this.params.isSafe = key;
        if (key === '') {
          this.optionParams.isSafe = 0;
        } else if (key === '1') {
          this.optionParams.isSafe = 1;
        } else if (key === '2') {
          this.optionParams.isSafe = 2;
        }
        this.getApplyLista();

      } else {

      }
    },


		toptypeti(val){
			if (val === '0'||val === 0) {

			}else if(val === '1'||val === 1){
				this.xinParams.type = 1
				this.getTendenxin()
			}else if(val === '2'||val === 2){
				this.xinParams.type = 2
				this.getTendenxin()
			}else if(val === '3'||val === 3){
				this.xinParams.type = 3
				this.getTendenxin()
			}
			this.listtype[0].isShow = false;
            this.listtype[1].isShow = false;
            this.listtype[2].isShow = false;
            this.listtype[3].isShow = false;
            this.listtype[val].isShow = true;
		},

		getTendency() {
			ajax({
				url: "orderTransfer/discount_rates",
				optionParams: {
					name: this.detailData.pfName
				}
			}).post()
				.then(res => {
					if (res.code === 200) {
						this.tendencyData = res.data;
//						this.dialogShow = true;
					} else {
					}
				})
				.catch(error => {
					console.log(error)
				})
		},
		getTendenxin() {
			ajax({
				url: "platform/content_list",
				optionParams: this.xinParams
			}).post()
				.then(res => {
					if (res.code === 200) {
						this.xindata = res.data.records ?res.data.records:[];
						this.totala = res.data.total
					} else {
					}
				})
				.catch(error => {
					console.log(error)
				})
		},
		//趋势曲线PC
    getTendencya(val) {
    	console.log(this.detailData.pfName)
      ajax({
        url: "orderTransfer/discountRates",
        optionParams: {
          name: this.detailData.pfName
        }
      }).post()
        .then(res => {
          if (res.code === 200) {
            this.tendencyDataa = res.data;
            this.isShow = true;
          } else {
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
		//获取详情数据
		getApplyList() {
			ajax({
				url: "platform/archive",
				optionParams: {
					pfName: this.orderId,
				}
			}).post()
				.then(res => {
					console.log(res);
					if (res.code === 200) {
						this.detailData = res.data ? res.data: '';
						this.xinParams.pfId = res.data.pfId
						 if(Cookies.get('token')){
							this.getTendency();
						}
						// this.getTendencya()
					} else {
					}
				})
				.catch(error => {
					console.log(error)
				})
		},
		//债转列表
    getApplyLista() {
	      if (this.favorites) {
	        this.optionParams.favorites = [this.favorites];
	      } else {
	        this.optionParams.favorites = [];
	      }
	      ajax({
	        url: 'orderTransfer/index',
	        optionParams: this.optionParams
	      }).post()
	        .then(response => {
	          this.optionParams.favorites = '';
	          if (response.code === 200) {
	            this.allData = response.data.records ? response.data.records : [];
	            this.total = response.data.total;
	          } else {
	            this.allData = [];
	            this.total = 0;
	          }

	        })
	        .catch(error => {
	          console.log(error)
	        })
	    },
		qqshezhi(){
			console.log(this.setupqq.qqCode)
			if(this.setupqq.qqCode == ''){
				this.underTake()
				return false
			}else{
				this.submitLoginQQForm()
				this.underTake()
				return false
			}
		},


		shareBox() {
			var url = document.getElementById("cpLink");
		    url.select();
		    document.execCommand("copy");
		   	this.$message.success('复制成功');
		   	this.centerDialogVisible=false;
            return
       },



		 // 改变每一页的条数
    handleSizeChange(val) {
      this.optionParams.limit = val;
      this.optionParams.page = 1; //从第一页开始
      this.getApplyLista();
    },
    // 切换页码
    handleCurrentPageChange(val) {
      this.optionParams.page = val;
      this.getApplyLista();
    },
    	 // 改变每一页的条数
    handleSizeChangea(val) {
      this.xinParams.limit = val;
      this.xinParams.page = 1; //从第一页开始
      this.getTendenxin();
    },
    // 切换页码
    handleCurrentPageChangea(val) {
      this.xinParams.page = val;
      this.getTendenxin();
    },
		//重置表单
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		goUrl(val) {
			window.open(val);
			// console.log(11111);
			// var reg = /http:\/\/\w*(\.\w*)+/ig;
			// if(!reg.test(val)){
			// 	this.$message.error('平台债权链接地址有误');
			// }
			// else{
			// 	window.open(val);
			// }
		},

	},
	filters: {
		//金钱过滤
		formatMoney(val) {
			if(val){
				return val.toFixed(2);
			}
			//return val.toFixed(2);
		}
	}
}
</script>
<style lang='scss' scoped>
@import './scss/detail.scss';
.detail {
	width: 100%;
	background-color: #f7f8fd;
	.middle {
		width: 100%;
		height: 215px;
		background: #f7f8fd;
	}
	.liudao{
		width: 1200px;
		height: 69px;
		margin: 0 auto;
		font-size:18px;
		font-family:MicrosoftYaHeiLight;
		font-weight:300;
		color:rgba(77,77,77,1);
		line-height: 69px;
	}

	.datalist-specific {
    //display: flex;
    background-color: transparent;
    z-index: 99;
    position: relative;
    width: 1200px;
    margin: 0 auto;
    li {
        background: #fff;
        display: flex;
        flex: 1;
        height: 180px;
        border: 1px solid rgba(242, 242, 242, 1);
        border-radius: 2px;
        background-color: white !important;
        overflow: hidden;
        // padding: 10px 10px 0;
        // margin-bottom: 10px;
        border-bottom: 1px solid rgba(242, 242, 242, 1);
        .datalist-specificL {
            flex: 1;
            // height: 114px;
            text-align: center;
            vertical-align: middle;
            margin-top: 37px;
            margin-left: 22px;
            margin-bottom: 20px;
            margin-right: 28px;
            border-right: 1px solid rgba(217, 217, 217, 1);
            &>img {
                display: block;
                margin-top: 25px;
            }
        }
        .datalist-specificR {
            padding: 10px 10px;
            flex: 7;
            .datalist-specificR-top {
                display: flex;
                font-size: 12px;
                margin-top: 30px;
                .datalist-specificR-topL {
                    // flex: 1;
                    width: 755px;
                    height: 32px;
                    float: left;
                    .pfName {
                        text-align: center;
                        float: left;
                        height: 30px;
                        line-height: 30px;
                        font-size: 20px;
                        font-family: SourceHanSansCN-Bold;
                        font-weight: bold;
                        color: rgba(77, 77, 77, 1);
                        margin-right: 29px;
                    }
                    .discount-text {
                        float: left;
                        width: 60px;
                        height: 20px;
                        line-height: 20px;
                        text-align: center;
                        border: 1px solid rgba(57, 99, 208, 1);
                        border-radius: 15px;
                        font-size: 16px;
                        color: rgba(57, 99, 208, 1);
                        margin-top: 7px;
                        margin-right: 10px;
                    }
                    .discount_zui{
                        height: 26px;
                        font-size:14px;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height: 26px;
                        float: left;
                        padding: 0px 20px 0px 20px;
                        margin-right: 10px;
                        margin-top: 4px;
                    }
                    .discount_zuia{
                        height: 26px;
                        font-size:14px;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height: 26px;
                        float: left;
                        padding: 0px 27px 0px 22px;
                        margin-right: 10px;
                        margin-top: 4px;
                    }
                    .prepay-text {
                        float: left;
                       width: 60px;
                        height: 20px;
                        line-height: 20px;
                        text-align: center;
                        font-size: 16px;
                        border: 1px solid rgba(247, 187, 81, 1);
                        border-radius: 15px;
                        color: rgba(247, 187, 81, 1);
                        margin-top: 7px;
                         margin-right: 10px;
                    }
                    .orient-text {
                        float: left;
                        width: 60px;
                        height: 20px;
                        line-height: 20px;
                        text-align: center;
                        font-size: 16px;
                        border: 1px solid rgba(242, 48, 47, 1);
                        border-radius: 15px;
                        color: rgba(242, 48, 47, 1);
                        margin-top: 7px;
                        margin-right: 10px;
                    }
                }
                .datalist-specificR-topR {
                    // flex: 1;
                    width: 233px;
                    float: left;
                    text-align: right;
                    color: #666666;
                    // margin-left: 450px;
                    img {
                        margin-right: 8px;
                    }
                    .link-text {
                        margin-right: 40px;
                        font-size: 14px;
                        float: right;
                        width: 97px;
                        height: 22px;
                        line-height: 22px;
                        cursor: pointer;
                        &>div {
                            float: left;
                        }
                    }
                    .Rdiscount-text {
                        font-size: 14px;
                        float: left;
                        width: 97px;
                        height: 22px;
                        line-height: 22px;
                        cursor: pointer;
                        &>div {
                            float: left;
                        }
                    }
                }
            }
            .datalist-specificR-context {
                display: flex;
                // padding: 10px 0 10px;
                margin-top: 35px;
                font-size: 14px;
                color: #666666;
                .datalist-specificR-context-item {
                    flex: 1;
                    line-height: 26px;
                    i {
                        font-style: normal;
                    }
                    .checkdetail {
                        width: 128px;
                        height: 32px;
                        line-height: 32px;
                        text-align: center;
                        background: rgba(57, 99, 208, 1);
                        border-radius: 16px;
                        font-size: 14px;
                        font-family: MicrosoftYaHeiLight;
                        font-weight: 300;
                        color: rgba(255, 255, 255, 1);
                        cursor: pointer;
                    }
                }
            }
        }
    }
}


	.toptype{
		width: 1200px;
		height: 80px;
		margin: 0 auto;
		background: white;
		margin-top: 12px;
		border-bottom: 1px solid #f7f8fd;
		i{
			width: 3px;
			height: 18px;
			background:rgba(57,99,208,1);
			border-radius:1px;
			display: block;
			float: left;
			margin-top: 12px;
		    margin-left: 40px;
		    margin-right: 10px;
		}
		h3{
			float: left;
			line-height: 40px;
			font-size:18px;
			font-family:PingFang-SC-Bold;
			color:rgba(51,51,51,1);
			margin-right: 20px;
		}
		ul{
			float: left;
			margin-top: 7px;
			li{
				width: 114px;
				height: 73px;
				float: left;
				line-height: 80px;
				font-size:18px;
				font-family:MicrosoftYaHeiLight;
				font-weight:300;
				color:rgba(77,77,77,1);
				text-align: center;
				cursor: pointer;
			}
			li:nth-child(1){
				margin-left: 108px;
			}
			li:nth-child(2){
				margin-left: 157px;
			}
			li:nth-child(3){
				margin-left: 183px;
			}
			li:nth-child(4){
				margin-left: 185px;
			}
			li.actw{
					color:#FF8533;
					border-bottom: 1px solid #FF8533;
				}
		}
	}
	.xinxi{
		width: 1200px;
        background: white;
        margin: 0 auto;
         margin-bottom: 30px;
        .xinxi_w{
        	width: 1100px;
        	overflow: hidden;
        	margin: 0 auto;
        	background: white;
        	 border-bottom: 1px solid rgba(247,247,247,1);
        	 cursor: pointer;
        	h3{
        		font-size:16px;
				font-family:MicrosoftYaHei-Bold;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height: 40px;
				span{
					font-size:16px;
					font-family:MicrosoftYaHeiLight;
					font-weight:300;
					color:rgba(51,51,51,1);
					float: right;
				}
        	}
        	p{
        		font-size:14px;
				font-family:MicrosoftYaHeiLight;
				font-weight:300;
				color:rgba(128,128,128,1);
				line-height: 30px;
				margin-bottom: 30px;

        	}
        }
        .xinxi_mei{
    		width: 100%;
    		height: 500px;
    		background: white;
    		img{
    			display: block;
    			margin: 0 auto;
    			padding-top: 100px;
    		}
    		p{
    			text-align: center;
    			width: 100%;
    			font-size:18px;
				font-family:PingFang-SC-Regular;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height: 80px;
    		}
    	}
	}
	.gonggao{
		width: 1200px;
        background: white;
        margin: 0 auto;
         margin-bottom: 30px;
        .xinxi_w{
        	width: 1100px;
        	overflow: hidden;
        	margin: 0 auto;
        	background: white;
        	 border-bottom: 1px solid rgba(247,247,247,1);
        	 cursor: pointer;
        	h3{
        		font-size:16px;
				font-family:MicrosoftYaHei-Bold;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height: 40px;
				span{
					font-size:16px;
					font-family:MicrosoftYaHeiLight;
					font-weight:300;
					color:rgba(51,51,51,1);
					float: right;
				}
        	}
        	p{
        		font-size:14px;
				font-family:MicrosoftYaHeiLight;
				font-weight:300;
				color:rgba(128,128,128,1);
				line-height: 30px;
				margin-bottom: 30px;

        	}
        }
        .xinxi_mei{
    		width: 100%;
    		height: 500px;
    		background: white;
    		img{
    			display: block;
    			margin: 0 auto;
    			padding-top: 100px;
    		}
    		p{
    			text-align: center;
    			width: 100%;
    			font-size:18px;
				font-family:PingFang-SC-Regular;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height: 80px;
    		}
    	}
	}
	.jiankuang{
		width: 1200px;
        background: white;
        margin: 0 auto;
        margin-bottom: 30px;
        .xinxi_w{
        	width: 1100px;
        	overflow: hidden;
        	margin: 0 auto;
        	background: white;
        	 border-bottom: 1px solid rgba(247,247,247,1);
        	h3{
        		font-size:16px;
				font-family:MicrosoftYaHei-Bold;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height: 40px;
        	}
        	p{
        		font-size:14px;
				font-family:MicrosoftYaHeiLight;
				font-weight:300;
				color:rgba(128,128,128,1);
				line-height: 25px;
				margin-bottom: 30px;
				white-space: pre-wrap;
        	}
        }
        .xinxi_mei{
    		width: 100%;
    		height: 500px;
    		background: white;
    		img{
    			display: block;
    			margin: 0 auto;
    			padding-top: 100px;
    		}
    		p{
    			text-align: center;
    			width: 100%;
    			font-size:18px;
				font-family:PingFang-SC-Regular;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height: 80px;
    		}
    	}
	}
	.xinxi_meia{
    		width: 1200px;
    		height: 500px;
    		margin: 0 auto;
    		background: white;
    		margin-bottom: 30px;
    		img{
    			display: block;
    			margin: 0 auto;
    			padding-top: 100px;
    		}
    		p{
    			text-align: center;
    			width: 100%;
    			font-size:18px;
				font-family:PingFang-SC-Regular;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height: 80px;
    		}
    	}
	.debtdataBottom {
             font-size: 16px;
            padding: 5px 0;
            width: 1200px;
            background: white;
            margin: 0 auto;
            span{
                border-left:3px solid #3963D0 ;
                padding-left: 10px;
                font-weight: 800;
            }
            ul.debtdataStatus-list,
            ul.debtdataType-list {
                display: inline-block;
                li {
                    display: inline-block;
                    padding: 0 23px;
                    cursor: pointer;
                    &.active {
                        background: #3963D0;
                        color: white;
//                      border: 1px solid rgba(255, 223, 173, 1);
//                      color: rgba(255, 223, 173, 1);
                        padding: 5px 23px;
                    }
                }
            }
            ul.debtdataTypea-list {
                display: inline-block;
                li {
                    display: inline-block;
                    padding: 0 23px;
                    cursor: pointer;
                    &.active {
                        background: #3963D0;
                        color: white;
//                      border: 1px solid rgba(255, 223, 173, 1);
//                      color: rgba(255, 223, 173, 1);
                        padding: 5px 23px;
                    }
                }
            }
            ul.debtdataBottom-list {
                display: inline-block;
                li {
                    float: left;
                    padding: 0 23px;
                    cursor: pointer;
                    font-weight:bold;
                    &.active {

                        border: 1px solid rgba(255, 223, 173, 1);
                        color: rgba(255, 223, 173, 1);
                        // padding: 5px 8px;
                    }
                }
            }
        }
        .debtdataBottom {
            ul.debtdataBottom-list {
                li {
                    line-height: 33px;
                    font-weight:bold;
                    border: 1px solid #ffffff;
                }
            }
        }
    .debtdataBottom {

            span{
                border-left:3px solid #3963D0 ;
                padding-left: 10px;
                font-weight: 800;
            }
            ul.debtdataStatus-list,
            ul.debtdataType-list {
                display: inline-block;
                margin-left: 38px;
                li {
                    display: inline-block;
                    padding: 0 80px;
                    cursor: pointer;
                    &.active {
                        background: #3963D0;
                        color: white;
//                      border: 1px solid rgba(255, 223, 173, 1);
//                      color: rgba(255, 223, 173, 1);
                        padding: 5px 23px;
                    }
                }
            }
            ul.debtdataBottom-list {
                display: inline-block;
                margin-left: 38px;
                li {
                    float: left;
                    padding: 0 110px;
                    cursor: pointer;
                     font-size:16px;
					font-family:MicrosoftYaHeiLight;
					font-weight:300;
					color:rgba(128,128,128,1);
                    &.active {

                        border: 1px solid rgba(255, 223, 173, 1);
                        color: rgba(255, 223, 173, 1);
                        // padding: 5px 8px;
                    }
                }
            }
        }
	.debtDetail {
		margin: auto;
		margin-top: -200px;
		width: 1200px;
		height:380px;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(242, 242, 242, 1);
		border-radius: 4px 4px 0px 0px;
		.title {
			height: 28px;
			line-height: 28px;
			margin-left: 34px;
			margin-top: 21px;
			text-indent: 20px;
			border-left: 4px solid rgba(57, 99, 208, 1);
			font-size: 14px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
		}
		.middleCon {
			height: 115px;
			width: 100%;
			.logo {
				width: 125px;
				height: 86px;
				float: left;
				margin-left: 93px;
				margin-top: 15px;
			}
			.thirdStatus {
				width: 789px;
				height: 70px;
				margin-left: 92px;
				 margin-top: 26px;
				float: left;

				.pfName {
					height:50px;
					font-size:16px;
					font-family:MicrosoftYaHei-Bold;
					font-weight:bold;
					color:rgba(51,51,51,1);
					line-height:50px;
					float: left;
					margin-right: 10px;
				}
				.discount-text {
                        height: 26px;
                        font-size:14px;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height: 26px;
                        float: left;
                        padding: 0px 25px;
                        margin-top: 14px;
                        background-size:100% 100% ;
                    }
				.orderNum {
					font-size: 14px;
					font-family: MicrosoftYaHeiLight;
					font-weight: 300;
					color: rgba(0, 0, 0, 1);
					line-height: 14px;
					float: right;
					margin-top: 17px;
				}

			}
			.trendecya {
				width:270px;
				height:45px;
				float: right;
				font-size: 14px;
				font-family: MicrosoftYaHeiLight;
				font-weight: 300;
				color: rgba(102, 102, 102, 1);
				.Rdiscount-text{
					    float: right;
					    width: 100px;
					    line-height: 25px;
					    margin-top: 15px;
				}
				.link-text{
					float: right;
					 width: 52px;
					 line-height: 25px;
					 font-size:16px;
					font-family:MicrosoftYaHeiLight;
					color:rgba(51,51,51,1);
					 margin-top: 15px;
				}
			}
			.trendecy {
				width:809px;
				height: 60px;
				float: right;
				font-size: 14px;
				font-family: MicrosoftYaHeiLight;
				font-weight: 300;
				color: rgba(102, 102, 102, 1);
				margin-right: 84px;
				p{
					width: 745px;
					height: 75px;
					float: right;
				}
			}
		}
		.amountItem {
			width: 1138px;
			height: 160px;
			overflow: hidden;
			border-top:1px solid rgba(90, 123, 252, 0.16);
			 border-bottom:1px solid rgba(90, 123, 252, 0.16);
			margin: 0px auto;
			box-shadow: 0px 1px 0px 0px rgba(90, 123, 252, 0.16);
			box-shadow:0px 4px 8px 1px rgba(90,123,252,0.16);
			.amountTop {
				width: 100%;
				height: 160px;
				display: flex;
				display: -webkit-flex;

				.amountLeft {
					width: 27px;
					height: 100%;
				}
				.mainCon {
					flex: 1;
					.bdtype {
						width: 100%;
						height: 95px;
						.bdtypeCon {
							height: 100%;
							width: 960px;

							margin: auto;
							.bdtypetitle {
								float: left;
								margin-top: 40px;

								height:14px;
								line-height: 14px;
								font-size:14px;
								font-family:MicrosoftYaHeiLight;
								font-weight:300;
								color:rgba(102,102,102,1);
							}
							.name {
								float: left;
								margin-top: 40px;
								margin-left: 18px;
								margin-right: 93px;
								line-height: 16px;
								height:16px;
								font-size:16px;
								font-family:SourceHanSansCN-Light;
								font-weight:300;
								color:rgba(0,0,0,1);
							}
						}
					}
					.main {
						display: flex;
						display: -webkit-flex;
						height: 80px;
						margin-top: 30px;
						.item {
						flex: 1;
						text-align: center;
						background: rgba(255, 255, 255, 1);
					.amount {
						width: 100%;
						height: 14px;
						line-height: 14px;
						padding-top: 26px;
						font-size: 18px;
						font-family: SourceHanSansCN-Light;
						font-weight: 400;
						color: rgba(0, 0, 0, 1);
					}
					.amounttitle {
						width: 100%;
						height: 14px;
						line-height: 14px;
						margin-top: 20px;
						font-size: 14px;
						font-family: MicrosoftYaHeiLight;
						font-weight: 300;
						color: rgba(102, 102, 102, 1);
					}
				}
					}
				}

			}
			.flash{
				height: 1px;
				width: 1000px;
				background:rgba(247,247,247,1);
				margin: 0 auto;
			}
			.amountBottom {
				width: 100%;
				height: 141px;
				position: relative;
				.undertake {
					width: 300px;
					height: 42px;
					line-height: 42px;
					text-align: center;
					background: rgba(57, 99, 208, 1);
					border-radius: 20px;
					position: absolute;
					left: 391px;
					bottom: 170px;
					font-size: 18px;
					font-family: MicrosoftYaHeiLight;
					font-weight: 300;
					color: rgba(255, 255, 255, 1);
					cursor:pointer;
				}
				.disabled {
					background: rgba(102, 102, 102, 1);
				}
			}
		}
	}
	.prograss {
		margin: 37px auto;
		width: 1200px;
		height: 453px;
		background: rgba(255, 255, 255, 1);
		// border: 1px solid rgba(242, 242, 242, 1);
		border-radius: 4px 4px 0px 0px;
		.prograssImg {
			width: 100%;
			height: 393px;
		}
		.service {
			width: 100%;
			border: 1px solid rgba(242, 242, 242, 1);
			height: 60px;
			line-height: 60px;
			font-size: 14px;
			font-family: MicrosoftYaHei-Bold;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			text-align: center;
		}
	}
	.blank {
		width: 100%;
		height: 1px;
		background-color: #f7f8fd;
	}
	// .el-dialog{
	// 	border-radius:20px;
		.text{
			color: #999999;
			font-size: 20px;
			width: 249px;
			height: 50px;
			text-align: center;
			margin:0 auto 16px;
			font-family: 'SourceHanSansCN-Light';
			line-height: 30px;
		}
		#cpLink{
			color: #3963D0;
			text-align: center;
			border:none;
			width: 100%;
			outline: none;
			-webkit-appearance: none;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			resize:none ;
			font-family: 'SourceHanSansCN-Light';
		}
		.dialog-footer{
			.copybtn{
				width:300px;
				height:42px;
				background:rgba(57,99,208,1);
				border-radius:20px;
			}
		}
	// }
}
</style>


