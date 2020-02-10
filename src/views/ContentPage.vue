<template>
  <div class="contentPage">
    <div class="header" ref="header">
      <div class="left-arrow" @click="backNext"></div>
      <div class="header-title"><span>{{title}}</span>   <span>{{ current + 1 }}</span>/{{bookData.length}}</div>
      <div class="header-more"></div>
    </div>
    <div class="content-box" v-if="readPattern"  @click="tpAnimate" ref="contentBox" @scroll="contentScroll()">
      <img v-for="(i, index) in bookData" :key="index" :src="i.img" alt="" class="auto-img">
      <span @click="nextChapter">点击下一章</span>
    </div>
    <div v-if="!readPattern" class="content-box" @click="tpAnimate" ref="contentBox" @scroll="contentScroll()">

      <van-swipe @change="onChange" width="100%" duration="200">
         <van-swipe-item class="swipe-box next-chapter" slot="default" v-for="(i, index) in bookData" :key="index" >
           <img :src="i.img" alt="" class="auto-img"  v-if="index != bookData.length - 1">

           <div v-if="index == bookData.length - 1">
            <div class="mantou-pic"></div>
            <p>神秘新世界的大门在召唤你！</p>
            <div>
               您已阅读完毕
               <strong>{{title}}</strong>
               ,您还可以
            </div>
            <div class="caozuo-ku">
              <div class="shangyihua" @click="prevChapter">
                <i></i>
                <span>上一话</span>
              </div>
              <div class="huizhuye" @click="backNext">
                <i></i>
                <span>详情页</span>
              </div>
              <div class="xiayihua" @click="nextChapter">
                <i></i>
                <span>下一话</span>
              </div>
            </div>
           </div>

         </van-swipe-item>
        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{bookData.length}}</div>
      </van-swipe>
    </div>
    <div class="footer" ref="footer">
      <div class="pattern">
        <i class="tp-bt" v-show="patternSwitch" @click="switchPattern"></i>
        <i class="lt-rt" v-show="!patternSwitch" @click="switchPattern"></i>
      </div>
      <div class="collection" @click="addBookShelf"></div>
      <div class="back-home" @click="goState({name:'home'})"></div>
      <div class="prevChapter" @click="prevChapter"></div>
      <div class="nextChapter" @click="nextChapter"></div>
    </div>

    <div class="tip-box" v-show="tipShow" @click="tipShow=false">
      <i class="shang" v-show="tipIcon"></i>
      <i class="zuo" v-show="!tipIcon"></i>
    </div>

  </div>
</template>

