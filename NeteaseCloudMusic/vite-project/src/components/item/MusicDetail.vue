<template>
    <img :src="musicList.al.picUrl" alt="" class="bgimg">
    <div class="detailTop">
        <div class="detailTopLeft">
            <svg class="icon" aria-hidden="true" @click="backHome">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
        </div>
        <div class="detailTopCenter">
            <div class="leftMarquee">
                <Vue3Marquee style="color:#fff ; font-size: 20px">    <!--走马灯组件实现流动效果 -->
                    {{musicList.name+" "}}
                </Vue3Marquee>
                <span v-for="item in musicList.ar" :key="item">{{item.name}}</span>
                <!--                <svg class="icon" aria-hidden="true">-->
                <!--                    <use xlink:href="#icon-xiangyoujiantou"></use>-->
                <!--                </svg>-->
            </div>
        </div>
        <div class="detailTopRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
        </div>
    </div>
    <div class="detailContent" v-show="!isLyricShow">
        <img alt="" class="img_needle" src="src/assets/needle-ab.png" :class="{img_needle_active:!isbtnShow}">
        <img alt="" class="img_cd" src="src/assets/cd.png">
        <img alt="" @click="isLyricShow=true" class="img_ar" :src="musicList.al.picUrl" :class="{img_ar_active:!isbtnShow,img_ar_pauesd:isbtnShow}">
    </div>
    <div class="musicLyric" ref="musicLyric" v-show="isLyricShow">
        <p v-for="item in lyric" :key="item" :class="{active:(currentTime*1000>=item.time && currentTime*1000<item.pre)}">
            {{item.lrc}}
        </p>

    </div>
    <div class="detailFooter">
        <div class="footerTop">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xihuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tingyinle"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiaoxi"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gengduo-shuxiang"></use>
            </svg>
        </div>
        <div class="footerContent">
            <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
        </div>
        <div class="footerFooter">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
                <use xlink:href="#icon-shangyishoushangyige"></use>
            </svg>
            <svg class="bofang" aria-hidden="true" @click="play" v-if="isbtnShow">
                <use xlink:href="#icon-icon_bofang-xian"></use>
            </svg>
            <svg class="bofang" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
                <use xlink:href="#icon-xiayigexiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import {Vue3Marquee} from "vue3-marquee";
import 'vue3-marquee/dist/style.css'
import {mapMutations,mapState} from "vuex";
export default {
    name: "MusicDetail",
    data(){
      return{
          isLyricShow:false
      }
    },
    computed:{
        ...mapState(['lyriclist','currentTime','playListIndex','playList','duration']),
        lyric:function () {
            let arr;   //存放歌词时间和歌词数据的数组
            if(this.lyriclist.lyric){
                arr = this.lyriclist.lyric.split(/[(\r\n)]+/).map((item,i)=>{
                    let min = item.slice(1,3);
                    let sec = item.slice(4,6);
                    let mill = item.slice(7,10);
                    let lrc = item.slice(11,item.length)
                    let time = parseInt(min)*60*1000 + parseInt(sec)*1000+parseInt(mill);
                    if(isNaN(Number(mill))){   //判断是否是数字类型
                        mill = item.slice(7,9);
                        lrc = item.slice(10,item.length)
                        time = parseInt(min)*60*1000 + parseInt(sec)*1000+parseInt(mill);
                    }
                    // console.log(min,sec,mill,lrc)
                    return {min,sec,mill,lrc,time}
                })
                arr.forEach((item,i)=>{
                     if(i===arr.length-1 || isNaN(arr[i].time)){
                         item.pre = 100000;
                     }
                     else {
                         item.pre = arr[i+1].time
                     }
                })
            }
            // console.log(arr)
            return arr
        }
    },
    mounted() {
        // console.log(this.musicList)
        this.addDuration
    },
    methods:{
        backHome:function (){
            this.isLyricShow = false   //点击返回关闭歌词
            this.updateDetailShow()
        },
        goPlay:function (num) {
            let index = this.playListIndex+num;
            if(index<0){
                index = this.playList.length-1
            }
            else if(index === this.playList.length){
                index = 0
            }
            this.updatePlayListIndex(index)
        },
      ...mapMutations(['updateDetailShow','updatePlayListIndex'])
    },
    props:['musicList','isbtnShow','play','addDuration'],
    watch:{
      currentTime:function (newValue) {
          let p = document.querySelector("p.active")
          // console.log([p])
          if(p.offsetTop>300){
              this.$refs.musicLyric.scrollTop = p.offsetTop-300     //歌词移到上面时使歌词居中
          }
          if(newValue === this.duration){
              if (this.playListIndex === this.playList.length-1){
                  this.updatePlayListIndex(0)
                  this.play()
              }
              else {
                  this.updatePlayListIndex(this.playListIndex+1)
              }
          };
          // console.log([this.$refs.musicLyric])  //打印当前歌词
      }
    },
    components:{
        Vue3Marquee
    }
}
</script>

<style lang="less" scoped>
.bgimg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(60px);  //背景虚化
}
.detailTop {
    width: 100%;
    height: 1.2rem;
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;
    align-items: center;
    fill: #fff;
    .detailTopLeft {
        display: flex;
        align-items: center;
            .icon {
                width: 0.4rem;
                height: 0.4rem;
                fill: #999;
            }
        }
    }
    .datailTopCenter{
        display: flex;
        align-items: center;
        flex-direction: column;
        .leftMarquee {
            width: 3rem;
            height: 100%;
            margin-left: 1.65rem;
            span {
                margin-left: 0.5rem;
                color: #999;
            }
    }
    .detailTopRight{
        .icon{
            width: 0.8rem;
            height: 0.8rem;
            fill: #fff;
        }
    }
}
.detailContent {
    margin-top: 50px;
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .img_needle {
        width: 2rem;
        height: 3rem;
        position: absolute;
        left: 46%;
        transform-origin: 0 0;
        transform: rotate(-15deg);
        transition: all 0.5s;
    }
    .img_needle_active {
        width: 2rem;
        height: 3rem;
        position: absolute;
        left: 46%;
        transform-origin: 0 0;
        transform: rotate(0deg);
        transition: all 0.5s;
    }

    .img_cd {
        width: 5rem;
        height: 5rem;
        position: absolute;
        bottom: 2.3rem;
        z-index: -1;
    }
    .img_ar {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        position: absolute;
        bottom: 3.14rem;
        animation: rotate_ar 10s linear infinite;  //旋转速度时间样式设置
    }
    .img_ar_active {
        animation-play-state: running;
    }
    .img_ar_pauesd {
        animation-play-state: paused;
    }
    @keyframes rotate_ar {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
}
.musicLyric {
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.6rem;
    overflow: scroll;   //溢出滚动
    p {
        color: rgb(153, 143, 143);  //设置歌词颜色
        margin-bottom: 0.3rem; //设置歌词间距
    }
    .active {   //到达此句歌词时显示的样式
        color: #fff;
        font-size: 0.4rem;
    }
}
.detailFooter {
    width: 100%;
    height: 3rem;
    position: absolute;
    bottom: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .footerTop {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon {
            width: 0.36rem;
            height: 0.36rem;
            fill: rgb(245, 234, 234);
        }
        .icon {
            width: 0.6rem;
            height: 0.6rem;
        }
    }
    .range {
        width: 100%;
        height: 0.06rem;
    }
    .footerFooter {
        width: 100%;
        height: 0.9rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon {
            width: 0.6rem;
            height: 0.6rem;
            fill: rgb(245, 234, 234);
        }
        .bofang {
            width: 1rem;
            height: 1rem;
        }
    }
}
</style>