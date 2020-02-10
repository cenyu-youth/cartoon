<template>
  <div class="payZhongxin">
    <div class="header clearfix">
      <div>
        <div class="back-arrow fl" @click="back"></div>
        <div class="header-title fl">充值中心</div>
      </div>
    </div>
    <div class="content">
      <div class="not-login" v-if="!denglu">
        <div class="not-lg-lt"></div>
        <div class="not-lg-rt">
          <div class="nll-tp">
            <div class="nll-tp-lt">大人充值需要登录才可以操作哦～</div>
            <div class="nll-tp-rt">登录</div>
          </div>
          <div class="nll-bt">如充值遇到问题，请联系客服：QQ4006161961</div>
        </div>
      </div>
      <div class="is-login"  v-if="denglu">
        <div class="is-login-lt"></div>
        <div class="is-login-rt">
          <div class="is-login-zhangh">
            <span>充值账号： </span>
            <span>{{zhanghao}}</span>
          </div>
          <div class="mine-yuanbao">
            <span>我的元宝: </span>
            <span>{{yuanbao}}</span>
          </div>
          <div class="is-login-tip">如充值遇到问题，请联系客服：QQ4006161961</div>
        </div>
      </div>
      <div class="money-num clearfix">
        <div class="jine fl" :class="{'active':i.active}" v-for="(i, index) in jinE" :key="index" @click="clickJinE(index,i.num/100,0)">
          <div>{{i.num}}元宝</div>
          <div>(￥ {{i.num/100}} )</div>
          <div class="hot" v-show="i.hot"></div>
        </div>
      </div>
      <div class="choice-pay">
        <div class="zhifubao" :class="{'pay-active':zhifu}" @click="clickJinE(1,1,1)">
          <i></i>
          <span>支付宝支付</span>
        </div>
        <div class="weChat" :class="{'pay-active':!zhifu}" @click="clickJinE(1,1,1)">
          <i></i>
          <span>微信支付</span>
        </div>
      </div>

    </div>
    <div class="footer clearfix">
      <div class="ft-lt fl">需支付<span>{{money}}</span>元</div>
      <div class="ft-rt fl" @touchstart.stop="show = true">
          <button class="active-btn">确认支付</button>
      </div>
    </div>
    <div class="key">
      <div class="pwd-inp" v-show="inpShow">
        <van-password-input
          :value="value"
          :focused="false"
          @focus="showKeyboard = true"
        />
      </div>
     <van-number-keyboard
        theme="custom"
       :show="show"
       extra-key="."
       close-button-text="取消"
       @blur="show = false"
       v-model="value"
       @input="inpPwd"
       @show="inpShow = true"
       @hide="inpShow = false,value = ''"
     />
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        denglu:false,
        jinE:[
          {
            num:300,
            hot:false,
            active:false
          },
          {
            num:800,
            hot:false,
            active:false
          },
          {
            num:2000,
            hot:false,
            active:false
          },
          {
            num:5000,
            hot:true,
            active:true
          },
          {
            num:10000,
            hot:false,
            active:false
          },
          {
            num:30000,
            hot:false,
            active:false
          },
          {
            num:66600,
            hot:false,
            active:false
          },
          {
            num:99900,
            hot:false,
            active:false
          }
        ],
        zhifu:true,
        money:'50',
        value: '',
        showKeyboard: true,
        show:false,
        inpShow:false,
        zhanghao:'_dKmOF1',
        yuanbao:0
      }
    },
    created(){
      let loginData = JSON.parse(localStorage.getItem('loginData'))


      if(loginData){

        if(loginData.code == 0){
          return
        }else if(loginData.code == 1){
          this.denglu = true
          this.zhanghao=loginData.zhanghao.user;
          this.yuanbao=loginData.zhanghao.yuanbao;
        }

      }
    },
    methods:{
      clickJinE(index,num,x){

        if(x == 1){
          this.zhifu = !this.zhifu;
          return;
        }

        if(x == 0){
          this.money = num;

          for(let i=0;i<=this.jinE.length;i++){
            if(this.jinE[i].active){
              this.jinE[i].active = false;
              this.jinE[index].active = true;
              return;
            }
          }

        }

      },
      back(){
        window.history.back(-1)
      },
      inpPwd() {
        if(this.value.length == 5){
          this.show = false;
          this.$notify({ type: 'success', message: '支付成功' })

          //获取当前登录账号
          let loginData = JSON.parse(localStorage.getItem('loginData'))
          //获取用户信息表
          let userData = JSON.parse(localStorage.getItem('userData'));

          //如果存在
          if(loginData){

            if(loginData.code == 0){
              return
            }else if(loginData.code == 1){
              for(let i=0;i<userData.length;i++){

                if(userData[i].user == loginData.zhanghao.user){

                  if(userData[i].pwd ==loginData.zhanghao.pwd){

                    userData[i].yuanbao += this.money * 100;

                    let loginData = {
                      zhanghao:userData[i],
                      code:1
                    }
                    
                    this.yuanbao=loginData.zhanghao.yuanbao;

                    localStorage.setItem('loginData',JSON.stringify(loginData));

                    localStorage.setItem('userData',JSON.stringify(userData));

                  }

                }

              }
            }

          }


          return;
        }
      },
    }
  }

</script>

