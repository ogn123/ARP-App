<template>
    <div class="project-budget">
        <m-header title="项目预算">
            <i class="mintui mintui-back ml20" slot="left"></i>
        </m-header>
        <m-contain class="projectBudget">
            <!--头部-->
            <div class="s-project-title">
                <div><span>项目名称：</span><span>咨询评议项目管理系统</span></div>
                <div><span>预算类别：</span><span>科研经费</span></div>
                <div><span>版本号：</span><span>v1.0</span></div>
            </div>
            <!--预算统计-->
            <div class="s-project-middle s-budget-count">
                <div class="s-middle-title">
                    <span>
                        <i></i>
                        &nbsp;预算统计
                    </span>
                </div>
                <mt-navbar v-model="budgetCount">
                    <!--<mt-tab-item id="1">汇总</mt-tab-item>-->
                    <!--<mt-tab-item id="2">2017年</mt-tab-item>-->
                    <!--<mt-tab-item id="3">自定义</mt-tab-item>-->
                    <div class="count-tabs" v-for="(item, id) in countTabs" :class="{isSelected:active1==item.id}"  @click="tabsClick1(item.id)">{{item.name}}</div>
                    <!--<div class="count-tabs">2017年</div>-->
                    <!--<div class="count-tabs">自定义</div>-->
                </mt-navbar>

                <!-- tab-container -->
                <mt-tab-container v-model="budgetCount">
                    <mt-tab-container-item id="hz">
                        <div class="s-money-list clearfix">
                            <div>
                                <p>预算总额</p>
                                <p><span>88.08</span>&nbsp;万</p>
                            </div>
                            <div>
                                <p>到位资金</p>
                                <p><span>88.08</span>&nbsp;万</p>
                            </div>
                        </div>
                        <!--资金使用情况-->
                        <div class="statistics">
                            <div class="statistics-top clearfix">
                                <h3>资金使用情况</h3>
                                <div style="float: right">
                                    <ul>
                                        <li>
                                            <i></i>
                                            <span>执行数</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>可用资金</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>冻结数</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="statistics-radius">
                                <div class="radius">
                                    <div class="first-radius" id="firstRadius">
                                        <div class="global-numbers">
                                            <div class="global">
                                                <i class="circle"></i>
                                                <i class="line"></i>
                                            </div>
                                            <div class="numbers">
                                                <span>{{perExecute}}%</span>
                                                <span>{{execute}}万</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="second-radius" id="secondRadius">
                                        <div class="global-numbers">
                                            <div class="global">
                                                <i class="circle"></i>
                                                <i class="line"></i>
                                            </div>
                                            <div class="numbers">
                                                <span>{{perFreeze}}%</span>
                                                <span>{{freeze}}万</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="last-radius" id="lastRadius">
                                        <div class="global-numbers clearfix">
                                            <div class="global">
                                                <i class="circle"></i>
                                                <i class="line"></i>
                                            </div>
                                            <div class="numbers">
                                                <span>{{perUsable}}%</span>
                                                <span>{{usable}}万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="year">
                        2
                    </mt-tab-container-item>
                    <mt-tab-container-item id="zdy">
                        3
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
            <!--预算科目-->
            <div class="s-project-middle s-budget-count s-project-subjects">
                <div class="s-middle-title">
                    <span>
                        <i></i>
                        &nbsp;<span style="font-size: .28rem;display: inline-block;margin-top: .02rem">预算科目</span>
                    </span>
                </div>
                <mt-navbar v-model="budgetSubject">
                    <!--<mt-tab-item id="1">全国</mt-tab-item>-->
                    <!--<mt-tab-item id="2">国拨经费</mt-tab-item>-->
                    <div class="count-tabs" v-for="(item, id) in budgetSubjects" :class="{isSelected:active2==item.id}"  @click="tabsClick2(item.id)">{{item.name}}</div>
                </mt-navbar>

                <!-- tab-container -->
                <mt-tab-container v-model="budgetSubject">
                    <mt-tab-container-item id="qg">
                        <div class="budget-total clearfix">
                            <span>合计</span>
                            <span><i>{{data.useTotal}}万</i>&nbsp;/&nbsp;{{data.allTotal}}万</span>
                        </div>
                        <div class="budget-list clearfix" v-for="(item,index) in data.son">
                            <div class="budget-list-left">
                                {{index+1}}.&nbsp;{{item.name}}
                            </div>
                            <div class="budget-list-right">
                                <div><i>{{item.useTotal}}万</i>&nbsp;/&nbsp;{{item.allTotal}}万</div>
                                <div class="clearfix" style="padding-top: .02rem">
                                    <mt-progress :value="item.per" style="width: 1.8rem;float: left"></mt-progress>&nbsp;<div style="float: right;width: .6rem;">{{item.per}}%</div>
                                </div>
                            </div>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="gbjf">
                        2
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </m-contain>
    </div>
