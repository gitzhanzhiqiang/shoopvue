<template>
	<div class="newListPage">
		<!--顶部tab切换-->
		<div class="pageTab">
			<ul>
				<li v-for="item in tabData" :class="{active:item.isShow}" @click="topTab(item)">{{item.name}}</li>
			</ul>
		</div>
		<!--页面数据区域-->
		<div class="pageCenter">
			<ul>
				<li v-for="item in 4">
					<div class="imgLayer">
						<img src="~@/assets/imgNew/Bitmap.png" alt="这是图" />
					</div>
					<div class="pageCenterTabInfoDisp">
						<div class="title">布隆伯格正式竞选美国总统 豪气宣布不接受任何政治捐款</div>
						<div class="remark">77岁的纽约前市长、亿万富豪布隆伯格当地时间24日正式宣布加入民主党总统初选。</div>
						<div class="bottomDisp">
							<span class="bottomDispSource">文章来源:</span>
							<span class="bottomDispSourceName">第一财经日报</span>
							<span class="bottomDispTime">2019-11-26</span>
						</div>
					</div>
					<div class="newType">区域经济</div>
				</li>
			</ul>
		</div>
		<div class="bottomPagination">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentPageChange" background layout="prev, pager, next" :total="total" :page-size="4">
			</el-pagination>
		</div>
	</div>
</template>
<script>
import ajax from '@utils/config';
import baseURL from '@/assets/js/ajax/baseURL';
import Cookies from 'js-cookie';
	export default {
		components: {},
		data() {
			return {
				tabData:[
					{name:"最新动态",isShow:true},
					{name:"区域经济",isShow:false},
					{name:"全球贸易",isShow:false},
					{name:"海外投资",isShow:false},
					{name:"跨国公司",isShow:false},
					{name:"科技金融",isShow:false},
					{name:"引进来",isShow:false},
				],
				total:10,
				params:{

				},
			}
		},
		computed: {},
		created() {
			
			// this.getType();
		},
		mounted() {},
		methods: {
			topTab(item){
				this.tabData.map(item=>{
					item.isShow=false;
				})
				item.isShow=true;
			},
			// 改变每一页的条数
			handleSizeChange(val) {
				this.params.pageSize = val;
				this.params.pageIndex = 1;
				// this.getTable(); //更新列表
			},
			// 切换页码
			handleCurrentPageChange(val) {
				this.params.pageIndex = val;
				// this.getTable(); //更新列表
			},

		},
		filters: {

		}
	}
</script>
<style lang='scss' scoped>
	@import './scss/newList.scss';
</style>