<style lang="less" scoped>

  .payZhongxin{
    width: 100%;
    height: 100%;
    background: rgb(245,245,245);
    .pwd-inp{
      width: 100%;
      position: fixed;
      bottom: 248px;
      z-index: 4;
    }
    .pwd-num-key{
      width: 100%;
      position: fixed;
      bottom: 0;
      z-index: 5;
    }
    >.header{
      width: 100%;
      padding: 10px 0;
      background: #fc6454;
      position: sticky;
      top: 0;
      >div{
        width: 100%;
        height: 25px;
        position: relative;
        >.back-arrow{
          width: 25px;
          height: 25px;
          background: url(../assets/detailed/arrow.png) no-repeat center center/cover;
          margin-left: 10px;
        }
        >.header-title{
          font-size: 16px;
          color: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%);
        }
      }

    }
    >.content{
      width: 100%;
      height: calc(100% - 45px - 50px);
      overflow-y: auto;
      >.not-login{
        width: 100%;
        padding: 10px 0;
        background: #fff;
        margin-top: 12px;
        display: flex;
        >.not-lg-lt{
          width: 60px;
          height: 60px;
          border: 1px solid #eee;
          background: url(../assets/zhanghu/payislogin.png) no-repeat center center/cover;
          border-radius: 50%;
          margin-left: 18px;
        }
        >.not-lg-rt{
          margin-left: 8px;
          >.nll-tp{
            display: flex;
            margin-top: 10px;
            >.nll-tp-lt{
              color: #333;
              font-size: 12px;
            }
            >.nll-tp-rt{
              width: 40px;
              height: 15px;
              border: 1px solid #fc6454;
              border-radius: 7.5px;
              text-align: center;
              line-height: 15px;
              color: #fc6454;
              font-size: 12px;
              font-weight: 100;
            }
          }
          >.nll-bt{
            color: #c4c4c4;
            font-size: 12px;
            padding: 5px 0;
          }
        }
      }
      >.is-login{
        width: 100%;
        padding: 10px 0;
        background: #fff;
        margin-top: 12px;
        display: flex;
        >.is-login-lt{
          width: 60px;
          height: 60px;
          border: 1px solid #eee;
          background: url(../assets/zhanghu/payislogin.png) no-repeat center center/cover;
          border-radius: 50%;
          margin-left: 18px;
        }
        >.is-login-rt{
          margin-left: 6px;
          margin-top: 4px;
          >.is-login-zhangh,>.mine-yuanbao{
            margin: 0 0 2px;
            >span{
              color: #333;
              font-size: 12px;
            }
          }
          >.is-login-tip{
            font-size: 12px;
            color: #c4c4c4;
            margin-top: 6px;
            font-weight: 300;
          }
        }
      }
      >.money-num{
        width: calc(100% - 20px);
        margin-top: 12px;
        padding: 10px;
        background: #fff;
        >.jine:nth-child(2n-1){
          margin: 0 13px 12px 0;
        }
        >.jine{
          width: 48%;
          padding: 26px 0;
          border-radius: 6px;
          color: #333;
          text-align: center;
          font-size: 16px;
          position: relative;
          margin-bottom: 12px;
          >div:nth-child(2){
            font-size: 14px;
            color: #bbb;
          }
          >.hot{
            width: 20px;
            height: 25px;
            background: url(../assets/zhanghu/hot.png) no-repeat center center/cover;
            position: absolute;
            top: 5px;
            right: 5px;
          }
        }
        >.jine.active{
          background: #fc6454;
          color: #fff;
          >div:nth-child(2){
            color: #fff;
          }
        }
      }
      >.choice-pay{
        width: 100%;
        padding: 10px 0;
        margin-top: 12px;
        background: #fff;
        display: flex;
        .pay-active{
          background: #fc6454;
          >span{
            color: #fff !important;
          }
        }
        >.zhifubao{
          width: 50%;
          display: flex;
          line-height: 20px;
          padding: 20px;
          border-radius: 5px;
          >i{
            width: 20px;
            height: 20px;
            margin-left: auto;
            background: url(../assets/zhanghu/ali.png) no-repeat center center/cover;
          }
          >span{
            font-size: 12px;
            color: #333;
            margin-left: 3px;
            margin-right: auto;
          }
        }
        >.weChat{
          width: 50%;
          display: flex;
          line-height: 20px;
          padding: 20px;
          border-radius: 5px;
          >i{
            width: 20px;
            height: 20px;
            background: url(../assets/zhanghu/wxpay.png) no-repeat center center/cover;
            margin-left: auto;
          }
          >span{
            font-size: 12px;
            color: #333;
            margin-left: 3px;
            margin-right: auto;
          }
        }
      }
    }
    >.footer{
      width: 100%;
      height: 50px;
      position: sticky;
      bottom: 0;
      z-index: 3;
      background: #fff;
      line-height: 50px;
      >.ft-lt{
        width: calc(60% - 10px);
        height: 100%;
        font-size: 18px;
        color: #333;
        margin-left: 10px;
        >span{
          font-size: 28px;
          font-weight: 600;
          color: #fc6454;
        }
      }
      >.ft-rt{
        width: 40%;
        height: 100%;
        button{
          border: none;
          width: 100%;
          height: 100%;
          background: #b9b9b9;
          color: #fff;
          text-align: center;
        }
        button.active-btn{
          background: #fc6454;
        }
      }
    }
  }

</style>
