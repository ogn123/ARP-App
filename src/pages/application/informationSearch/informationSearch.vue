<template>
	<div class="info-search">
		<m-header title="信息查询">
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="s-content">
			<ul class="flex">
				<li v-for="item in data">
					<a href="#">
						<img :src="item.img"/>
					</a>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</m-contain>
	</div>
</template>
<script>
	export default {
		name: 'informationSearch',
		data() {
			return {
				data: [
					{
                        img: '../../../../static/images/infosearch1.png',
						title: '机构信息'
					},
                    {
                        img: '../../../../static/images/infosearch2.png',
                        title: '部门信息'
                    },
                    {
                        img: '../../../../static/images/infosearch3.png',
                        title: '组织信息'
                    },
                    {
                        img: '../../../../static/images/infosearch4.png',
                        title: '预算控制组'
                    },
                    {
                        img: '../../../../static/images/infosearch5.png',
                        title: '党费信息'
                    }
				]
			}
		},
		components: {
		},
		methods: {
			//路由跳转
            go (urlName) {
                this.$router.push({name:urlName});
                window.pageYOffset = 0 ;
                document.documentElement.scrollTop = 0 ;
                document.body.scrollTop = 0;
            }
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss">
	.s-content{
		.flex{
			/*overflow: hidden;*/
			display: flex;
			flex-wrap: wrap;
		}
		li{
			width: 2.2rem;
			height: 2.2rem;
			background: #fff;
			border-radius: 5px;
			float: left;
			margin-left: 0.225rem;
			margin-top: 0.225rem;
			text-align: center;
			p{
				margin-top: 0.18rem;
				color: #292c34;
			}
			a{
				display: inline-block;
				width: 0.96rem;
				height: 0.96rem;
				border-radius: 50%;
				margin-top: 0.4rem;
				img{
					width: 0.48rem;
					height: 0.46rem;
					margin-top: 0.23rem;
				}
			}
			&:nth-child(1) a{
				background: #1082da;
			}
			&:nth-child(2) a{
				background: #fdb233;
			}
			&:nth-child(3) a{
				background: #2f5b82;
			}
			&:nth-child(4) a{
				background: #7d8790;
			}
			&:nth-child(5) a{
				background: #fe514b;
			}
		}
	}
</style>

