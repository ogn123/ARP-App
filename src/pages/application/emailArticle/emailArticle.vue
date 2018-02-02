<template>
	<div class="email-article">
		<m-header title="我的发文">
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="email-article" style="margin-bottom: 0">
			<mt-cell
				v-for="item in list"
				:title="item.title"
				:label="item.label"
				:value="item.value"
				@click.native="go('documentDetail')">
			</mt-cell>
		</m-contain>
	</div>
</template>
<script>
	export default {
		name: 'emailArticle',
		data() {
			return {
                list: [
                    {
                        title: '手机公文测试0914001',
                        label: '当前环节：处领导审核',
                        value: '昨天 17:34'
                    },
                    {
                        title: '手机公文测试0914002',
                        label: '当前环节：拟稿',
                        value: '11-03 11:06'
                    },
                    {
                        title: '手机公文测试0914003',
                        label: '当前环节：拟稿人复核发送',
                        value: '11-01 09:25'
                    },
                    {
                        title: '手机公文测试0914004',
                        label: '当前环节：处领导审核',
                        value: '10-29 17:34'
                    }
                ]
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
            }
		}
	}
</script>
<!--新增的样式-->
<style rel="stylesheet/scss" lang="scss">
	.email-article .mint-cell{
		min-height: 0;
		padding: 0.25rem 0;
        border: none;
		border-bottom: 1px solid #e8e8e8 !important;
	}
	.email-article .mint-cell-wrapper{
		align-items: flex-start;
		padding: 0 0.24rem;
		border: none;
        background-image: none;
	}
	.email-article .mint-cell-value{
		font-size: 0.24rem;
	}
	.email-article .mint-cell-label{
		margin-top: 0.2rem;
		font-size: 0.24rem;
	}
</style>