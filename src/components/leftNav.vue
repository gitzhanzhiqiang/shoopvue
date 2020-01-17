<template>
	<div id="header">
		<ul class="centre-left-nav">
			<li v-for="(item,index) in munuList" :class="{hover:index==munuData.iindex}">
				<a href="javascript:;" @click="goUrl(item.path)">{{item.name}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import loginout from "@/assets/js/loginout";
	// import { mapGetters } from 'vuex';
	export default {
		components: {},
		props: {
			munuData:{
				type:Object,
				default:{
					munuType:0,//0 卖家中心导航 1 供应商导航
					iindex:0, //选中节点索引
				}
			},
		},
		data() {
				return {
					munuList0: 
					[
						{
							path: '/sellerCenter/sellercenter',
							name: '村/户店商认证',
							children: [{
								path: '/sellerCenter/topupOrWithdraw'
							},
							{
								path: '/sellerCenter/addAccount'
							}
							]
						},
						{
							path: '/sellerCenter/transactionManage',
							name: '交易管理'
						},
						{
							path: '/sellerCenter/logisticsManage',
							name: '物流管理',
							children: [{
								path: '/sellerCenter/addNewEMS'
							}]
						},
						{
							path: '/sellerCenter/templateOfFreight',
							name: '运费模板',
							children: [{
								path: '/sellerCenter/freightCompile'
							}]
						},
						{
							path: '/sellerCenter/productsManage',
							name: '商品管理',
							children: [{
								path: '/sellerCenter/addProducts'
							},
							{
								path: '/sellerCenter/addSpecification'
							}
							]
						},
						{
							path: '/sellerCenter/customerService',
							name: '客户服务'
						},
						{
							path: '/sellerCenter/eveManagement',
							name: '评价管理'
						},
						// {
						//      path: 'villagerList',
						//      name: '村民名录'
						// },
						{
							path: '/sellerCenter/dataStatistics',
							name: '数据统计'
						},
						{
							path: '/sellerCenter/advertisementManage',
							name: '广告图管理'
						},
						{
							path: '/sellerCenter/announCement',
							name: '公告管理'
						}
					],
					munuList1: 
					[
						{
							path: '/supplierCenter/sellercenter',
							name: '爱心供应商认证',
							children: [
								{
									path: '/supplierCenter/topupOrWithdraw'
								},
								{
									path: '/supplierCenter/addAccount'
								}
							]
						},
						{
							path: '/supplierCenter/transactionManage',
							name: '交易管理'
						},
						{
							path: '/supplierCenter/logisticsManage',
							name: '物流管理',
							children: [{
								path: '/supplierCenter/addNewEMS'
							}]
						},
						{
							path: '/supplierCenter/templateOfFreight',
							name: '运费模板',
							children: [{
								path: '/supplierCenter/freightCompile'
							}]
						},
						{
							path: '/supplierCenter/productsManage',
							name: '商品管理',
							children: [{
								path: '/supplierCenter/addProducts'
							},
							{
								path: '/supplierCenter/addSpecification'
							}
							]
						},
						{
							path: '/supplierCenter/customerService',
							name: '客户服务'
						},
						// {
						//      path: '/supplierCenter/distributionManage',
						//      name: '分销管理'
						// },
						{
							path: '/supplierCenter/eveManagement',
							name: '评价管理'
						},
						{
							path: '/supplierCenter/dataStatistics',
							name: '数据统计'
						},
						{
							path: '/supplierCenter/announCement',
							name: '公告管理'
						}
						// {
						//      path: '/supplierCenter/advertisementManage',
						//      name: '广告图管理'
						// }
					],
					munuList:[],
				};
			},
		computed: {
		},
		created() {
			if(this.munuData.munuType){
				this.munuList = this.munuList1;
			}else{
				this.munuList = this.munuList0;
			}
		},
		methods: {
			goUrl(url){
				this.$emit('goUrl');
				let path = this.$route.path;
				if(url != path){
					this.$router.push(url);
				}
			}
			// $router.push
		},
		filters: {},
		watch: {}
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/commin.scss";
	
</style>