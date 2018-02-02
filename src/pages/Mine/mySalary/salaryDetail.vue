<template>
	<div class="salary-detail">
		<m-header title="2017-10工资明细">
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="sd-content">
			<div class="sf">
				<p><span class="money"></span>实发合计（元）</p>
				<p><span>¥ </span>5099.00</p>
			</div>
			<div class="salary" v-for="(item,index) in salary">
				<mt-cell :title="item.title" class="yf" @click.native="rotate(index)">
					<span>{{item.amount}}</span>
					<img slot="icon" :src="item.img">
					<i class="iconfont icon-icon07" :class="item.show? 'trans':'untrans'"></i>
				</mt-cell>
				<div class="s-content"  :class="item.show? '':'hide'">
					<mt-cell v-for="item in item.content" :title="item.contentTitle" :value="item.value"></mt-cell>
				</div>
			</div>
		</m-contain>
	</div>
</template>
<script>
	export default {
		name: 'salaryDetail',
		data() {
			return {
				salary:[
					{
					    title: '应发工资',
                        amount: '6,431.00',
						img: '../../../../static/images/s-detail1.png',
						show: true,
						content: [
							{
							    contentTitle: '工资1',
								value: '4,400.00'
							},
                            {
                                contentTitle: '工资2',
                                value: '31.00'
                            },
                            {
                                contentTitle: '工资3',
                                value: '1,500.00'
                            },
                            {
                                contentTitle: '工资4',
                                value: '500.00'
                            }
						]
					},
                    {
                        title: '工资扣款',
                        amount: '210.05',
                        img: '../../../../static/images/s-detail2.png',
                        show: false,
                        content: [
                            {
                                contentTitle: '工资1',
                                value: '4,400.00'
                            },
                            {
                                contentTitle: '工资2',
                                value: '31.00'
                            },
                            {
                                contentTitle: '工资3',
                                value: '1,500.00'
                            },
                            {
                                contentTitle: '工资4',
                                value: '500.00'
                            }
                        ]
                    },
                    {
                        title: '代扣代缴',
                        amount: '210.05',
                        img: '../../../../static/images/s-detail3.png',
                        show: false,
                        content: [
                            {
                                contentTitle: '工资1',
                                value: '4,400.00'
                            },
                            {
                                contentTitle: '工资2',
                                value: '31.00'
                            },
                            {
                                contentTitle: '工资3',
                                value: '1,500.00'
                            },
                            {
                                contentTitle: '工资4',
                                value: '500.00'
                            }
                        ]
                    }
				]
			}
		},
		components: {
		},
		methods: {
            rotate(index) {
			    // console.log(index)
				this.salary[index].show = !this.salary[index].show
			}
		},
        computed: {
		},
		created () {
        }
	}
</script>
<style rel="text/scss" lang="scss">
	.salary-detail{
		.sf{
			width: 100%;
			padding: 0 0.23rem;
			background: #fff;
			text-align: center;
			.money{
				width: 0.38rem;
				height: 0.36rem;
				display: inline-block;
				background: url("../../../../static/images/salary-detail.png") no-repeat;
				background-size: contain;
				position: absolute;
				top:0.02rem;
				left: -0.46rem;
			}
			p{
				&:first-child{
					margin-top: 0.6rem;
					margin-left: 0.46rem;
					display: inline-block;
					position: relative;
				}
				&:nth-child(2){
					padding-top: 0.2rem;
					font-size: 0.48rem;
					color: #292c34;
					letter-spacing: 0.04rem;
					padding-bottom: 0.65rem;
					span{
						font-size: 0.36rem;
					}
				}

			}
		}
		.salary{
			margin-top: 0.2rem;
			background: #fff;
			.mint-cell{
				min-height: 0.96rem;
			}
			.yf{
				.mint-cell-value{
					color: #146fec;
					span{
						display: inline-block;
						padding-right: 0.2rem;
					}
				}
			}
			.mint-cell-wrapper{
				border-bottom: 1px solid #ebebeb;
				font-size:0.32rem;
				padding: 0 0.32rem;
				&:last-child{
					border-bottom: none;
				}
				.mint-cell-title{
					img{
						width: 0.25rem;
						height: 0.28rem;
					}
				}
				i{
					font-size: 0.32rem;
					transition: all .3s ease;
					color: #c5c5c5;
				}
			}
			.s-content{
				height: 3.84rem;
				transition: all .3s ease;
				overflow: hidden;
				.mint-cell{
					font-size: 0.26rem;
					background: #fbfbfb;
					.mint-cell-title{
						color: #8b8b8b;
					}
					.mint-cell-value{
						color: #4d4d4d;
					}
				}
			}
			.hide{
				height: 0;
			}
		}

		.trans{
			transform: rotate(90deg);
		}
		.untrans{
			transform: rotate(-90deg);
		}
	}
</style>


