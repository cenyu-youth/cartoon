<template>
  <div class="huati">
    <div class="header clearfix">
      <div class="header-title fl">热门话题</div>
      <div class="add-huati fr" @click="goState(({name:'release'}))"></div>
    </div>
    <div class="content">
      <div class="huati-card clearfix" v-for="(i, index) in textData" :key="index" @click="goState({name:'huatiContent', params:{neirong:i}})">
        <div class="ht-card-lt fl">
          <div class="ht-card-lt-tp">{{i.title}}</div>
          <div class="ht-card-lt-bt clearfix">
            <div class="ht-card-date fl">{{date(i.dates)}}</div>
            <div class="ht-card-browse fr">
              <i></i>
              <span>{{i.watch}}</span>
            </div>
          </div>
        </div>
        <div class="ht-card-rt fr">
          <img :src="imgUrl(i)" alt="" class="auto-img">
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        textData:''
      }
    },
    created(){

      this.textData = JSON.parse(localStorage.getItem('huatiData'))
      
    },
    methods:{
      date(timestamp){
       var date = new Date(timestamp);
       var Y = date.getFullYear() + '-';
       var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
       var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()+1);
       return Y+M+D;
      },
      goState(o){
        this.$router.push(o)
      },
      imgUrl(o){

        if(o.fileList.length >= 2){
          return o.fileList[1].content
        }

        return o.fileList[0].content
      }
    }
  }

</script>

<style lang="less" scoped>
    .huati{
      width: 100%;
      height: 100%;
      >.header{
        width: calc(100% - 20px);
        padding: 10px;
        background: #fc6454;
        height: 20px;
        line-height: 20px;
        >.header-title{
          font-size: 18px;
          color: #fff;
        }
        >.add-huati{
          width: 20px;
          height: 20px;
          background: url(../assets/zhanghu/bianji.png) no-repeat center center/cover;
        }
      }
      >.content{
        width: 93%;
        margin: 0 auto;
        height: calc(100% - 40px);
        overflow-y: auto;
        >.huati-card{
          width: 100%;
          margin: 10px 0 0;
          position: relative;
          >.ht-card-lt{
            width: calc(100% - 125px);
            >.ht-card-lt-tp{
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              font-size: 16px;
              color: #333;
            }
            >.ht-card-lt-bt{
              width: calc(100% - 125px);
              position: absolute;
              bottom: 0;
              font-size: 12px;
              color: #999;
              >.ht-card-browse{
                display: flex;
                height: 16px;
                >i{
                  width: 14px;
                  height: 10px;
                  background: url(../assets/zhanghu/eye.png) no-repeat center center/cover;
                  margin-right: 3px;
                  margin-top: 3px;
                }
              }
            }
          }
          >.ht-card-rt{
            width: 120px;
            height: 80px;
            position: relative;
            overflow: hidden;
            >img{
              position: absolute;
              top:50%;
              left:50%;
              transform: translate(-50%, -50%);
            }
            margin-left: 5px;
          }
        }
      }
    }
</style>
