<template>
	<div class="apply">
		<m-header title="应用" fixed>
		</m-header>
		<m-contain class="t_contain">
			<!--搜索框部分-->
			<div class="in_wrap">
				<input type="text" class="search" placeholder="搜索">
			</div>
			<div class="apply-container">
				<div class="item">
					<h2 class="title">最近使用</h2>
					<div class="icon-wrap">
						<div class="icon-item" @click="go('informationSearch')">
							<p class="icon"></p>
							<p class="state">信息查询</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">请假</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">借款</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">会议管理</p>
						</div>
						<div class="icon-item" @click="go('myAccount')">
							<p class="icon"></p>
							<p class="state">报销</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">发票</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">入职</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">补贴查询</p>
						</div>
					</div>
				</div>
				<div class="item">
					<h2 class="title">公文管理</h2>
					<div class="icon-wrap">
						<div class="icon-item" @click="go('emailArticle')">
							<p class="icon"></p>
							<p class="state">发文</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">收文</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">签报</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">系统来文</p>
						</div>
					</div>
				</div>
				<div class="item">
					<h2 class="title">网上办公</h2>
					<div class="icon-wrap">
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">会议管理</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">共享资源</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">内容发布</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">公示管理</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">用车管理</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">自建流程</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">务所公开</p>
						</div>
					</div>
				</div>
				<div class="item">
					<h2 class="title">人力资源</h2>
					<div class="icon-wrap">
						<div class="icon-item" @click="go('myInformation')">
							<p class="icon"></p>
							<p class="state">我的信息</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">我的薪酬</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">请假</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">信息查询</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">入职</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">离职</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">合同管理</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">岗位竞聘测算</p>
						</div>
					</div>
				</div>
				<div class="item">
					<h2 class="title">财务管理</h2>
					<div class="icon-wrap">
						<div class="icon-item" @click="go('myLoan')">
							<p class="icon"></p>
							<p class="state">借款</p>
						</div>
						<div class="icon-item" @click="go('myAccount')">
							<p class="icon"></p>
							<p class="state">报销</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">核算账号查询</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">经费</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">发票</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">补贴查询</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">审批管理</p>
						</div>

					</div>
				</div>
				<div class="item">
					<h2 class="title">科研项目</h2>
					<div class="icon-wrap">
						<div class="icon-item" @click="go('myProject')">
							<p class="icon"></p>
							<p class="state">我的项目</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">年度统计</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">开题公示</p>
						</div>
					</div>
				</div>
				<div class="item">
					<h2 class="title">科研条件</h2>
					<div class="icon-wrap">
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">固定资产</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">无形资产</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">采购管理</p>
						</div>
						<div class="icon-item">
							<p class="icon"></p>
							<p class="state">耗材管理</p>
						</div>
					</div>
				</div>
			</div>
		</m-contain>
		<m-footer></m-footer>
	</div>
