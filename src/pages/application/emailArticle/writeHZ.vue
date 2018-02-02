<template>
  <div class="hz">
    <m-header title="填写回执" fixed>
      <i class="mintui mintui-back ml20" slot="left"></i>
    </m-header>
    <m-contain>
      <form action="">
        <div class="hzyj">
          <h4>回执意见</h4>
          <textarea name="" id="plea" cols="30" rows="10" placeholder="请审核"></textarea>
          <p class="choice-title">选择提交环节:</p>
          <div class="choice">
            <span :class="{blue:ative==index}" v-for="(item,index) in chioce" v-on:click="check(index)">{{item}}</span>
          </div>
          <p class="choice-title">选择环节处理人员:</p>
          <div class="choice">
            <span v-for="(item,index) in chioceItem[ative]" :class="{blue:activeItem==index}" v-on:click="checkItem(index)">{{item}}</span>
          </div>
        </div>
        <div class="tc">
          <button class="confirmm" type="submit">确认发送</button>
        </div>
      </form>
    </m-contain>
  </div>
</template>
<script>
  export default {
    name: 'writeHZ',
    data(){
      return {
        ative: 0,
        activeItem: 0,
        chioce: ["综合处核稿","组织处审批","后勤处发布"],
        chioceItem: [
            ["管理人员1","管理人员2","管理人员3"],
            ["管理人员4","管理人员5","管理人员6"],
            ["管理人员7","管理人员8","管理人员9"]
        ]
      }
    },
    components: {
    },
    methods: {
      check: function(index) {
        this.ative = index;
          this.activeItem = 0;
      },
      checkItem:function(index){
          this.activeItem = index;
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
<style scoped>
  .tc{
    text-align: center;
  }
  .hz .contain{
    /*margin-top: 1.2rem!important;*/
  }
  .hz .hzyj{
    padding: 0 0.23rem;
    background: #fff;
    border-top:1px solid #cbcbcb;
    border-bottom:1px solid #cbcbcb;
  }
  .hz .hzyj h4{
    margin-top: 9px;
    line-height: 0.57rem;
    font-weight: normal;
    color: #146fec;
    font-size: 0.28rem;
  }
  .hz #plea{
    width: 6.9rem;
    height:2.4rem;
    border-radius: 5px;
    border: 1px solid #cbcbcb;
    outline: none;
    padding: 0.08rem 0.2rem 0.08rem 0.2rem;
    background: #eeeeee;
    font-size: .24rem;
    resize : none;
  }

  .hz .choice{
    padding-bottom: 0.25rem;
    padding-top: 0.1rem;
  }
  .hz .choice span{
    display: inline-block;
    width: 2.2rem;
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #c8c8c8;
    border-radius: 5px;
    color: #fff;
    margin-right:0.14rem;
    font-size: .26rem;
  }
  .hz .choice span:last-child{
    margin-right: 0;
  }
  .confirmm{
    display: inline-block;
    margin: 0.2rem auto;
    width: 4.6rem;
    text-align: center;
    height: 0.7rem;
    line-height: 0.7rem;
    background: #146fec;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  .hz .choice .blue{
    background: #146fec;
  }
  .hz .choice-title{
    font-size: 0.24rem;
  }
</style>
