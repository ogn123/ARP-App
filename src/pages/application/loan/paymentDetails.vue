<template>
	<div class="payment-detail">
		<header class="p-header">
			<div class="top">
				<div class="m-header-button is-left">
					<i class="mintui mintui-back ml20" @click="goBack()"></i>
				</div>
				<h1 class="m-header-title">借款详情</h1>
			</div>
			<p class="dhk">待还款金额(元)</p>
			<p class="total">10,000.00</p>
			<p class="immediate">立即还款</p>
			<div class="money">
				<div class="item">
					<p>10,000.00</p>
					<p>借款总额(元)</p>
				</div>
				<div class="item">
					<p>0.00</p>
					<p>已报销(元)</p>
				</div>
				<div class="item">
					<p>0.00</p>
					<p>已还款(元)</p>
				</div>
			</div>
		</header>
		<m-contain class="myaccount">
			<div v-for="(item,index) in info" class="item">
				<mt-cell
						:title="item.nameInfo"
						@click.native="rotateFun(item)"
						class="top-content basic">
					<span v-if="item.total" class="total">合计<i>￥8.00</i></span>
					<i class="icon iconfont icon-icon07 angle" :class="item.rotate? 'trans':''"></i>
				</mt-cell>
				<div class="content" :class="item.rotate? 'hide':''">
					<mt-cell v-for="item in item.basicInformation" :title="item.title" :value="item.name"></mt-cell>
				</div>
			</div>
			<!-- tab-container -->
			<div class="approve item">
				<mt-cell title="审批记录" @click.native="combine">
					<i class="icon iconfont icon-icon07 angle" :class="last? 'trans':''"></i>
				</mt-cell>
				<ul class="record"  :class="last? 'hide':''">
					<li v-for="item in record">
						<p class="title">{{item.time}}</p>
						<div class="record-content">
							<p>{{item.person}}</p>
							<p>{{item.control}}</p>
							<img :src="item.img"/>
						</div>
					</li>
				</ul>
				<p class="load-more">加载更多</p>
			</div>
		</m-contain>
	</div>
