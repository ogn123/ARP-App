<template>
	<div class="mine">
		<m-header title="我的" fixed id="head">
		</m-header>
		<m-contain>
			<div class="signature">
				<mt-cell>
					<div class="name">
						<p>UES &nbsp;DESIGN</p>
						<p>个性签名</p>
					</div>
					<img slot="icon" src="../../../static/images/user1.png">
					<i class="icon iconfont icon-icon07 angle"></i>
				</mt-cell>
			</div>
			<div class="wrap">
				<!--<mt-cell v-for="(item, index) in item.list1">-->
					<!--<span>{{item.name}}</span>-->
					<!--<img slot="icon" :src="item.img">-->
					<!--<i class="icon iconfont icon-icon07 angle"></i>-->
				<!--</mt-cell>-->
				<mt-cell @click.native="go('myInformation')">
					<span>我的信息</span>
					<img slot="icon" src="../../../static/images/mine1.png">
					<i class="icon iconfont icon-icon07 angle"></i>
				</mt-cell>
				<mt-cell  @click.native = "go('myProject')">
					<span>我的项目</span>
					<img slot="icon" src="../../../static/images/mine2.png">
					<i class="icon iconfont icon-icon07 angle"></i>
				</mt-cell>
				<mt-cell  @click.native = "go('enterPassword')">
					<span>我的薪酬</span>
					<img slot="icon" src="../../../static/images/mine3.png">
					<i class="icon iconfont icon-icon07 angle"></i>
				</mt-cell>
				<mt-cell>
					<span>我的财务</span>
					<img slot="icon" src="../../../static/images/mine4.png">
					<i class="icon iconfont icon-icon07 angle"></i>
				</mt-cell>
				<mt-cell @click.native = "go('myProperty')">
					<span>我的资产</span>
					<img slot="icon" src="../../../static/images/mine5.png">
					<i class="icon iconfont icon-icon07 angle"></i>
				</mt-cell>
			</div>
			<div class="wrap">
                <mt-cell>
                    <span>关于</span>
                    <img slot="icon" src="../../../static/images/mine6.png">
                    <i class="icon iconfont icon-icon07 angle"></i>
                </mt-cell>
                <mt-cell>
                    <span>设置</span>
                    <img slot="icon" src="../../../static/images/mine7.png">
                    <i class="icon iconfont icon-icon07 angle"></i>
                </mt-cell>
			</div>
		</m-contain>
		<m-footer></m-footer>
	</div>
</template>
<script>
    export default {
		name: 'Mine',
		data: function() {
			return {
				item: {
				    list1: [
				        {
							name: '我的信息',
							img: '../../../static/images/mine1.png'
						},
                        {
                            name: '我的项目',
                            img: '../../../static/images/mine2.png'
                        },
                        {
                            name: '我的薪酬',
                            img: '../../../static/images/mine3.png'
                        },
                        {
                            name: '我的财务',
                            img: '../../../static/images/mine4.png'
                        },
                        {
                            name: '我的资产',
                            img: '../../../static/images/mine5.png'
                        }
					],
                    list2: [
                        {
                            name: '关于',
                            img: '../../../static/images/mine6.png'
                        },
                        {
                            name: '设置',
                            img: '../../../static/images/mine7.png'
                        }
                    ]
				}
			}
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
	.mine .mint-cell-title{
		-webkit-box-flex: 0;
		-ms-flex: 0;
		flex: 0;
	}
	.mine .mint-cell-wrapper{
		padding: 0 10px;
        background-image: none;
	}
	.mine{
		.mint-cell{
			img{
				width: 0.9rem;
				height: 0.9rem;
				margin: 0.28rem 0.36rem 0.28rem 0;
			}
		}
		.wrap{
			.mint-cell{
				img{
					width: 0.56rem;
					height: 0.56rem;
					margin: 0 0.36rem 0 0.18rem;
				}
			}
		}
	}
	.mine{
		.signature{
			padding: 0.2rem 0 0.2rem;
			.mint-cell-wrapper{
				border-top: 1px solid #cbcbcb;
				border-bottom: 1px solid #cbcbcb;
			}
			.mint-cell-value{
				flex: 1;
			}
			.name{
				flex: 1;
				padding-top: 0.13rem;
				p{
					&:first-child{
						font-size: 0.32rem;
						color: #292c34;
					}
					&:nth-child(2){
						color: #858585;
						padding-top: 0.2rem;
						font-size: 0.24rem;
					}
				}
			}
			img{
				width: 0.9rem;
				height: 0.9rem;
			}
		}
        .angle {
            transform: none;
            font-weight: 900;
        }
		.wrap{
			.mint-cell-value{
				flex: 1;
			}
			span{
				flex: 1;
				color: #292c34;
				font-size: 0.24rem;
			}
			img{
				width: 0.56rem;
				height: 0.56rem;
				margin-left: 0.17rem;
			}
			border-bottom: 1px solid #cbcbcb;
			border-top: 1px solid #cbcbcb;
			.mint-cell{
				border-bottom: 1px solid #e8e8e8;
				&:last-child{
					border-bottom:none;
				}
				.mint-cell-wrapper{
					height: 0.96rem;
					align-items: center;
				}
			}
			margin-bottom: 0.2rem;
		}
	}
</style>
