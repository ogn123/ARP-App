<template>
	<div class="message">
		<m-header title="消息" fixed>
		</m-header>
		<m-contain>
			<!--搜索框部分-->
			<div class="in_wrap">
				<input type="text" class="search" placeholder="搜索">
			</div>
			<div class="cell">
				<mt-cell v-for="item in message">
					<img slot="icon" :src="item.img">
					<div class="news">
						<span class="mint-cell-text">{{item.text}}</span>
						<span class="mint-cell-label">{{item.label}}</span>
					</div>
					<span class="time">{{item.time}}</span>
				</mt-cell>
			</div>
		</m-contain>
		<m-footer>
		</m-footer>
	</div>
</template>

<script>
	export default {
		name: 'message',
		data(){
			return {	
				select:'Message',
				message: [
					{
					    text: '系统消息',
						label: '欢迎使用新一代arp系统',
						time: '17:34',
						img: require('../../assets/images/user5.png')
					},
                    {
                        text: '张三',
                        label: '在哪？',
                        time: '昨天',
                        img: require('../../assets/images/user2.png')
                    },
                    {
                        text: '李四',
                        label: '项目申请好了吗？',
                        time: '两天前',
                        img: require('../../assets/images/user3.png')
                    },
                    {
                        text: '王五',
                        label: '报销到帐了，你确认一下吧',
                        time: '10月13日',
                        img: require('../../assets/images/user4.png')
                    },
                    {
                        text: '赵六',
                        label: '请问您下午在办公室吗，有点事情想找您',
                        time: '9月1日',
                        img: require('../../assets/images/user1.png')
                    }
				]

			}
		},
		components: {
		},
		methods:{
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
	.s-message-ul li{
		height: 40px;
		line-height: 40px;
	}
	.message{
		.cell{
			border-top: 1px solid #cbcbcb;
			border-bottom: 1px solid #cbcbcb;
		}
		.mint-cell{
			&:last-child{
				.mint-cell-wrapper{
					border-bottom: none;
				}
			}
		}
		.mint-cell-wrapper{
			background-image: none;
			padding:0 0.22rem;
			border-bottom: 1px solid #e8e8e8;
			.mint-cell-title{
				flex: none;
				-webkit-box-flex: unset;
			}
			.mint-cell-value{
				flex: 1;
				align-items: flex-start;
			}
			.news{
				flex: 1;
				.mint-cell-text{
					color: #292c34;
					font-size: 0.28rem;
				}
				.mint-cell-label{
					color: #858585;
					margin-top: 0.22rem;
					font-size: 0.24rem;
				}
			}
			img{
				width: 0.9rem;
				height: 0.9rem;
				margin: 0.17rem 0.35rem 0.17rem 0;
			}
			.time{
				font-size: 0.2rem;
				color: #a5a5a5;
			}


		}
		.mint-cell{
			&:first-child{
				.mint-cell-wrapper .news{
					.mint-cell-text{
						font-size: 0.24rem;
					}
				}
			}
		}


	}

</style>
