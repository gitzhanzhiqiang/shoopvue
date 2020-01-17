<template>
	<div id="header">
		<div class="w1200">
			<div class="logo">
				<img src="~@/assets/imgNew/logo.png" alt="" title="">
			</div>
			<!--顶部链接-->
			<div class="menu">
				<div class="menu-nav">
					<ul class="menu-ul clearfix">
						<li class="menu-item" v-for="(item, index) in menuNav" @click="getUrl(item.url)" :class="item.hover ? 'hover' : ''">
							{{ item.name }}
							<span class="arrow bottom" v-if="item.chilrend"></span>
							<div class="menu-select" v-if="item.chilrend">
								<a v-for="val in item.chilrend" :class="val.hover ? 'hover' : ''" @click.stop="goUrl(val.url)" href="javascript:">{{ val.name }}</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="topSearch">
				<div class="inputLayer">
					<input type="text" v-model='input'>
				</div>
				<div class="imgLayer" @click.enter="getInput">
					<img src="~@/assets/imgNew/searchImg.png" alt="" title="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import ajax from '@utils/config';
	// import Swiper from 'swiper';
	// import store from '../store';
	import Cookies from "js-cookie";
	import loginout from "@/assets/js/loginout";
	// import { mapGetters } from 'vuex';
	export default {
		components: {},
		data() {
			return {
				menuNav: [{
						name: "首页",
						url: "/",
						hover: false
					},
					{
						name: "资讯",
						hover: false,
						url: "/newList",
					},
					{
						name: "专题",
						hover: false,
						url: "/special",
					},
					{
						name: "观点",
						url: "/viewpoint",
						hover: false
					},
					{
						name: "报告",
						url: "/reportList",
						hover: false
					},
					{
						name: "海外服务",
						url: "/foreignService",
						hover: false,
						chilrend:[
							{
								name: "留学",
								url: "/foreignService",
								hover: false
							},
							{
								name: "公司注册",
								url: "/foreignService",
								hover: false
							},
							{
								name: "商务合作",
								url: "/foreignService",
								hover: false
							},
						]
					},
					{
						name: "活动",
						url: "/activeList",
						hover: false
					}
				],
				input:"",
			};
		},
		computed: {
		},
		created() {
			this.handleChangeMenu();
		},
		methods: {
			handleChangeMenu() {
				let route = this.$route.path;
				this.menuNav.map(item => {
					item.hover = route === item.url ? true : false;
					if(item.chilrend) {
						item.chilrend.map(val => {
							if(route === val.url) {
								val.hover = true;
								item.hover = true;
							} else {
								val.hover = false;
							}
						});
					}
				});
			},
			handleCommand(command) {
				if(command === "personal") {
					this.$router.push("/personal/index");
					this.$store.commit("SET_WALLET", "Wallet");
				} else if(command === "rechange") {
					this.$store.commit("SET_WALLET", "Rechange");
				} else if(command === "safeExit") {
					this.safeExit();
				}
			},
			//安全退出
			safeExit() {
				this.$message({
					message: "安全退出成功！",
					type: "success"
				});
				this.$store.dispatch("SETTOKEN", "");
				localStorage.setItem("phone", "");
				localStorage.setItem("token", "");
				Cookies.remove("token");
				Cookies.remove("phone");
				loginout();
			},
			// 获取值
			getInput(){
				alert("getInput===");
			},
			getUrl(url){
				let path = this.$route.path;
				if(url != path){
					this.$router.push(url);
				}
			}
			// $router.push
		},
		filters: {},
		watch: {
			$route(to, from) {
				// 对路由变化作出响应...
				this.handleChangeMenu();
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/commin.scss";
	#header {
		/*position: fixed;
		z-index: 50;
		top: 0;
		left: 0;*/
		margin-bottom: 20px;
		width: 100%;
		//   height: 78px;
		background: #fff;
		.top {
			height: 30px;
			background: rgba(245, 245, 245, 1);
			border: 1px solid rgba(217, 217, 217, 1);
			border-top: 0px;
			line-height: 30px;
			font-size: 12px;
			font-family: "MicrosoftYaHeiLight", "微软雅黑";
			font-weight: 300;
			color: rgba(77, 77, 77, 1);
			li {
				padding: 0 30px;
				border-right: 1px solid rgba(217, 217, 217, 1);
				cursor: pointer;
				color: #4d4d4d;
				&:first-child {
					border: 0;
				}
				&:nth-child(3) {
					text-align: center;
					width: 163px;
					padding: 0;
					position: relative;
					z-index: 999;
					div {
						width: 163px;
						height: 163px;
						line-height: 163px;
						position: absolute;
						top: 30px;
						left: 0;
						background: #fff;
						img {
							width: 120px;
							height: 120px;
							padding-top: 20px;
						}
					}
				}
			}
		}
		.logo {
			/*float: left;*/
			/*margin-top: 12px;*/
			display: inline-block;
			width: 150px;
			height: 60px;
			vertical-align: middle;
			img{
				width:100%;
				height:100%;
			}
		}
		.menu {
			/*position: relative;*/
			display: inline-block;
			vertical-align: middle;
			/*float: right;*/
			/*margin-top: 20px;*/
			.menu-nav {
				position: relative;
				float: left;
				.menu-item {
					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
					padding: 0 8px;
					float: left;
					line-height: 38px;
					font-size: 16px;
					font-weight: 300;
					font-size:16px;
					font-family:PingFang-SC-Heavy,PingFang-SC;
					font-weight:800;
					cursor: pointer;
					/*border: 1px solid transparent;*/
					height: 60px;
					margin-left: 47px;
					color: #333333;
					.arrow {
						position: relative;
						-webkit-transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
						transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
						transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
						transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), all 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
						left: 5px;
						width: 0;
						height: 0;
						display: block;
						border: 5px transparent solid;
						// &.top {
						//   display: inline-block;
						//   // top: -3px;
						// }
						&.bottom {
							display: inline-block;
							top: 2px;
							border-top: 5px solid #999;
						}
					}
					&:hover {
						color: #D22C28;
						/*border-bottom: 3px solid #D22C28;*/
					}
					&.hover {
						color: #D22C28;
						border-bottom: 3px solid #D22C28;
					}
					.menu-select {
						position: absolute;
						transition: all 0.3s ease 0.1s;
						opacity: 0;
						-webkit-transform: scaleY(0);
						transform: scaleY(0);
						visibility: hidden;
						top: 36px;
						background-color: #fff;
						padding-bottom: 10px;
						clear: both;
						z-index: 999;
						width: 160px;
						padding-top: 15px;
						box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
						border-radius: 2px;
						text-align: center;
						a {
							display: block;
							line-height: 30px;
							color: #999;
							&:hover {
								color: #D22C28;
							}
							&.hover {
								color: #D22C28;
							}
						}
					}
					&:hover .bottom {
						top: -2px;
						border-top: 5px solid transparent !important;
						border-bottom: 5px solid #ff8533;
					}
					&:hover .menu-select {
						visibility: visible;
						opacity: 1;
						-webkit-transform: scaleY(1);
						transform: scaleY(1);
						-webkit-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
						transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
						transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
						transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
						-webkit-transform-origin: center top;
						transform-origin: center top;
					}
				}
			}
			.personal {
				position: relative;
				float: left;
				margin-top: -5px;
				.personal-default {
					display: block;
					width: 50px;
					height: 50px;
					overflow: hidden;
					border-radius: 50%;
					line-height: 38px;
					border: 1px solid #eee;
					cursor: pointer;
				}
			}
		}
	}
	
	.log {
		margin-top: 12px;
	}
	
	.app-img {
		position: absolute;
		top: 6px;
		margin-left: 970px;
	}
	
	.geren-img {
		position: absolute;
		top: 63px;
		margin-left: 1085px;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
	
	.fade-enter,
	.fade-leave-to
	/* .fade-leave-active below version 2.1.8 */
	
	{
		opacity: 0;
	}
	
	.fei {
		width: 100%;
		height: 113px;
	}
	.topSearch{
		width: 300px;
		height:40px;
		line-height: 40px;
		display: flex;
		float: right;
		vertical-align: middle;
		margin-top: 10px;
		box-sizing: border-box;
		
	}
	.topSearch .inputLayer{
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;
		width: 245px;
		border:1px solid rgba(229,229,229,1);
		border-right-width: 0px;
	}
	.topSearch .inputLayer input{
		/*height:99.9%;*/
		margin: auto;
		vertical-align: middle;
		width: 100%;
		box-sizing: border-box;
		border: 0px;
		outline: 0;
		text-indent: 5px;
	}
	.topSearch .imgLayer{
		border:1px solid rgba(229,229,229,1);
		display: inline-block;
		/*height:40px;
		width: 55px;*/
		line-height: 40px;
		margin: auto;
		box-sizing: border-box;
		vertical-align: middle;
		border-left-width: 0px;
	}
	.topSearch .imgLayer img{
		
		height:40px;
		width: 55px;
		vertical-align: middle;
		box-sizing: border-box;
		margin-top: -5px;
	}
</style>