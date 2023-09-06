<!--个人中心页面-->
<template>
    <div class="body">
        <svg class="icon" aria-hidden="true" @click="$router.push('/home')">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="avatarBackGorund" >
            <img :src="user.data.profile.backgroundUrl">
        </div>
        <div class="card">
            <img class="avatarImg" :src="user.data.profile.avatarUrl">
            <p class="username">{{user.data.profile.nickname}}</p>
            <div class="followfans">
                <p>{{user.data.profile.follows}}&nbsp;关注</p>
                <p>&nbsp;&nbsp;{{user.data.profile.followeds}}&nbsp;粉丝</p>
                <p>&nbsp;&nbsp;Lv.{{user.data.level}}</p>
            </div>
            <div class="userSongs">
                <p>累积听歌:{{user.data.listenSongs}}首</p>
                <p>村龄:{{user.data.createDays}}天</p>
                <p v-if="user.data.profile.gender===1">性别:男</p>
                <p v-else>性别女</p>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex";

export default {
    name: "InfoUser",
    computed:{
        ...mapState(['user'])
    },
    mounted() {
        console.log(this.user)
    }
}
</script>

<style lang="less" scoped>
.body{
    border: 1px solid transparent;
    width: 100%;
    height: 850px;
    position: relative;
    background-color: #f5f3f3;
    .icon{
        position: absolute;
        z-index: 2;
        margin: 0px auto 0 10px;
        width: 8%;
        height: 8%;
    }
    .card{
        position: absolute;
        z-index: 1;
        width: 60%;
        height: 25%;
        background: rgba(182, 174, 174,0.5);
        border-radius: 10px;
        margin: 250px 20% 0 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .avatarImg{
            width: 30%;
            border-radius: 50%;
            margin-top: -60px;
            margin-bottom: 10px;
        }
        .username{
            color: white;
            font-weight: 600;
            font-size: 20px;
        }
        .followfans{
            width: 70%;
            height: 20%;
            background-color: transparent;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            p{
                font-size: 13px;
                color: #807d7d;
            }
        }
        .userSongs{
            p{
                color: #696767;
            }
        }
    }
    .avatarBackGorund{
        position: absolute;
        z-index: 0;
    }
}
</style>