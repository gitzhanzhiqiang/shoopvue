<template>
	<div class="body-center clearfix">
		<div class="header-wapper" id="header-wapper">
			<h1 class="logo fl">
				<a href="/" style="width:256px;height:47px"></a>
			</h1>
		</div>
	</div>
</template>

<script>
	// import ajax from '@utils/config';
	import Cookies from "js-cookie";
	export default {
		components: {},
		data() {
			return {

			};
		},
		computed: {
		},
		created() {
		},
		methods: {

		},
		filters: {},
		watch: {
			// $route(to, from) {
			// 	// 对路由变化作出响应...
			// 	this.handleChangeMenu();
			// }
		}
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/commin.scss";
	.topBg{
		width: 100%;
		height: 100px;
		background: #f22723;
		text-align: center;
	}
	.topBg img{
		width: 1200px;
	}
</style>