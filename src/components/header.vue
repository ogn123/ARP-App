<template>
	<header class="m-header" :class="{'is-bg':bg}">
		<div class="m-header-button is-left" @click="goBack">
			<slot name="left"></slot>
		</div>
		<h1 class="m-header-title" v-text="title"></h1>
		<div class="is-right">
			<slot name="right"></slot>
		</div>

	</header>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			bg: {
				type: Boolean,
				default: false
			},
			fixed: {
				type: Boolean,
				default: false
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1); //返回上一级
			}
		}
	}
</script>
<style lang="less">
	/*导入颜色变量*/
	@import "../assets/less/var.less";
	.m-header {
		width: 100%;
		height: 0.94rem;
		line-height: 0.94rem;
		background: -moz-linear-gradient( top, #ccc, #000);
		background: -webkit-linear-gradient(top, #02429b, #297ae8);
		text-align: center;
		color: #fff;
		font-size: 0.33rem;
		position: fixed;
		top: 0;
		z-index: 10;
		a {
			color: @headerDefaultColor;
		}
		.mintui {
			font-size: .32rem;
		}
		.m-header-button {
			/*width: 1.4rem;*/
			align-items: stretch;
			position:absolute;
			&.is-left {
				text-align: left;
			}
			&.is-right {
				text-align: right;
			}
			.m-icon-img {
				width: 20px;
				height: 20px;
			}
			.margin-right-10 {
				margin-right: 10px;
			}
			.m-icon-img {
				width: 30px;
				height: 30px;
			}
		}
		.m-header-title {
			flex: 1;
			text-align: center;
			font-size: .36rem;
			/*margin-top: .1rem;*/
		}
		&.is-bg {
			background: #2777e5;
			color: #fff;
			a {
				color: #fff;
			}
			.m-header-title {
				color: #fff;
			}
		}
		&.is-fixed {
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			z-index: 9;
		}
	}
</style>
