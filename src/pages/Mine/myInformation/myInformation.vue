<template>
	<div class="my-information">
		<m-header title="我的信息">
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="myaccount">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">基本信息</mt-tab-item>
				<mt-tab-item id="2">工作信息</mt-tab-item>
				<mt-tab-item id="3">分类信息</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div v-for="(item,index) in info">
						<mt-cell :title="item.nameInfo" @click.native="rotateFun(item)" class="top-content basic">
							<i class="icon iconfont icon-icon07 angle" :class="item.rotate? 'trans':''"></i>
						</mt-cell>
						<div class="content" :class="item.rotate? 'hide':''" ref="menuItem">
							<mt-cell v-for="item in item.basicInformation" :title="item.title" :value="item.name"></mt-cell>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<p>2</p>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<p>3</p>
				</mt-tab-container-item>
			</mt-tab-container>
		</m-contain>
	</div>
</template>
<script>
	export default {
		name: 'myInformation',
		data() {
			return {
                selected: '1',
                rotate: false,
				info: [
					{
						nameInfo: '基础信息',
                        rotate: false,
						basicInformation: [
							{
								title: '员工姓名',
								name: '张三'
							},{
								title: '员工编号',
								name: 'A1705'
							},{
								title: '性别',
								name: '男'
							},{
								title: '年龄',
								name: '24'
							},{
								title: '人员类型',
								name: '项目聘用人员'
							},{
								title: '参加工作日期',
								name: '2015-09-14'
							},{
								title: '身份证号',
								name: '32789199209010987'
							},{
								title: '户口所在地',
								name: '江苏省苏州市'
							}
						]
					},
                    {
                        nameInfo: '联系信息',
                        rotate: true,
                        basicInformation: [
                            {
                                title: '员工姓名',
                                name: '张三'
                            },{
                                title: '员工编号',
                                name: 'A1705'
                            },{
                                title: '性别',
                                name: '男'
                            },{
                                title: '年龄',
                                name: '24'
                            },{
                                title: '人员类型',
                                name: '项目聘用人员'
                            },{
                                title: '参加工作日期',
                                name: '2015-09-14'
                            },{
                                title: '身份证号',
                                name: '32789199209010987'
                            },{
                                title: '户口所在地',
                                name: '江苏省苏州市'
                            }
                        ]
                    },{
                        nameInfo: '分配信息',
                        rotate: true,
                        basicInformation: [
                            {
                                title: '员工姓名',
                                name: '张三'
                            },{
                                title: '员工编号',
                                name: 'A1705'
                            },{
                                title: '性别',
                                name: '男'
                            },{
                                title: '年龄',
                                name: '24'
                            },{
                                title: '人员类型',
                                name: '项目聘用人员'
                            },{
                                title: '参加工作日期',
                                name: '2015-09-14'
                            },{
                                title: '身份证号',
                                name: '32789199209010987'
                            },{
                                title: '户口所在地',
                                name: '江苏省苏州市'
                            }
                        ]
                    }
				]
			}
		},
		components: {
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
            }
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss">
	.my-information .mint-navbar{
		border-bottom: 1px solid #e8e8e8;
	}
	.my-information .mint-navbar .mint-tab-item{
		margin: 0 0.6rem;
		padding: 0.2rem 0;
		position: relative;
		color: #858585;
		&:last-child:after{
			display: none;
		}
	}
	.mint-tab-item:after{
		content: '\200B';
		display: inline-block;
		width: 1px;
		height: 0.24rem;
		background: #e8e8e8;
		position: absolute;
		top:0.23rem;
		right: -0.59rem;
	}
	.my-information .mint-tab-item-label{
		font-size: 0.28rem!important;
	}
	.my-information .mint-cell-wrapper{
		padding: 0 0.24rem;
	}
	.my-information .mint-navbar .mint-tab-item.is-selected{
		margin-bottom: 0;
		color: #146fec;
		border-bottom-color: #146fec;
	}
	.my-information {
		.mint-cell-text{
			font-size: 0.28rem;
		}
		.content{
			.mint-cell-text{
				font-size: 0.26rem;
			}
		}
		.mint-cell-wrapper{
			background-image: none;
			height: 0.96rem;
		}
	}

	.my-information .top-content{
		border-bottom: 1px solid #e8e8e8;
	}
	.my-information .angle{
		transition: all .5s ease;
		transform: rotate(90deg);
	}
	.my-information .trans{
		transform: rotate(-90deg);
	}
	.my-information .content{
		transition: all .5s ease;
		transform-origin:left top;
		display: block;
		height: 7.84rem;
	}
	.my-information .hide{
		height: 0;
	}
	.my-information .content .mint-cell{
		background: #fafafa;
		border-bottom: 1px solid #e8e8e8;
	}
	.my-information .content .mint-cell-wrapper{
		font-size: 0.26rem;
		color: #808080;
	}
	.my-information .content .mint-cell-value{
		color: #444444;
	}
	.my-information .basic{
		margin-top: 0.24rem;
		border-top: 1px solid #e8e8e8;
	}
</style>

