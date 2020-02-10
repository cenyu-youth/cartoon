<template>
  <div class="login">
    <div class="header">
        <div class="back-icon" slot="left" @click="backNext"></div>
        <div class="header-title" slot="title">登录</div>
        <div class="slot-box"></div>
    </div>
    <div class="content">
      <div class="ct-tp-box">
        <div class="user-pic"></div>
        <div class="logo-banner"></div>
      </div>
      <div class="form-box">
        <div class="inp-icon-box">
          <i></i>
          <input v-model="user" type="text" class="inp-box" placeholder="请输入星球账号、手机号码、邮箱">
        </div>
        <div class="inp-icon-box pwd-inp-box">
          <i></i>
          <input v-model="pwd" :type="pwdShow" class="inp-box" placeholder="请输入密码">
          <i ref="pwdShow" @click="showPwd('pwdShow')"></i>
        </div>
        <div class="wangjimima">忘记密码</div>
        <div class="btn-box" @click="clickLogin">登录</div>
        <div class="zhuce" @click="goState({name:'register'})">还没有账号？马上注册</div>
        <div class="disanfang-box">
          <div class="disanfang-title">使用第三方账号登录</div>
          <div class="icon-box">
            <i></i>
            <i></i>
          </div>
        </div>
        <div class="footer-text">登录代表你已阅读并同意<span>《知音漫客用户协议》</span></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        user:'',
        pwd:'',
        pwdShow:'password',
        come:'0'
      }
    },
    created(){
      this.come = this.$route.params.come;
    },
    methods:{
      goState(o){
        this.$router.push(o)
      },
      showPwd(o){
        let pwd = this.$refs[o]


        if(this[o] == 'password'){
          this[o] = 'text';
          pwd.classList.add('show-pwd');
        }else{
          this[o] = 'password';
          pwd.classList.remove('show-pwd');
        }

      },
      clickLogin(){
        let userData = JSON.parse(localStorage.getItem('userData'));

        if(this.user == '' || this.user.replace(/(^\s*)/g, "") == ''){

          this.$toast({message: '账号不能为空'})

          return;
        }else if(this.pwd == '' || this.pwd.replace(/(^\s*)/g, "") == ''){

          this.$toast({message: '密码不能为空'})

          return;
        }

        if(!userData){

          this.$toast('你还没有注册账号，快去注册账号吧');
          return

        }

        for(let i=0;i<userData.length;i++){
          if(userData[i].user == this.user){

            if(userData[i].pwd == this.pwd){

              let loginData = JSON.parse(localStorage.getItem('loginData'))

              if(!loginData){

                let loginData = {
                  zhanghao:userData[i],
                  code:1
                }

                localStorage.setItem('loginData',JSON.stringify(loginData));

                this.$toast('登录成功');

                window.history.back(-1);

                return;

              }


              loginData = {
                zhanghao:userData[i],
                code:1
              }

              localStorage.setItem('loginData',JSON.stringify(loginData));

              this.$toast('登录成功');

              window.history.back(-1);

              return;

            }else{
              this.$toast('登录密码错误')
              return;
            }

          }
        }

        this.$toast('账号不存在')

      },
      backNext(){

        let loginData = JSON.parse(localStorage.getItem('loginData'))


        if(loginData){

          if(this.come == 0){
            window.history.back(-1);
          }else{
            this.$router.push({name:this.come})
          }


          return;
        }

        this.$router.push({name:'home'})

      }
    },
  }

</script>

<style lang="less" scoped>

  .login{
    width: 100%;
    height: 100%;
    >.header{
      width: calc(100% - 20px);
      padding: 10px;
      background: #fc6454;
      display: flex;
      .back-icon{
        width: 25px;
        height: 25px;
        background: url(../assets/detailed/arrow.png) no-repeat center center/cover;
      }
      .header-title{
        color: #fff;
        text-align: center;
        margin: 0 auto;
        font-size: 16px;
      }
      .slot-box{
        width: 25px;
        height: 25px;
      }
    }
    >.content{
      width: 100%;
      height: calc(100% - 45px);
      overflow-y: auto;
      font-family: SimHei,Microsoft Yahei,SimSun,Tahoma,arial,sans-serif;
      >.ct-tp-box{
        width: 100%;
        >.user-pic{
          width: 91px;
          height: 91px;
          margin: 20px auto;
          background: url(../assets/register/login.png) no-repeat center center/cover;
        }
        >.logo-banner{
          width: 100%;
          height: 12.2px;
          background: url(../assets/register/login_bananer2.png) no-repeat center center/cover;
          margin-bottom: 20px;
        }
      }
      >.form-box{
        width: calc(100% - 60px);
        padding: 15px 30px 20px;
        >.inp-icon-box{
          width: 100%;
          display: flex;
          padding: 3px 0;
          border-bottom: 1px solid #d5d5d5;
          >i{
            width: 24px;
            height: 26px;
            margin:11px 12px;
            background: url(../assets/register/mantou.png) no-repeat center center/cover;
          }
          >.inp-box{
            border: none;
            width: calc(100% - 48px);
          }
          >.inp-box::-webkit-input-placeholder {
              color: #d9d9d9;
             font-size: 14px;
          }
        }
        >.pwd-inp-box{
          >i:first-child{
            background: url(../assets/register/lock.png) no-repeat center center/cover;
          }
          >i:last-child{
            background: url(../assets/register/eye.png) no-repeat center center/cover;
          }
          >i.show-pwd{
            width: 26px;
            height: 24px;
            background: url(../assets/register/Eye-show.png) no-repeat center center/cover;
          }
        }
        >.wangjimima{
          text-align: right;
          font-size: 14px;
          color: #fc6454;
          padding: 5px 0;
          margin-right:12px;
        }
        >.btn-box{
          width: 100%;
          height: 44px;
          border: 1px solid #fc6454;
          text-align: center;
          line-height: 44px;
          color: #fc6454;
          border-radius: 3px;
          font-size: 16px;
          margin-top: 15px;
          box-sizing: border-box;
        }
        >.zhuce{
          font-size: 12px;
          margin-top: 30px;
          color: #fc6454;
          text-align: center;
        }
        >.disanfang-box{
          width: 100%;
          >.disanfang-title{
            font-size: 12px;
            color: #b9b9b9;
            text-align: center;
            margin-top: 45px;
          }
          >.icon-box{
            width: 100%;
            display: flex;
            >i{
              width: 48px;
              height: 48px;
              border-radius: 50%;
              border: 1px solid #fc6454;
              margin-top: 30px;
            }
            >i:first-child{
              background: url(../assets/register/weibo.png) no-repeat center center;
              background-size: 24px 26px;
              margin-left: auto;
              margin-right: 28.5px;
            }
            >i:last-child{
              background: url(../assets/register/qq.png) no-repeat center center;
              background-size: 24px 26px;
              margin-right: auto;
              margin-left: 28.5px;
            }
          }

        }
        >.footer-text{
          text-align: center;
          color: #b9b9b9;
          margin-top: 30px;
          >span{
            color: #333;
          }
        }
      }
    }
  }

</style>
