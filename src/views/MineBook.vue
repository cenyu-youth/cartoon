<template>
  <div class="mine-book">
    <div class="header clearfix">
      <div class="header-title fl">我的漫画</div>
      <div class="header-icon fr">
        <i class="bianji"></i>
        <i class="caozuo"></i>
      </div>
    </div>
    <div class="book-list-box clearfix">

      <div class="tip-box" v-show="isTip">您还没有收藏的书哦，快去收藏吧</div>

      <div class="book-card-box fl" v-for="(i, index) in mineBook" :key="index" v-show="i.bookShelf" @click="goState({name:'detailed', params: {url:i.bookZiliao,come:'0'}})">
        <div class="pic-box">
          <img :src="i.bookCover" class="auto-img">
          <span class="black">上次阅读到第{{i.bookNum}}话</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">9.8</span>
          </span>
        </div>
        <div class="bookname">{{i.bookname}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        mineBook:'',
        isTip:true
      }
    },
    created(){

      let watchHis =JSON.parse(localStorage.getItem('watchHis'));

      if(watchHis){
        this.isTip = false;

        this.mineBook = watchHis
      }
    },
    methods:{
      goState(o){
        this.$router.push(o)
      }
    }
  }

</script>

<style lang="less" scoped>

  .mine-book{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    >.header{
      width: calc(100% - 40px);
      height: 30px;
      padding: 10px 20px;
      >.header-title{
        font-size: 18px;
        font-family: "微软雅黑";
        line-height: 30px;
      }
      >.header-icon{
        width: 60px;
        height: 100%;
        display: flex;
        >.bianji{
          width: 24px;
          height: 26px;
          margin-top: 2px;
          background: url(../assets/search/sc_img_default.png) no-repeat -29px -73px;
          background-size: calc(542px / 2) calc(195px / 2);
        }
        >.caozuo{
          width: 22.5px;
          height: 22.5px;
          margin-top: 3.75px;
          margin-left: auto;
          background: url(../assets/search/sc_img_default.png) no-repeat -135.5px -42.5px;
          background-size: calc(542px / 2) calc(195px / 2);
        }
      }
    }
    .book-list-box{
      width: 100%;
      height: calc(100% - 50px);
      overflow-y: auto;
      background: #f5f5ee;
      position: relative;
      >.tip-box{
        font-size: 18px;
        color: #333;
        text-align: center;
        line-height: 60px;
      }
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
            width: 50px;
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

<!-- v-for="(i, index) in bookData" :key="index" @click="goState({name:'detailed', params: {url:i.url,come:'0'}})" -->
