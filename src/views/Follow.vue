<template>
  <div class="follow">
    <div class="header">
      <div class="back-arrow" @click="backNext()"></div>
      <div class="header-title">我的关注</div>
      <div class="search"></div>
    </div>
    <div class="book-list-box clearfix">

      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
      <div class="book-card-box fl">
        <div class="pic-box">
          <img src="//image.yqmh.com/mh/25934.jpg-300x400.webp" alt="i.name" class="auto-img">
          <span class="black">123123</span>
          <span class="star clearfix">
            <i class="fl"></i>
            <span class="fl">123</span>
          </span>
        </div>
        <div class="bookname">斗破苍穹</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{

      }
    },
    methods:{
      backNext(){
        window.history.back(-1)
      },
      goState(o){
        this.$router.push(o)
      }
    }
  }

</script>

<style lang="less" scoped>

  .follow{
    width: 100%;
    height: 100%;
    .header{
      width: calc(100% - 20px);
      padding: 10px;
      background: #fc6454;
      display: flex;
      >.back-arrow{
        width: 20px;
        height: 20px;
        background: url(../assets/detailed/arrow.png) no-repeat center center/cover;
      }
      >.header-title{
        font-size: 18px;
        color: #fff;
        margin: 0 auto;
      }
      >.search{
        width: 20px;
        height: 20px;
        background: url(../assets/list/search.png) no-repeat center center/cover;
      }
    }
    .book-list-box{
      width: 100%;
      height: calc(100% - 44px);
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
