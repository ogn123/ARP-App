<template>
    <div style="background: #fff">
        <div class="navs">
            <nav>
                <p v-for="(item,$index) in arr" @click="toggle($index)" :class="{active:$index==active}">{{item}}</p>
            </nav>
        </div>

        <div @click="openPicker">ssss</div>
        <div>
            <mt-datetime-picker
                    ref="picker"
                    type="date"
                    :slots="slots"
                    v-model="pickerValue">
            </mt-datetime-picker>
        </div>
        <div class="wrap clearfix">
            <div style="width: 60%;float: left">
                <p>dddddddddddd</p>
                <p>dddddddddddd</p><p>dddddddddddd</p>
            </div>
            <canvas id="one" style="width: 2.5rem;height: 2.5rem;float: right" width="5rem" height="5rem" >
            </canvas>
        </div>
        <div class="wrap">
            <canvas id="two" style="width: 2.5rem;height: 2.5rem;" width="5rem" height="5rem" >
            </canvas>
        </div>
        <!--项目详情-预算-->
        <!--该style里的宽高是设计稿的两倍，画布的width和height是style的两倍-->
        <div class="wrap">
            <canvas id="three" style="width: 2.04rem;height: 2.04rem;" width="4.08rem" height="4.08rem" >
            </canvas>
        </div>
        <!--统计-->
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
                            <p style="float: right">
                                <i class="circle"></i>
                                <i class="line"></i>
                            </p>
                            <div class="numbers">
                                <span>{{perUsable}}%</span>
                                <span>{{usable}}万</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {circle} from '../../assets/js/index.js'
export default {
    data() {
        return {
            active:0,
            arr:this.date(),
            pickerValue:'',
            slots: [
                {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot1',
                    textAlign: 'right'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot3',
                    textAlign: 'left'
                }
            ],
            total: 0,
            execute: 11.08,
            usable: 11.08,
            freeze: 11,
            perExecute: 0,
            perUsable: 0,
            perFreeze: 0
        }
    },
    methods: {
        toggle(index){
            this.active=index
        },
        openPicker() {
            this.$refs.picker.open();
        },
        date () {
            let date = new Date();
            let year = date.getFullYear();
            let arr = [];
            for(let i = year;i>year - 20;i--){
                arr.push(i);
            }
            return arr;
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
        }
    },
    computed: {

    },
    components: {},
    mounted() {
        circle('one',80,'结余')
        circle('two',20,'结余')
        circle('three',100,'')
        this.cssComputed()
    }
}
</script>
<style scoped lang="scss">
    .wrap {

    }
    /*导航栏*/
    .navs {
        width:100%;
        overflow: hidden;
        padding: 0 .23rem;
        nav{
            height: .94rem;
            display: flex;
            align-items: center;
            overflow: auto;
            p{
                text-align: center;
                font-size: .32rem;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                width:1.4rem;
                height: .5rem;
                line-height:  .5rem;
                color: #5a5a5a;
            }
            p.active{
                color: #fff;
                background-color: #1c68cf;
                border-radius: .30rem .30rem .30rem .30rem;
            }
        }
    }
    /*资金使用情况*/
    .statistics{
        height: 1.8rem;
        background: pink;
        padding: 0 .24rem;
        .statistics-top {
            h3{
                line-height: unset;
                font-size: .30rem;
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
        }
        .statistics-radius {
            .radius {
                margin: .5rem 0;
                .first-radius {
                    width: 12.5%;
                    background: #ff950c;
                    height: .3rem;
                    float: left;
                    border-top-left-radius:.3rem;
                    border-bottom-left-radius:.3rem;
                    border-right: .02rem solid #f2f2f2;
                    position: relative;
                    .global-numbers {
                        position: absolute;
                        top: .2rem;
                        left: 50%;
                        .global {
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
                                margin-left: .07rem;
                            }
                        }
                        .numbers {
                            width: 3rem;
                            font-size: .24rem;
                            margin-left: -.2rem;
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
                        position: absolute;
                        top: -.1rem;
                        left: 50%;
                        .global {
                            .circle {
                                display: block;
                                height: .15rem;
                                width: .15rem;
                                background: #ff2d2d;
                                border: .02rem solid #f2f2f2;
                                border-radius: 50%;
                            }
                            .line {
                                display: block;
                                height:.15rem;
                                width: .02rem;
                                background: #ff2d2d;
                                margin-left: .07rem;
                                margin-top:-.3rem;
                            }
                        }
                        .numbers {
                            width: 3rem;
                            font-size: .24rem;
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
                        position: absolute;
                        top: .2rem;
                        right: 0rem;
                        p{
                            float: right;
                            margin-right: .2rem;
                            .circle {
                                display: block;
                                height: .15rem;
                                width: .15rem;
                                background: #10bc65;
                                border: .02rem solid #f2f2f2;
                                border-radius: 50%;
                            }
                            .line {
                                display: block;
                                height:.15rem;
                                width: .02rem;
                                background: #10bc65;
                                margin-left: .07rem;
                            }
                        }
                        .numbers {
                            float: right;
                            width: 3rem;
                            font-size: .24rem;
                            text-align: right;
                        }
                    }
                }

            }
        }
    }


    /* 适应窗口大小  rem标准模式*/
    /*@media screen and (max-width: 374px) {*/
        /**{font-size: 16px;line-height: 16px;}*/
    /*}*/
    /*@media (min-width:375px) and (max-width: 413px) {*/
        /**{font-size: 18px;line-height: 18px;}*/
    /*}*/
    /*@media (min-width:414px) and (max-width: 479px) {*/
        /**{font-size: 20px;line-height: 20px;}*/
    /*}*/
    /*@media (min-width:480px) and (max-width:639px){*/
        /**{font-size: 24px;line-height: 24px;}*/
    /*}*/
    /*@media screen and (min-width: 640px) {*/
        /**{font-size: 32px;line-height: 32px;}*/
    /*}*/
</style>