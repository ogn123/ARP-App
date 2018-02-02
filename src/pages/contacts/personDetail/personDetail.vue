<template>
	<div>
		<div class="s-person-top">
			 <i class="icon iconfont icon-back person-back" @click="goBack"></i>
			 <div class="wrap">
			 	<img :src="person.img" alt="图片" />
			 </div>
			 <p style="font-size: .36rem;">{{person.name}}</p>
			 <p>{{person.meassage}}</p>
		</div>
		<div class="s-person-content">
			<ul>
				<li>
					<span>员工编号</span>
					<span>{{person.id}}</span>
				</li>
				<li>
					<span>性别</span>
					<span>{{person.sex}}</span>
				</li>
				<li>
					<span>年龄</span>
					<span>{{person.age}}</span>
				</li>
				<li>
					<span>学院</span>
					<span>{{person.yx}}</span>
				</li>
				<li>
					<span>职位</span>
					<span>{{person.zw}}</span></li>
				<li>
					<span>移动电话</span>
					<span>{{person.phone}}</span>
				</li>
				<li>
					<span>邮箱</span>
					<span>{{person.email}}</span>
				</li>
			</ul>
		</div>
		<div class="s-person-bottom">
			<ul>
				<li>
					<i class="icon iconfont icon-tel1"></i>打电话
				</li>
				<li>
					<i class="icon iconfont icon-message1"></i>发信息
				</li>
				<li>
					<i class="icon iconfont icon-message"></i>私信聊天
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import mHeader from '../../../components/header'
	import mContain from '../../../components/container'
	export default {
		name: 'SubContact',
		data: function() {
			return {
				person:{
					name:'蔚然',
					img:'../../../../static/images/user2.png',
					sex:'男',
					age:'48',
					id:'B90909',
					yx:'能源动力学院',
					zw:'教授',
					phone:'12345678909',
					email:'bianjie@163.com',
					meassage:'20号休假，有事电联'
				}
			}
		},
		components: {
			mHeader,
			mContain
		},
		methods: {
			goBack() {
				this.$router.go(-1); //返回上一级
			}
		}
	}
</script>

<style scoped lang="less">
	.s-person-top{
		height: 3.22rem;
		width: 100%;
		background: url('../../../assets/images/bg.png') no-repeat;
		background-size: cover;
		i{
			color: #ffffff;
			font-size: .42rem;
			font-weight: 700 ;
			display: block;
		}
		.wrap{
			width: 2.5rem;
			margin: 0 auto;
			padding-top: .5rem;
			margin-bottom: 0.15rem;
			background-size:cover ;
			text-align: center;
			img{
				height: 1.3rem;
				width: 1.3rem;
				
			}
		}
		p{
			text-align: center;
			color: #fff;
		}
	}
	.s-person-content{
		margin-bottom: .91rem;
		ul{
			background: #fff;
			li{
				height: .95rem;
				border-bottom: 1px solid #e8e8e8;
				line-height: .95rem;
				padding: 0 .38rem;
				span:last-child{
					float: right;
					color: #858585;
				}
			}
		}		
	}
	.s-person-bottom{
		background: #f7f7f7;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: .9rem;
		border-top: 1px solid #cbcbcb;
		z-index: 999;
		li{
			float: left;
			width: 33.3%;
			text-align: center;
			line-height: .9rem;
			color: #146fec;
			position: relative;
			
			i{
				margin-right: .1rem;
			}
		}
		li:after{
				content:'',;
				height: .45rem;
				width: 1px;
				position: absolute;
				right: 0;
				top: .2rem;
				background: #e8e8e8;
			}
	}
	.person-back{
		position: absolute;
		top: .1rem;
		left: .1rem;
	}
</style>