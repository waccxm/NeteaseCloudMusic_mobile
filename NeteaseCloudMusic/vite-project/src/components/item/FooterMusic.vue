<template>
    <div class="FooterMusic">
        <div class="footerLeft" @click="updateDetailShow">
            <img :src="playList[playListIndex].al.picUrl" alt="">
            <div>
                <p>{{playList[playListIndex].name}}</p>
                <span>横滑切换上下首哦</span>
            </div>
        </div>
        <div class="footerRight">
            <svg @click="play" class="icon" aria-hidden="true" v-if="isbtnShow">
                <use xlink:href="#icon-24gl-playCircle"></use>
            </svg>
            <svg @click="play" class="icon" aria-hidden="true" v-else>
                <use  xlink:href="#icon-24gl-pauseCircle"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gf-playlistMusic4"></use>
            </svg>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
        <van-popup v-model:show="detailShow" position="bottom" :style="{ width: '100%', height: '100%' }">
            <MusicDetail :musicList="playList[playListIndex]"
                         :play="play"
                         :isbtnShow="isbtnShow"
                         :addDuration="addDuration">

            </MusicDetail>
        </van-popup>
    </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import MusicDetail from "./MusicDetail.vue";
export default {
    name: "FooterMusic",
    components: {MusicDetail},
    data(){
        return{
            interVal:0  //计时器初始化为0
        }
    },
    computed:{
        ...mapState(['playList','playListIndex','isbtnShow','detailShow'])  //解构store传过来的属性
    },
    mounted() {
        // console.log(this.$refs)
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
        this.updateTime()
    },
    updated() {
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
        this.addDuration()
    },
    methods:{
        play:function (){
            //判断音乐是否播放
            if(this.$refs.audio.paused){
                this.$refs.audio.play()
                this.updateIsbtnShow(false)
                this.updateTime()   //播放就调用函数进行传值
            }
            else{
                this.$refs.audio.pause()
                this.updateIsbtnShow(true)
                clearInterval(this.interVal)     //暂停时清除计时器
            }
        },
        addDuration:function () {
          this.updateDuration(this.$refs.audio.duration)
        },
        updateTime:function () {   //更新当前时间
          this.interVal = setInterval(()=>{
              this.updateCurrentTime(this.$refs.audio.currentTime)
          },1000)
        },
        //解构store传过来的方法
        ...mapMutations(['updateIsbtnShow','updateDetailShow','updateCurrentTime','updateDuration'])
    },
    watch:{
        playListIndex:function (){     //监听如果下标发生改变，就自动播放音乐
            this.$refs.audio.autoplay = true
            if(this.$refs.audio.paused){   //如果是暂停状态，改变图标
                this.updateIsbtnShow(false)
            }
        },
        playList:function (){
            if(this.isbtnShow){
                this.$refs.audio.autoplay = true;
                this.updateIsbtnShow(false)
            }
        }
    }
}
</script>

<style lang="less" scoped>
.FooterMusic {
    width: 100%;
    height: 1.4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;
    .footerLeft {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        p{
            font-weight: bold;
        }
        img {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }
    .footerRight {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
            width: 0.6rem;
            height: 0.6rem;
        }
    }
}
</style>