<template>
  <div class="detailed">
    <div class="header">
        <div class="header-arrow" @click="backNext()"></div>
        <!-- <div class="header-text">漫画详情</div> -->
    </div>
    <div class="banner">
      <div class="pic-box">
        <div class="bg-box">
          <span></span>
          <div class="mohu">
          <img :src="bookData.cover" alt="" class="auto-img">
        </div>
        </div>
        <div class="book-xinxi">
          <div class="book-pic-box">
            <img :src="bookData.cover" alt="" class="auto-img">
          </div>
          <div class="lt-booktext">
            <div class="bookname">{{bookData.name}}</div>
            <div class="author">{{bookData.author}}</div>
            <div class="book-jianjie">
              <span v-for="(i, index) in tags" :key="index" :style="{'backgroundColor': bgColor[index]}">{{i}}</span>
            </div>
          </div>
          <div class="rt-icon"></div>
        </div>
      </div>
    </div>
    <div class="button-box clearfix">
      <div class="guanzhu-box fl clearfix">
        <i class="fl"></i>
        <span class="fl">关注</span>
        <span class="fl">(201.21万)</span>
      </div>
      <div class="fr watch-box">
        <button class="watch-btn" @click="watchBtn()">{{seeText}}</button>
      </div>
    </div>
    <div class="switch-list">
      <van-tabs line-width="20px" title-active-color="#333" title-inactive-color="#999" :swipeable="true" animated>
        <van-tab>
           <div slot="title">简介</div>
           <div class="content" slot="default">
             <div class="ct-title">作品简介：</div>
             <div class="ct-text-box">
               {{bookData.introduce}}
             </div>
           </div>
        </van-tab>
        <van-tab>
           <div slot="title">目录</div>
           <div class="content" slot="default">
            <ul class="catalog-box clearfix"  v-show="listShow">
               <li class="fl" v-for="(i, index) in bookList.slice(0,9)" :key="index" @click="watchChapter(index)">{{i.num}}</li>
            </ul>
            <ul class="catalog-box clearfix" v-show="!listShow">
               <li class="fl" v-for="(i, index) in bookList" :key="index" @click="watchChapter(index)">{{i.num}}</li>
            </ul>
            <div class="more-catalog" ref="moreCatalog" @click="listShowBtn()">大人，查看更多目录</div>
           </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="comment-box">
      <div class="comment-title">评论(9999)</div>
      <div class="comment-ct">
        <div class="comment-ct-tp clearfix">
          <i class="fl head-portrait">
            <span class="biaoshi"></span>
          </i>
          <span class="fl nickname">Ar</span>
        </div>
        <div class="comment-ct-text">
          他终于意识到-怎样也实现不了的事情，倒不如将之忘却，于是便不
          断告诉自己:‘不要紧; 已经没有可以留恋的人或事;现在的我不会再.
          介怀的了’,
        </div>
        <div class="comment-ct-bt clearfix">
          <div class="ct-ct-bt-lt fl clearfix">
            <i class="fl"></i>
            <span class="fl">2月1日</span>
          </div>
          <div class="ct-ct-bt-rt fr clearfix">
            <div class="zan-box fl clearfix">
              <i class="fl"></i>
              <span class="fl">点赞</span>
            </div>
            <div class="pinglun-box fr clearfix">
              <i class="fl"></i>
              <span class="fl">评论</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-ct">
        <div class="comment-ct-tp clearfix">
          <i class="fl head-portrait">
            <span class="biaoshi"></span>
          </i>
          <span class="fl nickname">Ar</span>
        </div>
        <div class="comment-ct-text">
          他终于意识到-怎样也实现不了的事情，倒不如将之忘却，于是便不
          断告诉自己:‘不要紧; 已经没有可以留恋的人或事;现在的我不会再.
          介怀的了’,
        </div>
        <div class="comment-ct-bt clearfix">
          <div class="ct-ct-bt-lt fl clearfix">
            <i class="fl"></i>
            <span class="fl">2月1日</span>
          </div>
          <div class="ct-ct-bt-rt fr clearfix">
            <div class="zan-box fl clearfix">
              <i class="fl"></i>
              <span class="fl">点赞</span>
            </div>
            <div class="pinglun-box fr clearfix">
              <i class="fl"></i>
              <span class="fl">评论</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-ct">
        <div class="comment-ct-tp clearfix">
          <i class="fl head-portrait">
            <span class="biaoshi"></span>
          </i>
          <span class="fl nickname">Ar</span>
        </div>
        <div class="comment-ct-text">
          他终于意识到-怎样也实现不了的事情，倒不如将之忘却，于是便不
          断告诉自己:‘不要紧; 已经没有可以留恋的人或事;现在的我不会再.
          介怀的了’,
        </div>
        <div class="comment-ct-bt clearfix">
          <div class="ct-ct-bt-lt fl clearfix">
            <i class="fl"></i>
            <span class="fl">2月1日</span>
          </div>
          <div class="ct-ct-bt-rt fr clearfix">
            <div class="zan-box fl clearfix">
              <i class="fl"></i>
              <span class="fl">点赞</span>
            </div>
            <div class="pinglun-box fr clearfix">
              <i class="fl"></i>
              <span class="fl">评论</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-ct">
        <div class="comment-ct-tp clearfix">
          <i class="fl head-portrait">
            <span class="biaoshi"></span>
          </i>
          <span class="fl nickname">Ar</span>
        </div>
        <div class="comment-ct-text">
          他终于意识到-怎样也实现不了的事情，倒不如将之忘却，于是便不
          断告诉自己:‘不要紧; 已经没有可以留恋的人或事;现在的我不会再.
          介怀的了’,
        </div>
        <div class="comment-ct-bt clearfix">
          <div class="ct-ct-bt-lt fl clearfix">
            <i class="fl"></i>
            <span class="fl">2月1日</span>
          </div>
          <div class="ct-ct-bt-rt fr clearfix">
            <div class="zan-box fl clearfix">
              <i class="fl"></i>
              <span class="fl">点赞</span>
            </div>
            <div class="pinglun-box fr clearfix">
              <i class="fl"></i>
              <span class="fl">评论</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-ct">
        <div class="comment-ct-tp clearfix">
          <i class="fl head-portrait">
            <span class="biaoshi"></span>
          </i>
          <span class="fl nickname">Ar</span>
        </div>
        <div class="comment-ct-text">
          他终于意识到-怎样也实现不了的事情，倒不如将之忘却，于是便不
          断告诉自己:‘不要紧; 已经没有可以留恋的人或事;现在的我不会再.
          介怀的了’,
        </div>
        <div class="comment-ct-bt clearfix">
          <div class="ct-ct-bt-lt fl clearfix">
            <i class="fl"></i>
            <span class="fl">2月1日</span>
          </div>
          <div class="ct-ct-bt-rt fr clearfix">
            <div class="zan-box fl clearfix">
              <i class="fl"></i>
              <span class="fl">点赞</span>
            </div>
            <div class="pinglun-box fr clearfix">
              <i class="fl"></i>
              <span class="fl">评论</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer clearfix">
      <div class="fl clearfix fins-list">
        <i class="fl"></i>
        <span class="fl">粉丝排名</span>
      </div>
      <div class="line-box"></div>
      <div class="fl clearfix gift">
        <i class="fl"></i>
        <span class="fl">送礼物</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        bookData:'',
        bookList:'',
        listShow:true,
        come:'',
        bookBenshen:'',
        bgColor:['#C78590','#F3BD7E','#6EC4E9','#66C9BB','#9B9BD5','#C78590'],
        tags:'',
        seeText:'开始观看',
        seeNum:0,
        comUrl:''
      }
    },
    created(){

      let self = this;

      //读取本地阅读记录，做出页面调整
      let watchHis =JSON.parse(localStorage.getItem('watchHis'))

      //获取路由携带参数
      let paramsData = this.$route.params;

      //获取路由来处,做出页面调整
      this.come = paramsData.come;

      //请求地址
      let url = 'http://api.pingcc.cn/?mhurl1=' + paramsData.url

      this.comUrl = paramsData.url

      //请求数据
      this.ajax(url).then(result => {

        self.bookData = JSON.parse(result).data;
        self.bookList = JSON.parse(result).list;

        if(self.bookData.tag){
          self.tags = self.bookData.tag.split(' ');

        //判断是否已阅读
        for(let i=0; i<watchHis.length;i++){
          if(JSON.parse(result).data.name == watchHis[i].bookname || JSON.parse(result).data.author == watchHis[i].bookAuthor || JSON.parse(result).data.cover == watchHis[i].bookCover){

            self.seeNum = watchHis[i].bookNum;

            self.seeText = '继续观看'

          }
        }


        }

      })



    },
    methods:{
      backNext(){
        window.history.back(-1);
      },
      listShowBtn(){
        let more = this.$refs.moreCatalog;

        if(this.listShow){
          more.textContent = '收起'
        }else{
          more.textContent = '大人，查看更多目录'
        }

        this.listShow = !this.listShow
      },
      watchBtn(){
        this.$router.push({name:'content', params:{list:this.bookList,num:this.seeNum,book:this.bookData,bookUrl:this.comUrl}})
      },
      watchChapter(o){
        this.$router.push({name:'content', params:{list:this.bookList,num:o,book:this.bookData,bookUrl:this.comUrl}})
      },
      ajax(url){
        return new Promise((resolve,reject) => {

          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
              resolve(this.responseText)
            }
          }

          xhr.open('Get' ,url,false)

          xhr.send(null)
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  .detailed{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: relative;
    >.header{
      width: calc(100% - 20px);
      position: absolute;
      top: 0;
      z-index: 2;
      padding: 10px 10px 5px;
      display: flex;
      // background: #fc6454;
      .header-arrow{
        width: 24px;
        height: 24px;
        background: url(../assets/detailed/arrow.png) no-repeat center center/cover;
      }
      >.header-text{
        font-size: 18px;
        color: #fff;
        font-weight: bold;
        margin-left: 10px;
      }
    }
    >.banner{
      width: 100%;
      height: 200px;
      overflow: hidden;
      >.pic-box{
        width: 100%;
        position: relative;
        >.bg-box{
          width: 100%;
          height: 200px;
          position: relative;
          box-shadow: 0 0 10px 200px #000 inset;
          >.mohu{
            width: 750px;
            height: 350px;
            filter: blur(10px);
          }
        }
        >.book-xinxi{
          width: calc(100% - 30px);
          padding: 0 15px 10px;
          position: absolute;
          bottom: 0;
          z-index: 5;
          display: flex;
          >.book-pic-box{
            width: 105px;
            border: 2px solid #fff;
          }
          >.lt-booktext{
            margin-left: 8px;
            margin-top: 40px;
            >.bookname{
              width: 100%;
              color: #333;
              font-weight: bold;
              font-size: 24px;
              margin-bottom: 6px;
            }
            >.author{
              font-size: 14px;
              color: #333;
              margin-bottom: 12px;
            }
            >.book-jianjie{
              width: 100%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              display: flex;
              >span{
                padding: 0 6px;
                height: 15px;
                border-radius: 7.5px;
                color: #fff;
                text-align: center;
                line-height: 15px;
                font-size: 12px;
                margin-right: 4px;
              }
            }
          }
        }
      }
    }
    >.button-box{
      padding: 10px 25px;
      width: calc(100% - 50px);
      height: 40px;
      line-height: 40px;
      >.guanzhu-box{
        width: calc(100% - 175px);
        margin-right: 15px;
        >i{
          width: 24px;
          height:24px;
          margin-top: 8px;
          background: url(../assets/detailed/like.png) no-repeat center center/cover;
        }
        >span:nth-child(2){
          color: #333;
          font-size: 16px;
          margin: 0 3px;
        }
        >span:nth-child(3){
          color: #666;
          font-size: 12px;
        }
      }
      >.watch-box{
        width: 160px;
        height: 40px;
        >.watch-btn{
          width: 100%;
          height: 100%;
          border: none;
          color: #fff;
          text-align: center;
          line-height: 40px;
          border-radius: 20px;
          background: linear-gradient(to right, #ffa6a6,#ff7272);
        }
      }
    }
    >.switch-list{
      width: calc(100% - 40px);
      padding: 0 20px;
      .ct-title{
        color: #2b2b2b;
        font-size: 14px;
        padding: 5px 0;
      }
      .ct-text-box{
        color: #2b2b2b;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 2px;
      }
      .catalog-box{
        width: 100%;
        margin-top: 10px;
        >li{
          width: 30%;
          height:50px;
          color: #333;
          font-size: 12px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          border: 1px solid #999;
          text-align: center;
          line-height: 50px;
          margin-top: 6px;
          box-sizing: border-box;
        }
        >li:nth-child(3n-1){
          margin: 6px 5% 0;
        }
      }
      .more-catalog{
        color: #333;
        width: 100%;
        height: 50px;
        border: 1px solid #999;
        box-sizing: border-box;
        text-align: center;
        line-height: 50px;
        margin-top: 6px;
        font-size: 16px;
        font-family: "微软雅黑";
      }
    }
    >.comment-box{
      width: 100%;
      margin: 10px auto 0;
      >.comment-title{
        font-size: 16px;
        color: #000;
        text-indent: 1em;
      }
      >.comment-ct{
        width: calc(100% - 7%);
        padding: 0 3%;
        border-top: 2px solid #e2e2e2;
        margin-top: 4px;
        position: relative;
        >.comment-ct-tp{
          width: 100%;
          >.head-portrait{
            width: 35px;
            height: 35px;
            border-radius: 50%;
            margin-top: 10px;
            background: url(../assets/detailed/pic.jpeg) no-repeat center center/cover;
            position: relative;
            >.biaoshi{
              position: absolute;
              bottom: -6px;
              right: -10px;
              margin-top: -10px;
              width: 20px;
              height: 20px;
              background: url(../assets/detailed/vip.png) no-repeat center center/cover;
            }
          }
          >.nickname{
            font-size: 16px;
            color: #333;
            line-height: 45px;
            margin-left: 6px;
          }
        }
        >.comment-ct-text{
          width: 100%;
          color: #333;
          font-size: 16px;
          margin: 10px 0;
          font-family: "黑体";
          line-height: 20px;
        }
        >.comment-ct-bt{
          width: 100%;
          padding-bottom: 10px;
          >.ct-ct-bt-lt{
            width: 50%;
            line-height: 16px;
            >span{
              color:#848484;
              font-size: 14px;
              margin-left: 3px;
            }
            >i{
              width: 16px;
              height: 16px;
              background: url(../assets/detailed/time-date.png) no-repeat center center/cover;
            }
          }
          >.ct-ct-bt-rt{
            width: 50%;
            >.zan-box{
              line-height: 16px;
              >span{
                color:#848484;
                font-size: 14px;
                margin-left: 3px;
              }
              >i{
                width: 16px;
                height: 16px;
                background: url(../assets/detailed/zan.png) no-repeat center center/cover;
              }
            }
            >.pinglun-box{
              line-height: 16px;
              >span{
                color:#848484;
                font-size: 14px;
                margin-left: 3px;
              }
              >i{
                width: 20px;
                height: 16px;
                background: url(../assets/detailed/pinglun.png) no-repeat center center/cover;
              }
            }
          }
        }
      }
    }
    >.footer{
      width: 100%;
      height: 40px;
      display: flex;
      position: sticky;
      bottom: 0;
      background: #fff;
      padding: 5px 0 10px;
      box-shadow: 0 -2px 8px 1px #eee;
      >.line-box{
        width: 1px;
        height: 30px;
        background: #ddd;
        margin-top: 5px;
      }
      >.fins-list{
        position: relative;
        margin: 0 auto;
        >i{
          width: 40px;
          height: 40px;
          background: url(../assets/detailed/fins-list.png) no-repeat center center/cover;
        }
        >span{
          line-height: 40px;
          font-size: 16px;
          color: #333;
          margin-left: 6px;
        }
      }
      >.gift{
        margin: 0 auto;
        >i{
          width: 40px;
          height: 40px;
          background: url(../assets/detailed/gift.png) no-repeat center center/cover;
        }
        >span{
          line-height: 40px;
          font-size: 16px;
          color: #333;
          margin-left: 6px;
        }
      }
    }
  }
</style>
