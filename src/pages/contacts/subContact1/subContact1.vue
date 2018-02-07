<template>
	<div>
		<m-header :title="title" fixed id="head">
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="subContact1">
			<!--搜索框部分-->
			<div class="in_wrap">
				<input type="text" class="search" placeholder="搜索">
			</div>
			<p class="sub-search" style="color: #858585;font-size: .24rem;height:.48rem;line-height: .4rem;">
				<router-link to="/contact"><span style="color: rgb(133, 133, 133);">中科院</span></router-link>
				<i class="icon iconfont icon-icon07" style="font-size: .28rem;"></i>
				<router-link to="/contact/subContact"><span style="color: rgb(133, 133, 133);">生命科学院</span></router-link>
				<i class="icon iconfont icon-icon07" style="font-size: .28rem;"></i>
				<span style="color: #146fec">{{title}}</span>
			</p>
			<div class="person-lists">
				<mt-index-list :show-indicator="true">
					<mt-index-section :index="item.index" v-for="item in person">
						<mt-cell v-for="item1 in item.lists" @click.native="go('PersonDetail')">
							<div class="num_logo">
								<img :src="item1.src">
							</div>
							<div class="num_name">
								<p class="s-name-title">{{item1.name}}</p>
								<p class="s-name-cont"><span>{{item1.ym}}</span>&nbsp;<span>{{item1.xm}}</span>&nbsp;<span>{{item1.zw}}</span></p>
							</div>
						</mt-cell>
					</mt-index-section>
				</mt-index-list>
			</div>
		</m-contain>

	</div>
</template>
<script>
	export default {
		name: 'subContact1',
		data: function() {
			return {
			    title: '基因所',
				person:[{
					index: 'A',
					lists: [{
						name:'安杰',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					},{
						name:'安杰1',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					},{
						name:'安杰2',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					},{
						name:'安杰3',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					}]
			  	},
				{
					index: 'B',
					lists: [{
						name:'白杰',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					},{
						name:'百杰1',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					},{
						name:'白杰2',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					},{
						name:'白杰3',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					}]
				},
				{
					index: 'C',
					lists: [{
						name:'蔡杰',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					},{
						name:'蔡杰1',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					}]
				},
				{
					index: 'D',
					lists: [{
						name:'邓杰',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					},{
						name:'邓杰1',
						ym:'医学院',
						xm:'临床系',
						zw:'院长',
						src:require('../../../assets/images/user1.png')
					}]
				},
				{
					index: 'E'
				},
				{
					index: 'F',
                    lists: [{
                        name:'付杰',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    },{
                        name:'付杰1',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    }]
				},
				{
					index: 'G',
                    lists: [{
                        name:'关杰',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    },{
                        name:'关	杰1',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    }]
				},
				{
					index: 'H',
                    lists: [{
                        name:'和杰',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    },{
                        name:'和杰1',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    }]
				},
				{
					index: 'I'
				},
				{
					index: 'J',
                    lists: [{
                        name:'季杰',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    },{
                        name:'吉杰1',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    }]
				},
				{
					index: 'K'
				},
				{
					index: 'L',
                    lists: [{
                        name:'刘杰',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    },{
                        name:'刘杰1',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    }]
				},
				{
					index: 'M'
				},
				{
					index: 'N'
				},
				{
					index: 'O'
				},
				{
					index: 'P',
                    lists: [{
                        name:'潘杰',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    },{
                        name:'盘杰1',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    }]
				},
				{
					index: 'Q'
				},
				{
					index: 'R'
				},
				{
					index: 'S',
                    lists: [{
                        name:'石杰',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    },{
                        name:'时杰1',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    }]
				},
				{
					index: 'T'
				},
				{
					index: 'U'
				},
				{
					index: 'V'
				},
				{
					index: 'W',
                    lists: [{
                        name:'王杰',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    },{
                        name:'王杰1',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    }]
				},
				{
					index: 'X'
				},
				{
					index: 'Y'
				},
				{
					index: 'Z',
                    lists: [{
                        name:'张杰',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    },{
                        name:'张杰1',
                        ym:'医学院',
                        xm:'临床系',
                        zw:'院长',
                        src:require('../../../assets/images/user1.png')
                    }]
				},]
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
            },
			// 右边导航栏禁止滑动
            stopSrcoll () {
                document.querySelector('.mint-indexlist-nav').addEventListener('touchmove', function (ev) {
                     ev.stopPropagation();
                     event.preventDefault();
                    // return false
                },false);
			}
		},
        mounted() {
			this.stopSrcoll();
        }
	}
</script>
<style lang="scss">
	.subContact1 {
		margin-bottom: 0;
	}
	.sub-search{
		color: #858585;
		background: #FFFFFF;
		border-top: 1px solid #cbcbcb;
		border-bottom: 1px solid #e8e8e8;
		font-size: .24rem;
		padding: 0 .22rem;
	}
	.s-name-title{
		font-size: .28rem;
		margin-bottom: .1rem;
	}
	.s-name-cont{
		font-size: .24rem;
		color: #858585;
	}
	.person-lists {
		.mint-indexsection-index {
			padding: .05rem;
			display: none;
		}
		.mint-cell {
			border-top: .02rem solid #e8e8e8;
		}
		.mint-cell-title {
			flex: 0;
		}
		.mint-cell-wrapper {
			padding: 0 .2rem;
			background-image: none;
		}
		.mint-cell-value {
			height: 1.22rem;
			.num_logo {
				img {
					height: 1rem;
					width: 1rem;
				}
			}
			.num_name {
				padding-left: .37rem;
				line-height: 1.3;
				.s-name-title {
					font-size: .28rem;
					color: #292c34;
				}
				.s-name-cont {
					font-size: .24rem;
					color: #858585;
				}
			}

		}
		.mint-indexlist-navitem {
			color: #519dea;
			font-size: .20rem;
			padding: 0.01rem .2rem;
		}
		.mint-indexsection {
			.mint-cell:last-child {
				background-image: none;
			}
		}
		.mint-indexlist-content {
			margin-right: 0 !important;
			overflow-y: auto;
			height: 20rem;
		}
	}
</style>
