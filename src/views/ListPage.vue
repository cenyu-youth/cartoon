<template>
  <div class="list">
    <div class="header">
      <div class="back-arrow" @click="backNext()">
        <i></i>
        <span>排行榜</span>
      </div>
      <div class="search" @click="goState({name:'search'})"></div>
    </div>
    <div class="content">
      <van-tabs v-model="active" :border="false" title-active-color="#fc6454" color="#fc6454" line-width="10px" :swipeable="true" animated>
        <van-tab>
          <div class="ct-title-fire" slot="title">人气榜</div>
          <div class="ct-content" slot="default">
            <div class="ct-card-box diyi gongtong">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box dier gongtong">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box disan gongtong">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
          </div>
        </van-tab>
        <van-tab>
          <div class="ct-title-fire" slot="title">打赏榜</div>
          <div class="ct-content" slot="default">
            <div class="ct-card-box diyi gongtong">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box dier gongtong">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box disan gongtong">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
          </div>
        </van-tab>
        <van-tab>
          <div class="ct-title-fire" slot="title">月票榜</div>
          <div class="ct-content" slot="default">
            <div class="ct-card-box diyi gongtong">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box dier gongtong">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box disan gongtong">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
            <div class="ct-card-box">
              <div class="ct-card-lt">
                <div class="pic">
                  <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="" class="auto-img">
                </div>
                <div class="xinxi-box">
                  <div class="bookname">斗破苍穹</div>
                  <div class="book-tag">
                    <span>玄幻</span>
                    <span>热血</span>
                    <span>修真</span>
                  </div>
                  <div class="bangzhi">
                    <i></i>
                    <span>人气值：54.9亿</span>
                  </div>
                </div>
              </div>
              <div class="ct-card-rt">01</div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        active:''
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

  .list{
    width: 100%;
    height: 100%;
    >.header{
      width: calc(100% - 20px);
      padding: 10px;
      display: flex;
      >.back-arrow{
        display: flex;
        margin-right: auto;
        >i{
          width: 20px;
          height: 26px;
          background: url(../assets/search/sc_img_default.png) no-repeat calc(-501px / 2) -40px;
          background-size: calc(542px / 2) calc(195px / 2);
        }
        >span{
         font-size: 18px;
         color: #333;
        }
      }
      >.search{
        width: 22.5px;
        height: 22.5px;
        background: url(../assets/search/sc_img_default.png) no-repeat calc(-117px / 2) calc(-149px /2);
        background-size: calc(542px / 2) calc(195px / 2);
      }
    }
    >.content{
      width: 100%;
      height: calc(100% - 46px);
      overflow-y: auto;
      .ct-title-fire{
        font-size: 16px;
      }
      .ct-content{
        width: 100%;
        padding-bottom: 20px;
        >.ct-card-box{
          margin-top: 22px;
          width:calc(100% - 20px);
          padding: 8px 10px;
          display: flex;
          height: 58px;
          background: #f5f5f5;
          >.ct-card-lt{
            display: flex;
            >.pic{
              width: 60px;
              margin-right: 15px;
              position: relative;
              top: -18px;
              >img{
                border-radius: 3px;
              }
            }
            >.xinxi-box{
              >.bookname{
                font-size: 14px;
                color: #333;
                font-weight: bold;
              }
              >.book-tag{
                display: flex;
                margin: 5px 0 3px;
                >span{
                  font-size: 12px;
                  border-radius: 7.5px;
                  width: 36px;
                  height: 15px;
                  text-align: center;
                  line-height: 15px;
                  background: rgba(0,0,0,.2);
                  color: #fff;
                  margin-right: 3px;
                }
              }
              >.bangzhi{
                display: flex;
                >i{
                  width: 16px;
                  height: 16px;
                  background: url(../assets/list/fire.png) no-repeat center center/cover;
                  margin-right: 3px;
                }
                >span{
                  color: #333;
                  font-size: 12px;
                }
              }
            }
          }
          >.ct-card-rt{
            font-size: 36px;
            color: rgba(0,0,0,.07);
            margin-left: auto;
          }
        }
        >.diyi{
          background: #fc7365 !important;
        }
        >.dier{
          background: #ff9f71 !important;
        }
        >.disan{
          background: #ffc477 !important;
        }
        >.gongtong{
          margin-top: 22px;
          width:calc(100% - 20px);
          padding: 8px 10px;
          display: flex;
          height: 58px;
          >.ct-card-lt{
            display: flex;
            >.pic{
              width: 60px;
              margin-right: 15px;
              position: relative;
              top: -18px;
              >img{
                border-radius: 3px;
              }
            }
            >.xinxi-box{
              >.bookname{
                font-size: 14px;
                color: #fff;
                font-weight: bold;
              }
              >.book-tag{
                display: flex;
                margin: 5px 0 3px;
                >span{
                  font-size: 12px;
                  border-radius: 7.5px;
                  width: 36px;
                  height: 15px;
                  text-align: center;
                  line-height: 15px;
                  background: rgba(0,0,0,.2);
                  color: #fff;
                  margin-right: 3px;
                }
              }
              >.bangzhi{
                display: flex;
                >i{
                  width: 16px;
                  height: 16px;
                  background: url(../assets/list/fire-w.png) no-repeat center center/cover;
                  margin-right: 3px;
                }
                >span{
                  color: #fff;
                  font-size: 12px;
                }
              }
            }
          }
          >.ct-card-rt{
            font-size: 36px;
            color: #fff;
            margin-left: auto;
          }
        }
      }
    }
  }

</style>
