<template>
    <div class="my-project">
        <m-header title="我的项目">
            <i class="mintui mintui-back ml20" slot="left"></i>
        </m-header>
        <m-contain class="myproject">
            <!--搜索框部分-->
            <mt-search v-model="value"  placeholder="搜索" cancel-text="" class="s-search"></mt-search>
            <!--主体-->
            <div class="s-contain">
                <div class="s-contain-title clearfix">
                    <mt-navbar v-model="selected" class="title-left">
                        <!--<mt-tab-item id="1">主持的</mt-tab-item>-->
                        <!--<mt-tab-item id="2">参与的</mt-tab-item>-->
                        <div class="top-tabs" v-for="(leftItem,leftId) in leftTab" :class="{isSelected:active==leftItem.id}" @click="tabsClick(leftItem.id)">{{leftItem.name}}</div>
                        <!--<div class="top-tabs">参与的</div>-->
                    </mt-navbar>
                    <mt-navbar v-model="selected" class="title-right">
                        <!--<mt-tab-item id="3">审批中</mt-tab-item>-->
                        <!--<mt-tab-item id="4">暂存中</mt-tab-item>-->
                        <div class="top-tabs" v-for="(rightItem,rightId) in rightTab" :class="{isSelected:active==rightItem.id}" @click="tabsClick(rightItem.id)">{{rightItem.name}}</div>
                        <!--<div class="top-tabs">暂存中</div>-->
                    </mt-navbar>
                </div>
                <!-- tab-container -->
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="zcd" @click.native='go("projectDetail")'>
                        <div class="s-contain-list" v-for="(item,index) in data">
                            <div class="s-contain-list-title">{{item.title}}</div>
                            <div class="s-contain-list-con clearfix">
                                <div class="s-con-left">
                                    <div>
                                        <i class="file-l-bg"></i>
                                        <span>{{item.type}}</span>
                                    </div>
                                    <div>
                                        <span style="margin-right: .4rem">
                                            <i class="people-l-bg"></i>
                                            <span>{{item.name}}</span>
                                        </span>
                                        <span>
                                            <i class="code-l-bg"></i>
                                            <span>{{item.code}}</span>
                                        </span>
                                    </div>
                                    <div>
                                        <i class="date-l-bg"></i>
                                        <span>{{item.startDate}}</span> 至
                                        <span>{{item.endDate}}</span>
                                    </div>
                                    <div class="amount">
                                        <ul class="clearfix">
                                            <li>经费总额：{{item.budget}}万</li>
                                            <li>到位资金：{{item.gone}}万</li>
                                            <li>经费结余：{{item.usable}}万</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="s-con-right">
                                    <canvas :id="index" class="cavans" style="width: 2.5rem;" width="5rem" height="5rem" >
                                    </canvas>
                                </div>
                            </div>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="cyd">
                        <mt-cell v-for="n in 4" :title="'参与中 ' + n" />
                    </mt-tab-container-item>
                    <mt-tab-container-item id="spz">
                        <mt-cell v-for="n in 6" :title="'审批中 ' + n" />
                    </mt-tab-container-item>
                    <mt-tab-container-item id="zcz">
                        <mt-cell v-for="n in 6" :title="'暂存中 ' + n" />
                    </mt-tab-container-item>
                </mt-tab-container>
                <!--<div class="add"></div>-->
            </div>

        </m-contain>
    </div>
</template>

