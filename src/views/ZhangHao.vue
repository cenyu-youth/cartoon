<template>
  <div class="zhanghao">
    <div class="header">
      <div class="bg">
        <img src="https://image.zymkcdn.com/file/head/022/256/105.jpg" alt="" class="auto-img">
        <div class="layer"></div>
      </div>
      <div class="xinxi-box">
        <div class="header-pic">
          <i></i>
        </div>
        <div class="zhanghuxinxi">
          <span class="zhanghu-name">{{name}}<i></i></span>
          <span class="zhanghu-id"><i></i> 漫客_{{biaoshi}}</span>
        </div>
        <div class="qiandao"></div>
      </div>
    </div>
    <div class="wupin-box">
      <div class="wupin-header">
        <div class="zh-fins-box">
          <span>粉丝 </span>
          <span>1999</span>
        </div>
        <div class="zh-guangzhu-box">
          <span>关注 </span>
          <span>1</span>
        </div>
        <div class="zh-dongtai-box">
          <span>动态 </span>
          <span>2000</span>
        </div>
      </div>
      <div class="wupin-ct">
        <div class="yuanbao clearfix">
          <i class="fl"></i>
          <div class="yb-text fl">
            <div>元宝</div>
            <div>{{yuanbao}}</div>
          </div>
        </div>
        <div class="yuepiao clearfix">
          <i class="fl"></i>
          <div class="yp-text fl">
            <div>月票</div>
            <div>{{yuepiao}}</div>
          </div>
        </div>
        <div class="tuijian clearfix">
          <i class="fl"></i>
          <div class="tj-text fl">
            <div>推荐</div>
            <div>{{tuijian}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="his-dingyue">
      <div class="his-dingyue-header">
        <van-tabs :border="false" :swipeable="true" :animated="true" line-width="60px" line-height="1px" title-active-color="#fc6454" color="#fc6454">
          <van-tab>
            <div slot="title">订阅</div>
            <div slot="default" class="dingyue-ct">

              <div class="book-ct-box" v-for="(i, index) in dingyue" :key="index"  @click="goState({name:'detailed', params: {url:i.bookZiliao,come:'0'}})">
                <div class="pic">
                  <img :src="i.bookCover" alt="" class="auto-img">
                </div>
                <div class="bookname">{{i.bookname}}</div>
              </div>

            </div>
          </van-tab>
          <van-tab>
            <div slot="title">历史</div>
            <div slot="default" class="dingyue-ct">
              <div class="book-ct-box" v-for="(i, index) in bookData.slice(0,3)" :key="index" @click="goState({name:'detailed', params: {url:i.bookZiliao,come:'0'}})">
                <div class="pic">
                  <img :src="i.bookCover" alt="" class="auto-img">
                </div>
                <div class="bookname">{{i.bookname}}</div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="mine-option-box">
      <div class="chongzhi" @click="goState({name:'payZhongxin'})">
        <div class="cz-lt clearfix">
          <i class="pay fl"></i>
          <span class="cz-text fl">充值中心</span>
        </div>
        <div class="cz-rt">元宝充值，解锁新章节，不剁手不舒服斯基</div>
      </div>
      <div class="used-help">
        <div class="cz-lt clearfix">
          <i class="help fl"></i>
          <span class="cz-text fl">使用帮助</span>
        </div>
        <div class="cz-rt">找编辑mm么么哒~.~</div>
      </div>
      <div class="fankui-err">
        <div class="cz-lt clearfix">
          <i class="err fl"></i>
          <span class="cz-text fl">反馈报错</span>
        </div>
        <div class="cz-rt">来啊~找错啊~反正有大把时光~</div>
      </div>
    </div>
    <div class="login-btn" :class="{'login-btn-show' : loginShow}" @click="clickLogin">
      <button>{{loginShow ? "退出登录" : "登录"}}</button>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        bookData:'',
        dingyue:[],
        yuanbao:0,
        yuepiao:1,
        tuijian:10,
        name:'知音漫客用户',
        biaoshi:'22256105',
        loginShow:false
      }
    },
    created(){
      //读取本地阅读记录，做出页面调整
      let watchHis =JSON.parse(localStorage.getItem('watchHis'))

      if(watchHis){
        this.bookData = watchHis;

        for(let i=0;i<watchHis.length;i++){
          if(watchHis[i].bookShelf){
            this.dingyue.push(watchHis[i])
          }
        }

      }

      let loginData = JSON.parse(localStorage.getItem('loginData'))


      if(loginData){

        if(loginData.code == 0){
          return
        }else if(loginData.code == 1){
          this.yuanbao=loginData.zhanghao.yuanbao;
          this.yuepiao=loginData.zhanghao.yuepiao;
          this.tuijian=loginData.zhanghao.tuijian;
          this.name=loginData.zhanghao.name;
          this.biaoshi=loginData.zhanghao.biaoshi;
          this.loginShow=true;
        }

      }

    },
    methods:{
      goState(o){
        this.$router.push(o)
      },
      clickLogin(){
        if(this.loginShow){
          //已登录想退出

          this.$dialog.confirm({
            message: '大人，退出后就没有收藏、历史记录了，您确定吗？'
          }).then(() => {

            this.loginShow = false;

            let loginData = JSON.parse(localStorage.getItem('loginData'))

            if(loginData){

              loginData = {
                code:0
              }

              localStorage.setItem('loginData',JSON.stringify(loginData));

              this.yuanbao=0;
              this.yuepiao=1;
              this.tuijian=10;
              this.name='知音漫客用户';
              this.biaoshi='22256105';

            }

            this.$toast('已退出登录')

          }).catch(() => {
            // on cancel
          });

        }else{
          this.$router.push({name:'login',params:{come:'zhangHao'}})
        }
      }
    }
  }

