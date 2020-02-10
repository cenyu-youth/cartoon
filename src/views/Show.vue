<template>
  <div class="show">

    <div class="content">
      <van-swipe v-if="isFirst">
        <van-swipe-item>

          <div slot="default" class="swipe-img-box">
            <img src="../assets/show/b1.jpg" alt="" class="auto-img">
          </div>

        </van-swipe-item>
        <van-swipe-item>

          <div slot="default" class="swipe-img-box">
            <img src="../assets/show/b2.jpg" alt="" class="auto-img">
          </div>

        </van-swipe-item>
        <van-swipe-item>

          <div slot="default" class="swipe-img-box">
            <img src="../assets/show/b3.jpg" alt="" class="auto-img">
          </div>

        </van-swipe-item>
        <van-swipe-item>

          <div slot="default" class="swipe-img-box">
            <img src="../assets/show/b4.jpg" alt="" class="auto-img">
          </div>

        </van-swipe-item>
        <van-swipe-item>

          <div slot="default" class="swipe-img-box">
            <img src="../assets/show/b5.jpg" alt="" class="auto-img">
          </div>

        </van-swipe-item>
        <van-swipe-item>

          <div slot="default" class="swipe-img-box">
            <img src="../assets/show/b6.jpg" alt="" class="auto-img">
          </div>

        </van-swipe-item>
        <van-swipe-item>

          <div slot="default" class="swipe-img-box">
            <img src="../assets/show/b7.jpg" alt="" class="auto-img">
          </div>

        </van-swipe-item>
        <van-swipe-item>

          <div slot="default" class="swipe-img-box">
            <img src="../assets/show/b8.jpg" alt="" class="auto-img">
          </div>

        </van-swipe-item>
        <van-swipe-item>

          <div slot="default" class="swipe-img-box into">
            <span @click="goState({name:'login',params:{come:'home'}})">立即体验</span>
            <img src="../assets/show/b9.jpg" alt="" class="auto-img">
          </div>

        </van-swipe-item>
      </van-swipe>
      <div v-if="!isFirst" class="guanggao">
        <img src="../assets/show/gg.jpg" alt="" class="auto-img">
        <span @click="goState({name:'home'})">跳过({{second}}秒)</span>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        isFirst:false,
        second:8,
        set:''
      }
    },
    created(){

      let loginData = JSON.parse(localStorage.getItem('loginData'))

      if(!loginData){
        this.isFirst = true;
        
        let loginData = {
          code:0,
        }

        localStorage.setItem('loginData',JSON.stringify(loginData));

        return;
      }

      this.times();

    },
    methods: {
      goState(o){
        clearInterval(this.set);
        this.$router.push(o)
      },
      times(){

        let i = 8

        let self = this

        this.set = setInterval(() => {

          i--;

          self.second = i;


          if(i <= 0){
            clearInterval(self.set);

            self.$router.push({name:'home'})
          }
        },1000)

      },
    },
  }

</script>

<style lang="less" scoped>

  .show{
    width: 100%;
    height: 100%;
    position: relative;
    background: #999;
    .content{
      width: 80%;
      border: 8px solid #fff;
      box-shadow: 1px 1px 5px #333333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      >.guanggao{
        position: relative;
        >span{
          position: absolute;
          top: 10px;
          right: 10px;
          background: #eee;
          width: 60px;
          height: 30px;
          text-align: center;
          color: #333;
          line-height: 30px;
        }
      }
    }
    .into{
      position: relative;
      >span{
        position: absolute;
        margin: 0 auto;
        bottom: 50px;
        left: 10px;
        right: 10px;
        width: 160px;
        height: 44px;
        border-radius: 22px;
        background: rgb(32,153,205);
        border: 2px solid #fff;
        text-align: center;
        color: #fff;
        font-size: 18px;
        line-height: 44px;
      }
    }
  }

</style>
