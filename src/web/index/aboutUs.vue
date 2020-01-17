<template>
	<div class="w1200 aboutUsPage">
		<div class="title">专业的海外财经资讯平台</div>
		<div class="secondTitle">为您提供海外经济、行业、投资、政策的全方位信息服务</div>
		<div class="centerPage">
			<div class="text">浙壹财经于2018年12月成立于有“人间天堂”、“互联网之都”美誉的浙江省杭州市，通过与浙江大学区域经济开放与发展研究中心强强联合，以高端内容的生产和输出，提供海外经济、行业、投资、政策的全方位信息服务。</div>
			<div class="text">浙壹财经已经推出资讯、专题、观点、报告、视频、活动、数据库等一系列热门栏目，旨在为有海外投资需求的、日益庞大的企业和个人用户群提供一站式资讯服务。</div>
			<div class="text">目前，浙壹财经战略合作伙伴有浙江大学区域经济开放与发展研究中心、浙江大学博士生报告团、浙江大学求是学社、浙江理工大学、浙江工商大学、宁波大学、华商律师事务所、兰迪律师事务所、新加坡国立大学等海内外知名机构。随着业务的深入发展，浙壹财经的战略合作机构还会越来越多。</div>
			<div class="text">“乘风破浪会有时，直挂云帆济沧海”，已经扬帆起航的浙壹财经，乘着海外投资热潮的东风，势必驶向更加广阔的蓝海！</div>
		</div>
		<!--底部图片-->
		<div class="bottomImg">
			<div class="imgLayer">
				<img src="~@/assets/imgNew/Bitmap3.png" alt="二维码">
			</div>
			<div class="name">浙壹财经公众号</div>
			<div class="text">扫描二维码了解更多</div>
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
				
			}
		},
		computed: {},
		created() {
			// this.getType();
		},
		mounted() {},
		methods: {
			

		},
		filters: {

		}
	}
</script>
<style lang='scss' scoped>
	@import './scss/aboutUs.scss';
</style>