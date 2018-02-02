<template>
	<div class="change-account">
		<m-header title="我的报销">
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="myaccount">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">报销列表</mt-tab-item>
				<mt-tab-item id="2">报销统计</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<!--搜索框部分-->
					<mt-search v-model="value"  placeholder="请输入单号或报销事由进行搜索" cancel-text="" class="s-search"></mt-search>
					<!--主体-->
					<div class="s-contain">
						<!--主体tabs-->
						<ul class="s-contain-title">
							<li v-for="(item,id) in myaccountstatus" :class="{sbg:active==id}" @click="change(id,item)">{{item}}</li>
						</ul>
						<!--审批中-->
						<ul class="s-contain-contain" v-for="(item,id) in data" id="spz" v-show="lisactive==0">
							<li>
								<p>单号：<span>{{item.content}}</span></p>
								<p>报销金额：<span>{{item.money}}</span></p>
								<p>报销事由：<span>{{item.reason}}</span></p>
								<p class="last-p">审批人： <span>{{item.name}}</span> <span class="s-date">{{item.date}}</span></p>
							</li>
						</ul>
						<!--财务审核-->
						<ul class="s-contain-contain" v-for="(item,id) in data" id="cwsh" v-show="lisactive==1">
							<li>
								<p>单号：<span>{{item.content}}</span></p>
								<p>报销金额：<span>{{item.money}}</span></p>
								<p>报销事由：<span>{{item.reason}}</span></p>
								<p class="last-p">审批人： <span>{{item.name}}</span> <span class="s-date">{{item.date}}</span></p>
							</li>
						</ul>
						<!--已办结-->
						<ul class="s-contain-contain" v-for="(item,id) in data" id="ybj" v-show="lisactive==2">
							<li>
								<p>单号：<span>{{item.content}}</span></p>
								<p>报销金额：<span>{{item.money}}</span></p>
								<p>报销事由：<span>{{item.reason}}</span></p>
								<p class="last-p">审批人： <span>{{item.name}}</span> <span class="s-date">{{item.date}}</span></p>
							</li>
						</ul>
						<!--草稿-->
						<ul class="s-contain-contain" v-for="(item,id) in data" id="cg" v-show="lisactive==3">
							<li>
								<p>单号：<span>{{item.content}}</span></p>
								<p>报销金额：<span>{{item.money}}</span></p>
								<p>报销事由：<span>{{item.reason}}</span></p>
								<p class="last-p">审批人： <span>{{item.name}}</span> <span class="s-date">{{item.date}}</span></p>
							</li>
						</ul>
					</div>
					<div class="add"></div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div>报销统计</div>
				</mt-tab-container-item>
			</mt-tab-container>

		</m-contain>
	</div>
</template>

<script>
	export default {
		name: 'myAccount',
		data() {
			return {
				select:'Message',
				tabsactive:0,
				active: 0,
				lisactive:1,
				selected: '1',
				value: '',
				sTabs:['报销列表','报销统计'],
				myaccountstatus: ['审批中', '财务审核', '已办结', '草稿'],
				data: [{
					content: 'BCL1709180001（耗材费）',
					money: '100.00',
					reason: '测试凭证号',
					name: '张三',
					date: '11-09'
				}, {
					content: 'BCL1709180001（耗材费）',
					money: '100.00',
					reason: '测试凭证号',
					name: '张三',
					date: '11-09'
				}, {
					content: 'BCL1709180001（耗材费）',
					money: '100.00',
					reason: '测试凭证号',
					name: '张三',
					date: '11-09'
				}, {
					content: 'BCL1709180001（耗材费）',
					money: '100.00',
					reason: '测试凭证号',
					name: '张三',
					date: '11-09'
				}, {
					content: 'BCL1709180001（耗材费）',
					money: '100.00',
					reason: '测试凭证号',
					name: '张三',
					date: '11-09'
				}, {
					content: 'BCL1709180001（耗材费）',
					money: '100.00',
					reason: '测试凭证号',
					name: '张三',
					date: '11-09'
				}, {
					content: 'BCL1709180001（耗材费）',
					money: '100.00',
					reason: '测试凭证号',
					name: '张三',
					date: '11-09'
				}]
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
<style lang="scss" scoped>
	/*中间主体tabs*/
	.s-contain {
		border-top: 1px solid #e8e8e8;
		padding-top: .2rem;
		background: #ffffff;
		.s-contain-title {
			width: 5.65rem;
			margin: 0 auto;
			height: .58rem;
			margin-bottom: .20rem;
			li {
				float: left;
				width: 25%;
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
		.s-contain-contain {
			li {
				border-top: 1px solid #e8e8e8;
				padding: .18rem .24rem;
				.s-date {
					float: right;
				}
			}
			.last-p {
				color: #c2c2c2;
				font-size: .24rem;
			}
		}
	}
	.sbg {
		background: #146fec;
		color: #ffffff !important;
	}
	/*底部新增符号*/
	.add{
		height: .8rem;
		width: .84rem;
		background: url('../../../../static/images/add.png') no-repeat;
		position: fixed;
		right: .24rem;
		bottom: .4rem;
		background-size: contain;
	}
</style>
<style lang="scss">
	.change-account{
		.myaccount {
			/*顶部tabs*/
			.mint-navbar{
				border-bottom: 1px solid #e8e8e8;
				.mint-tab-item{
					margin: 0 1.2rem;
					padding: 0.2rem 0;
					position: relative;
					color: #858585;
					box-sizing: border-box;
					.mint-tab-item-label {
						font-size: 0.28rem !important;
					}
					&.is-selected {
						margin-bottom: 0;
						color: #146fec;
						border-bottom: 3px solid #146fec;
					}
					&:after {
						content: "\200B";
						display: block;
						width: 1px;
						height: .35rem;
						position: absolute;
						top: .2rem;
						right: -1.2rem;
						background: #e8e8e8;
					}
					&:last-child:after{
						display: none;
					}
				}
			}
			/*搜索框*/
			.mint-search {
				height:1rem !important;
				.mint-searchbar {
					background: #f2f2f2;
					.mint-searchbar-inner {
						border: 1px solid #e8e8e8;
						border-radius: 3px;
						height: .65rem;
						.mintui-search {
							font-size: .4rem;
							margin-right:  .1rem;

						}
					}
					.mint-searchbar-cancel {
						margin: 0
					}
				}

			}
			.s-search{
				&:after{
					position: absolute;
					top: 0.35rem;
					right: .4rem;
					background:url('../../../../static/images/loudou.png');
					height: .28rem;
					width: .28rem;
					background-size: contain;
					display: block;
					content:'';
					z-index: 9;
				}
			}
		}
	}

</style>
