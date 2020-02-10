<template>
  <div class="huati-content">
    <div class="header">
      <div class="back-arrow" @click="backNext()"></div>
    </div>
    <div class="big-box">
        <div class="content">
          <div class="ct-title">{{neirong.title}}</div>
          <div class="times-box clearfix">
            <div class="times-lt fl">{{date(neirong.dates)}}</div>
            <div class="times-rt fr">
              <i></i>
              <span>{{neirong.watch}}</span>
            </div>
          </div>
          <div class="text-ct">
            <img :src="imgUrl(neirong)" alt="" class="auto-img">
            <p>{{daunluoContent[0]}}</p>
            <img :src="neirong.fileList[2].content" v-if="ifShow(neirong)" alt="" class="auto-img">
            <p v-for="(item, index) in daunluoContent.slice(1)" :key="index">{{item}}</p>
            <div>
              <img v-for="(i, idx) in neirong.fileList.slice(3)" :key="idx" :src="i.content" alt="" class="auto-img">
            </div>
          </div>
        </div>
        <div class="zan-box" @click="clickZan()">
          <i ref="zanTubiao"></i>
          <span>赞({{neirong.zan}})</span>
        </div>
        <div class="manyou-pinglun">
          <div class="mypl-title">漫友评论</div>
          <div class="pinglun-num">
            <span>{{neirong.pinglun.length}}</span>条评论
          </div>
          <div class="tucao-box">
            <textarea name="" id="" v-model="tucao" cols="30" maxlength="500" rows="10" placeholder="有事没事说两句..."></textarea>
            <span>{{tucao.length}}/500</span>
          </div>
          <div class="tucao-btn-box" @click="fabiaopinglun">
            <button>吐槽一下</button>
            <span></span>
          </div>
          <div class="hot-pinglun">
            <div class="hot-pinglun-title">
              <span>热门评论</span>
            </div>
            <div class="pinglun-card clearfix" v-for="(i, index) in pinglunArr" :key="index">
              <div class="pic-box fl"></div>
              <div class="pinglun-xinxi fl">
                <div class="pinglun-name">_eKuDCx</div>
                <div class="pinglun-neirong">{{i.text}}</div>
                <div class="pinglun-shijian-box">
                  <div class="shijian fl">{{date(i.time)}}</div>
                  <div class="zan-huifu-box">
                    <div class="zans-box">
                      <i></i>
                      <span>{{i.zans}}</span>
                    </div>
                    <div class="huifu-box">回复</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
    </div>
</template>

<script>

  export default{
    data(){
      return{
        tucao:'',
        neirong:'',
        daunluoContent:'',
        pinglunArr:''
      }
    },
    created(){

      // let temporary = this.$route.params

      this.neirong = this.$route.params.neirong;

      this.daunluoContent = this.neirong.duanluo.split(/\n/);

      this.pinglunArr = this.neirong.pinglun
    },
    methods:{
      backNext(){
        window.history.back(-1)
      },
      date(timestamp){
       var date = new Date(timestamp);
       var Y = date.getFullYear() + '-';
       var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
       var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()+1);
       return Y+M+D;
      },
      imgUrl(o){

        if(o.fileList.length >= 2){
          return o.fileList[1].content
        }

        return false
      },
      ifShow(o){

        if(o.fileList.length >= 2){
          return true
        }

        return false
      },
      clickZan(){
        let zanTubiao = this.$refs.zanTubiao;

        let huatiData = JSON.parse(localStorage.getItem("huatiData"))

        if(zanTubiao.classList.contains('active-zan')){

          zanTubiao.classList.remove("active-zan");

          for(let i=0; i<huatiData.length; i++){

            if(huatiData[i].dates == this.neirong.dates){

              huatiData[i].zan = huatiData[i].zan - 1;

              this.neirong = huatiData[i];

              localStorage.setItem('huatiData',JSON.stringify(huatiData))

              return
            }
          }

        }

        zanTubiao.classList.add("active-zan");

        for(let i=0; i<huatiData.length; i++){
          if(huatiData[i].dates == this.neirong.dates){

            huatiData[i].zan = huatiData[i].zan + 1;
            this.neirong = huatiData[i] ;

            localStorage.setItem('huatiData',JSON.stringify(huatiData))

            return
          }
        }

      },
      fabiaopinglun(){

        if(this.tucao == '' || this.tucao.replace(/(^\s*)/g, "") == ''){
          this.$notify({ type: 'danger', message: '吐槽内容不能为空' });
          return;
        }

        let huatiData = JSON.parse(localStorage.getItem("huatiData"))

        for(let i=0; i<huatiData.length; i++){

          if(huatiData[i].dates == this.neirong.dates){



            huatiData[i].pinglun.push({
              text:this.tucao,
              time:Date.now(),
              zans:0,
              huifu:[]
            });

            this.neirong = huatiData[i];

            this.pinglunArr = this.neirong.pinglun

            localStorage.setItem('huatiData',JSON.stringify(huatiData))
            
            this.$toast('评论成功')
            
          }
        }
      }
    },
    beforeRouteLeave(to,from,next){
      let huatiData = JSON.parse(localStorage.getItem("huatiData"))

      for(let i=0; i<huatiData.length; i++){

        if(huatiData[i].dates == this.neirong.dates){

          huatiData[i].watch ++ ;

          localStorage.setItem('huatiData',JSON.stringify(huatiData))

        }
      }

      next();
    }
  }

