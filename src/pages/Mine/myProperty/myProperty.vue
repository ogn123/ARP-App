<template>
    <div class="my-property">
        <m-header title="我的资产">
            <i class="mintui mintui-back ml20" slot="left"></i>
            <span slot="right" class="historyRecord" @click="goHistory">历史记录</span>
        </m-header>
        <m-contain>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">我的领用</mt-tab-item>
                <mt-tab-item id="2">我的申请</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <!--搜索框部分-->
                    <!--<div class="in_wrap">-->
                        <!--<input type="text" class="search" placeholder="搜索" v-model="value" @click="search(value)">-->
                        <!--<i class="s-loudou"></i>-->
                    <!--</div>-->
                    <mt-search v-model="value"  placeholder="搜索" cancel-text="" class="s-search"></mt-search>
                    <!--主体-->
                    <div>
                        <!--多少条记录-->
                        <div class="total-record">
                            <span style="font-size: .24rem">共{{list.length}}条记录</span>
                        </div>
                        <div v-for="item in list" class="list">
                            <div class="list-container">
                                <img :src="item.img" alt="">
                                <div class="status-img-word">
                                    <i></i>
                                    <span>使用中</span>
                                </div>
                                <div class="content">
                                    <h3 class="con-top">{{item.title}}</h3>
                                    <div class="purchase-date">
                                        <span>购买于 {{item.purchaseDate}}</span>
                                        <span class="status-word" v-show="item.showStatus">可申请处置</span>
                                    </div>
                                    <div class="con-bottom">
                                        <ul>
                                            <li>品牌：{{item.brand}}</li>
                                            <li>编码：{{item.code}}</li>
                                            <li>标签码：{{item.tag}}</li>
                                            <li>型号：{{item.model}}</li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <!--搜索框部分-->
                    <mt-search v-model="value"  placeholder="搜索" cancel-text="" class="s-search"></mt-search>
                    <!--主体-->
                    <div class="s-contain">
                        <!--主体tabs-->
                        <ul class="s-contain-title">
                            <li v-for="(item,id) in myaccountstatus" :class="{sbg:active==id}" @click="change(id,item)">{{item}}</li>
                        </ul>
                        <!--多少条记录-->
                        <div class="record" style="padding: 0">
                            <span style="font-size: .24rem">共{{data.length}}条记录</span>
                        </div>
                        <!--审批中-->
                        <ul class="s-contain-contain" v-for="(item,id) in data" id="spz" v-show="lisactive==0">
                            <li>
                                <p class="first-p">单号1：<span>{{item.content}}</span></p>
                                <p class="second-p"><span>{{item.reason}}</span></p>
                                <p class="last-p">当前审批人： <span>{{item.name}}</span> <span class="s-date">{{item.date}}</span></p>
                            </li>
                        </ul>
                        <!--已保存-->
                        <ul class="s-contain-contain" v-for="(item,id) in data" id="ybc" v-show="lisactive==1">
                            <li>
                                <p class="first-p">单号2：<span>{{item.content}}</span></p>
                                <p class="second-p"><span>{{item.reason}}</span></p>
                                <p class="last-p">当前审批人： <span>{{item.name}}</span> <span class="s-date">{{item.date}}</span></p>
                            </li>
                        </ul>
                        <!--已办结-->
                        <ul class="s-contain-contain" v-for="(item,id) in data" id="ybj" v-show="lisactive==2">
                            <li>
                                <p class="first-p">单号3：<span>{{item.content}}</span></p>
                                <p class="second-p"><span>{{item.reason}}</span></p>
                                <p class="last-p">当前审批人： <span>{{item.name}}</span> <span class="s-date">{{item.date}}</span></p>
                            </li>
                        </ul>
                    </div>
                    <div class="add"></div>
                </mt-tab-container-item>
            </mt-tab-container>

        </m-contain>
    </div>
</template>

