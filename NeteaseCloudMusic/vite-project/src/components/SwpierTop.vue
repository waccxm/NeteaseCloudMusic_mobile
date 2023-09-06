<template>
    <div id="SwpierTop">
        <van-swipe :autoplay="3000" lazy-render>
<!--            遍历获取到的动态图片数组-->
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
import axios from "axios";
import {onBeforeMount, onMounted, reactive} from "vue";
import {getBanner} from "../request/Api/home.js"; //获取轮播图数据方法
//设置动态属性state
const state = reactive({
    images:[]   //轮播图数组
})
//生命周期函数
onMounted(async ()=>{  //async异步请求
    //发送get请求
    // axios.get('http://localhost:3000/banner?type=2').then( //then方法返回data对象
    //     ({data}) =>{
    //         console.log(data)
    //         state.images = data.banners  //用state获取动态数据
    //         console.log(state.images)
    // })
    let res = await getBanner(); //await等待数据获取
    state.images = res.data.banners
    // console.log(res)
})
</script>

<style lang="less">
#SwpierTop{
    .van-swipe{
        width: 100%;
        padding-left: 10px;
        .van-swipe__track{
            .van-swipe-item{
                img{
                    width: 95%;
                    height: 4rem;
                    border-radius: 10px;
                }
            }
        }
    }
}
</style>