<template>
    <div class="account-number">
        <m-header title="核算账号">
            <i class="mintui mintui-back ml20" slot="left"></i>
            <span slot="right" class="historyRecord" @click="addAccount">添加账号</span>
        </m-header>
        <m-contain>
            <!--搜索框部分-->
            <mt-search v-model="value"  placeholder="搜索" cancel-text="" class="s-search"></mt-search>
            <!--主体-->
            <div class="s-contain">
                <!--多少条记录-->
                <div class="total-record">
                    <span>核算账号 共7条</span>
                </div>
                <div class="s-account-list s-project-title"  v-for="(item, index) in accountList">
                    <div class="s-title clearfix"  @click = "go('checkAccountNumber')">
                        <b style="float: left;font-style: normal;font-weight: 100">{{item.title}}</b>
                        <b class="icon iconfont icon-icon07 account-list-angle"></b>
                    </div>
                    <div class="s-project-name">
                        <span style="width: 70%;display: inline-block">
                            项目名称：<i>{{item.projectName}}</i>
                        </span>
                        <span style="width: 30%;display: inline-block;text-align: right">
                            创建人：<i>{{item.projectPerson}}</i>
                        </span>
                    </div>
                    <div class="s-project-money">
                        <span>预算资金：<i>{{item.totalMoney}}万</i></span>
                        <span style="text-align: center">可用资金：<i>{{item.useableMoney}}万</i></span>
                        <span style="text-align: right">到位资金：<i>{{item.goneMoney}}万</i></span>
                    </div>
                    <div class="s-goneper clearfix">
                        <div style="float: left">
                            预算执行率：
                        </div>
                        <mt-progress :value="item.value" style="float: left;width: 60%;"></mt-progress>
                        <div style="float: right;color:#008ae5">{{item.value}}%</div>
                    </div>
                </div>

            </div>
        </m-contain>
    </div>
</template>

<script>
    export default {
        name: 'checkAccountNumber',
        data() {
            return {
                value: '',
                // 核算账号
                accountList: [{
                    title: '账号Y72936102401',
                    projectName: '咨询评议项目管理系统',
                    projectPerson: '周萍',
                    totalMoney: 88,
                    useableMoney: 60,
                    goneMoney: 80,
                    value: 90.9
                },{
                    title: '账号Z90936102401',
                    projectName: 'ARP评议项目管理系统',
                    projectPerson: '李峰',
                    totalMoney: 98,
                    useableMoney: 20,
                    goneMoney: 50,
                    value: 40.9
                }],
            }
        },
        components: {
        },
        methods: {
            addAccount () {
                console.log(0)
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

<style lang="scss">
    .account-number{
        .historyRecord {
            position: absolute;
            top: 0;
            right: .24rem;
            font-size: .28rem;
        }
        /*搜索框*/
        .mint-search {
            height:1rem !important;
            .mint-searchbar {
                background: #f2f2f2;
                .mint-searchbar-inner {
                    border: 1px solid #e8e8e8;
                    border-radius: .1rem;
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
        .total-record {
            padding-left:.24rem;
            color: #c8c8c8;
            font-size: .24rem;
            padding-bottom: .1rem;
        }
        .s-project-title {
            background: #fff;
            padding: 0 .24rem;
            padding-bottom: .15rem;
            color: #999999;
            font-size: .24rem;
            line-height: 1.8;
            border-top: .02rem solid #e8e8e8;
            border-bottom:  .02rem solid #e8e8e8;
            .s-title {
                font-size: .28rem;
                color: #292c34;
                line-height: 2;
                padding-top: .15rem;
            }
            i {
                font-style: normal;
                color: #666666;
            }
        }
        /*核算账号*/
        .s-account-list {
            height: unset;
            padding-bottom: 0;
            color:#666666;
            margin-bottom: .2rem;
            span {
                display: inline-block;
                float: left;
                width: 33.33%;
            }
            .account-list-angle {
                float: right;
                font-weight: 900;
                margin-right: -.1rem;
                font-style: normal;
                color: #999999;
                margin-top:-.1rem;
            }
            .mt-progress-content{
                height: unset;
                margin-top: -.15rem;
                .mt-progress-runway{
                    height: .16rem !important;
                    border-radius: .4rem;
                }
                .mt-progress-progress {
                    height: .16rem !important;
                    border-radius: .4rem;
                    background: -webkit-linear-gradient(left, #1b92fe, #01b9ff); /* Safari 5.1 - 6.0 */
                    background: -o-linear-gradient(right, #1b92fe, #01b9ff); /* Opera 11.1 - 12.0 */
                    background: -moz-linear-gradient(right, #1b92fe, #01b9ff); /* Firefox 3.6 - 15 */
                    background: linear-gradient(to right, #1b92fe , #01b9ff); /* 标准的语法 */
                }
            }

        }
    }

</style>