</script>

<style lang="less" scoped>

  .zhanghao{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: rgb(246, 246, 246);
    >.header{
      width: 100%;
      height: 195px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 0 40px 4px #000 inset;
      >.bg{
        width: 126%;
        position: absolute;
        top: -97%;
        left: -12%;
        filter: blur(10px);
        transform: translateZ(0);
        opacity: .65!important;
        >.layer{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0,0,0,.4);
        }
      }
      >.xinxi-box{
          width: 100%;
          position: absolute;
          top: 0;
        >.header-pic{
          margin: 35px auto 0;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #eee;
          z-index: 2;
          position: relative;
          >i{
            display: block;
            width: 70px;
            height: 70px;
            background: url(https://image.zymkcdn.com/file/head/022/256/105.jpg) no-repeat center center/cover;
            position: absolute;
            top: 5px;
            left: 5px
          }
        }
        >.zhanghuxinxi{
          text-align: center;
          color: #fff;
          font-family: SimHei,Microsoft Yahei,SimSun,Tahoma,arial,sans-serif;
          >.zhanghu-name{
            display: block;
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size: 16px;
            margin: 5px auto;
            position: relative;
            left: -5px;
            >i{
              position: absolute;
              top: 2.5px;
              width: 15px;
              height: 15px;
              line-height: 20px;
              background: hsla(0,0%,100%,.7) url(../assets/zhanghu/male.png) no-repeat center center/75%;
              border-radius: 2px;
            }
          }
          >.zhanghu-id{
            width: 100%;
            height: 20px;
            font-size: 12px;
            position: relative;
            >i{
              position: absolute;
              top: -5px;
              left: -18px;
              width: 18px;
              height: 20px;
              background: url(../assets/zhanghu/location.png) no-repeat center center/cover;
            }
          }
        }
        >.qiandao{
          position: absolute;
          top: 40px;
          right: 10px;
          width: 35px;
          height: 74px;
          background: url(../assets/zhanghu/signinbtn.png) no-repeat center center/cover;
        }
      }
    }
    >.wupin-box{
      width: 90%;
      height: 80px;
      box-shadow: 0 0 8px 1px #999;
      overflow: hidden;
      margin: 0 auto;
      border-radius: 12px;
      position: relative;
      top: -30px;
      >.wupin-header{
        width: calc(100% - 10px);
        padding: 0 5px;
        height: 30px;
        background: #fc6454;
        color: #fff;
        font-size: 12px;
        display: flex;
        >div{
          margin: auto;
          width: auto;
          height: 100%;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        };
      }
      >.wupin-ct{
        width: 100%;
        height: 50px;
        background: #fff;
        display: flex;
        font-size: 12px;
        >.yuanbao{
          margin: auto;
          text-align: center;
          >.yb-text{
            >div:first-child{
             color: #b9b9b9;
            }
            >div:last-child{
             color: #999;
            }
          }
          >i{
            width: 24px;
            height: 24px;
            background: url(../assets/zhanghu/gold.png) no-repeat center center/cover;
            margin-right: 3px;
          }
        }
        >.yuepiao{
          margin: auto;
          text-align: center;
          >.yp-text{
            >div:first-child{
             color: #b9b9b9;
            }
            >div:last-child{
             color: #999;
            }
          }
          >i{
            width: 24px;
            height: 24px;
            background: url(../assets/zhanghu/ticket.png) no-repeat center center/cover;
            margin-right: 3px;
          }
        }
        >.tuijian{
          margin: auto;
          text-align: center;
          >.tj-text{
            >div:first-child{
             color: #b9b9b9;
            }
            >div:last-child{
             color: #999;
            }
          }
          >i{
            width: 24px;
            height: 24px;
            background: url(../assets/zhanghu/recommend.png) no-repeat center center/cover;
            margin-right: 3px;
          }
        }
      }
    }
    >.his-dingyue{
      width: 100%;
      margin-top: 10px;
      border-top: 1px solid #ccc;
      .book-ct-box{
        padding: 10px 0;
        margin: auto;
        >.pic{
          width: 105px;
          height: 140px;
          position: relative;
          >img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 6px;
          }
        }
        >.bookname{
          color: #333;
          font-size: 14px;
          padding: 5px 0;
          max-width: 105px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        text-align: center;
      }
      >.his-dingyue-header{
        .dingyue-ct{
          width: 100%;
          background: #fff;
          display: flex;
          overflow: hidden;
        }
      }
    }
    >.mine-option-box{
      width: 100%;
      background: #fff;
      margin-top: 8px;
      >div{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #eaeaea;
        box-sizing: border-box;
        padding: 10px 0;
        display: flex;
      }
      .cz-lt{
        margin-left: 10px;
        >.pay{
          width: 18px;
          height: 18px;
          background: url(../assets/zhanghu/pay.png) no-repeat center center/cover;
        }
        >.help{
          width: 18px;
          height: 18px;
          background: url(../assets/zhanghu/help.png) no-repeat center center/cover;
        }
        >.err{
          width: 18px;
          height: 18px;
          background: url(../assets/zhanghu/feedback.png) no-repeat center center/cover;
        }
        >.cz-text{
          font-size: 14px;
          color: #333;
          margin-left: 5px;
        }
      }
      .cz-rt{
        margin-left: auto;
        margin-right: 10px;
        font-size: 12px;
        color: #b9b9b9;
        line-height: 20px;
      }

    }
    >.login-btn-show{
      >button{
        width: 100%;
        border: none;
        background: #fff !important;
        height: 44px;
        border-radius: 3px;
        color: #c2c2c2 !important;
        font-size: 14px;
      }
    }
    >.login-btn{
      width: calc(100% - 20px);
      margin:20px auto;
      >button{
        width: 100%;
        border: none;
        background: #fc6454;
        height: 44px;
        border-radius: 3px;
        color: #fff;
        font-size: 14px;
      }
    }
  }

</style>
