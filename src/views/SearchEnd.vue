<template>
  <div class="search-end">
    <div class="header clearfix">
      <div class="back-icon fl" @click="backNext()"></div>
      <div class="header-title fl">{{primaryKey}}: {{bookname}}</div>
      <div class="search-icon fr" @click="backNext()"></div>
    </div>
    <div class="book-list-box clearfix">

      <div class="book-card-box fl" v-for="(i, index) in bookData" :key="index" @click="goState({name:'detailed', params: {url:i.url,come:'0'}})">
        <div class="pic-box">
          <img :src="i.cover" :alt="i.name" class="auto-img">
          <span class="black">{{i.tag}}</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">{{i.status}}</span>
          </span>
        </div>
        <div class="bookname">{{i.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        primaryKey:'',
        bookname:'',
        bookData:''
      }
    },
    created() {
      let self = this;
      let paramsData = this.$route.params;

      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration:0
      });

      if(paramsData.type == "搜索"){

        this.primaryKey = paramsData.type;
        this.bookname = paramsData.name;

        let url = 'http://api.pingcc.cn/?mhname=' + paramsData.name;

        this.ajax(url).then(result => {
          self.bookData = JSON.parse(result).list;

          self.$toast.clear()

        })
      }else if(paramsData.type == "分类"){
        this.primaryKey = paramsData.type;
        this.bookname = paramsData.name.text;

        let url = 'http://api.pingcc.cn/?mhname=' + paramsData.name.code;

        this.ajax(url).then(result => {

          self.bookData = JSON.parse(result).list;

          self.$toast.clear()

        })
      }
    },
    methods:{
      goState(o){
        this.$router.push(o)
      },
      backNext(){
        window.history.back(-1)
      },
      ajax(url){
        return new Promise((resolve,reject) => {

          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
              resolve(this.responseText)
            }
          }

          xhr.open('Get', url, false)

          xhr.send(null)
        })
      }
    },
    beforeRouteLeave(to,from,next){
      this.$toast.clear()
      next();
    },
  }

</script>

<style lang="less" scoped>
  .search-end{
    width: 100%;
    height: 100%;
    >.header{
      width: calc(100% - 20px);
      height: 30px;
      padding: 10px 10px 5px;
      .back-icon{
        width: 25px;
        height: 25px;
        margin-top: 2.5px;
        background: url(../assets/search/sc_img_default.png) no-repeat -250.1px -41.5px;
        background-size: 271px 97.5px;
      }
      >.header-title{
        font-size: 14px;
        font-weight: 600;
        line-height: 30px;
      }
      >.search-icon{
        width: 25px;
        height: 25px;
        margin-top: 2.5px;
        background: url(../assets/search/sc_img_default.png) no-repeat -58.5px -74px;
        background-size: 271px 97.5px;
      }
    }
    >.book-list-box{
      width: 100%;
      height: calc(100% - 45px);
      overflow-y: auto;
      background: #f5f5ee;
      position: relative;
      >.book-card-box{
        width: 112px;
        height: 170px;
        margin-top: 10px;
        margin-left: 10px;
        >.pic-box{
          width: 112px;
          height: 150px;
          overflow: hidden;
          position: relative;
          overflow: hidden;
          border-radius: 3px;
          background: #eee;
          >.black{
            width:calc(100% - 10px);
            height: 20px;
            padding: 0 5px;
            background: rgba(0,0,0,.5);
            color: #fff;
            position: absolute;
            bottom: 0;
            left: 0;
            line-height: 20px;
            text-align: right;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          >.star{
            position: absolute;
            top: 0;
            right: -10px;
            width: 65px;
            height: 20px;
            padding-left: 5px;
            border-radius: 10px;
            background: rgba(0,0,0,.4);
            >i{
              width: 15px;
              height: 15px;
              margin-top: 1px;
              margin-right: 3px;
              background: url(../assets/search/star.png) no-repeat center center/cover;
            }
            >span{
              color: #fff;
              text-align: right;
              line-height: 20px;
              font-size: 12px;
              width: calc(50px - 10px - 3px -15px);
            }
          }
        }
        >.bookname{
          width: 112px;
          font-size: 14px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>
