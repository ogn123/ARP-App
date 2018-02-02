<template>
    <div class="project-detail">
        <m-header title="项目详情">
            <i class="mintui mintui-back ml20" slot="left"></i>
        </m-header>
        <m-contain class="projectdetail">
            <!--头部-->
            <div class="s-project-title">
                <div class="s-title">{{projectDetailTile.title}}</div>
                <div class="s-contract-number">合同编号：<i>{{projectDetailTile.contract}}</i></div>
                <div class="s-project-number">
                    <span>项目编号：<i>{{projectDetailTile.project}}</i></span>
                    <span style="padding-right: .6rem;">负责人：<i>{{projectDetailTile.person}}</i></span>
                </div>
                <div class="s-dept">
                    <span>所属部门：<i>{{projectDetailTile.dep}}</i></span>
                    <span style="padding-right: .6rem;">项目级别：<i>{{projectDetailTile.level}}</i></span>
                </div>
                <div class="s-expect">
                    预计时间：<i> {{projectDetailTile.startDate}}至 {{projectDetailTile.endDate}}</i>
                </div>
            </div>
            <!--项目预算和项目团队-->
            <div class="s-project-middle clearfix">
                <div class="s-project-middle-left">
                    <div class="s-middle-title clearfix" @click="go('projectBudget')">
                        <span>
                            <i>
                            </i>
                            &nbsp;项目预算
                        </span>
                        <span class="icon iconfont icon-icon07" style="font-weight: 900"></span>
                    </div>
                    <div class="s-middle-con clearfix">
                        <div class="s-middle-con-list">
                            <div>
                                预算总额 <i>{{projectBudget.total}}万</i>
                            </div>
                            <div>
                                到位资金 <i>{{projectBudget.gone}}万</i>
                            </div>
                            <div>
                                可用资金 <i>{{projectBudget.useable}}万</i>
                            </div>
                        </div>
                        <div class="s-middle-con-canvas">
                            <canvas id="projectDetailCanvas" class="cavans" style="width: 1.6rem;" width="3.2rem" height="3.2rem" >
                            </canvas>
                        </div>
                    </div>
                </div>
                <div class="s-project-middle-right">
                    <div class="s-middle-title clearfix" @click="go('projectGroup')">
                        <span>
                            <i>
                            </i>
                            &nbsp;项目团队
                        </span>
                        <span>
                            <span style="font-size: .24rem;padding-top: .05rem">10人</span>
                            <i class="icon iconfont icon-icon07"></i>
                        </span>
                    </div>
                    <div class="s-middle-con">
                        <div class="imgPerson">
                            <div v-for="item in 10">
                                <img src="../../../assets/images/picture.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--核算账号-->
            <div class="s-account s-project-middle">
                <div class="s-middle-title clearfix"  @click = "go('checkAccountNumber')">
                    <span>
                        <i></i>
                        &nbsp;核算账号
                    </span>
                    <span>
                        <span style="font-size: .24rem;padding-top: .05rem">{{accountList.length}}个</span>
                        <i class="icon iconfont icon-icon07" style="font-weight: 900"></i>
                    </span>
                </div>
                <div class="s-account-list s-project-title" v-for="(item, index) in accountList">
                    <div class="s-title clearfix">
                        <b style="float: left;font-style: normal;font-weight: 100">{{item.title}}</b>
                        <b class="icon iconfont icon-icon07 account-list-angle"></b>
                    </div>
                    <div class="s-project-name">
                        <span style="width: 70%;display: inline-block">
                            项目名称：<i>{{item.projectName}}</i>
                        </span>
                        <span style="width: 30%;display: inline-block;text-align: right;padding-right: 0">
                            创建人：<i>{{item.projectPerson}}</i>
                        </span>
                    </div>
                    <div class="s-project-money">
                        <span>预算资金：<i>{{item.totalMoney}}万</i></span>
                        <span style="text-align: center">可用资金：<i>{{item.useableMoney}}万</i></span>
                        <span style="text-align: right;padding-right: 0">到位资金：<i>{{item.goneMoney}}万</i></span>
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
            <!--更多-->
            <div class="s-project-detail-more s-project-middle">
                <div class="s-more-title">更多信息</div>
                <div>
                    <ul class="clearfix">
                        <li>
                            <div class="s-more-cor"></div>
                            <div>合作单位</div>
                            <i v-show="moreNumber.cooperateWork > 0">{{moreNumber.cooperateWork > 99 ? '…': moreNumber.cooperateWork}}</i>
                        </li>
                        <li>
                            <div class="s-more-outWork"></div>
                            <div>外协单位</div>
                            <i v-show="moreNumber.outWork > 0">{{moreNumber.outWork > 99 ? '…': moreNumber.outWork}}</i>
                        </li>
                        <li>
                            <div class="s-more-achievement"></div>
                            <div>项目成果</div>
                            <i v-show="moreNumber.projectAchiement > 0">{{moreNumber.projectAchiement > 99 ? '…': moreNumber.projectAchiement}}</i>
                        </li>
                        <li>
                            <div class="s-more-money"></div>
                            <div>项目资产</div>
                            <i v-show="moreNumber.projectMoney > 0">{{moreNumber.projectMoney > 99 ? '…': moreNumber.projectMoney}}</i>
                        </li>
                        <li>
                            <div class="s-more-used"></div>
                            <div>项目耗材</div>
                            <i v-show="moreNumber.projectCost > 0">{{moreNumber.projectCost > 99 ? '…': moreNumber.projectCost}}</i>
                        </li>
                        <li>
                            <div class="s-more-file"></div>
                            <div>文档管理</div>
                            <i v-show="moreNumber.fileManagement > 0">{{moreNumber.fileManagement > 99 ? '…': moreNumber.fileManagement}}</i>
                        </li>
                        <li>
                            <div class="s-more-change"></div>
                            <div>变更管理</div>
                            <i v-show="moreNumber.changeMangement > 0">{{moreNumber.changeMangement > 99 ? '…': moreNumber.changeMangement}}</i>
                        </li>
                        <li>
                            <div class="s-more-chat"></div>
                            <div>沟通交流</div>
                            <i v-show="moreNumber.chat > 0">{{moreNumber.chat > 99 ? '…': moreNumber.chat}}</i>
                        </li>
                        <li>
                            <div class="s-more-status"></div>
                            <div>状态变更</div>
                            <i v-show="moreNumber.statusChange > 0">{{moreNumber.statusChange > 99 ? '…': moreNumber.statusChange}}</i>
                        </li>
                        <li>
                            <div class="s-more-access"></div>
                            <div>项目评审</div>
                            <i v-show="moreNumber.projectAccess > 0">{{moreNumber.projectAccess > 99 ? '…': moreNumber.projectAccess}}</i>
                        </li>
                        <li>
                            <div class="s-more-check"></div>
                            <div>验收管理</div>
                            <i v-show="moreNumber.checkMangement > 0">{{moreNumber.checkMangement > 99 ? '…': moreNumber.checkMangement}}</i>
                        </li>
                        <li>
                            <div class="s-more-conclusion"></div>
                            <div>项目结题</div>
                            <i v-show="moreNumber.projectConclusion > 0">{{moreNumber.projectConclusion > 99 ? '…': moreNumber.projectConclusion}}</i>
                        </li>
                    </ul>
                </div>
            </div>
        </m-contain>
    </div>
