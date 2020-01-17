<template>
	<div class="w1200 specialPage">
		<div class="pageTop">
			<div class="leftRecommendTopLayer">
				<div class="leftRecommendTopLayerImg">
					<img src="~@/assets/imgNew/Rectangle.png" alt="">
				</div>
				<div class="leftRecommendTopName">专家观点</div>
			</div>
		</div>
		<!--专题类型切换-->
		<div class="specialTypeCheck">
			<ul>
				<li v-for="item in specialTypeData" :class="{active:item.show}" @click="specialTypeF(item)">{{item.name}}</li>
			</ul>
		</div>
		<!--页面数据区域-->
		<div class="pageCenter">
			<ul>
				<li v-for="(item,index) in 9" :class="{notMarginR0:(index+1)%4==0}">
					<div class="imgLayer">
						<img src="~@/assets/imgNew/Bitmap.png" alt="">
					</div>
					
					<div class="title">
						布隆伯格正式竞选美国总统 豪气宣布不接受任何政治捐款布隆伯
					</div>
				</li>
			</ul>
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
				specialTypeData:[
					{name:'专家观点',show:true},
					{name:'专栏文章',show:false},
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
			specialTypeF(item){
				this.specialTypeData.map(item=>{
					item.show=false;
				})
				item.show=true;
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
	@import './scss/special.scss';
</style>