</template>

<script>
    export default {
        name: 'projectBudget',
        data() {
            return {
                active1: 'hz',
                // 预算统计tabs
                budgetCount: 'hz',
                countTabs: [{
                   id: 'hz',
                   name: '汇总'
                },{
                    id: 'year',
                    name: new Date().getFullYear()-1 +'年'
                },{
                    id: 'zdy',
                    name:'自定义'
                }],
                // 预算科目tabs
                active2: 'qg',
                budgetSubject: 'qg',
                budgetSubjects: [{
                    id: 'qg',
                    name: '全国'
                },{
                    id: 'gbjf',
                    name:'国拨经费'
                }],
                total: 0,
                execute: 22.08,
                usable: 11.08,
                freeze: 11,
                perExecute: 0,
                perUsable: 0,
                perFreeze: 0,
                data: {
                    allTotal: 88.08,
                    useTotal: 11.01,
                    son: [{
                        name: '设备费',
                        useTotal: 3.08,
                        allTotal: 8.08,
                        per: 50.00
                    },{
                        name: '材料费',
                        useTotal: 0.08,
                        allTotal: 5.00,
                        per: 11.00
                    },{
                        name: '测试化验加工及计算分析费',
                        useTotal: 13.08,
                        allTotal: 18.08,
                        per: 67.60
                    },{
                        name: '设备费',
                        useTotal: 26.08,
                        allTotal: 30.08,
                        per: 80.00
                    }]
                }
            }
        },
        components: {
        },
        methods: {
            // tabs切换
            tabsClick1 (id) {
                this.active1 = id;
                this.budgetCount = id;
            },
            tabsClick2 (id) {
                this.active2 = id;
                this.budgetSubject = id;
            },
            cssComputed () {
                let first = document.getElementById('firstRadius');
                let second = document.getElementById('secondRadius');
                let last = document.getElementById('lastRadius');
                let numberTotal = this.execute + this.usable + this.freeze;
                this.perExecute = (this.execute / numberTotal * 100).toFixed(1);
                this.perUsable = (this.usable / numberTotal * 100).toFixed(1);
                this.perFreeze = (this.freeze / numberTotal * 100).toFixed(1);
                first.style.width = this.execute / numberTotal * 100 + '%';
                second.style.width = this.freeze / numberTotal * 100 + '%';
                last.style.width = this.usable / numberTotal * 100 + '%';
            },
            //路由跳转
            go (urlName) {
                this.$router.push({name:urlName});
                window.pageYOffset = 0 ;
                document.documentElement.scrollTop = 0 ;
                document.body.scrollTop = 0;
            }
        },
        mounted() {
            this.cssComputed()
        }
    }
