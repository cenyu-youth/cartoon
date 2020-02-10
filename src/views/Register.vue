<template>
  <div class="register">
    <div class="header">
        <div class="back-icon" slot="left" @click="backNext"></div>
        <div class="header-title" slot="title">漫友注册</div>
        <div class="slot-box"></div>
    </div>
    <div class="content">
      <div class="ct-tp-box">
        <div class="user-pic"></div>
        <div class="logo-banner"></div>
      </div>
      <div class="form-box">
        <div class="inp-icon-box nicheng">
          <i></i>
          <input  v-model="nicheng"  type="text" class="inp-box" placeholder="请输入昵称">
        </div>
        <div class="inp-icon-box">
          <i></i>
          <input  v-model="user"  type="text" class="inp-box" placeholder="请输入星球账号、手机号码、邮箱">
        </div>
        <div class="inp-icon-box pwd-inp-box">
          <i></i>
          <input  v-model="pwd"  :type="pwdShow" class="inp-box" placeholder="请输入密码">
          <i ref="pwdShow" @click="showPwd('pwdShow')"></i>
        </div>
        <div class="inp-icon-box pwd-inp-box">
          <i></i>
          <input  v-model="rePwd"  :type="rePwdShow" class="inp-box" placeholder="确认密码">
          <i ref="rePwdShow" @click="showPwd('rePwdShow')"></i>
        </div>
        <div class="btn-box" @click="clickRegister">注册</div>
        <div class="zhuce" @click="goState({name:'login'})">已有账号？马上登录</div>
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
        nicheng:'',
        user:'',
        pwd:'',
        rePwd:'',
        pwdShow:'password',
        rePwdShow:'password'
      }
    },
    methods:{
      goState(o){
        this.$router.push(o)
      },
      clickRegister(){

        if(this.nicheng == '' || this.nicheng.replace(/(^\s*)/g, "") == ''){

          this.$toast({message: '请输入昵称'})

          return;
        }else if(this.user == '' || this.user.replace(/(^\s*)/g, "") == ''){

          this.$toast({message: '账号不能为空'})

          return;
        }else if(this.pwd == '' || this.pwd.replace(/(^\s*)/g, "") == ''){

          this.$toast({message: '密码不能为空'})

          return;
        }

        let userReg = /^[a-zA-Z0-9_-]{4,16}$/;
        let pwdReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
        let nis = /^[\w\u4e00-\u9fa5]{6,12}$/;
        if(!nis.test(this.nicheng)){
          this.$toast({message: '昵称格式错误,请输入6到12位汉字字母数字下划线'})

          return;
        }else if(!userReg.test(this.user)){
          this.$toast({message: '账号格式错误,请输入4到16位（字母，数字，下划线，减号)'})

          return;
        }else if(!pwdReg.test(this.pwd)){
          this.$toast({message: '密码格式错误,最少6位，包括至少1个大写字母，1个小写字母，1个数字'})

          return;
        }else if(this.rePwd == '' || this.rePwd.replace(/(^\s*)/g, "") == ''){

          this.$toast({message: '请输入确认密码'})

          return;
        }else if(this.rePwd != this.pwd){
          this.$toast({message: '两次密码输出不一致'})

          return;
        }

        this.$toast.loading({
          message: '注册中...',
          forbidClick: true,
          duration:0
        });


        let userData = JSON.parse(localStorage.getItem('userData'));

        let dateTime = Date.now()

        if(!userData){
          let userData = [{
            name:this.nicheng,
            biaoshi:dateTime.toString().slice(0,6),
            user:this.user,
            pwd:this.pwd,
            yuanbao:0,
            yuepiao:1,
            tuijian:10
          }];

          localStorage.setItem('userData',JSON.stringify(userData));

          this.$toast.clear();

          this.$toast('账号注册成功')

          this.nicheng=this.user=this.pwd=this.rePwd='';

          return
        }


        for(let i=0;i<userData.length;i++){
          if(userData[i].user == this.user){

            this.$toast.clear();

            this.$toast('此账号已注册');

            return
          }
        }

        userData.push({
          name:this.nicheng,
          biaoshi:dateTime.toString().slice(0,6),
          user:this.user,
          pwd:this.pwd,
          yuanbao:0,
          yuepiao:1,
          tuijian:10
        })

        localStorage.setItem('userData',JSON.stringify(userData));

        this.$toast.clear();
        
        this.nicheng=this.user=this.pwd=this.rePwd='';

        this.$toast('账号注册成功')

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
      backNext(){
        window.history.back(-1)
      }
    },
  }

</script>

<style lang="less" scoped>

  .register{
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
          background: url(../assets/register/login_bananer1.png) no-repeat center center/cover;
          margin-bottom: 20px;
        }
      }
      >.form-box{
        width: calc(100% - 60px);
        padding: 15px 30px 20px;
        .nicheng{
          >i{
            background: url(../assets/register/man2.png) no-repeat center center/cover !important;
          }
        }
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
          margin-top: 25px;
          color: #fc6454;
          text-align: center;
        }
        >.disanfang-box{
          width: 100%;
          >.disanfang-title{
            font-size: 12px;
            color: #b9b9b9;
            text-align: center;
            margin-top: 25px;
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
          margin-top: 25px;
          >span{
            color: #333;
          }
        }
      }
    }
  }

</style>