</script>

<style lang="less" scoped>
  .huati-content{
    width: 100%;
    height: 100%;
    >.header{
      width: calc(100% - 20px);
      padding: 10px;
      position: sticky;
      top: 0;
      background: #fff;
      >.back-arrow{
        width: 30px;
        height: 30px;
        background: url(../assets/search/back_icon.png) no-repeat center center/cover;
      }
    }
    >.big-box{
      height: calc(100% - 50px);
      overflow-y: auto;
      >.content{
        width: calc(100% - 40px);
        padding: 10px 20px;
        >.ct-title{
          font-size: 24px;
          color: #333;
          font-weight: bold;
          margin-bottom: 12px;
        }
        >.times-box{
          width: 100%;
          color: #999;
          font-size: 12px;
          height: 16px;
          line-height: 16px;
          >.times-rt{
            display: flex;
            >i{
              width: 14px;
              height: 10px;
              margin-top:3px;
              background: url(../assets/zhanghu/eye.png) no-repeat center center/cover;
              margin-right: 5px;
            }
          }
        }
        >.text-ct{
          font-size: 14px;
          color: #333;
          line-height: 24px;
          letter-spacing: 1px;
          font-family: "Microsoft Yahei,SimSun,Tahoma,arial,SimHei,sans-serif";
          >img{
            margin: 10px 0;
          }
        }
      }
      >.zan-box{
        width: 100%;
        line-height: 30px;
        position: relative;
        display: flex;
        line-height: 30px;
        >i.active-zan{
          background: url(../assets/zhanghu/zan-active.png) no-repeat center center/cover;
        }
        >i{
          width: 20px;
          height: 20px;
          margin-top: 5px;
          margin-left: auto;
          background: url(../assets/zhanghu/zan.png) no-repeat center center/cover;
        }
        >span{
          font-size: 14px;
          color: #666;
          margin-left: 5px;
          margin-right: auto;
        }
      }
      >.manyou-pinglun{
        width: calc(100% - 40px);
        padding: 10px 20px;
        margin: 0 auto;
        margin-top: 30px;
        >.mypl-title{
          font-size: 18px;
          text-align: center;
          font-family: Microsoft Yahei,SimSun,Tahoma,arial,SimHei,sans-serif;
        }
        >.pinglun-num{
          text-align: right;
          color: #fc6976;
          >span{
            font-size: 20px;
            font-family: Impact;
            margin-right: 5px;
          }
        }
        >.tucao-box{
          width: calc(100% - 10px);
          border: 1px solid rgb(252,105,118);
          border-radius: 3px;
          padding: 5px;
          position: relative;
          >textarea{
            width: 96%;
            height: 60px;
            border: none;
          }
          >span{
            font-size: 12px;
            color: #dcdcdc;
          }
        }
        >.tucao-btn-box{
          text-align: right;
          margin: 10px 0;
          position: relative;
          >span{
            position: absolute;
            bottom: 0;
            right: 91px;
            border-right: 5px solid #fc6976;
            border-bottom: 5px solid #fc6976;
            border-top: 5px solid transparent;
            border-left: 5px solid transparent;
          }
          >button{
            width: 96px;
            height: 32px;
            background: #fc6976;
            border-radius: 6px;
            border: none;
            color: #fff;
            font-size: 16px;
          }
        }
        >.hot-pinglun{
          width: 100%;
          >.hot-pinglun-title{
            width: 100%;
            font-size: 14px;
            color: #fc6976;
            border-bottom: 1px solid #e5e5e5;
            >span{
              border-bottom: 1px solid #fc6976;
            }
          }
          >.pinglun-card{
            width: 100%;
            padding: 12px 0;
            border-bottom: 1px dotted #e5e5e5;
            >.pic-box{
              width: 40px;
              height: 40px;
              background: url(https://head.samanlehua.com/kmh_user_head/143/403/123.jpg-100x100.webp) no-repeat center center/cover;
            }
            >.pinglun-xinxi{
              width: calc(100% - 40px - 20px);
              margin-left: 20px;
              >.pinglun-name{
                color: #fc6976;
                font-size: 16px;
                margin-bottom: 8px;
              }
              >.pinglun-neirong{
                color: #333;
                font-size: 14px;
                margin-bottom: 12px;
              }
              >.pinglun-shijian-box{
                display: flex;
                font-size: 12px;
                color: #999;
                >.shijian{
                  margin-right: auto;
                }
                >.zan-huifu-box{
                  display: flex;
                  margin-left: auto;
                  >.zans-box{
                    display: flex;
                    margin-right: 5px;
                    >i{
                      width: 14px;
                      height: 14px;
                      background: url(../assets/zhanghu/zan.png) no-repeat center center/cover;
                      margin-right: 3px;
                    }

                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
