<template>
	<div class="db">
		<m-header title="待办" fixed>
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="t_contain">
			<h4 class="title">{{binformation.title}}</h4>
			<div>
				<div class="basic"><i class="basic-i"></i>基本信息</div>
				<div class="detail">
					<ul>
						<li>
							<span>当前环节：</span>
							<span>{{binformation.dq}}</span>
						</li>
						<li>
							<span>公文类型：</span>
							<span>{{binformation.gw}}</span>
						</li>
						<li>
							<span>文号：</span>
							<span>{{binformation.wh}}</span>
						</li>
						<li>
							<span>主办单位：</span>
							<span>{{binformation.zb}}</span>
						</li>
						<li>
							<span>拟稿人：</span>
							<span>{{binformation.ng}}</span>
						</li>
						<li>
							<span>拟稿日期：</span>
							<span>{{binformation.ngrq}}</span>
						</li>
						<li>
							<span>电话：</span>
							<span>{{binformation.tel}}</span>
						</li>
					</ul>
					<ul v-show="more">
						<li>
							<span>当前环节：</span>
							<span>{{binformation.ngrq}}</span>
						</li>
						<li>
							<span>当前环节：</span>
							<span>{{binformation.tel}}</span>
						</li>
						<li>
							<span>当前环节：</span>
							<span>处领导审核</span>
						</li>
						<li>
							<span>当前环节：</span>
							<span>处领导审核</span>
						</li>
					</ul>

				</div>
				<p class="more">
					<button v-on:click="open()">
            			<i class="icon iconfont" :class="more?'icon-jiantou-copy-copy':'icon-arrow-down'"></i>
          			</button>
				</p>
			</div>
			<div class="dbbot">
				<div class="sug"><i class="reason-i"></i>办理意见</div>
				<ul class="blyj">
					<li v-for="(item,index) in hegao">
						<div>
							<span>办公厅文书处核稿：</span>
							<span> {{item.name}} &nbsp;&nbsp;{{item.date}}</span>
							<p style="color:#858585;">{{item.content}}</p>
						</div>
					</li>
				</ul>
			</div>
		</m-contain>
		<router-link to='/application/emailArticle/documentDetail/writeHZ'>
			<div class="write">填写回执</div>
		</router-link>
	</div>
</template>

<script>
	import MtButton from "../../../../node_modules/mint-ui/packages/button/src/button";
	export default {
		name: 'documentDetail',
		data: function() {
			return {
				more: false,
				binformation: {
					title: '手机公文测试0914003',
					"dq": "处领导审核",
					"gw": "中国科学院文件",
					"wh": "科发际『2015』号",
					"zb": "中国科学院国际合作局综合处",
					"ng": "彭颖",
					"ngrq": "2015年09月14号",
					"tel": "68597523"
				},
				hegao:[{
					name:'张三',
					date:'11-29',
					content:'哈哈哈的哈哈大的打的1'
				},{
					name:'张三',
					date:'11-29',
					content:'哈哈哈的哈哈大的打的2'
				},{
					name:'张三',
					date:'11-29',
					content:'哈哈哈的哈哈大的打的3'
				},{
					name:'张三',
					date:'11-29',
					content:'哈哈哈的哈哈大的打的4'
				},{
					name:'张三',
					date:'11-29',
					content:'哈哈哈的哈哈大的打的5'
				}]
			}
		},
		components: {
			MtButton
		},
		methods: {
			open: function() {
				this.more = !this.more;
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

<style scoped>
	*{
		font-size: .26rem;
	}
	.db .t_contain {
		/*margin-top: 1.14rem!important;*/
		background: #fff;
		padding: 0 0.23rem;
		border-bottom: 1px solid #cbcbcb;
		border-top: 1px solid #CBCBCB;
		margin-bottom: 1.2rem!important;
	}

	.db .title {
		text-align: center;
		color: #0e62c3;
		font-size: 0.32rem;
		font-weight: normal;
		/*padding-top: 0.2rem;*/
		/*padding-bottom: 0.3rem;*/
		height: .73rem;
		line-height: .73rem;
	}

	.db .basic {
		font-size: 0.3rem;
		color: #0e62c3;
	}

	.db .basic i {
		height: .24rem;
		width: .23rem;
		display: inline-block;
		background: url('../../../../static/images/basic-i.png') no-repeat;
		background-size: contain;
		/*margin-left: .1rem;*/
		margin-right: .2rem;
	}

	.db .detail li {
		line-height: 0.53rem;
	}

	.db .detail li span:first-child {
		display: inline-block;
		width: 1.5rem;
	}

	.db .detail li span:last-child {
		display: inline-block;
		width: 5.2rem;
	}

	.db .detail li span:nth-child(2n+1) {
		text-align: right;
		color: #292c34;
	}

	.db .detail li span:nth-child(2n) {
		text-align: left;
		color: #858585;
		padding-left: 0.2rem;
	}

	.db .more {
		text-align: center;
		border-bottom: 1px solid #e8e8e8;
	}

	.db .more button {
		border: 0;
		outline: none;
		background: none;
	}

	.db .more i {
		padding-bottom: 0.2rem;
		color:#CBCBCB;
		font-size: 0.24rem;
	}

	.db .sug {
		font-size: 0.3rem;
		color: #0e62c3;
		margin-top: 0.3rem;
	}

	.db .sug i {
		padding-right: 0.18rem;
	}

	.db .wg h4 {
		font-weight: normal;
		font-size: 0.28rem;
		color: #292c34;
		padding-top: 0.26rem;
	}

	.db .wg p {
		color: #858585;
		padding-bottom: 0.26rem;
		margin-top: 0.15rem;
	}

	.db .time {
		padding-top: 0.26rem;
	}

	.db .blyj li {
		height: 1rem;
		/*line-height: .6rem;*/
		border-bottom: 1px dashed #e8e8e8;
	}
	.db .blyj li>p:first-child{
		margin-top: 0.15rem;
		/*margin-bottom: -0.1rem;*/
	}
	.db .blyj li>p:nth-child(2){
		margin-top: -0.15rem;
	}
	.db .blyj li:last-child {
		border-bottom: none;
	}

	.dbbot {
		min-height: 5.12rem;
	}
	.reason-i{
		height: .23rem;
		width: .23rem;
		display: inline-block;
		background: url('../../../../static/images/reason-i.png') no-repeat;
		background-size: contain;
		/*margin-left: .1rem;*/
		margin-right: .2rem;
	}
	.db .write {
		width: 100%;
		height: 1rem;
		text-align: center;
		line-height: 1rem;
		background: #0e62c3;
		color: #fff;
		position: fixed;
		bottom: 0;
		outline: none;
		border-radius: 0;
		font-size: .30rem;
	}
</style>
<style lang="less">
	.blyj{
		li{
			line-height: .53rem;
			p{
				span:last-child{
					float: right;
					color: #a5a5a5;
				}
			}
			p:last-child {
				margin: -.1rem 0 .1rem 0;
				color: #858585;
			}

		}

	}
</style>