<script>

  export default{
    data(){
      return{
        patternSwitch:true,
        tipShow:false,
        tipIcon:true,
        tpBtShow:true,
        bookData:'',
        watchNum:0,
        bookList:'',
        timers:[],
        current: 0,
        readPattern:true,
        title:'',
      }
    },
    created(){
      let self = this;

      let readOpction = JSON.parse(localStorage.getItem('opctionFangshi'))

      if(readOpction){
        this.patternSwitch = this.tipIcon = this.readPattern = readOpction.mode;
      }

      this.bookList = this.$route.params.list;


      this.watchNum = this.$route.params.num;

      let url = 'http://api.pingcc.cn/?mhurl2=' + this.bookList[this.watchNum].url

      this.ajax(url).then(result => {

        self.bookData = JSON.parse(result).list;

        if(!self.readPattern){
          self.bookData.push([])
        }

        this.title = this.bookList[this.watchNum].num

        // self.watchNum++;
      })
    },
    methods:{
      onChange(index) {
        this.current = index;
        let self = this
        
        var timer = setTimeout(function () {
        
          for (var i = 1; i < self.timers.length; i++) {
            clearTimeout(self.timers[i]);
          }
        
          self.timers = [];
        
        }, 350)
        
        this.timers.push(timer);
        
        this.tpBtShow = true
        
        this.tpAnimate();
      },
      switchPattern(){

        //阅读模式，左右或者上下
        //this.patternSwitch true上下，false左右

        this.patternSwitch = !this.patternSwitch;

        //存储阅读习惯设置，下次进入读取
        localStorage.setItem('opctionFangshi',JSON.stringify({mode:this.patternSwitch}))

        //是否显示提示
        this.tipShow = !this.tipShow;

        //切换图标
        this.tipIcon = this.patternSwitch;

        //阅读模式结构切换
        this.readPattern = !this.readPattern;

        this.current = 0;

      },
      backNext(){
        window.history.back(-1);
      },
      tpAnimate(){
        let header = this.$refs.header;
        let footer = this.$refs.footer;

        if(this.tpBtShow){
          header.classList.remove("tpback-ani");
          footer.classList.remove("btback-ani");
          header.classList.add("tp-ani");
          footer.classList.add("bt-ani");
          this.tpBtShow = false;
        }else{
          header.classList.remove("tp-ani")
          footer.classList.remove("bt-ani")
          header.classList.add("tpback-ani")
          footer.classList.add("btback-ani")
          this.tpBtShow = true
        }
      },
      nextChapter(){
        let self = this;

        if(this.watchNum == this.bookList.length){
          this.$toast('大人，已经是最后一章了');
          return
        }

        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration:0
        });

        let contentBox = this.$refs.contentBox;

        contentBox.html='';

        self.watchNum ++ ;

        this.title = this.bookList[this.watchNum].num

        //0是上下阅读模式，1是左右阅读模式

        if(this.readPattern){
          contentBox.scrollTop=0;
        }else{
          this.current=0;
        }


        let url = 'http://api.pingcc.cn/?mhurl2=' + this.bookList[this.watchNum].url;

        this.ajax(url).then(result => {

          self.bookData = JSON.parse(result).list;

          if(!self.readPattern){
            self.bookData.push([])
          }

          self.$toast.clear()
        })
      },
      prevChapter(){
        let self = this;

        if(this.watchNum == 1){
          this.$toast('大人，已经是第一章了');
          return
        }

        self.watchNum--;

        this.title = this.bookList[this.watchNum].num

        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration:0
        });

        let contentBox = this.$refs.contentBox;

        contentBox.html='';

        //0是上下阅读模式，1是左右阅读模式

        if(this.readPattern){
          contentBox.scrollTop=0;
        }else{
          this.current=0;
        }



        let url = 'http://api.pingcc.cn/?mhurl2=' + this.bookList[this.watchNum].url;

        this.ajax(url).then(result => {

          self.bookData = JSON.parse(result).list;

          if(!self.readPattern){
            self.bookData.push([])
          }

          self.$toast.clear()
        })
      },
      goState(o){
        this.$router.push(o)
      },
      contentScroll(){

          let self = this

          var timer = setTimeout(function () {

            for (var i = 1; i < self.timers.length; i++) {
              clearTimeout(self.timers[i]);
            }

            self.timers = [];

          }, 350)

          this.timers.push(timer);

          this.tpBtShow = true

          this.tpAnimate();

      },
      addBookShelf(){

        let watchHis =JSON.parse(localStorage.getItem('watchHis'))


        let bookParams = this.$route.params.book

        //如果本地不存在记录
        if(!watchHis){

          let watchHis = [{
            bookname:bookParams.name,
            bookAuthor:bookParams.author,
            bookCover:bookParams.cover,
            bookNum:this.watchNum,
            bookShelf:true,
            bookZiliao:this.$route.params.bookUrl
          }];

          localStorage.setItem("watchHis",JSON.stringify(watchHis))

          this.$toast('订阅成功')

          return

        }

        for(let i=0; i<watchHis.length;i++){
          if(bookParams.name == watchHis[i].bookname || bookParams.author == watchHis[i].bookAuthor || bookParams.cover == watchHis[i].bookCover){

            if(watchHis[i].bookShelf){

              this.$toast('本书已存在书架')

            }else{

              watchHis[i].bookShelf = true;

              localStorage.setItem("watchHis",JSON.stringify(watchHis))

              this.$toast('订阅成功')
            }


            return
          }
        }


        watchHis.unshift({
            bookname:bookParams.name,
            bookAuthor:bookParams.author,
            bookCover:bookParams.cover,
            bookNum:this.watchNum,
            bookShelf:true,
            bookZiliao:this.$route.params.bookUrl
          })

        localStorage.setItem("watchHis",JSON.stringify(watchHis))

        this.$toast('订阅成功')

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
    },
    beforeRouteLeave(to,from,next){

      let watchHis =JSON.parse(localStorage.getItem('watchHis'))

      this.$toast.clear()

      let bookParams = this.$route.params.book

      //如果本地不存在记录
      if(!watchHis){

        let watchHis = [{
          bookname:bookParams.name,
          bookAuthor:bookParams.author,
          bookCover:bookParams.cover,
          bookNum:this.watchNum,
          bookShelf:false,
          bookZiliao:this.$route.params.bookUrl
        }];

        localStorage.setItem("watchHis",JSON.stringify(watchHis))

        next();
        return

      }

      for(let i=0; i<watchHis.length;i++){
        if(bookParams.name == watchHis[i].bookname || bookParams.author == watchHis[i].bookAuthor || bookParams.cover == watchHis[i].bookCover){
          watchHis[i].bookNum = this.watchNum;

          localStorage.setItem("watchHis",JSON.stringify(watchHis))

          next();
          return
        }
      }


      watchHis.unshift({
          bookname:bookParams.name,
          bookAuthor:bookParams.author,
          bookCover:bookParams.cover,
          bookNum:this.watchNum,
          bookShelf:false,
          bookZiliao:this.$route.params.bookUrl

        })

      localStorage.setItem("watchHis",JSON.stringify(watchHis))

      next()
    }
  }

