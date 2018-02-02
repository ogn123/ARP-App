<template>
	<div class="enter-password">
		<m-header title="我的薪酬">
			<i class="mintui mintui-back ml20" slot="left"></i>
		</m-header>
		<m-contain class="sd-content">
			<div class="pass-wrap">
				<p class="please">输入密码</p>
				<div>
					<input type="password" maxlength="1" v-focus-next-on-enter="'input2'" ref="input1" v-model="p1">
					<input type="password" maxlength="1" v-focus-next-on-enter="'input3'" ref="input2" v-model="p2">
					<input type="password" maxlength="1" v-focus-next-on-enter="'input4'" ref="input3" v-model="p3">
					<input type="password" maxlength="1" v-focus-next-on-enter="'input5'" ref="input4" v-model="p4">
					<input type="password" maxlength="1" v-focus-next-on-enter="'input6'" ref="input5" v-model="p5">
					<input type="password" maxlength="1" v-focus-next-on-enter="'input1'" ref="input6" v-model="p6">
				</div>
				<p class="forget">
					<a href="javascript:;">忘记密码?</a>
				</p>
			</div>
		</m-contain>
	</div>
</template>
<script>
	export default {
		name: 'enterPassword',
		data() {
			return {
				p1: '',
				p2: '',
				p3: '',
				p4: '',
				p5: '',
				p6: ''
			}
		},
        directives: {
            focusNextOnEnter: {
                bind: function(el, {
                    value
                }, vnode) {
                    el.addEventListener('keyup', (ev) => {
                        if (value === 'input2' || value === 'input3' || value === 'input4' || value === 'input5' || value === 'input6') {
                            if(ev.key === 'Backspace'){
                                return false
							}else{
                                let nextInput = vnode.context.$refs[value]
                                if (nextInput && typeof nextInput.focus === 'function') {
                                    nextInput.focus()
                                }
							}

                       }
                    })
                }
			}
		},
		components: {
		},
		methods: {
		},
        computed: {
		},
		created () {
        },
		mounted () {
		},
        watch: {
        }
    }
</script>
<style rel="text/scss" lang="scss">
	.pass-wrap{
		width: 7.2rem;
		height: 3.84rem;
		margin: 1.14rem auto;
		background: url("../../../../static/images/bg-password.png") no-repeat;
		background-size: contain;
		text-align: center;
		.please{
			color: #333333;
			font-size: 0.3rem;
			padding: 0.67rem 0 0.6rem;
		}
		div{
			display: inline-block;
		}
		input{
			width: 0.78rem;
			height: 0.78rem;
			line-height: 0.78rem;
			text-align: center;
			outline: none;
			border-radius: 0;
			border: 1px solid #e8e8e8;
			margin: 0 0.15rem;
			font-size: 0.7rem;
		}
		.forget{
			text-align: right;
			/*margin-right: 0.48rem;*/
			margin-right: 0.35rem;
			margin-top: 0.3rem;
			a{
				color: #2777e4;
				text-decoration: none;
				font-size: 0.26rem;
			}
		}
	}

</style>


