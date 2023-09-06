<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">
                发现好歌单
            </div>
            <div class="more">
                查看更多
            </div>
        </div>
        <div class="musicContent">
            <van-swipe :show-indicators="false" :loop="false" :width="150" class="my-swpie" >
                <van-swipe-item v-for="item in state.musicList" :key="item">
                    <router-link :to="{path:'/itemmusic',query:{id:item.id}}">
                    <img :src="item.picUrl" alt="">
                    <span class="playCount">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-play"></use>
                        </svg>
                        <span>{{changeCount(item.playCount)}}</span>
                    </span>
                    <span class="name">{{item.name}}</span>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script setup>
import {onMounted, reactive} from "vue";
import {getMusicList} from "../request/Api/home.js";

const state = reactive({
    musicList:[]
})
//生命周期函数
onMounted(async ()=>{  //async异步请求
    let res = await getMusicList(); //await等待数据获取
    state.musicList = res.data.result
    // console.log(res)
})
function changeCount(num){
    if(num>=100000000){
        return (num/10000000).toFixed(1)+"亿"
    }
    else if(num>=10000){
        return (num/10000).toFixed(1)+"万"
    }
}
</script>

<style lang="less">
.musicList{
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
    .musicTop{
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more{
            border: 1px solid #ccc;
            text-align: center;
            line-height: 0.6rem;
            padding: 0 0.2rem;
            border-radius: 0.4rem;
        }
    }
    .musicContent{
        width: 100%;
        height: 100%;
        .my-swpie{
            width: 100%;
            height: 100%;
            img{
                width: 90%;
                height: 140px;
                border-radius: 0.2rem;
            }
            .playCount{

                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                right: 10%;
            }
        }
    }
}
</style>