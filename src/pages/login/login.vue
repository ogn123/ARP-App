<template>
	<div class="login">
        <div class="logo">
            <img src="../../../static/images/loginLogo.png">
        </div>
		<form class="login-lis">
            <div class="commom">
                <i class="username"></i>
                <input type="text" v-model="username">
            </div>
            <div class="commom">
                <i class="password"></i>
                <input type="password" v-model="password"  v-if="ifDisplay">
                <input type="text" v-model="password" v-else>
                <i class="show" v-on:click="showPS"></i>
            </div>
            <div class="btn" v-on:click="submit">
                <img src="../../../static/images/submit.png">
            </div>
        </form>
        <div class="register">
            <span>注册</span>
            <span>忘记密码？</span>            
        </div>
	</div>
</template>
<script>
    export default {
		name: 'Login',
		data: function() {
			return {
                username:'seosangwon19981022',
                password:'1234567890',
                ifDisplay:true,
			}
		},
		methods: {
            // 密码显示
            showPS(){
                this.ifDisplay = !this.ifDisplay;
            },
            submit(){

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
<style rel="stylesheet/scss" lang="scss">
    .login{
        padding: 0 .9rem;
        background: url("../../../static/images/loginBg.png") no-repeat center center;
		background-size: contain;
        width:7.5rem;
        height:13.34rem;
        .logo{
            padding-top: 2.4rem;
            display:flex;
            img{
                height:2.75rem;
                width:3.08rem;
                margin:0 auto;
            }
        }
        .login-lis{
            padding-top: .4rem;
            .commom{
                margin:0 .05rem;
                border-bottom: 1px solid #a7c7f2;
                height:1.3rem;
                box-sizing: border-box;
                padding:.3rem;
                padding-bottom: 0;
                line-height: calc(1.3rem - .3rem);
                i{
                    width:.36rem;
                    height:.38rem;
                    display: inline-block;
                    vertical-align: middle
                }
                i.username{
                    background: url("../../../static/images/username.png") no-repeat center center;
		            background-size: contain;  
                }
                i.password{
                    background: url("../../../static/images/psword.png") no-repeat center center;
		            background-size: contain; 
                }
                i.show{
                    background: url("../../../static/images/password1.png") no-repeat center center;
		            background-size: contain; 
                }
                input{
                    margin-left: .43rem;
                    background: transparent;
                    border: none;
                    color:#fff;
                    outline: none;  
                    -webkit-tap-highlight-color: rgba(0,0,0,0);  
                    width:73%;
                }
            }
            .btn{
                background: #4a8fed;
                height:1rem;
                width:100%;
                line-height: 1rem;
                text-align: center;
                margin-top:.6rem;
                border:1px solid #9bbced;
                border-radius: .5rem;
                img{
                    height:.43rem;
                    width:1.05rem;
                }
            }
        }
        .register{
            padding-top:.5rem;
            display: flex;
            justify-content: space-between;
            span{
                color:#98c3ff;
            }
        }
    }
    
    
</style>
