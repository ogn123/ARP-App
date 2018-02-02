<template>
	<div class="my-loan">
		<m-header title="我的借款">
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="">
			<ul class="loan-top">
				<li>
					<span class="circle">
						<img src="../../../../static/images/loan1.png" alt="">
					</span>
					<div>
						<p>待还款金额</p>
						<p>13,287.00<span>元</span></p>
					</div>
				</li>
				<li>
					<span class="circle">
						<img src="../../../../static/images/loan2.png" alt="">
					</span>
					<div>
						<p>超期借款数量</p>
						<p>0<span>笔</span></p>
					</div>
				</li>
			</ul>
			<div class="s-tabs">
				<ul>
					<li
						v-for="(item,id) in sTabs"
						@click="changeTabs(id,item)">
						<a href="javascript:;":class="{tabsisActive:tabsactive == id}">{{item}}</a>
					</li>
				</ul>
			</div>
			<!--搜索框部分-->
			<div class="in_wrap">
				<input type="text" class="search" placeholder="请输入单号或借款事由进行搜索">
			</div>
			<!--主体-->
			<div class="s-contain">
				<ul class="s-contain-title">
					<li v-for="(item,id) in myaccountstatus" :class="{sbg:active==id}" @click="change(id,item)">{{item}}</li>
				</ul>
				<ul class="s-contain-contain" v-show="lisactive==0">
					<li>
						<p class="total">共计<span>3</span>条记录</p>
					</li>
					<li class="cycle" v-for="item in record" @click="go('paymentDetails')">
						<p class="order"><span></span>单号：<i>{{item.num}}</i></p>
						<div class="loan-detail">
							<p>借款金额:<span>{{item.price}}</span></p>
							<p>借款时间:<span>{{item.date}}</span></p>
							<p>借款事由:<span>{{item.reason}}</span></p>
						</div>
						<div class="repayment">
							<span>待还款：<i>{{item.repayment}}</i></span>
							<span class="hk">还款</span>
						</div>
					</li>
				</ul>
				<ul class="s-contain-contain" v-show="lisactive==1">
					<li>
						<p>审批中</p>
					</li>
				</ul>
				<ul class="s-contain-contain" v-show="lisactive==2">
					<li>
						<p>财务审核</p>
					</li>
				</ul>
				<ul class="s-contain-contain" v-show="lisactive==3">
					<li>
						<p>已办结</p>
					</li>
				</ul>
				<ul class="s-contain-contain" v-show="lisactive==4">
					<li>
						<p>草稿</p>
					</li>
				</ul>
			</div>
			<div class="edit"></div>
		</m-contain>
	</div>
</template>

