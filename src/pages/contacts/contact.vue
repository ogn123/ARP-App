<template>
	<div>
		<m-header title="通讯录"  fixed>
		</m-header>
		<m-contain class="t_contain">
			<!--搜索框部分-->
			<div class="in_wrap">
				<input type="text" class="search" placeholder="搜索">
			</div>
			<!--最近 联系人-->
			<ul class="txl_content">
				<li>
					<p class="recent_contacts pd22 xg_title">
						最近联系人
						<span class="fr" v-on:click="toggle"><i class="icon iconfont " :class="unfold?'icon-arrow-down':'icon-icon07'"></i></span>
					</p>
					<ul class="" v-show="unfold">
						<li class="pd22 t_detail clear t_li" v-for="(item,i) in rencontacts.rencontent">
							<router-link to="/contact/subContact/subContact1/personDetail">
								<span class="t_userpic"><img :src="item.img"/></span>
								<div class="t_username">
									<div style="color: #000000;">{{item.name}}</div>
									<p><span>{{item.ym}}</span> <span>{{item.xm}}</span> <span>{{item.zw}}</span></p>
								</div>
							</router-link>
						</li>
					</ul>
				</li>
				<li class="xg_top">

					<p class="recent_contacts pd22 xg_title">
						全部联系人
					</p>
					<ul>
						<li class="t_allcontact pd22 clear a-ly xg_angle" v-for="(item, id) in allcontacts">
							<router-link to="/contact/subContact">
								<p>
									<span>{{item.yx}}</span>
									<span class="fr f26">{{item.rs}}<i class="icon iconfont icon-icon07"></i></span>
								</p>
							</router-link>

						</li>
					</ul>
				</li>
			</ul>
		</m-contain>
		<m-footer></m-footer>
	</div>
</template>

<script>
	export default {
		name: 'Contact',
		data: function() {
			return {
				unfold: true,
				rencontacts: {
					"recentcontacts": "最近联系人",
					"rencontent": [{
						'img': require("../../assets/images/user1.png"),
						"name": "安素荣",
						"ym": '医学院',
						"xm": '临床系',
						"zw": '院长'
					}, {
						'img': require("../../assets/images/user2.png"),
						"name": "白洁",
						"ym": '能源动力学院',
						"xm": '涡轮系',
						"zw": '教授'
					}, {
						'img': require("../../assets/images/user3.png"),
						"name": "白洁",
						"ym": '能源动力学院',
						"xm": '流体动力系',
						"zw": '教授'
					}, {
						'img': require("../../assets/images/user4.png"),
						"name": "白洁",
						"ym": '能源动力学院',
						"xm": '流体动力系',
						"zw": '院长'
					}]
				},
				allcontacts: [{
					yx: '生命科学院',
					rs: '46'
				}, {
					yx: '能源动力系',
					rs: '46'
				}, {
					yx: '材料院',
					rs: '46'
				}, {
					yx: '生命科学院',
					rs: '37'
				}, {
					yx: '生命科学院',
					rs: '56'
				}, {
					yx: '生命科学院',
					rs: '46'
				}, {
					yx: '生命科学院',
					rs: '46'
				}, {
					yx: '生命科学院',
					rs: '46'
				}, {
					yx: '生命科学院',
					rs: '46'
				}, {
					yx: '能源动力系',
					rs: '46'
				}]
			}
		},
		components: {
		},
		methods: {
			toggle: function() {
				this.unfold = !this.unfold;
			},



		}
	}
</script>
<style>
	.t_contain {
		margin-bottom: 1rem!important;
	}
	.txl_content li{
		background: #fff
	}
	.a-ly a{
		color: #222222 !important;
	}
	.t_li{
		border-bottom: 1px solid #e8e8e8;
	}
	.t_li:last-child{
		border-bottom: 1px solid #cbcbcb;
	}
	.ml20{
		margin-left: .2rem;
	}
</style>
<style>
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .clear:after{
    content: "\200B";
    width: 0;
    height: 0;
    display: block;
    clear: both;
  }
  .t_header{
    width: 100%;
    height: 0.94rem!important;
    line-height: 0.94rem;
    background: -moz-linear-gradient( top,#ccc,#000);
    background: -webkit-linear-gradient(top, #02429b,  #297ae8);
    text-align: center;
    color: #fff;
    font-size: 0.33rem;
  }
  /*中间部分*/
  .t_contain{
    /*margin-top: 0.94rem!important;*/
  }
  .in_wrap{
    width: 7.04rem;
    padding-top: 0.2rem;
    margin: 0 auto;
    padding-bottom: 0.2rem;
  }
  .search{
    width: 7.04rem;
    height: 0.64rem;
    border: 1px solid #cbcbcb;
    padding-left: 0.68rem;
    background:#fff url("../../../static/images/searchIcon.png") no-repeat 0.26rem center;
    background-size: 0.3rem 0.3rem;
    border-radius: 5px;
    outline: none;
  }
  .txl_content{
   /* background: #fff;*/
  }
  .recent_contacts{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #e8e8e8;
    border-top: 1px solid #cbcbcb;
    color: #146fec;
  }
  .pd22{
    padding: 0 .22rem;
  }
  .t_userpic{
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
    float: left;
  }
  .t_username{
    width: 6rem;
    float: left;
    padding: 0.09rem 0.35rem 0;
  }
  .t_username h5{
    font-size: 0.28rem;
    color: #292c34;
    padding-top: 0.1rem;
    font-weight: normal;
  }
  .t_username p{
    font-size: 0.24rem;
    color: #858585;
  }
  .t_userpic img{
    width: 100%;
    height: auto;
  }
  .t_detail{
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;

  }
  .t_allcontact{
    height: 0.81rem;
    line-height: 0.77rem;
    border-bottom: 1px solid #e8e8e8;
  }
  /*1130修改*/
  .xg_title{
  	font-size: 0.24rem;
  }
  .xg_title i{
  	color: #d1d1d1;
    font-size: 0.32rem;
  }
  .xg_top{
  	margin-top: 0.2rem;
  }
  .xg_angle i{
  	color: #d1d1d1;
	  font-weight: 900;
	  font-size: 0.32rem;
  }
  .f26{
  	font-size: .26rem;
  }
</style>
