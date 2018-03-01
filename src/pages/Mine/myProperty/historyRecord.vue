<template>
    <div class="histroy-record">
        <m-header title="历史记录">
            <i class="mintui mintui-back ml20" slot="left"></i>
        </m-header>
        <m-contain>
            <!--搜索框部分-->
            <!--<div class="in_wrap">-->
            <!--<input type="text" class="search" placeholder="搜索" v-model="value" @click="search(value)">-->
            <!--<i class="s-loudou"></i>-->
            <!--</div>-->
            <mt-search v-model="value"  placeholder="搜索" cancel-text="" class="s-search"></mt-search>

            <!--主体-->
            <div class="s-contain">
                <!--多少条记录-->
                <div class="total-record">
                    <span>共{{list.length}}条记录</span>
                </div>
                <div v-for="item in list" class="list">
                    <div class="list-container">
                        <img :src="item.img" alt="">
                        <div class="content">
                            <h3 class="con-top">{{item.title}}</h3>
                            <div class="con-bottom">
                                <ul>
                                    <li>品牌：{{item.brand}}</li>
                                    <li>编码：{{item.code}}</li>
                                    <li>标签码：{{item.tag}}</li>
                                    <li>型号：{{item.model}}</li>
                                </ul>
                            </div>
                        </div>
                        <i class="status-img status-img-broken" v-if="item.status=='已报废'"></i>
                        <i class="status-img status-img-loose" v-if="item.status=='遗失'"></i>
                    </div>
                </div>

            </div>
        </m-contain>
    </div>
</template>

<script>
    export default {
        name: 'historyRecord',
        data() {
            return {
                value: '',
                list: [{
                    img:require('../../../assets/images/histrory.png'),
                    title: '笔记本电脑',
                    brand: '联想',
                    code: '1019111',
                    tag: 'H425',
                    model: '天翼310-31',
                    status: '遗失'
                },{
                    img:require('../../../assets/images/histrory.png'),
                    title: '笔记本电脑',
                    brand: '联想',
                    code: '1019111',
                    tag: 'H425',
                    model: '天翼310-31',
                    status: '已报废'
                },{
                    img:require('../../../assets/images/histrory.png'),
                    title: '笔记本电脑',
                    brand: '联想',
                    code: '1019111',
                    tag: 'H425',
                    model: '天翼310-31',
                    status: '遗失'
                },{
                    img:require('../../../assets/images/histrory.png'),
                    title: '笔记本电脑',
                    brand: '联想',
                    code: '101911111',
                    tag: 'H425',
                    model: '天翼310-31',
                    status: '已报废'
                }]
            }
        },
        components: {
        },
        methods: {
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

</style>
<style lang="scss">
    .histroy-record{
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
        .total-record {
            padding-left:.24rem;
            color: #c8c8c8;
            font-size: .24rem;
            padding-bottom: .15rem;
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
                .status-img {
                    content: '';
                    display: block;
                    position: absolute;
                    top: -.29rem;
                    right: -.19rem;
                    width: 1.17rem;
                    height: 1.14rem;

                }
                .status-img-loose{
                    background: url("../../../../static/images/losse.png");
                    background-size: contain;
                }
                .status-img-broken{
                    background: url("../../../../static/images/broken.png");
                    background-size: contain;
                }
                .content {
                    width: calc(100% - 2.4rem);
                    /*margin-left: .4rem;*/
                    /*background: green;*/
                    /*height:1.6rem;*/
                    float: right;
                    .con-top {
                        font-size: .3rem;
                        padding-bottom: .18rem;
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
