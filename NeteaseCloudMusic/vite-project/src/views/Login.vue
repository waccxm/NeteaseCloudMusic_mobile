<template>
    <div class="body">
        <svg @click="$router.go(-1)" class="icon" aria-hidden="true" style="width:30px;height: 30px; position: absolute; top: 20px;left: 10px">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="logo">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wangyiyunyinle-"></use>
            </svg>
        </div>
        <div class="login">
            <input class="number" type="email" placeholder=" 邮箱" v-model="email">
            <input class="password" type="password" placeholder=" 密码" v-model="password">
            <input class="submit" type="button" value="登录" @click="Login">
            <p style="margin-top: 20px; margin-bottom: -10px">没有账号？
                <router-link to="/registered"><span class="link link-primary">点击注册</span></router-link>
            </p>
        </div>
    </div>
</template>

<script>
import {getLoginUser} from "../request/Api/home.js";

export default {
    name: "Login",
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
      Login:async function (){
          let res = await this.$store.dispatch('getLogin',{email:this.email,password:this.password})
          console.log(res)
          if(res.data.code === 200){  //如果返回的code为200,证明登录成功
              this.$store.commit('updateIsLogin',true)
              this.$store.commit('updateToken',res.data.token)
              let result = await getLoginUser(res.data.account.id)
              console.log(result)
              this.$store.commit('updateUser',result)
              this.$router.push('/infouser')
          }
          else{
              alert("邮箱或密码错误！")
              this.password=''
          }
      }
    }
}
</script>

<style lang="less" scoped>
.body{
    background-color: #ff0000;
    width: 100%;
    height: 896px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 20%;
        margin-top: -500px;
        .icon{
            width: 100%;
            height: 100%;
        }
    }
    .login{
        width: 80%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background-color: #e70a0a;
        .number{
            padding-left: 10px;
            width: 80%;
            height: 20%;
            border: 2px solid dimgrey;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        .password{
            padding-left: 10px;
            width: 80%;
            height: 20%;
            border: 2px solid dimgrey;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        .submit{
            width: 50%;
            height: 15%;
            border: 2px solid #bb1515;
            border-radius: 10px;
            background-color: transparent;
            text-align: center;
            font-weight: 600;
        }
    }
}
</style>