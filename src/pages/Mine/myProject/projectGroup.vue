<template>
    <div class="project-groups">
        <m-header title="项目团队">
            <i class="mintui mintui-back ml20" slot="left"></i>
            <span slot="right" class="historyRecord">添加人员</span>
        </m-header>
        <m-contain class="projectgroups">
            <div class="project-groups-top">当前项目团队共有&nbsp;<i>11</i>&nbsp;人，其中正高级别&nbsp;<i>2</i>&nbsp;人，副高级&nbsp;<i>9</i>&nbsp;人</div>
            <mt-search v-model="value"  placeholder="搜索" cancel-text="" class="s-search"></mt-search>
            <div class="project-groups-con project-groups-leader">
                <div class="groups-title">
                    课题组长 {{leaderData.length}}
                </div>
                <div class="groups-list clearfix">
                    <div class="clearfix lists" v-for="(item, index) in leaderData">
                        <div class="groups-left">
                            <img :src="item.img">
                        </div>
                        <div class="groups-right">
                            <p>{{item.name}}&nbsp;<span>({{item.title}})</span></p>
                            <p>{{item.division}}&nbsp;{{item.job}}</p>
                            <p>
                                在研项目{{item.manageProject + item.participateProject}}项&nbsp;(主持{{item.manageProject}}项参与{{item.participateProject}}项）
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="project-groups-con project-groups-members">
                <div class="groups-title">
                    <span>组员 {{membersData.length}}</span>
                    <i></i>
                </div>
                <div class="groups-list clearfix">
                    <div class="clearfix lists" v-for="(item, index) in membersData">
                        <div class="groups-left">
                            <img :src="item.img">
                        </div>
                        <div class="groups-right">
                            <p>{{item.name}}&nbsp;<span>({{item.title}})</span></p>
                            <p>{{item.division}}&nbsp;{{item.job}}</p>
                            <p>
                                在研项目{{item.manageProject + item.participateProject}}项&nbsp;(主持{{item.manageProject}}项参与{{item.participateProject}}项）
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </m-contain>
    </div>
</template>

<script>
    export default {
        name: 'projectGroup',
        data() {
            return {
                value: '',
                leaderData: [{
                    name: '安素容',
                    img: require('../../../assets/images/people1.png'),
                    title: '正高级',
                    division: '医学院',
                    job: '院长',
                    manageProject: 4,
                    participateProject: 8
                }],
                membersData: [{
                    name: '安素容',
                    img: require('../../../assets/images/people1.png'),
                    title: '正高级',
                    division: '医学院',
                    job: '院长',
                    manageProject: 4,
                    participateProject: 8
                },{
                    name: '安素容',
                    img: require('../../../assets/images/people1.png'),
                    title: '正高级',
                    division: '医学院',
                    job: '院长',
                    manageProject: 4,
                    participateProject: 8
                },{
                    name: '安素容',
                    img: require('../../../assets/images/people1.png'),
                    title: '正高级',
                    division: '医学院',
                    job: '院长',
                    manageProject: 4,
                    participateProject: 8
                },{
                    name: '安素容',
                    img: require('../../../assets/images/people1.png'),
                    title: '正高级',
                    division: '医学院',
                    job: '院长',
                    manageProject: 4,
                    participateProject: 8
                },{
                    name: '安素容',
                    img: require('../../../assets/images/people1.png'),
                    title: '正高级',
                    division: '医学院',
                    job: '院长',
                    manageProject: 4,
                    participateProject: 8
                },{
                    name: '安素容',
                    img: require('../../../assets/images/people1.png'),
                    title: '正高级',
                    division: '医学院',
                    job: '院长',
                    manageProject: 4,
                    participateProject: 8
                },{
                    name: '安素容',
                    img: require('../../../assets/images/people1.png'),
                    title: '正高级',
                    division: '医学院',
                    job: '院长',
                    manageProject: 4,
                    participateProject: 8
                }]
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


<style lang="scss">
    .project-groups {
        .projectgroups{
            margin-bottom: 0;
        }
        .historyRecord {
            position: absolute;
            top: 0;
            right: .24rem;
            font-size: .28rem;
        }
        .project-groups-top {
            height: .5rem;
            border-bottom: .02rem solid #e8e8e8;
            font-size: .24rem;
            text-align: center;
            line-height: .5rem;
            color: #999999;
            background: #fff;
            i {
                color: #146fec;
                font-style: normal;
            }
        }
        /*搜索框*/
        .mint-search {
            height:1rem !important;
            .mint-searchbar {
                background: #f2f2f2;
                .mint-searchbar-inner {
                    border: 1px solid #e8e8e8;
                    border-radius: 3px;
                    height: .65rem;
                    .mint-searchbar-core {
                        position: relative;
                    }
                    .mint-searchbar-core:before {
                        position: absolute;
                        top: 0.4rem;
                        right: .24rem;
                        background:url('../../../../static/images/loudou.png');
                        height: .28rem;
                        width: .28rem;
                        background-size: contain;
                        display: block;
                        content:''
                    }
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
        .project-groups-con {
            background: #fff;
            border: .02rem solid #e8e8e8;
            border-left: none;
            border-right: none;
            padding: 0 .24rem;
            .groups-title {
                color: #146fec;
                padding-top: .2rem;
            }
            .groups-list {
                padding-top: .1rem;
                .lists {
                    width: 48.5%;
                    float: left;
                    background: #f7f8f9;
                    height: 1.85rem;
                    border: .02rem solid #f2f4f5;
                    border-radius: .1rem;
                    padding: .25rem .1rem;
                    &:nth-child(odd) {
                        margin-right: .1rem;
                    }
                    &:nth-child(even) {
                        margin-left: .1rem;
                    }
                    .groups-left {
                        float: left;
                        height: 1.37rem;
                        width: 1.03rem;
                        img {
                            height: 1.37rem;
                            width: 1.03rem;
                            border-radius: .07rem;
                        }
                    }
                    .groups-right {
                        float: right;
                        p {
                            font-size: .24rem;
                            padding-left: .05rem;
                            color: #858585;
                            width: 2.1rem;
                            &:first-child {
                                font-size: .28rem;
                                margin-top: -.1rem;
                                color: #292c34;
                                span {
                                    font-size: .24rem;
                                    color: #666666;
                                }
                            }
                        }
                    }
                }
            }
        }
        .project-groups-leader {
            padding-bottom: .2rem;
            .groups-title {
                color: #146fec;
            }
        }
        .project-groups-members {
            margin-top: .2rem;
            .groups-title {
                i{
                    height: .28rem;
                    width:.28rem;
                    float: right;
                    background: url("../../../../static/images/groupsEdit.png");
                    background-size: contain;
                    margin-right: .05rem;
                }
            }
            .groups-list {
                div {
                    margin-bottom: .2rem;
                }
            }
        }
    }
</style>
