<template>
  <div class="txl2">
    <m-header :title="list2.academy" fixed>
      <i class="mintui mintui-back ml20" slot="left"></i>
    </m-header>
    <m-contain class="t_contain">
      <!--搜索框部分-->
      <div class="in_wrap">
        <input type="text" class="search" placeholder="搜索">
      </div>
      <!--最近 联系人-->
      <ul class="txl_content">
        <li>
          <p href="#" class="recent_contacts pd22">
            <router-link to="/contact"><span class="zky">中科院</span></router-link>
            <i class="icon iconfont icon-icon07"></i>
            <span class="academy" style="color: #146fec">{{list2.academy}}</span>
          </p>
          <ul>
            <li class="t_allcontact pd22 clear a-ly" v-for="(item,i) in list2.acadata">
            	<router-link to="/contact/subContact/subContact1">
            		<p style="width: 100%; height: 100%;">
            			<span class="fl">{{item.name}}</span>
                        <span class="fr f26">
                            {{item.num}}
                            <i class="icon iconfont icon-icon07"></i></span>
            		</p>
            	</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </m-contain>
  </div>
</template>

<script>
  import mHeader from '../../../components/header'
  import mContain from '../../../components/container'
  export default {
    name: 'SubContact',
    data: function () {
        return {
            list2: {
                "academy": "生命科学院",
                "acadata": [{
                    "name": "基因所",
                    "num": "46"
                },{
                  "name": "动物学所",
                  "num": "26"
                },{
                  "name": "植物学所",
                  "num": "37"
                }]
            }
        }
    },
    components: {
      mHeader,
      mContain
    },

  }
</script>
<style rel="stylesheet/scss" lang="scss">
    .txl2{
        .recent_contacts{
            color: #858585;
            font-size: .24rem;
            height:.48rem;
            line-height: .4rem;
        }
        .zky{
            color:rgb(133, 133, 133);
        }
        .recent_contacts{
            .icon{
                font-size: .32rem;
            }
        }
        .academy{

        }
        .f26{
            i{
                font-weight:900;
                font-size: .32rem;
                color: #d1d1d1
            }
        }
        .txl_content{
            li{
                overflow: hidden;
            }
            .t_allcontact{
                height: 0.81rem;
                line-height: 0.81rem;
            }
        }
    }
</style>