</script>

<style lang="less" scoped>
  .contentPage{
    width: 100%;
    height: 100%;
    >.tp-ani{
       animation: tp 0.25s ease;
       animation-fill-mode:forwards;
    }
    >.tpback-ani{
       animation: tpback 0.25s ease;
       animation-fill-mode:forwards;
    }
    >.bt-ani{
       animation: bt 0.25s ease;
       animation-fill-mode:forwards;
    }
    >.btback-ani{
       animation: btback 0.25s ease;
       animation-fill-mode:forwards;
    }
    @keyframes tp
    {
        0%   {top: -10px;}
        25%  {top: -20px;}
        50%  {top: -30px;}
        100% {top: -60px;}
    }
    @keyframes tpback
    {
        0%   {top: -60px;}
        25%  {top: -40px;}
        50%  {top: -20px;}
        100% {top:   0px;}
    }
    @keyframes bt
    {
        0%   {bottom: -10px;}
        25%  {bottom: -20px;}
        50%  {bottom: -30px;}
        100% {bottom: -60px;}
    }
    @keyframes btback
    {
        0%   {bottom: -60px;}
        25%  {bottom: -40px;}
        50%  {bottom: -20px;}
        100% {bottom:   0px;}
    }
    >.tip-box{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      background: transparent;
      z-index: 3;
      display: flex;
      >.shang{
        width: calc(324px / 2);
        height: calc(396px / 2);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: url(../assets/content/tp-bt.png) no-repeat center center/cover;
      }
      >.zuo{
        width: calc(358px / 2);
        height: calc(285px / 2);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: url(../assets/content/lt-rt.png) no-repeat center center/cover;
      }
    }
    >.header{
      position: fixed;
      top:0;
      width: calc(100% - 20px);
      padding: 5px 10px;
      height: 30px;
      background: rgba(0,0,0,.8);
      color: #fff;
      display: flex;
      z-index: 3;
      >.left-arrow{
        width: 22px;
        height: 28px;
        margin-top: 1px;
        background: url(../assets/content/sc_img_chapter_v2.1.png) no-repeat -417.5px -204px;
        background-size:  542px 542px;
      }
      >.header-title{
        margin: 0 auto;
        line-height: 30px;
        font-weight: 600;
        font-size: 14px;
        font-family: "SimHei,Microsoft Yahei,SimSun,Tahoma,arial,sans-serif";
        >span:first-child{
          font-size: 16px;
        }
        >span:last-child{
          color: #fc6454;
        }
      }
      >.header-more{
        width: 25px;
        height: 22px;
        background: url(../assets/content/sc_img_chapter_v2.1.png) no-repeat -446.5px -208px;
        background-size:  542px 542px;
        margin-top: 4px;
      }
    }
    >.content-box{
      width: 100%;
      height: 100%;
      overflow-y: auto;
      >span{
        display: block;
        line-height: 45px;
        background: #ff9a6a;
        height: 45px;
        text-align: center;
        color: #fff;
        border: 1px solid #eee;
        font-size: 16px;
      }
      .next-chapter{
        font-size: 16px;
        position: relative;
        >div{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          margin: 0 auto;
          text-align: center;
          >div{
            font-weight: bold;
            >strong{
              color: #fc6454;
            }
          }
          >p{
            font-size: 12px;
          }
          >.mantou-pic{
            width: 117px;
            height: 149px;
            margin: 0 auto;
            background: url(../assets/register/baby-mt2.png) no-repeat center center/cover;
          }
          >.caozuo-ku{
            display: flex;
            margin-top: 30px;
            font-size: 14px;
            >.shangyihua{
              text-align: center;
              margin-left: 20px;
              >i{
                display: block;
                width: 30px;
                height: 30px;
                margin: 0 auto;
                border-radius: 50%;
                background: #1c9ef6 url(../assets/content/prev.png) no-repeat center center;
                background-size: 20px 20px;
              }
            }
            >.huizhuye{
              text-align: center;
              margin: 0 auto;
              >i{
                display: block;
                width: 45px;
                height: 45px;
                margin: 0 auto;
                border-radius: 50%;
                background: #fc6454 url(../assets/content/mulu.png) no-repeat center center;
                background-size: 20px 20px;
              }
            }
            >.xiayihua{
              text-align: center;
              margin-right: 20px;
              >i{
                margin: 0 auto;
               display: block;
               width: 30px;
               height: 30px;
               border-radius: 50%;
               background: #1c9ef6 url(../assets/content/next.png) no-repeat center center;
               background-size: 20px 20px;
              }
            }
          }
        }
      }
      .swipe-box{
        width: 100%;
        height: 100%;
      }
      .van-swipe{
        width: 100%;
        height: 100%;
      }
      .custom-indicator{
        width: 40px;
        height: 20px;
        background: rgba(255,255,255,.4);
        position: fixed;
        bottom: 0;
        right: 0;
      }
    }
    >.footer{
      width: calc(100% - 20px);
      height: 30px;
      background: rgba(0,0,0,.8);
      position: fixed;
      bottom: 0;
      padding: 10px 10px;
      display: flex;
      >.pattern{
        width: 30px;
        height: 30px;
        margin: 0 auto;
        >.tp-bt{
          display: block;
          width: 20px;
          height: 25px;
          background: url(../assets/content/sc_img_chapter_v2.1.png) no-repeat -479px -205.5px;
          background-size:  542px 542px;
          margin: 2.5px auto 0;
        }
        >.lt-rt{
          display: block;
          width: 25px;
          height: 20px;
          background: url(../assets/content/sc_img_chapter_v2.1.png) no-repeat -509px -207.5px;
          background-size:  542px 542px;
          margin: 5px auto 0;
        }
      }
      >.collection{
        width: 22px;
        height: 22px;
        background: url(../assets/content/sc_img_chapter_v2.1.png) no-repeat -324.5px -407.5px;
        background-size:  542px 542px;
        margin: 4px auto 0;
      }
      >.back-home{
        width: 22px;
        height: 22px;
        background: url(../assets/content/sc_img_chapter_v2.1.png) no-repeat -296.5px -408.5px;
        background-size:  542px 542px;
        margin: 4px auto 0;
      }
      >.prevChapter{
        width: 12.5px;
        height: 24px;
        background: url(../assets/content/sc_img_chapter_v2.1.png) no-repeat -204.5px -408.5px;
        background-size:  542px 542px;
        margin: 3px auto 0;
      }
      >.nextChapter{
        width: 12.5px;
        height: 24px;
        background: url(../assets/content/sc_img_chapter_v2.1.png) no-repeat -238.5px -408.5px;
        background-size:  542px 542px;
        margin: 3px auto 0;
      }
    }
  }

</style>


<!--
        let bookParams = this.$route.params.book

        let bookShelf = JSON.parse(localStorage.getItem('bookShelf'));

        if(!bookShelf){
          let bookShelf = [{
            bookname:bookParams.name,
            bookAuthor:bookParams.author,
            bookCover:bookParams.cover,
            bookNum:this.watchNum
          }];

          localStorage.setItem("bookShelf",JSON.stringify(bookShelf))

          return
        }

        for(let i=0; i<bookShelf.length;i++){
          if(bookParams.name == bookShelf[i].bookname || bookParams.author == bookShelf[i].bookAuthor || bookParams.cover == bookShelf[i].bookCover){
            bookShelf[i].bookNum = this.watchNum;

            this.$toast('本书已存在书架');

            return
          }
        }

        bookShelf.unshift({
            bookname:bookParams.name,
            bookAuthor:bookParams.author,
            bookCover:bookParams.cover,
            bookNum:this.watchNum
          })

        localStorage.setItem("bookShelf",JSON.stringify(bookShelf));

        this.$toast('订阅成功'); -->