<script>
    export default {
        name: 'myProperty',
        data() {
            return {
                select:'Message',
                tabsactive:0,
                active: 0,
                lisactive:0,
                selected: '1',
                value: '',
                myaccountstatus: ['审批中', '已保存', '已办结'],
                data: [{
                    content: 'BCL1709180001（耗材费）',
                    reason: '三期办公室系统采购',
                    name: '张三',
                    date: '2017-11-09'
                }, {
                    content: 'BCL1709180001（耗材费）',
                    reason: '三期办公室系统采购',
                    name: '张三',
                    date: '2017-11-09'
                }, {
                    content: 'BCL1709180001（耗材费）',
                    reason: '三期办公室系统采购',
                    name: '张三',
                    date: '2017-11-09'
                }, {
                    content: 'BCL1709180001（耗材费）',
                    reason: '三期办公室系统采购',
                    name: '张三',
                    date: '2017-11-09'
                }, {
                    content: 'BCL1709180001（耗材费）',
                    reason: '三期办公室系统采购',
                    name: '张三',
                    date: '2017-11-09'
                }, {
                    content: 'BCL1709180001（耗材费）',
                    reason: '三期办公室系统采购',
                    name: '张三',
                    date: '2017-11-09'
                }, {
                    content: 'BCL1709180001（耗材费）',
                    reason: '三期办公室系统采购',
                    name: '张三',
                    date: '2017-11-09'
                }],
                value: '',
                list: [{
                    img:require('../../../assets/images/histrory.png'),
                    title: '笔记本电脑',
                    brand: '联想',
                    code: '1019111',
                    tag: 'H425',
                    model: '天翼310-31',
                    status: '遗失',
                    purchaseDate: '2016-08-09',
                    showStatus: true
                },{
                    img:require('../../../assets/images/histrory.png'),
                    title: '笔记本电脑',
                    brand: '联想',
                    code: '1019111',
                    tag: 'H425',
                    model: '天翼310-31',
                    purchaseDate: '2016-08-09',
                    status: '已报废'
                },{
                    img:require('../../../assets/images/histrory.png'),
                    title: '笔记本电脑',
                    brand: '联想',
                    code: '1019111',
                    tag: 'H425',
                    model: '天翼310-31',
                    purchaseDate: '2016-08-09',
                    status: '遗失'
                },{
                    img:require('../../../assets/images/histrory.png'),
                    title: '笔记本电脑',
                    brand: '联想',
                    code: '101911111',
                    tag: 'H425',
                    model: '天翼310-31',
                    purchaseDate: '2016-08-09',
                    status: '已报废'
                }]
            }
        },
        components: {
        },
        methods: {
            change (index, item) {
                this.active = index
                this.lisactive = index
            },
            goHistory () {
                this.$router.push({name: 'historyRecord'});
                window.pageYOffset = 0 ;
                document.documentElement.scrollTop = 0 ;
                document.body.scrollTop = 0;
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

<style lang="scss" scoped>
    /*搜索框*/
    .in_wrap {
        width: 7.04rem;
        padding-top: 0.2rem;
        margin: 0 auto;
        padding-bottom: 0.2rem;
        position: relative;
        position: relative;
    }
    .s-loudou {
        position: absolute;
        top: 0.4rem;
        right: .24rem;
        background:url('../../../../static/images/loudou.png');
        height: .28rem;
        width:.28rem;
        background-size: contain;
    }
    .search {
        width: 7.04rem;
        height: 0.64rem;
        border: 1px solid #cbcbcb;
        padding-left: 0.68rem;
        background: #fff url("../../../../static/images/searchIcon.png") no-repeat 0.26rem center;
        background-size: 0.3rem 0.3rem;
        border-radius: 5px;
        outline: none;
    }

    /*中间主体tabs*/
    .s-contain {
        border-top: 1px solid #e8e8e8;
        padding-top: .2rem;
        background: #ffffff;
        .s-contain-title {
            width: 4.2rem;
            margin: 0 auto;
            height: .58rem;
            margin-bottom: .20rem;
            li {
                float: left;
                width: 33.3%;
                height: .58rem;
                border: 1px solid #146fec;
                border-left: none;
                line-height: .58rem;
                text-align: center;
                color:#146fec
            }
            li:first-child {
                border-left: 1px solid #146fec;
                border-bottom-left-radius: .05rem;
                border-top-left-radius: .05rem;
            }
            li:last-child {
                border-bottom-right-radius: .05rem;
                border-top-right-radius: .05rem;
            }
        }
        .s-contain-contain {
            li {
                border-top: 1px solid #e8e8e8;
                padding: .18rem .24rem;
                .s-date {
                    float: right;
                }
            }
            .first-p {
                color: #161616;
                // font-size: .24rem;
            }
            .second-p {
                 color: #424242;
                 // font-size: .24rem;
             }
            .last-p {
                color: #858585;
                // font-size: .24rem;
            }
        }
    }
    .sbg {
        background: #146fec;
        color: #ffffff !important;
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
    .subrecord{
        font-size:.24rem;
    }
</style>
<style lang="scss">
    .my-property{
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
        /*顶部tabs*/
        .mint-navbar{
            border-bottom: 1px solid #e8e8e8;
            .mint-tab-item{
                margin: 0 1.2rem;
                padding: 0.2rem 0;
                position: relative;
                color: #858585;
                box-sizing: border-box;
                .mint-tab-item-label {
                    font-size: 0.28rem !important;
                }
                &.is-selected {
                    margin-bottom: 0;
                    color: #146fec;
                    border-bottom: 3px solid #146fec;
                }
                &:after {
                content: "\200B";
                display: block;
                width: 1px;
                height: .35rem;
                position: absolute;
                top: .2rem;
                right: -1.19rem;
                background: #e8e8e8;
                }
                &:last-child:after{
                    display: none;
                }
            }
        }
        .record {
            height: .5rem;
            padding:0 .24rem;
            color: #c8c8c8;
        }
        .total-record {
            padding-left:.24rem;
            color: #c8c8c8;
            padding-bottom: .1rem;
        }
        .list {
            height: 2.2rem;
            margin-bottom: .2rem;
            border-top: 1px solid #e8e8e8;
            background: #ffffff;
            padding: .30rem .2rem;

            .list-container {
                /*background: pink;*/
                position: relative;
                img{
                    background-size: contain;
                    width:2.2rem;
                    height:1.6rem;
                    float: left;
                }
                .status-img-word {
                    position: absolute;
                    top: .1rem;
                    left: .1rem;
                    color: #ffffff;
                    width: 1rem;
                    height: .3rem;
                    background: #009f29;
                    font-size: .20rem;
                    line-height: .3rem;
                    text-align: right;
                    border-radius: .08rem;
                    span {
                        margin-right: .08rem;
                    }
                    i {
                        height: .08rem;
                        width: .08rem;
                        background: #ffffff;
                        border-radius: 50%;
                        position: absolute;
                        top: .1rem;
                        left: .08rem;
                    }

                }
                .content {
                    width: calc(100% - 2.4rem);
                    float: right;
                    .con-top {
                        font-size: .3rem;
                        line-height: 1.1;
                    }
                    .purchase-date {
                        color: #999999;
                        font-size:  .26rem;
                        line-height: 1.8;
                        position: relative;
                        .status-word {
                            position: absolute;
                            top:  -.35rem;
                            right: 0;
                            width: 1.62rem;
                            height: .56rem;
                            border: .02rem dashed #146fec;
                            border-radius: .3rem;
                            color: #146fec;
                            text-align: center;
                            line-height: .56rem;
                        }
                    }
                    .con-bottom{
                        li {
                            float: left;
                            color: #858585;
                            &:nth-child(odd){
                                width:46%;
                            }
                            &:nth-child(even){
                                width:54%;
                            }
                        }

                    }
                }
            }
        }
    }

</style>