<script>
	export default {
		name: 'myLoan',
		data() {
			return {
				select:'Message',
				tabsactive:0,
				active: 0,
				lisactive:0,
				selected: '1',
				value: '',
				sTabs:['借款列表','借款统计'],
				myaccountstatus: ['待还款', '审批中', '财务审核', '已办结', '草稿'],
				record: [
					{
					    num: 'BCL1709180001（耗材费）',
						price: '10000.00',
						date: '2017-11-09',
						reason: '材料费',
                        repayment: '10000.00'
					},
                    {
                        num: 'BCL1709180001（耗材费）',
                        price: '10000.00',
                        date: '2017-11-09',
                        reason: '材料费',
                        repayment: '10000.00'
                    },
                    {
                        num: 'BCL1709180001（耗材费）',
                        price: '10000.00',
                        date: '2017-11-09',
                        reason: '材料费',
                        repayment: '10000.00'
                    }
				]
			}
		},
		components: {
		},
		methods: {
			changeTabs(index,item){
				this.tabsactive=index;
			},
			change(index,item){
				this.active = index;
				this.lisactive = index;
			},
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
<style rel="text/scss" lang="scss">
	.my-loan{
		.contain{
			margin-bottom: 0;
		}
		.loan-top{
			display: flex;
			padding: 0 0.24rem;
			justify-content: space-between;
			margin: 1.14rem 0 0.2rem;
			li{
				width: 3.37rem;
				height: 1.4rem;
				background: #fff;
				display: flex;
				padding-left: 0.24rem;
				align-items: center;
				border-radius: 5px;
				box-shadow: 0 0 0.07rem 0 rgba(0,0,0,.15);
				.circle{
					width: 0.78rem;
					text-align: center;
					height: 0.78rem;
					line-height: 0.78rem;
					border-radius: 50%;
					img{
						width: 0.46rem;
						height: 0.4rem;
					}
				}
				&:first-child .circle{
					background: #ff514b;
				}
				&:last-child .circle{
					background: #0f82da;
				}
				div{
					padding-left: 0.16rem;
					p{
						&:first-child{
							font-size: 0.26rem;
							color: #666666;
						}
						&:last-child{
							font-size: 0.32rem;
							color: #292c34;
							span{
								font-size: 0.24rem;
								padding-left: 0.22rem;
							}
						}
					}
				}
			}
		}
		.s-contain-title{
			overflow: hidden;
			display: flex;
			padding: 0 0.24rem;
		}
		.s-contain-contain {
			padding: 0 0.2rem 0.2rem;
			i{
				font-style: normal;
			}
			.total{
				font-size: 0.24rem;
				color: #a5a5a5;
				padding: 0.3rem 0 0.04rem;
			}
			li {
				width: 7.1rem;
				height: 2.58rem;
				background: url("../../../../static/images/loanbg.png") no-repeat;
				background-size: contain;
				padding-left: 0.36rem;
				&:first-child{
					padding-left: 0;
				}
				.s-date {
					float: right;
				}
				&:first-child{
					width: auto;
					height: auto;
					background: none;
				}
				.order{
					display: flex;
					align-items:center;
					padding-top: 0.26rem;
					font-size: 0.28rem;
					color:#292c34;
					span{
						width: 0.24rem;
						height: 0.3rem;
						display: block;
						background: url("../../../../static/images/loan3.png") no-repeat;
						background-size: contain;
						margin-right: 0.13rem;
					}
				}
			}
			.loan-detail{
				display: flex;
				flex-wrap: wrap;
				p{
					width: 50%;
					color: #666666;
					font-size: 0.26rem;
					margin: 0.08rem 0 0;
					&:last-child{
						padding-bottom: 0.1rem;
					}
					span{
						padding-left: 0.2rem;
					}
				}
			}
			.repayment{
				height: 0.8rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 0.28rem;
				color: #ff5b0a;
				.hk{
					display: inline-block;
					width: 1.84rem;
					text-align: center;
					height: 0.52rem;
					line-height: 0.52rem;
					border-radius: 0.26rem;
					border: 1px solid #146fec;
					color: #146fec;
					font-size: 0.28rem;
					margin-right: 0.38rem;
					margin-top: 0.05rem;
				}
			}
			.cycle{
				margin-top: 0.16rem;
			}

		}
		.edit{
			height: .7rem;
			width: .7rem;
			border-radius: 50%;
			background:#146fec url('../../../../static/images/loan4.png') no-repeat 0.22rem center;
			position: fixed;
			right: .24rem;
			bottom: .4rem;
			background-size: 50%;
		}
		/**/
		.s-tabs {
			height: .7rem;
			line-height: .7rem;
			background: #FFFFFF;
			border-bottom: 1px solid #e8e8e8;
			border-top: 1px solid #e8e8e8;
			/*border-top: 1px solid #0f57bb;*/
			box-sizing: border-box;
			li {
				float: left;
				width: 50%;
				text-align: center;
				a {
					color: #858585;
				}
				a.tabsisActive {
					color: #146fec;
					padding-bottom: .1rem;
					border-bottom: .04rem solid;
				}
			}
			li:first-child {
				position: relative;
			}
			li:first-child:after {
				content: "\200B";
				display: block;
				width: 1px;
				height: .35rem;
				position: absolute;
				top: .2rem;
				right: 0;
				background: #e8e8e8;
			}
		}
		.s-contain{
			background: #fff;
			padding-top: 0.2rem;
		}
		.s-contain {
			background: #fff;
			.s-contain-title {
				li {
					float: left;
					width: 33.3%;
					height: .58rem;
					border: 1px solid #146fec;
					border-left: none;
					line-height: .58rem;
					text-align: center;
					color:#146fec
				}
				li:first-child {
					border-left: 1px solid #146fec;
					border-bottom-left-radius: .05rem;
					border-top-left-radius: .05rem;
				}
				li:last-child {
					border-bottom-right-radius: .05rem;
					border-top-right-radius: .05rem;
				}
			}

		}
		.sbg {
			background: #146fec;
			color: #ffffff !important;
		}
	}
</style>

