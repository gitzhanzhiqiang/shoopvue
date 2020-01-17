<template>
	<div class="w1200  reportListPage">
		<div class="pageTop">
			<div class="leftRecommendTopLayer">
				<div class="leftRecommendTopLayerImg">
					<img src="~@/assets/imgNew/Rectangle.png" alt="">
				</div>
				<div class="leftRecommendTopName">报告下载</div>
			</div>
		</div>
		<!--页面数据-->
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
							<span class="bottomDispTime">发表时间:2019-11-26</span>
						</div>
					</div>
					<!--<div class="newType">区域经济</div>-->
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
	@import './scss/reportList.scss';
</style>