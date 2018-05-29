<template>
	<div class="index">
		<div class="s-index-header">
			<img src="../../../static/images/logo.png" />
			<h3>中科院ARP系统</h3>
		</div>
		<m-contain class="s-index-contain">
			<!--轮播图-->
			<!-- <mt-swipe :auto="0" style="height: 2.5rem; width:100%">
				<mt-swipe-item v-for="(item,index) in swiper" :key="item.id"><img :src="item.src" class="s-index-swiper" /></mt-swipe-item>
			</mt-swipe> -->
			
			<div class="s-index-navs">
				<ul>
					<li v-for="(item,id) in navs" :key="id">
						<i :class="item.iClass"></i>
						<p>{{item.name}}</p>
					</li>
				</ul>
			</div>
			<ul class="content-wrap s-index-all-navs clearfix">
				<li v-for="(item,id) in allNavs" :key="id">
					<i :class="item.iClass"></i>
					<p>{{item.name}}</p>
				</li>
				<!-- <li>
					<i class="s-index-meetingManage"></i>
					<p>会议管理</p>
				</li>
				<li>
					<i class="s-index-meetingManage"></i>
					<p>共享资源</p>
				</li>
				<li>
					<i class="s-index-meetingManage"></i>
					<p>内容发布</p>
				</li>
				<li>
					<i class="s-index-meetingManage"></i>
					<p>公示管理</p>
				</li>
				<li>
					<i class="s-index-meetingManage"></i>
					<p>我的信息</p>
				</li>
				<li>
					<i class="s-index-meetingManage"></i>
					<p>我的薪酬</p>
				</li>
				<li>
					<i class="s-index-meetingManage"></i>
					<p>请假</p>
				</li>
				<li>
					<i class="s-index-meetingManage"></i>
					<p>更多</p>
				</li> -->
			</ul>
			<!--通告-->
			<div class="s-index-tg content-wrap">
				<div class="s-tg-left"></div>
				<div class="s-tg-middle">
					<ul>
						<li v-for="(item,index) in tonggao" :key="index">
							<span><i></i>{{item.content}}</span>
							<span>{{item.date | tgdate}}</span>
						</li>
					</ul>
				</div>
				<div class="s-tg-right">
					<i class="icon iconfont icon-icon07">
						<i></i>
					</i>
				</div>
			</div>
			<!--我的代办-->
			<div class="s-index-db content-wrap">
				<div class="s-db-title">
					<div class="s-db-title-left">
						<i></i>
						<span>综合财务</span>
					</div>
					<div class="s-db-title-right">
						<i class="icon iconfont icon-icon07"></i>
					</div>
				</div>
				<div class="s-db-content">
					<ul>
						<li v-for="(item,index) in daiban" :key="index">
							<div><i :class="{isShow:item.isShow}"></i><span>{{item.date | tgdate}}</span></div>
							<div>{{item.contain}}</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="s-index-rc content-wrap">
				<div class="s-rc-title">
					<div class="s-rc-title-left">
						<i></i>
						<span>科研项目</span>
					</div>
					<div class="s-rc-title-right">
						<i class="icon iconfont icon-icon07"></i>
					</div>
				</div>
				<div class="s-rc-content">
					<ul>
						<li v-for="(item,index) in richeng" :key="index">
							<div><i :class="{isShow:item.isShow}"></i><span>{{item.date | tgdate}} &nbsp;&nbsp;{{item.place}}   </span></div>
							<div>{{item.contain}}</div>
						</li>
					</ul>
				</div>
			</div>
		</m-contain>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import mHeader from '../../components/header'
	import mContain from '../../components/container'
	import mFooter from '../../components/footer'
	export default {
		name: 'index',
		data() {
			return {
				isShow:false,
				// swiper: [{
				// 	id: 1,
				// 	title: '日本人来中国',
				// 	src: require('../../assets/images/swiper.png')
				// }, {
				// 	id: 2,
				// 	title: '日本人来中国1',
				// 	src: require('../../assets/images/swiper.png')
				// }, {
				// 	id: 3,
				// 	title: '日本人来中国2',
				// 	src: require('../../assets/images/swiper.png')
				// }, {
				// 	id: 4,
				// 	title: '日本人来中国3',
				// 	src: require('../../assets/images/swiper.png')
				// }],
				navs:[{
					iClass:'s-index-messageSearch',
					name:'信息查询'
				},{
					iClass:'s-index-sendCon',
					name:'发文'
				},{
					iClass:'s-index-sw',
					name:'收文'
				},{
					iClass:'s-index-bx',
					name:'报销'
				}],
				allNavs:[{
					iClass:'s-index-meetingManage',
					name:'会议管理'
				},{
					iClass:'s-index-shareResource',
					name:'共享资源'
				},{
					iClass:'s-index-sendContent',
					name:'内容发布'
				},{
					iClass:'s-index-noticeManage',
					name:'公示管理'
				},{
					iClass:'s-index-myInform',
					name:'我的信息'
				},{
					iClass:'s-index-mySalary',
					name:'我的薪酬'
				},{
					iClass:'s-index-myleave',
					name:'请假'
				},{
					iClass:'s-index-more',
					name:'更多'
				},],
				tonggao:[{
					content:'道生合服将于11月30日，到访我院',
					date:'刚刚'
				},{
					content:'10月1日至10月8日将放国庆长假',
					date:'09月29号'
				}],
				daiban:[{
					contain:'项目XXXXXX已提交审批，待补全计划详情1。',
					date:'今天 14：00',
					isShow:false
				},{
					contain:'项目XXXXXX已提交审批，待补全计划详情2。',
					date:'2017-10-12 15:20',
					isShow:true
				},{
					contain:'项目XXXXXX已提交审批，待补全计划详情3。',
					date:'2017-10-12 15:20',
					isShow:true
				},{
					contain:'项目XXXXXX已提交审批，待补全计划详情4。',
					date:'2017-10-12 15:20',
					isShow:true
				},{
					contain:'项目XXXXXX已提交审批，待补全计划详情5。',
					date:'2017-10-12 15:20',
					isShow:true
				}],
				richeng:[{
					contain:'生命科学学院XXX教授讲座：海参强再生能力的基因组1..',
					date:'今天 15:00',
					place:'中三楼3201',
					isShow:false
				},{
					contain:'生命科学学院XXX教授讲座：海参强再生能力的基因组2..',
					date:'2017-11-12 周四 15:00',
					place:'中三楼3201',
					isShow:true
				},{
					contain:'生命科学学院XXX教授讲座：海参强再生能力的基因组3..',
					date:'2017-11-12 周四 15:00',
					place:'中三楼3201',
					isShow:true
				},{
                    contain:'生命科学学院XXX教授讲座：海参强再生能力的基因组2..',
                    date:'2017-11-12 周四 15:00',
                    place:'中三楼3201',
                    isShow:true
                },{
                    contain:'生命科学学院XXX教授讲座：海参强再生能力的基因组3..',
                    date:'2017-11-12 周四 15:00',
                    place:'中三楼3201',
                    isShow:true
                }]
			}
		},
		components: {
			mHeader,
			mContain,
			mFooter
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.s-index-header {
		width: 100%;
		height: 0.94rem!important;
		line-height: 0.94rem !important;
		background: -webkit-linear-gradient(top, #02429b, #297ae8);
		color: #fff;
		font-size: 0.33rem;
		position: fixed;
		top: 0;
		z-index: 999;
		img {
			height: .6rem;
			width: .6rem;
			float: left;
			margin: .16rem;
		}
		h3 {
			line-height: .94rem;
			text-align: center;
			margin-right: .8rem;
			font-weight: normal;
		}
	}

	.s-index-contain {
		/*margin-top: 0;*/
		width: 100%;
		.s-index-swiper {
			width: 100%;
			height: 2.5rem;
		}
		;
		.s-index-navs {
			height: 1.7rem;
			width: 100%;
			margin: 0 auto;
			background: -webkit-linear-gradient(top, #297ae8,#4984e5);
			ul{
				display: flex;
				justify-content: center;
				width: 7.02rem;
				margin: 0 auto;
			}
			li {
				flex: 1;
				// float: left;
				// width: 25%;
				height: 1.2rem;
				/*padding: .2rem .5rem;*/
				text-align: center;
				padding-top: .2rem;
				/*border-right: 1px solid #6499e2;*/
				position: relative;
				i {
					height: .45rem;
					// width: 1.49rem;
					display: block;
					margin-bottom: .1rem;
				}
				i.s-index-bx {
					background: url("../../../static/images/bx-white.png") no-repeat center center;
					background-size: contain;
				}
				i.s-index-dc {
					background: url("../../../static/images/dingcan.png") no-repeat center center;
					background-size: contain;
				}
				i.s-index-qj {
					background: url("../../../static/images/qingjia.png") no-repeat center center;
					background-size: contain;
				}
				i.s-index-sw {
					background: url("../../../static/images/sw-white.png") no-repeat center center;
					background-size: contain;
				}
				i.s-index-gd {
					background: url("../../../static/images/more.png") no-repeat center center;
					background-size: contain;
				}
				i.s-index-messageSearch {
					background: url("../../../static/images/xxcx-white.png") no-repeat center center;
					background-size: contain;
				}
				i.s-index-sendCon {
					background: url("../../../static/images/fw-white.png") no-repeat center center;
					background-size: contain;

				}
				p {
					font-size: .28rem;
					color: #fff;
				}
			}
			li:after {
				content: '';
				display: block;
				height: 0.6rem;
				width: 1px;
				background: #6499e2;
				position: absolute;
				top: .3rem;
				right: 0;
			}
			li:last-child:after {
				display: none;
			}
		}
		/*通告*/
		.s-index-tg {
			height: 1.7rem;
			// margin-top: -.5rem;
			padding: .35rem .15rem;
			margin-bottom: .2rem;
			box-shadow: 0 3px 5px #cbcbcb;
			div {
				float: left;
				height: 1.02rem;
			}
			div.s-tg-left {
				width: 1.02rem;
				background: url('../../../static/images/laba.png') no-repeat center center;
				background-size: contain;
			}
			div.s-tg-middle {
				width: 5.2rem;
				height: 1.02rem;
				li {
					/*list-style: inside;*/
					height: .51rem;
					line-height: .51rem;
					margin-left: .2rem;
					span {
						font-size: .24rem;
					}
					span:first-child {
						/*margin-left: -0.4rem;*/
						position: relative;
						padding-left: .1rem;
						display: inline-block;
						i{
							position: absolute;
							top: 40%;
							left: -.06rem;
							height: .08rem;
							width:.08rem;
							background: #000000;
							border-radius: 50%;
						}
					}
					span:last-child {
						float: right;
						color: #858585;
					}
				}
			}
			div.s-tg-right {
				height: .3rem;
				width: .3rem;
				position: absolute;
				right: .75rem;
				i {
					margin-top: .15rem;
					display: block;
					font-weight: 700;
					position: relative;
					font-size: .42rem;
					margin-left: .4rem;
					color: #cbcbcb;
					i {
						content: '';
						display: block;
						height: .12rem;
						width: .12rem;
						border-radius: 50%;
						background: #ff0000;
						position: absolute;
						top: .08rem;
						left: -0.44rem;
					}
				}
			}
		}
		/*我的代办*/
		.s-index-db {
			.s-db-title {
				height: .60rem;
				/*line-height: .60rem;*/
				.s-db-title-left {
					float: left;
					width: 2.09rem;
					height: .58rem;
					background: url('../../../static/images/daiban-bg.png') no-repeat;
					background-size: contain;
					margin-top: .02rem;
					margin-left: -.1rem;
					padding-left: .25rem;
					padding-top: .1rem;
					position: relative;
					i {
						height: .26rem;
						width: .24rem;
						display: inline-block;
						background: url('../../../static/images/daiban-i_03.png') no-repeat;
						background-size: contain;
					}
					;
					span {
						font-size: .26rem;
						color: #fff;
						position:absolute;
						top: 0.08rem;
						right: .45rem;
					}
					;
				}
				.s-db-title-right {
					float: right;
					i {
						display: block;
						font-weight: 700;
						font-size: .4rem;
						color: #cbcbcb;
					}
				}
			}
			.s-db-content {
				width: 6.71rem;
				margin: 0 auto;
				/*background: pink;*/
				li {
					height: .9rem;
					line-height: .45rem;
					border-bottom: 1px dashed #e8e8e8;
					div {
						font-size: .26rem;
					}
					div:first-child {
						color: #a3a3a3;
						margin-top: .1rem;
						i {
							height: .22rem;
							width: .16rem;
							background: url('../../../static/images/daiban-i.png') no-repeat;
							display: inline-block;
							background-size: contain;
							margin-right: .13rem;
						}
						span {
							// padding-left: .13rem;
							font-size: .24rem;
						}
					}
					div:last-child {
						margin-top: -.1rem;
						color: #30323a;
					}
				}
				li:last-child {
					border: none;
				}
			}
		}
		/*我的日程*/
		.s-index-rc {
			margin-top: .2rem;
			.s-rc-title {
				height: .60rem;
				/*line-height: .60rem;*/
				.s-rc-title-left {
					float: left;
					width: 2.09rem;
					height: .58rem;
					background: url('../../../static/images/richeng-bg.png') no-repeat;
					background-size: contain;
					margin-top: .02rem;
					margin-left: -.1rem;
					padding-left: .25rem;
					padding-top: .1rem;
					position: relative;
					i {
						height: .26rem;
						width: .24rem;
						display: inline-block;
						background: url('../../../static/images/richeng-i_03.png') no-repeat;
						background-size: contain;
					}
					;
					span {
						font-size: .26rem;
						color: #fff;
						position:absolute;
						top: 0.08rem;
						right: .45rem;
					}
					;
				}
				.s-rc-title-right {
					float: right;
					i {
						display: block;
						font-weight: 700;
						font-size: .4rem;
						color: #cbcbcb;
					}
				}
			}
			.s-rc-content {
				width: 6.71rem;
				margin: 0 auto;
				/*background: pink;*/
				li {
					height: .9rem;
					line-height: .45rem;
					border-bottom: 1px dashed #e8e8e8;
					div {
						font-size: .26rem;
					}
					div:first-child {
						color: #a3a3a3;
						margin-top: .1rem;
						i {
							height: .22rem;
							width: .16rem;
							background: url('../../../static/images/richeng-i.png') no-repeat;
							display: inline-block;
							background-size: contain;
							margin-right: .13rem;
						}
						span {
							// padding-left: .13rem;
							font-size: .24rem;
						}
					}
					div:last-child {
						margin-top: -.1rem;
					}
				}
				li:last-child {
					border: none;
				}
			}
		}
	}
	.s-index-all-navs{
		// display: flex;
		margin-bottom: .2rem !important;
		box-shadow: 0 3px 5px #cbcbcb;
		margin-top: -.4rem !important;
		padding-bottom: .2rem;
		// flex-wrap: wrap;
		li{
			// flex: 1;
			float: left;
			width: 25%;
			text-align: center;
			margin: .2rem 0 0rem 0;
			font-size: .24rem;
			i {
				height: .45rem;
				// width: 1.49rem;
				display: block;
				margin-bottom: .1rem;
			}
			i.s-index-meetingManage {
				background: url("../../../static/images/icon13.png") no-repeat center center;
				background-size: contain;
			}
			i.s-index-shareResource {
				background: url("../../../static/images/icon14.png") no-repeat center center;
				background-size: contain;
			}
			i.s-index-sendContent {
				background: url("../../../static/images/icon15.png") no-repeat center center;
				background-size: contain;
			}
			i.s-index-noticeManage {
				background: url("../../../static/images/icon16.png") no-repeat center center;
				background-size: contain;
			}
			i.s-index-myInform {
				background: url("../../../static/images/icon20.png") no-repeat center center;
				background-size: contain;
			}
			i.s-index-mySalary {
				background: url("../../../static/images/icon21.png") no-repeat center center;
				background-size: contain;
			}
			i.s-index-myleave {
				background: url("../../../static/images/icon22.png") no-repeat center center;
				background-size: contain;
			}
			i.s-index-more {
				background: url("../../../static/images/index-all-more.png") no-repeat center center;
				background-size: contain;
			}
		}
	}
	.content-wrap {
		width: 7.02rem;
		margin: 0 auto;
		background: #fff;
		border-radius: .1rem;
	}
	.isShow {
		display: none !important;
	}

</style>