</template>
<script>
	import MtButton from "../../../node_modules/mint-ui/packages/button/src/button"
	export default {
		name: 'Application',
		data: function() {
			return {

			}
		},
		components: {
			MtButton,
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
	.apply-container{
		border-top: 1px solid #cbcbcb;
		background: #fff;
		margin-top: 0.17rem;
		.item{
			.title{
				padding: 0 0.32rem 0;
				height: 0.66rem;
				line-height:0.66rem;
				font-size: 0.36rem;
				color: #146fec;
				margin-top: 0.2rem;
			}
			.icon-wrap{
				display: flex;
				flex-wrap: wrap;
				justify-content:flex-start;
				text-align: center;
				position: relative;
				&:after{
					content: '\200B';
					display: block;
					width: 6.68rem;
					height: 1px;
					background: #cbcbcb;
					position: absolute;
					left: 0.32rem;
					bottom:0;
				}
				.icon-item{
					width: 25%;
					margin-top: 0.44rem;
					.icon{
						width: 0.71rem;
						height: 0.72rem;
						background-size: contain;
						margin: 0 auto;
					}
					.state{
						height: 0.92rem;
						line-height: 0.92rem;
						font-size: 0.24rem;
						color: #292c34;
					}
				}
			}
			&:first-child{
				.icon-item{
					&:first-child .icon{
						background: url("../../../static/images/icon1.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(2) .icon{
						background: url("../../../static/images/icon2.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(3) .icon{
						background: url("../../../static/images/icon3.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(4) .icon{
						background: url("../../../static/images/icon4.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(5) .icon{
						background: url("../../../static/images/icon5.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(6) .icon{
						background: url("../../../static/images/icon6.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(7) .icon{
						background: url("../../../static/images/icon7.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(8) .icon{
						background: url("../../../static/images/icon8.png") no-repeat;
						background-size: contain;
					}
				}
			}
			&:nth-child(2){
				.icon-item{
					&:first-child .icon{
						background: url("../../../static/images/icon9.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(2) .icon{
						background: url("../../../static/images/icon10.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(3) .icon{
						background: url("../../../static/images/icon11.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(4) .icon{
						background: url("../../../static/images/icon12.png") no-repeat;
						background-size: contain;
					}
				}
			}
			&:nth-child(3){
				.icon-item{
					&:first-child .icon{
						background: url("../../../static/images/icon13.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(2) .icon{
						background: url("../../../static/images/icon14.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(3) .icon{
						background: url("../../../static/images/icon15.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(4) .icon{
						background: url("../../../static/images/icon16.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(5) .icon{
						background: url("../../../static/images/icon17.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(6) .icon{
						background: url("../../../static/images/icon18.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(7) .icon{
						background: url("../../../static/images/icon19.png") no-repeat;
						background-size: contain;
					}
				}
			}
			&:nth-child(4){
				.icon-item{
					&:first-child .icon{
						background: url("../../../static/images/icon20.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(2) .icon{
						background: url("../../../static/images/icon21.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(3) .icon{
						background: url("../../../static/images/icon22.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(4) .icon{
						background: url("../../../static/images/icon23.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(5) .icon{
						background: url("../../../static/images/icon24.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(6) .icon{
						background: url("../../../static/images/icon25.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(7) .icon{
						background: url("../../../static/images/icon26.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(8) .icon{
						background: url("../../../static/images/icon27.png") no-repeat;
						background-size: contain;
					}
				}
			}
			&:nth-child(5){
				.icon-item{
					&:first-child .icon{
						background: url("../../../static/images/icon28.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(2) .icon{
						background: url("../../../static/images/icon29.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(3) .icon{
						background: url("../../../static/images/icon30.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(4) .icon{
						background: url("../../../static/images/icon31.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(5) .icon{
						background: url("../../../static/images/icon32.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(6) .icon{
						background: url("../../../static/images/icon33.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(7) .icon{
						background: url("../../../static/images/icon34.png") no-repeat;
						background-size: contain;
					}
				}
			}
			&:nth-child(6){
				 .icon-item{
					 &:first-child .icon{
						 background: url("../../../static/images/icon35.png") no-repeat;
						 background-size: contain;
					 }
					 &:nth-child(2) .icon{
						 background: url("../../../static/images/icon36.png") no-repeat;
						 background-size: contain;
					 }
					 &:nth-child(3) .icon{
						 background: url("../../../static/images/icon37.png") no-repeat;
						 background-size: contain;
					 }
				 }
			 }
			&:nth-child(7){
				.icon-wrap{
					padding-bottom: 0.3rem;
				}
				&:after{
					display: none;
				}
				.icon-item{
					&:first-child .icon{
						background: url("../../../static/images/icon38.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(2) .icon{
						background: url("../../../static/images/icon39.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(3) .icon{
						background: url("../../../static/images/icon40.png") no-repeat;
						background-size: contain;
					}
					&:nth-child(4) .icon{
						background: url("../../../static/images/icon41.png") no-repeat;
						background-size: contain;
					}
				}
			}
		}
	}
</style>


