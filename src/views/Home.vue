<template>
  <div class="home">
    <div class="home-ct">
      <div class="header clearfix">
        <div class="logo-box fl" @click="searchBtn"><i></i></div>
        <div class="search-box fl">
          <input type="text" class="inp-box" placeholder="数码宝贝" ref="inpBox">
          <i></i>
        </div>
      </div>
      <div class="banner">
        <van-swipe
         class="my-swipe"
         :autoplay="3000"
         indicator-color="white"
         :touchable="true">
          <van-swipe-item>
            <img src="https://manhua.qpic.cn/operation/0/01_00_10_2023112a48a11dcda8bacd1c47352725_1580487004127.jpg/0" class="auto-img" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://manhua.qpic.cn/operation/0/01_00_10_47cd24d08bd44f8506a354b26314ebb4_1580487003284.jpg/0" class="auto-img" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://manhua.qpic.cn/operation/0/01_00_10_2023112a48a11dcda8bacd1c47352725_1580487004127.jpg/0" class="auto-img" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://manhua.qpic.cn/operation/0/01_00_10_47cd24d08bd44f8506a354b26314ebb4_1580487003284.jpg/0" class="auto-img" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="botton-box clearfix">
        <div class="classify fl" @click="goState({name:'search'})"></div>
        <div class="list fl" @click="goState({name:'listPage'})"></div>
        <div class="see fl" @click="goState({name:'follow'})"></div>
      </div>
      <div class="line-box"></div>
      <div class="content-box">
        <div class="title-box clearfix">
          <span>精选推荐</span>
        </div>
        <div class="booklist-box clearfix">
          <div class="book-list">
            <div class="mhbook-box fl" @click="goState({name:'detailed', params:{url:'http://99770.hhxxee.com/comic/28038',come:'home'}})">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
          </div>
        </div>
        <div class="more-box clearfix">
          <span class="fl">更多</span>
          <i class="fl"></i>
        </div>
        <div class="guanggao-box">
          <span>广告</span>
        </div>
      </div>
      <div class="line-box"></div>
      <div class="content-box">
        <div class="title-box clearfix">
          <span>精选推荐</span>
        </div>
        <div class="booklist-box clearfix">
          <div class="book-list">
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
            <div class="mhbook-box fl">
              <div class="pic-box">
                <img src="https://manhua.qpic.cn/operation/0/05_17_11_b7d2deb792c56af05247994ca91b3049_1572945105161.jpg/0" alt="" class="auto-img">
              </div>
              <div class="bookname-box">狐妖小红娘</div>
              <div class="bookjs-box">迷糊小萝莉狐妖</div>
            </div>
          </div>
        </div>
        <div class="more-box clearfix">
          <span class="fl">更多</span>
          <i class="fl"></i>
        </div>
        <div class="guanggao-box">
          <span>广告</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100%;
    .home-ct{
      width: 100%;
      height: 100%;
      overflow-y: auto;
      position: relative;
      .line-box{
        width: 100%;
        height: 10px;
        background: #e7e7e7;
        border-top: 1px solid #d1d1d1;
      }
      >.header{
        width: calc(100% - 30px);
        padding: 40px 15px calc(218px - 70px);
        position: relative;
        z-index: 2;
        >.logo-box{
          width: 26px;
          height: 20px;
          padding: 5px 2px;
          background: #eee;
          border-radius: 50%;
          margin-right: 30px;
          >i{
            display: block;
            width: 26px;
            height: 20px;
            background: url(../assets/home/logo-icon.png) no-repeat center center/cover;
          }
        }
        >.search-box{
          width: calc(100% - 33px - 42px);
          height: 30px;
          background: rgba(255,255,255,.9);
          border-radius: 20px;
          position: relative;
          >.inp-box{
            width: 100%;
            height: 100%;
            border-radius: 20px;
            text-indent: 1em;
            border: none;
            background: transparent;
            border: 1px solid #eee;
            box-sizing: border-box;
            text-align: center;
          }

          >.inp-box::-webkit-input-placeholder {
             color: #909193;
             font-size: 14px;
          }
          >i{
            width: 16px;
            height: 16px;
            background: url(../assets/home/search.png) no-repeat center center/cover;
            position: absolute;
            top: 8px;
            left: 50%;
            margin-left: -42px;
          }
        }
      }
      >.banner{
        width: 100%;
        border-bottom: 4px solid #efefef;
        position: absolute;
        top: 0;
        .my-swipe .van-swipe-item {
          color: #fff;
          font-size: 20px;
          line-height: 150px;
          text-align: center;
          background-color: #39a9ed;
        }
      }
      >.botton-box{
        width: calc(100% - 60px);
        padding: 10px 30px;
        >div{
          width: 80px;
          height: 80px;
        }
        >div:nth-child(2){
          margin: 0 calc((100% - 240px) / 2);
        }
        >.classify{
          background: url(../assets/home/classify.png) no-repeat center center/cover;
        }
        >.list{
          background: url(../assets/home/list.png) no-repeat center center/cover;
        }
        >.see{
          background: url(../assets/home/see.png) no-repeat center center/cover;
        }
      }
      >.content-box{
        width: 100%;
        position: relative;
        >.title-box{
          width: 100%;
          padding: 10px 0;
          text-align: center;
          color: #ff5d5d;
          font-size: 14px;
          letter-spacing: 1px;
          >span{
            position: relative;
          }
          >span::before{
            display: block;
            content: '';
            position: absolute;
            top: 50%;
            left: -98px;
            width: 90px;
            height: 1px;
            background: #ff5c5c;
          }
          >span::after{
            display: block;
            content: '';
            position: absolute;
            top: 50%;
            left: 68px;
            width: 90px;
            height: 1px;
            background: #ff5c5c;
          }
        }
        >.booklist-box{
          width: 100%;
          overflow-x: auto;
          margin-bottom: 10px;
          >.book-list{
            width: calc(110px * 10);
            >.mhbook-box:last-child{
              margin-right: 0;
            }
            >.mhbook-box{
              width: 105px;
              margin-right: 5px;
              >.pic-box{
                width: 100%;
                >img{
                  border-radius: 5px;
                }
              }
              >.bookname-box{
                width: 100%;
                color: #333;
                font-size: 14px;
                text-align: center;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              >.bookjs-box{
                width: 100%;
                text-align: center;
                color: #999;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }

        }
        >.more-box{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          >span{
            color: #f95f5f;
            font-size: 16px;
            margin-right: 5px;
          }
          >i{
            width: 18px;
            height: 18px;
            background: url(../assets/home/more-icon.png) no-repeat center center/cover;
            margin-top: 2px;
          }
        }
        >.guanggao-box{
          margin-top: 45px;
          width: 100%;
          height: 120px;
          position: relative;
          background: url(https://manhua.qpic.cn/operation/0/20_11_25_355c87d8cb7151cc2d73f693554f69f9_1576812317863.jpg/0) no-repeat center center/cover;
          border-top: 10px solid #efefef;
          >span{
            width: 50px;
            height: 25px;
            background: rgba(238,238,238,.8);
            position: absolute;
            color: #fff;
            top: 0;
            right: 0;
            border-left: 1px solid #ded7d1;
            border-bottom: 1px solid #ded7d1;
            border-radius:0 0 0 12px;
            text-align: center;
            line-height: 25px;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'home',
  methods:{
    goState(o){
      this.$router.push(o)
    },
    searchBtn(){
      let inpVal = this.$refs.inpBox.value.replace(/(^\s*)/g, "");

      if(inpVal == ''){
        return
      }


      this.$router.push({name:'searchEnd', params: {name:inpVal,type:'搜索'}})
    },
  }
}
</script>