<script>
    import {circle} from '../../../assets/js/index.js'
    export default {
        name: 'myProject',
        data() {
            return {
                leftTab: [{id: 'zcd',name:'主持的'}, {id: 'cyd',name:'参与的'}],
                rightTab: [{id: 'spz',name:'审批中'}, {id: 'zcz',name:'暂存中'}],
                active: 'zcd',
                value: '',
                data: [{
                    title: 'Y729361 咨询评议项目管理系统',
                    type: '计算机网络信息中心',
                    name: '黄建',
                    code: 'ZKY1101AG101',
                    startDate: '2017-01-02',
                    endDate: '2-13-09-09',
                    budget: 88.08,
                    gone: 88.08,
                    usable: 11.01,
                    number: 20.8
                },{
                    title: 'ARP 咨询评议项目管理系统',
                    type: '计算机网络信息中心',
                    name: '柳源',
                    code: 'ZKY1101AG101',
                    startDate: '2017-01-02',
                    endDate: '2-13-09-09',
                    budget: 78.08,
                    gone: 78.08,
                    usable: 21.01,
                    number: 50
                },{
                    title: 'ARP1 咨询评议项目管理系统',
                    type: '计算机网络信息中心1',
                    name: '柳源1',
                    code: 'ZKY1101AG101',
                    startDate: '2017-01-02',
                    endDate: '2-13-09-09',
                    budget: 78.08,
                    gone: 78.08,
                    usable: 21.01,
                    number: 80
                },{
                    title: 'ARP 咨询评议项目管理系统',
                    type: '计算机网络信息中心',
                    name: '柳源',
                    code: 'ZKY1101AG101',
                    startDate: '2017-01-02',
                    endDate: '2-13-09-09',
                    budget: 78.08,
                    gone: 78.08,
                    usable: 21.01,
                    number: 50
                },{
                    title: 'ARP1 咨询评议项目管理系统',
                    type: '计算机网络信息中心1',
                    name: '柳源1',
                    code: 'ZKY1101AG101',
                    startDate: '2017-01-02',
                    endDate: '2-13-09-09',
                    budget: 78.08,
                    gone: 78.08,
                    usable: 21.01,
                    number: 80
                }],
                selected: 'zcd'
            }
        },
        components: {
        },
        methods: {
            // tabs切换
            tabsClick (id) {
                this.active=id;
                this.selected=id;
            },
            // canvas渲染
            canvasLoad () {
                this.$nextTick(function(){
                    var cavanss = document.body.querySelectorAll('canvas');
                    for(let i = 0; i<this.data.length;i++) {
                        circle(cavanss[i].id,this.data[i].number,'结余')
                    }
                })

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
            this.canvasLoad();
        }
    }
</script>
<style lang="scss">
    .my-project{
        .myproject {
            margin-bottom: 0;
            /*搜索框*/
            .mint-search {
                height:1rem !important;
                .mint-searchbar {
                    background: #f2f2f2;
                    .mint-searchbar-inner {
                        border: 1px solid #e8e8e8;
                        border-radius: .06rem;
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
            /*tabs*/
            .s-contain {
                border-top: 1px solid #e8e8e8;
                /*padding-top: .2rem;*/
                background: #ffffff;
                .mint-tab-container {

                }
                .s-contain-title {
                    padding: .18rem 0;
                    /*height: 1rem;*/
                    /*margin-bottom: .20rem;*/
                    /*line-height: 1rem;*/
                    .mint-navbar {
                        /*.mint-tab-item {*/
                            /*padding: 0;*/
                            /*border: 1px solid #146fec;*/
                            /*width: 1.4rem;*/
                            /*text-align: center;*/
                            /*height: .6rem;*/
                            /*color: #146fec;*/
                            /*.mint-tab-item-label {*/
                                /*line-height: .6rem;*/
                                /*font-size: .28rem;*/
                            /*}*/
                            /*&:first-child {*/
                                /*border-right: none;*/
                                /*border-bottom-left-radius: .05rem;*/
                                /*border-top-left-radius: .05rem;*/
                            /*}*/
                            /*&:last-child {*/
                                /*border-bottom-right-radius: .05rem;*/
                                /*border-top-right-radius: .05rem;*/
                            /*}*/
                            /*&.is-selected {*/
                                /*background: #146fec;*/
                                /*color: #fff;*/
                            /*}*/
                        /*}*/
                    }
                    .top-tabs {
                        padding: 0;
                        border: 1px solid #146fec;
                        width: 1.4rem;
                        text-align: center;
                        height: .6rem;
                        color: #146fec;
                        line-height: .6rem;
                        &:first-child {
                            border-right: none;
                            border-bottom-left-radius: .05rem;
                            border-top-left-radius: .05rem;
                        }
                        &:last-child {
                            border-bottom-right-radius: .05rem;
                            border-top-right-radius: .05rem;
                        }
                        &.isSelected {
                            background: #146fec;
                            color: #fff;
                        }
                    }
                    .title-left {
                        float: left;
                        margin-left: .85rem;
                    }
                    .title-right {
                        float: right;
                        margin-right: .85rem;
                    }
                }
                .s-contain-list {
                    /*height: 2.75rem;*/
                    border-top: .02rem solid #e8e8e8;
                    padding: 0 .24rem;
                    .s-contain-list-title {
                        line-height: 2.5;
                    }
                    .s-contain-list-con {
                        font-size: .26rem;
                        .s-con-left {
                            width: 72%;
                            color: #858585;
                            float: left;
                            i {
                                width: .2rem;
                                height: .2rem;
                                display: inline-block;
                            }
                            .file-l-bg {
                                background: url("../../../../static/images/file.png");
                                background-size: contain;
                            }
                            .people-l-bg {
                                background: url("../../../../static/images/people.png");
                                background-size: contain;
                            }
                            .code-l-bg {
                                background: url("../../../../static/images/code.png");
                                background-size: contain;
                            }
                            .date-l-bg {
                                background: url("../../../../static/images/date.png");
                                background-size: contain;
                            }
                            .amount {
                                padding-bottom: .1rem;
                                li {
                                    float: left;
                                    width: 50%;
                                    color: #292c34;
                                }
                            }
                        }
                        .s-con-right {
                            width: 28%;
                            float: right;
                            position: relative;
                            .cavans {
                                position: absolute;
                                top: -.6rem;
                                left: -.3rem;
                            }
                        }
                    }
                }
            }
        }
        /*底部新增符号*/
        .add{
            height: .8rem;
            width: .84rem;
            background: url('../../../../static/images/add.png') no-repeat;
            position: fixed;
            right: .24rem;
            bottom: .4rem;
            background-size: contain;
        }
    }

</style>