</template>
<script>
    import MtCell from "../../../../node_modules/mint-ui/packages/cell/src/cell";
	export default {
		name: 'paymentDetails',
		data() {
			return {
                selected: '1',
				info: [
					{
						nameInfo: '委托信息',
						total: false,
                        rotate: true,
						basicInformation: [
							{
								title: '是否代人借款',
								name: '否'
							},{
								title: '申请人',
								name: '王月'
							}
						]
					},
                    {
                        nameInfo: '基本信息',
                        total: false,
                        rotate: true,
                        basicInformation: [
                            {
                                title: '借款模式',
                                name: '定额借款'
                            },{
                                title: '借款日期',
                                name: '2017-12-20'
                            },{
                                title: '借款单号',
                                name: 'JJK1712200001'
                            },{
                                title: '借款类别',
                                name: '其他采购业务'
                            },{
                                title: '借款金额',
                                name: '￥8.00'
                            },{
                                title: '已报销金额',
                                name: '￥8.00'
                            },{
                                title: '已还款金额',
                                name: '￥0.00'
                            },{
                                title: '借款事由',
                                name: 'C'
                            },{
                                title: '附件',
                                name: ''
                            },{
                                title: '业务事项',
                                name: '科研任务书/协议/合同中的\n业务付款'
                            }
                        ]
                    },{
                        nameInfo: '分摊信息',
                        total: true,
                        rotate: true,
                        basicInformation: [
                            {
                                title: '编码',
                                name: 'Y617031124'
                            },{
                                title: '名称',
                                name: '于建军&项目-自主部署-其他-0&面向新一代ARP研究'
                            },{
                                title: '负责人',
                                name: '于建军'
                            },{
                                title: '可用资金',
                                name: '￥50,629.08'
                            },{
                                title: '预算科目',
                                name: '项目性劳务费'
                            },{
                                title: '科目预算结余',
                                name: '￥43,080.00'
                            },{
                                title: '分摊金额',
                                name: '￥8.00'
                            },{
                                title: '分摊科目',
                                name: '1259005其他应收款-其他 -材料采购-零余额账户'
                            },{
                                title: '备注',
                                name: ''
                            }
                        ]
                    },{
                        nameInfo: '结算方式',
                        total: true,
                        rotate: true,
                        basicInformation: [
                            {
                                title: '结算方式',
                                name: '银行转账'
                            },{
                                title: '帐户名',
                                name: '王月'
                            },{
                                title: '收款帐号',
                                name: '0200*************4967'
                            },{
                                title: '账户类型',
                                name: '工资卡'
                            },{
                                title: '开户行',
                                name: '工商银行-北京分行'
                            },{
                                title: '收款金额',
                                name: '￥8.00'
                            },{
                                title: '收款账户',
                                name: '零余额账户用款额度-0200049629217000225'
                            },{
                                title: '付款科目',
                                name: '1011零余额账户用款额度-基本'
                            },{
                                title: '备注',
                                name: ''
                            }
                        ]
                    },{
                        nameInfo: '付款信息',
                        total: false,
                        rotate: true,
                        basicInformation: [
                            {
                                title: '结算方式',
                                name: '银行转账'
                            },{
                                title: '帐户名',
                                name: '王月'
                            },{
                                title: '收款帐号',
                                name: '0200*************4967'
                            },{
                                title: '账户类型',
                                name: '工资卡'
                            },{
                                title: '开户行',
                                name: '工商银行-北京分行'
                            },{
                                title: '收款金额',
                                name: '￥8.00'
                            },{
                                title: '收款账户',
                                name: '零余额账户用款额度-0200049629217000225'
                            },{
                                title: '付款科目',
                                name: '1011零余额账户用款额度-基本'
                            },{
                                title: '备注',
                                name: ''
                            }
                        ]
                    },{
                        nameInfo: '核销信息',
                        total: false,
                        rotate: true,
                        basicInformation: [
                            {
                                title: '类型',
                                name: '费用报销单'
                            },{
                                title: '报销时间',
                                name: 'BCL1709180001（材料）'
                            },{
                                title: '报销单号',
                                name: '0200*************4967'
                            },{
                                title: '报销单状态',
                                name: '已报销'
                            },{
                                title: '核销金额',
                                name: '￥8.00'
                            },{
                                title: '收款金额',
                                name: '￥8.00'
                            }
                        ]
                    },{
                        nameInfo: '记账信息',
                        total: false,
                        rotate: true,
                        basicInformation: [
                            {
                                title: '类型',
                                name: '费用报销单'
                            },{
                                title: '报销时间',
                                name: 'BCL1709180001（材料）'
                            },{
                                title: '报销单号',
                                name: '0200*************4967'
                            },{
                                title: '报销单状态',
                                name: '已报销'
                            },{
                                title: '核销金额',
                                name: '￥8.00'
                            },{
                                title: '收款金额',
                                name: '￥8.00'
                            }
                        ]
                    }
				],
				last: true,
				record: [
					{
					    time: '2017-09-18 10:47:20 耗时0.1小时',
						person: '财务审批：王月',
						control: '管理员审批',
						img: '../../../../static/images/agreement.png'
					},
                    {
                        time: '2017-09-18 10:46:05 耗时0.1小时',
                        person: '项目负责人审核：王月',
                        control: '管理员审批',
                        img: '../../../../static/images/agreement.png'
                    },
                    {
                        time: '2017-09-18 10:45:54 耗时369天内',
                        person: '项目负责人审核：王月',
                        control: '管理员审批',
                        img: '../../../../static/images/agreement.png'
                    }
				]
			}
		},
		components: {
            MtCell
		},
		methods: {
            rotateFun (item) {
				item.rotate = !item.rotate
			},
            //路由跳转
            go (urlName) {
                this.$router.push({name:urlName});
                window.pageYOffset = 0 ;
                document.documentElement.scrollTop = 0 ;
                document.body.scrollTop = 0;
            },
            combine() {
                this.last = !this.last;
			},
            goBack(){
                this.$router.go(-1); //返回上一级
            }
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss">
	.payment-detail{
		.p-header{
			height: 5.31rem;
			background: url("../../../../static/images/pbg.png") no-repeat;
			background-size: cover;
			color: #fff;
			text-align: center;
			.top{
				width: 100%;
				height: 0.94rem;
				line-height: 0.94rem;
				text-align: center;
				color: #fff;
				font-size: 0.33rem;
				/*position: fixed;*/
				top: 0;
				z-index: 10;
				.is-left{
					position: absolute;
				}
				.m-header-title{
					flex: 1;
					text-align: center;
					font-size: .36rem;
				}
			}
			.dhk{
				padding-top: 0.36rem;
				font-size: 0.26rem;
				line-height: 0.47rem;
			}
			.total{
				font-size: 0.74rem;
				line-height: 1.02rem;
			}
			.immediate{
				width: 3.18rem;
				height: 0.8rem;
				line-height:0.8rem;
				background: #fff;
				border-radius: 0.4rem;
				margin: 0.5rem auto;
				color: #146fec;
			}
			.money{
				width: 7.03rem;
				overflow: hidden;
				background: #fff;
				margin: 0 auto;
				border-radius: 5px;
				box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
				color: #292c34;
				.item{
					width: 33.3%;
					float: left;
					text-align: center;
					position: relative;
					margin: 0.28rem 0 0.28rem;
					p{
						&:first-child{
							font-size: 0.3rem;
						}
						&:last-child{
							font-size: 0.26rem;
							color: #999;
						}
					}
					&:after{
						content: "\200B";
						display: block;
						width: 1px;
						height: 100%;
						background: #e6e6e6;
						position: absolute;
						top: 0;
						right: 0;
					}
				}
				.line{

				}
			}
		}
		.contain{
			margin-top: 0!important;
			padding-top: 0.61rem;
			margin-bottom: 0;
		}
	}
	.payment-detail{
		.mint-cell-wrapper{
			/*min-height: 0.96rem;*/
			height: 0.96rem;
			background-image: none;
			i{
				color: #146fec;
				font-style: normal;
			}
			.angle{
				font-size: 0.32rem;
				color: #cccccc;
			}
		}
	}
	.payment-detail .mint-navbar{
		border-bottom: 1px solid #e8e8e8;
	}
	.payment-detail .mint-navbar .mint-tab-item{
		margin: 0 0.6rem;
		padding: 0.2rem 0;
		position: relative;
	}
	.payment-detail .mint-tab-item-label{
		font-size: 0.28rem!important;
	}
	.payment-detail .mint-cell-wrapper{
		padding: 0 0.24rem;
	}
	.payment-detail .mint-navbar .mint-tab-item.is-selected{
		margin-bottom: 0;
	}
	.payment-detail .mint-navbar .mint-tab-item:after{
		content: '\200B';
		display: block;
		width: 1px;
		height: 0.24rem;
		background: #e8e8e8;
		top: 0.22rem;
		right: -0.59rem;
		position: absolute;
	}
	.payment-detail .mint-navbar .mint-tab-item:last-child:after{
		display: none;
	}
	.payment-detail {
		.mint-cell-text{
			font-size: 0.28rem;
		}
		.content .mint-cell-text{
			font-size: 0.26rem;
		}
	}
	.payment-detail .top-content{
		border-bottom: 1px solid #e8e8e8;
	}
	.payment-detail .angle{
		transition: all .5s ease;
		transform: rotate(90deg);
	}
	.payment-detail .trans{
		transform: rotate(-90deg);
	}
	.item{
		&:first-child{
			.basic{
				margin-top: 0.24rem;
			}
			.content{
				height: 1.96rem;
			}
		}
		&:nth-child(2){
			.content{
				height: 9.8rem;
			}
		}
		&:nth-child(3){
			.content{
				height: 8.82rem;
			}
		}
		&:nth-child(4){
			.content{
				height: 8.82rem;
			}
		}
		&:nth-child(5){
			 .content{
				 height: 8.82rem;
			 }
		 }
		&:nth-child(6){
			.content{
				height: 5.58rem;
			}
		}
		&:nth-child(7){
			.content{
				height: 5.88rem;
			}
		}
		&:nth-child(8){
			.content{
				height: 5.88rem;
			}
		}
	}
	.payment-detail .content{
		transition: all .5s ease;
		transform-origin:left top;
		display: block;
		overflow: hidden;
	}
	.payment-detail .item .hide{
		height: 0;
		overflow: hidden;
	}
	.payment-detail .content .mint-cell{
		background: #fafafa;
		border-bottom: 1px solid #e8e8e8;
		min-height: 0.96rem;
		&:last-child{
			border-bottom: none;
		}
	}
	.payment-detail .content .mint-cell-wrapper{
		font-size: 0.26rem;
		color: #808080;
	}
	.payment-detail .content .mint-cell-value{
		color: #4d4d4d;
		width: 50%;
		display: inline-block;
		text-align: right;
		line-height: 0.38rem;
	}
	.mint-cell-value .total{
		font-size: 0.28rem;
		padding-right: 0.3rem;
	}
	.record{
		margin: 0 0.24rem;
		height: 5.95rem;
		transition: all 1s ease;
		overflow: hidden;
		li{
			&:first-child .title{
				margin-top: 0.25rem;
			}
			&:first-child .title:after{
				content: '\200B';
				display: block;
				width: 0.26rem;
				height: 0.26rem;
				background:url("../../../../static/images/active.png") no-repeat;
				background-size: contain;
				position: absolute;
				left: 0;
				top: 0.135rem;
			}
		}
		li .title{
			height: 0.56rem;
			line-height: 0.56rem;
			padding-left: 0.38rem;
			position: relative;
			font-size: 0.24rem;
			&:after{
				content: '\200B';
				display: block;
				width: 0.26rem;
				height: 0.26rem;
				background:url("../../../../static/images/normal.png") no-repeat;
				background-size: contain;
				position: absolute;
				left: 0;
				top: 0.135rem;
			}
		}
		.record-content{
			width: 6.6rem;
			height: 1.34rem;
			border-radius: 5px;
			background: #fff;
			margin-left: 0.38rem;
			position: relative;
			box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
			&:after{
				content: '\200B';
				display: block;
				width: 2px;
				height: 1.49rem;
				background: #d9dbe7;
				position: absolute;
				top: -0.07rem;
				left: -0.27rem;
			}
			p{
				padding-left: 0.28rem;
				font-size: 0.24rem;
				color: #292c34;
				&:first-child{
					padding-top: 0.33rem;
				}
				&:nth-child(2){
					padding-top: 0.05rem;
					color: #3888ff;
				}
			}
			img{
				width: 1.38rem;
				height: 1.34rem;
				position: absolute;
				top: 0;
				right: 0;
			}
		}
	}
	.load-more{
		width: 6.9rem;
		height: 0.68rem;
		line-height: 0.68rem;
		text-align: center;
		border-radius: 5px;
		background: #f1f1f1;
		color: #999999;
		margin: 0.26rem auto 0;
	}
	.approve{
		background: #fbfbfb;
		padding-bottom: 0.3rem;
	}
</style>

