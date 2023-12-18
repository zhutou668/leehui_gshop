<template>
  <div class="login_pages">
    <div class="login_pages_top">
      <font-awesome-icon class="goback_Btn" @click="$router.back(-1)" :icon="['fas', 'chevron-left']" />
    </div>

    <div class="login_app">
      <h1 class="login_app_title">硅谷外卖</h1>
    </div>

    <div class="login_navigation">
      <p class="login_phone" :class="{active:phoneLogin} " @click="phoneLogin = true">短信登录</p>
      <p class="login_account" :class="{active: ! phoneLogin} " @click="phoneLogin = false">密码登录</p>
    </div>

    <div class="login_phone_box" v-show="phoneLogin">
      <div class="login_phone_form" >
      <input type="number" v-model.number="phoneNumber" maxlength='13' 
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
      placeholder="手机号">
      <input type="number" v-model.number="otp" maxlength='6'
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
      placeholder="验证码">
      <button :disabled="!isTruePhone" class="login_getCode" :class="{true_phone: isTruePhone}" @click="getCode">
        {{countTime > 0 ? `已发送(${countTime}s)` : '获取验证码'}}
      </button>
      </div>
      <div class="login_rules">
        <p class="login_rules_text">
          温柔提示：未注册硅谷外卖账号的手机号，登录时将自动注册，且代表已同意。
          <a href="#">《用户服务协议》</a>
        </p>
      </div>
      <div class="login_button">
        <h2>登录</h2>
      </div>
      <p class="login_aboutUS">
        关于我们
      </p>
    </div>

    <div class="login_password" v-show="!phoneLogin">
        <input type="text" placeholder="手机号/邮箱/账号">
        <input type="password" v-if="!isShowpassword" v-model="passWord" placeholder="密码">
        <input type="text" v-else v-model="passWord" placeholder="密码">
        <input type="text" placeholder="验证码" v-model="captcha">
        <input type="checkbox" v-model="isShowpassword"  id="s5" />
        <label class="slider-v3 fixed_button" for="s5"></label>
        <div class="login_button">
        <h2>登录</h2>
      </div>
      <p class="login_aboutUS">
        关于我们
      </p>
    </div>
    
  </div>
</template>

<script>
export default {
    name:'AppLogin',
    data(){
      return {
        countTime: 0,
        phoneNumber: '',
        otp: '',
        captcha: '',
        passWord:'',
        phoneLogin: true,
        isShowpassword: false
      }
    },
    computed:{
      isTruePhone(){
        return /^1\d{12}$/.test(this.phoneNumber)
      }
    },
    methods:{
      getCode (){
        alert(1)
        if( !this.countTime){
          this.countTime = 30
          const getCodeTime =  setInterval(() => {
          this.countTime --
          if(this.countTime <= 0) {
            clearInterval(getCodeTime)
          }
        }, 1000);
        }
      }
    }

}
</script>

<style scoped>
  p {
    margin: 0;
  }

  input {
    display: block;
    margin: 8px 0;
    padding: 5px;
    width: 95%;
    border-radius: 5px;
    line-height: 36px;
  }

  input:hover {
    outline: none;
    border: 2px solid green;
  }

  .active {
    color: #00a56b;
    border-bottom: 3px solid #00a56b;
  }

  .login_pages_top {
    padding : 8px;
    width: 10%;
  }
  .goback_Btn {
    font-size: 20px;
    padding: 5px; 
  }

  .login_app_title {
    text-align: center;
    color: #00a56b ;
  }

  .login_navigation {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login_phone {
    width: 30%;
    padding: 10px;
    font-weight: bold;
    text-align: center;
  }

  .login_account {
    width: 30%;
    font-weight: bold;
    text-align: center;
    padding: 10px;
  }

  .login_phone_form {
    padding: 5px;
    margin: 16px 0;
    position: relative;
  }

  .login_getCode {
    position: absolute;
    top: 13px;
    right: 3%;
    border: none;
    background: none;
    color: #969b9f;
    padding: 14px;
  }

  .true_phone {
    color: #000;
  }

  .login_rules {
    padding: 5px;
  }

  .login_rules_text a {
    display: block;
    padding: 8px;
    color: #00a56b;
  }
  
  .login_button h2 {
    text-align: center;
    margin: 16px 5px;
    padding: 8px;
    background-color: green;
    border-radius: 4px;
    font-size: 22px;
    color: floralwhite;
  }

  .login_aboutUS {
    margin: 16px 50%;
    transform: translateX(-50%);
    padding: 16px 5px;
    text-align: center;
    font-size: 14px;
    width: 40%;
  }

  .login_password {
    padding: 5px;
    margin: 16px 0;
  }
  
  #s5 {
    display: none;
  }
  .slider-v3 {
  position: relative;
  display: block;
  width: 3.5em;
  height: 1.6em;
  cursor: pointer;
  border-radius: 1.5em;
  transition: 350ms;
  background: #ddd;
}

.slider-v3::after {
  position: absolute;
  content: '';
  width: 2em;
  height: 1.6em;
  top: 0;
  left: 0;
  border-radius: 1.5em;
  transition: width 200ms ease-out, height 300ms 50ms ease-in, top 300ms 50ms ease-in, left 250ms 50ms ease-in, background 300ms ease-in, box-shadow 300ms ease-in;
  background: #f2f2f2;
  box-shadow: 0 0 0 1.5em #f2f2f2 inset;
}

input:checked + .slider-v3::after {
  width: 2em;
  height: 1.6em;
  top: 0;
  left: 1.5em;
  background: #4c6;
  box-shadow: 0 0 0 0 #f2f2f2 inset;
}

.login_password {
  position: relative;

}

.fixed_button {
    position: absolute;
    top: 25%;
    right: 4%;
}
  
</style>