</template>

<script>
    import {circle} from '../../../assets/js/index.js'
    export default {
        name: 'projectDetail',
        data() {
            return {
                // 头部
                projectDetailTile: {
                    title: '咨询评议项目管理系统',
                    contract: 'ZKY11101AG101',
                    project: 'Y729361',
                    dep: '计算机网络信息中心',
                    person: '黄建',
                    level: '课题',
                    startDate: '2017-01-01',
                    endDate: '2017-12-31'
                },
                // 项目预算
                projectBudget: {
                    total: 80.08,
                    gone: 11.01,
                    useable: 11.01,
                    per: 12.2
                },
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
                // 更多-角标
                moreNumber: {
                    cooperateWork: 10,
                    outWork: 6,
                    projectAchiement: 40,
                    projectMoney: 50,
                    projectCost: 16,
                    fileManagement: 100,
                    changeMangement: 0,
                    chat: 0,
                    statusChange: 222,
                    projectAccess: 0,
                    checkMangement: 0,
                    projectConclusion: 0
                }
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
        },
        mounted() {
            circle('projectDetailCanvas', this.projectBudget.per, '')
        }
    }
</script>
<style lang="scss">
    .project-detail{
        .projectdetail {
            .iconfont {
                font-size: .32rem;
            }
            border-top: .02rem solid #0e62c3;
            padding-top: .19rem;
            margin-bottom: 0;
            /*头部*/
            .s-project-title {
                background: #fff;
                padding: 0 .24rem;
                //height: 2.56rem;
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
                span {
                    display: inline-block;
                    float: left;

                    &:first-child {
                        width: 63%;
                    }
                    &:last-child {
                        width: 37%;
                        text-align: right;
                        padding-right: .2rem;
                    }
                }
                i {
                    font-style: normal;
                    color: #666666;
                }
            }
            /*项目预算和项目团队*/
            .s-project-middle {
                margin-top: .2rem;
                .s-middle-title {
                    line-height: 2;
                    padding-top: .1rem;
                    span {
                        &:first-child {
                            position: relative;
                            i {
                                width: .06rem;
                                height: .3rem;
                                background: #146fec;
                                position: absolute;
                                top: 0.12rem;
                                left: 0;
                            }
                            padding-left: .1rem;
                            float: left;
                        }
                        &:last-child {
                            float: right;
                            margin-top: -.05rem;
                            padding-right: .12rem;
                            color: #999;
                            i {
                                font-weight: 900;
                                display: inline-block;
                            }
                        }
                    }
                }
                .s-project-middle-left {
                    width: 49%;
                    height: 100%;
                    float: left;
                    background: #fff;
                    border:  .02rem solid #e8e8e8;
                    border-left: none;
                    padding-left: .24rem;
                    .s-middle-con {
                        .s-middle-con-list {
                            float: left;
                            width: 70%;
                            font-size: .24rem;
                            color: #999999;
                            padding-bottom: .1rem;
                            div {
                                line-height: 1.6;
                            }
                            i {
                                font-style: normal;
                                color: #666;
                            }
                        }
                        .s-middle-con-canvas {
                            float: right;
                            width: 30%;
                            position: relative;
                            canvas {
                                position: absolute;
                                top: -.25rem;
                                right: -.2rem;
                            }
                        }

                    }
                }
                .s-project-middle-right {
                    width: 49%;
                    height: 100%;
                    float: right;
                    background: #fff;
                    border:  .02rem solid #e8e8e8;
                    border-right: none;
                    padding-left: .24rem;
                    .s-middle-con {
                        overflow: hidden;
                        width: 100%;
                        padding-top: .25rem;
                        padding-bottom: .2rem;
                        margin-left: -.2rem;
                        .imgPerson {
                            overflow: auto;
                            height: .8rem;
                            display: flex;
                            align-items: center;
                            div {
                                -ms-flex-negative: 0;
                                flex-shrink: 0;
                                height: .75rem;
                                width: .75rem;
                                border: .02rem solid #e8e8e8;
                                border-radius: 50%;
                                margin-left: .1rem;
                                box-shadow: 0rem 0rem .1rem #e0e1e6;
                                img {
                                    height: .71rem;
                                    width: .71rem;
                                }
                                &:first-child {
                                    position: relative;
                                    &:after {
                                        height: .16rem;
                                        width: .16rem;
                                        background: url("../../../../static/images/star.png");
                                        background-size: contain;
                                        content: '';
                                        display: block;
                                        position: absolute;
                                        bottom: -.07rem;
                                        left: .3rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            /*核算账号*/
            .s-account {
                background: #ffffff;
                border: .02rem solid #e6e6e6;
                border-left: none;
                border-right: none;
                .s-middle-title {
                    padding-left: .24rem;
                    padding-bottom: .1rem;
                }
                .s-account-list {
                    height: unset;
                    border-top: .02rem solid #e8e8e8;
                    padding-bottom: 0;
                    color:#666666;
                    border-bottom: none;
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
            /*更多*/
            .s-project-detail-more {
                .s-more-title {
                    text-align: center;
                    line-height: 3;
                    background: #fff;
                    padding-bottom: .2rem;
                }
                li {
                    float: left;
                    width: 25%;
                    height: 1.9rem;
                    padding: 0 .4rem;
                    background: #fff;
                    position: relative;
                    div {
                        font-size: .24rem;
                        &:first-child {
                            height: .96rem;
                            width: .96rem;
                        }
                    }
                    i {
                        height: .5rem;
                        width: .5rem;
                        background: #ff0000;
                        border-radius: 50%;
                        color: #fff;
                        position: absolute;
                        top: -.25rem;
                        right: .25rem;
                        text-align: center;
                        font-style: normal;
                        padding-top:  .05rem;
                    }
                    .s-more-cor {
                        background: url("../../../../static/images/corperateWork.png");
                        background-size: contain;
                    }
                    .s-more-outWork {
                        background: url("../../../../static/images/outWork.png");
                        background-size: contain;
                    }
                    .s-more-achievement {
                        background: url("../../../../static/images/projectachieve.png");
                        background-size: contain;
                    }
                    .s-more-money {
                        background: url("../../../../static/images/projectMoney.png");
                        background-size: contain;
                    }
                    .s-more-used {
                        background: url("../../../../static/images/projectUsed.png");
                        background-size: contain;
                    }
                    .s-more-file {
                        background: url("../../../../static/images/flieManagement.png");
                        background-size: contain;
                    }
                    .s-more-change {
                        background: url("../../../../static/images/changeMangement.png");
                        background-size: contain;
                    }
                    .s-more-chat {
                        background: url("../../../../static/images/chat.png");
                        background-size: contain;
                    }
                    .s-more-status {
                        background: url("../../../../static/images/statusChange.png");
                        background-size: contain;
                    }
                    .s-more-access {
                        background: url("../../../../static/images/projectaccess.png");
                        background-size: contain;
                    }
                    .s-more-check {
                        background: url("../../../../static/images/checkManagement.png");
                        background-size: contain;
                    }
                    .s-more-conclusion{
                        background: url("../../../../static/images/projectConclusion.png");
                        background-size: contain;
                    }
                }
            }
        }
    }

</style>
