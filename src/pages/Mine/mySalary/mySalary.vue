<template>
	<div class="my-pay">
		<m-header title="我的薪酬">
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="myaccount">
			<!--搜索框部分-->
			<div class="time-range">
				<span>时间范围:</span>
				<input type="text" disabled v-model="date1">
				<span>至</span>
				<input type="text" disabled v-model="date2">
				<span class="funnel">
					<i class="s-loudou" @click="change" :class="popupVisible? 'red':''"></i>
				</span>
			</div>
			<div class="b-contain">
				<table>
					<thead>
						<tr>
							<th>期间</th>
							<th>应发工资</th>
							<th>个人所得税</th>
						</tr>
						<tr>
							<td>合计</td>
							<td>{{sumWage}}</td>
							<td>{{sumTax}}</td>
						</tr>
						<tr v-for="(item,index) in salary" @click="go('salaryDetail')">
							<td>{{item.term}}</td>
							<td>{{item.wage}}</td>
							<td>{{item.wage}}</td>
						</tr>
					</thead>
				</table>
			</div>
			<!--主体-->
			<div class="s-contain"  @touchmove.prevent>
				<mt-popup
						v-model="popupVisible"
						position="bottom">
					<div class="sure">
						<p @click="popupVisible = false">取消</p>
						<p @click="sure">完成</p>
					</div>
					<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
				</mt-popup>
			</div>
		</m-contain>
	</div>
</template>
<script>
	export default {
		name: 'mySalary',
		data() {
			return {
                popupVisible: false,
				date1: '2017-01',
				date2: '2017-10',
				arr: [],
                slots: [
                    {
                        flex: 1,
                        values: ['2015', '2016', '2017', '2018', '2019', '2020'],
                        className: 'slot1',
                        textAlign: 'center',
                        defaultIndex: 2
                    },
                    {
                        flex: 1,
                        values: ['01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', '12'],
                        className: 'slot1',
                        textAlign: 'center',
                        defaultIndex: 5
                    },{
                        flex: 1,
                        divider: true,
                        content: '至',
                        className: 'slot2',

                    }, {
                        flex: 1,
                        values: ['2015', '2016', '2017', '2018', '2019', '2020'],
                        className: 'slot3',
                        textAlign: 'center',
                        defaultIndex: 2
                    },
                    {
                        flex: 1,
                        values:['01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', '12'],
                        className: 'slot4',
                        textAlign: 'center',
                        defaultIndex: 5
                    }
                ],
				salary:[
					{
					    term: '2017-10',
						wage: '5000.00',
						tax: '500.00'
					},
                    {
                        term: '2017-09',
                        wage: '5000.00',
                        tax: '500.00'
                    },
                    {
                        term: '2017-08',
                        wage: '5000.00',
                        tax: '500.00'
                    },
                    {
                        term: '2017-07',
                        wage: '5000.00',
                        tax: '500.00'
                    },
                    {
                        term: '2017-06',
                        wage: '5000.00',
                        tax: '500.00'
                    },
                    {
                        term: '2017-05',
                        wage: '5000.00',
                        tax: '500.00'
                    },
                    {
                        term: '2017-04',
                        wage: '5000.00',
                        tax: '500.00'
                    },
                    {
                        term: '2017-03',
                        wage: '5000.00',
                        tax: '500.00'
                    },
                    {
                        term: '2017-02',
                        wage: '5000.00',
                        tax: '500.00'
                    },
                    {
                        term: '2017-01',
                        wage: '5000.00',
                        tax: '500.00'
                    }
				]
			}
		},
		components: {
		},
		methods: {
            onValuesChange(picker, values) {
			    this.arr = values;
            },
            change() {
			    this.popupVisible = true;
			},
			sure() {
                this.popupVisible = false;
			    this.date1 = this.arr[0]+'-'+this.arr[1];
			    this.date2 = this.arr[2]+'-'+this.arr[3];
			},
            //路由跳转
            go (urlName) {
                this.$router.push({name:urlName});
                window.pageYOffset = 0 ;
                document.documentElement.scrollTop = 0 ;
                document.body.scrollTop = 0;
            }
		},
        computed: {
            sumWage: function () {
				let tWage = 0;
				for(let i=0;i<this.salary.length;i++){
                    tWage += parseInt(this.salary[i].wage)
				}
                return tWage.toFixed(2)
            },
            sumTax: function () {
                let tTax = 0;
                for(let i=0;i<this.salary.length;i++){
                    tTax += parseInt(this.salary[i].tax)
                }
                return tTax.toFixed(2)
			}
		},
		created () {
        }
	}
</script>
<style rel="text/scss" lang="scss">
  	.my-pay{
		.contain{
			margin-bottom: 0;
		}
		.time-range{
			position: relative;
			height: 0.93rem;
			line-height: 0.93rem;
			font-size: 0.26rem;
			background: #fff;
			padding: 0 0.23rem;
			overflow: hidden;
			color: #2e323b;
			.funnel{
				display: inline-block;
				width: 1rem;
				height: 0.93rem;
				line-height: 0.93rem;
				position: absolute;
				top: 0;
				right: 0;
				box-shadow:0 0 10px 7px rgba(0,0,0,.05);
			}
			.s-loudou {
				position: absolute;
				top: 0.3rem;
				right: 0.3rem;
				background:url('../../../../static/images/choice.png') no-repeat;
				background-size: contain;
				height: 0.34rem;
				width:0.4rem;
				display: inline-block;
			}
			.red{
				background:url('../../../../static/images/choice2.png') no-repeat;
				background-size: contain;
			}
		}
		.b-contain{
			display: flex;
			table{
				width: 7.5rem;
				box-sizing: content-box;
				margin-top: 0.2rem;
				border-top: 1px solid #e8e8e8;
				tr{
					height: 1rem;
					line-height: 1rem;
					display: flex;
					&:nth-child(n){
						background: #fafafa;
					}
					&:nth-child(2n){
						background: #fff;

					}
					&:nth-child(2) td{
						color: #2777e4;
					}
				}
				th{
					font-size: 0.26rem;
					color: #333333;
					font-weight: normal;
				}
				td{
					color: #666666;
				}

				th,td{
					flex: 1;
					text-align: center;
				}
			}
		}
		.mint-popup-bottom{
			width: 100%;
		}
		.time-range{
			input{
				width: 1.45rem;
				background: #fff;
				border: none;
				color: #2777e4;
				padding-left: 0.2rem;
			}
			input:disabled, input[disabled]{
				color: #2777e4;
				-webkit-text-fill-color:#2777e4;
				-webkit-opacity:1;
				opacity: 1;
			}

		}
		.s-contain{
			height: 0.75rem;
			line-height: 0.75rem;
			color: #146fec;
			/*width: 7.03rem;*/
			.sure{
				padding: 0 0.24rem;
				display: flex;
				justify-content: space-between;
			}
			.picker-item{
				color: #e8e8e8;
				// height: 0.72rem!important;
				// line-height: 0.72rem!important;
			}
			.picker-item.picker-selected{
				color: #333333;
			}
			.picker-slot{
				// font-size: 0.3rem;
			}
			.picker-items{
				// font-size: 0.48rem;
			}
			.picker-slot-wrapper{
				// height: 3.6rem!important;
			}
			.picker-slot.picker-slot-divider{
				justify-content: center;
			}
		}
		.v-modal{
			top: 1.87rem!important;
		}
	}

</style>


