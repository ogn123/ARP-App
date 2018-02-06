<template>
	<div>

		<ul class="s-router">
			<li v-for="(item,id) in navs" :key="item.id" @click="jump(item.link)" :class="{activecheck: isRouterMatch(item.id),noactivecheck:!isRouterMatch(item.id)}">
				<i class="icon iconfont" :class="item.iname"></i>
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navs:[{
					name:'首页',
					iname:'icon-ahome',
					link:'/',	
					id:'01'
				},{
					name:'消息',
					iname:'icon-amessage',
					link:'/message',
					id:'02'
				},{
					name:'通讯录',
					iname:'icon-acontacts',
					link:'/contact',
					id:'03'
				},{
					name:'应用',
					iname:'icon-application',
					link:'/application',
					id:'04'
				},{
					name:'我的',
					iname:'icon-amine',
					link:'/mine',
					id:'05'
				}]
			}
		},
		methods:{
			// 是否匹配当前路由
			isRouterMatch(id) {
				return this.$route.meta.menuId === id
			},
			// 跳转
			jump(link) {
				this.$router.push(link)
			}

		}
	}
</script>
<style lang="less">
	@import "../assets/less/var.less";
	.m-tabbar{
		background:#f8f8f8 !important;
		height: 1.1rem !important;
		i{
			display: block;
			font-size:.40rem;
			
		}
		i.phone{
				display: block;
				font-size: .43rem;
				margin-top: -.02rem;
		}
	}
	.s-router{
		height: 1.1rem !important;
		position: fixed;
		bottom: 0;
		background: #f6f6f6;
		width: 100%;
		z-index: 999;
		border-top: 1px solid #a1b2ba;
		li{
			float: left;
			width: 20%;
			line-height: .55rem;
			text-align: center;
			padding-top: .08rem;
			i{
				display: block;
				font-size: .50rem;
			}
			span{
				margin-top: -.05rem;
				display: block;
				font-size: .26rem;
			}
			span:nth-child(2n+1){
				margin-top:.05rem;
			}
		
		}
		li:nth-child(3){
			i{
				/*font-size: 0.57rem;
				margin-bottom: 0.05rem*/
			}
		}
				
	}
	.activecheck {
		color:@tabbarActiveColor;
		
	}
	.noactivecheck {
		color: #6d6d6d;
	}
	i.icon-global:before{
		display: block;
		margin-top: -.05rem;
	}
</style>