</script>
<style lang="scss">
    .projectBudget {
        padding-top: .2rem;
        margin-bottom: 0;
        overflow: hidden;
        overflow-y: auto;
        /*头部*/
        .s-project-title {
            background: #fff;
            border: .02rem solid #e8e8e8;
            border-left: none;
            border-right: none;
            padding:  .2rem .24rem;
            div {
                line-height: 1.5;
                span {
                    display: inline-block;
                    &:first-child {
                        text-align: right;
                        width: 1.5rem;
                        color: #999999;
                    }
                    &:last-child {
                        color: #666666;
                    }
                }
            }
        }
        .s-project-middle {
            margin-top: .2rem;
            .s-middle-title {
                height: .85rem;
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
                }
            }
        }
        /*预算统计*/
        .s-budget-count {
            /*height: 4.7rem;*/
            background: #fff;
            border: .02rem solid #e8e8e8;
            border-right: none;
            border-left: none;
            padding: 0 .22rem .2rem .22rem;
            .mint-navbar {
                display: inline-block;
                overflow: hidden;
                .count-tabs {
                    padding: 0;
                    width: 1.62rem;
                    height: .46rem;
                    border:  .02rem dashed #d2d2d2;
                    border-radius: .25rem;
                    flex: 0;
                    float: left;
                    margin-right: .2rem;
                    line-height: .46rem;
                    font-size: .24rem;
                    color: #c6c6c6;
                    text-align: center;
                }
                .isSelected {
                    border-color: #167aef;
                    color: #167aef;
                }
            }
            .s-money-list {
                div {
                    float: left;
                    width: 50%;
                    padding: .2rem .95rem;
                    p {
                        color: #808080;
                        font-size: .26rem;
                        span {
                            color: #292c34;
                            font-size: .38rem;
                        }
                    }
                    &:first-child {
                        position: relative;
                        &:after {
                            content:'';
                            display: block;
                            height: .8rem;
                            width: .02rem;
                            background: #ebebeb;
                            position: absolute;
                            top: .2rem;
                            right: 0;
                        }
                    }
                }

            }
            /*资金使用情况*/
            .statistics{
                height: 2rem;
                /*padding: 0 .24rem;*/
                .statistics-top {
                    h3{
                        line-height: unset;
                        font-size: .26rem;
                        float: left;
                    }
                    li {
                        float:left;
                        width: 1.25rem;
                        text-align: right;
                        padding-top: .03rem;
                        color: #808080;
                        i {
                            height: .2rem;
                            width:.2rem;
                            background: #f2f2f2;
                            display: inline-block;
                            border-radius: 50%;
                        }
                        &:nth-child(even) {
                            width:1.6rem;
                            i {
                                background: #10bc65;
                            }
                        }
                        &:first-child {
                            i {
                                background: #ff950c;
                            }
                        }
                        &:last-child {
                            i {
                                background: #ff2d2d;
                            }
                        }

                    }
                    span {
                       font-size: .22rem;
                    }
                }
                .global-numbers {
                    position: absolute;
                    top: .2rem;
                    left: 10%;
                    .global {
                        margin-top: .04rem;
                        .circle {
                            display: block;
                            height: .15rem;
                            width: .15rem;
                            background: #ff950c;
                            border: .02rem solid #f2f2f2;
                            border-radius: 50%;
                        }
                        .line {
                            display: block;
                            height:.15rem;
                            width: .02rem;
                            background: #ff950c;
                            margin-left: .06rem;
                        }
                    }
                    .numbers {
                        width: 3rem;
                        font-size: .2rem;
                        margin-left: -.15rem;
                        color: #808080;
                        span:last-child {
                            color: #333333
                        }
                    }
                }
                .statistics-radius {
                    .radius {
                        margin: .55rem 0;
                        .first-radius {
                            width: 12.5%;
                            background: #ff950c;
                            height: .3rem;
                            float: left;
                            border-top-left-radius:.3rem;
                            border-bottom-left-radius:.3rem;
                            border-right: .02rem solid #f2f2f2;
                            position: relative;
                            .numbers {
                                width: 3rem;
                                font-size: .2rem;
                                margin-left: -.2rem;
                                color: #808080;
                                span:last-child {
                                    color: #333333
                                }
                            }
                        }
                        .second-radius {
                            width:75%;
                            background: #ff2d2d;
                            height: .3rem;
                            float: left;
                            position: relative;
                            .global-numbers {
                                top: -.1rem;
                                left: 50%;
                                .global {
                                    .circle {
                                        background: #ff2d2d;
                                    }
                                    .line {
                                        background: #ff2d2d;
                                        margin-top:-.3rem;

                                    }
                                }
                                .numbers {
                                    margin-left: -.9rem;
                                    margin-top: -.5rem;
                                }
                            }
                        }
                        .last-radius {
                            width: 12.5%;
                            background: #10bc65;
                            height: .3rem;
                            float: left;
                            border-top-right-radius:.3rem;
                            border-bottom-right-radius:.3rem;
                            border-left: .02rem solid #f2f2f2;
                            position: relative;
                            .global-numbers {
                                right: 0rem;
                                .global{
                                    float: right;
                                    margin-right: .2rem;
                                    .circle {
                                        background: #10bc65;
                                    }
                                    .line {
                                        background: #10bc65;
                                        margin-left: .07rem;
                                    }
                                }
                                .numbers {
                                    float: right;
                                    text-align: right;
                                }
                            }
                        }

                    }
                }
            }
        }
        /*预算科目*/
        .s-project-subjects {
            padding: 0;
            font-size: .26rem;
            .s-middle-title, .mint-navbar{
                padding: 0 .22rem .2rem .22rem;
            }
            .budget-total {
                padding: 0 .22rem .2rem .22rem;;
                border-bottom: .02rem solid #ebebeb;
                span {

                    &:first-child {
                        float: left;
                    }
                    &:last-child {
                        float: right;
                        i {
                            font-style: normal;
                            color: #146fec;
                        }
                    }
                }
            }
            .budget-list {
                margin: 0 .22rem;
                height: 1.2rem;
                border-bottom: .02rem solid #ebebeb;
                .budget-list-left {
                    line-height: 1.2rem;
                    color: #666666;
                    float: left;
                }
                .budget-list-right {
                    float: right;
                    font-size: .24rem;
                    text-align: right;
                    i {
                        font-style: normal;
                        color: #146fec
                    }
                    div:first-child {
                        padding-top: .2rem;
                    }
                    .mt-progress {
                        height: unset;
                    }
                    .mt-progress-content{
                        height: unset;
                        padding-top: .01rem !important;
                        .mt-progress-runway{
                            height: .16rem !important;
                            border-radius: .4rem;
                            padding: 0;
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
        }
    }
</style>
