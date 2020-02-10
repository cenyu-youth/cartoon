<template>
  <div class="release">
    <div class="header">
      <div class="back-icon" @click="backNext"></div>
      <div class="header-title">发布话题</div>
      <div class="cancel" @click="clickCancel()">取消</div>
    </div>
    <div class="content-box">
      <div class="biaoti-box">
        <textarea name="" id="" maxlength="40" v-model="textData.title"></textarea>
        <span>标题:{{textData.title.length}}/40</span>
      </div>
      <div class="duanluo-box">
        <textarea name="" id="" maxlength="3000" v-model="textData.duanluo"></textarea>
        <span>内容:{{textData.duanluo.length}}/3000</span>
      </div>
      <div class="uploadImg">
        <van-uploader v-model="textData.fileList" multiple />
      </div>
      <div class="release-btn" @click="releaseBtn()">
        <button>发表话题</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        textData:{
          title:'',
          duanluo:'',
          fileList:[],
          zan:0,
          pinglun:[],
          watch:0
        }
      }
    },
    methods:{
      backNext(){
        window.history.back(-1)
      },
      clickCancel(){
        this.textData.title = this.textData.duanluo = ''
        this.textData.fileList = [];
      },
      releaseBtn(){

        if(this.textData.title == '' || this.textData.title.replace(/(^\s*)/g, "") == ''){
          this.$notify({ type: 'primary', message: '标题不能为空' });
          return;
        }

        if(this.textData.duanluo == '' || this.textData.duanluo.replace(/(^\s*)/g, "") == ''){
          this.$notify({ type: 'primary', message: '内容不能为空' });
          return;
        }

        //设置时间戳

        this.textData.dates = Date.now()

        //存储到本地
        
        this.textData.fileList.unshift({content:'https://image.32yx.com/news/banner/1271197479795215.jpg'})
        
        
        let huatiData = JSON.parse(localStorage.getItem('huatiData'));

        if(!huatiData){

          let huatiData = [this.textData]

          localStorage.setItem('huatiData', JSON.stringify(huatiData));

          this.$toast('发布成功');

          this.textData.title = this.textData.duanluo = ''
          this.textData.fileList = [];

          return;

        }

        huatiData.push(this.textData);

        localStorage.setItem('huatiData', JSON.stringify(huatiData));

        this.$toast('发布成功');

        this.textData.title = this.textData.duanluo = ''
        this.textData.fileList = [];

      }
    }
  }

</script>

<style lang="less" scoped>

  .release{
    width: 100%;
    height: 100%;
    >.header{
      width: calc(100% - 20px);
      padding: 10px;
      background: #fc6454;
      display: flex;
      font-size: 14px;
      color: #fff;
      >.header-title{
        margin: 0 auto;
        font-size: 18px;
      }
      >.back-icon{
        width: 25px;
        height: 25px;
        background: url(../assets/detailed/arrow.png) no-repeat center center/cover;
      }
    }
    >.content-box{
      width: calc(100% - 20px);
      padding: 0 10px;
      height: calc(100% - 45px);
      overflow-y: auto;
      >.biaoti-box{
        padding: 5px;
        margin: 10px 0;
        border: 1px solid #fc6976;
        border-radius: 5px;
        >span{
          font-size: 12px;
          color: #666;
          letter-spacing: 2px;
          font-weight: 300;
        }
        >textarea{
          width: 98%;
          height: 40px;
          border: none;
          resize:none;
          font-size: 16px;
        }
      }
      >.duanluo-box{
        padding: 5px;
        margin: 10px 0;
        border: 1px solid #fc6976;
        border-radius: 5px;
        >span{
          font-size: 12px;
          color: #666;
          letter-spacing: 2px;
          font-weight: 300;
        }
        >textarea{
          width: 98%;
          height: 300px;
          border: none;
          resize:none;
          font-size: 16px;
        }
      }
      >.uploadImg{
        margin: 20px 0 10px;
      }
      >.release-btn{
        width: calc(100% - 20px);
        margin: 0 auto;
        >button{
          border: none;
          width: 100%;
          height: 44px;
          background: #fc6454;
          color: #fff;
          font-size: 16px;
          border-radius: 3px;
        }
      }
    }
  }

</style>
