import {createStore} from "vuex";
import {getMusicLyric} from "../request/Api/item.js";
import {getEmailLogin} from "../request/Api/home.js";
export default createStore({
    state:{
        playList:[{
            al:{
                id: 91652977,
                name: "Coastal",  //专辑名字
                pic: 109951165923249470,
                picUrl: "http://p3.music.126.net/ln_PGbJAXsT1MsLBvCMwZA==/109951165923249476.jpg",
                pic_str: "109951165923249476"
            },
            id:1496413497,
            name: "默认歌曲"   //歌曲名字
        }],
        playListIndex:0,   //默认下标
        isbtnShow:true,   //暂停按钮的显示
        detailShow:false,  //歌曲详情页显示，默认为false
        lyriclist:{},  //歌词
        currentTime:0,   //音乐当前播放时间
        duration:0,  //歌曲时长
        isLogin:false, //登录状态，默认为false
        isFooterMusic:true, //判断底部音乐播放器组件是否显示
        token:"",  //是否有token为登录的标志
        user:{}, //用户信息
    },
    mutations:{
        updateIsbtnShow:function (state,value){  //更新播放按钮状态
            state.isbtnShow = value
        },
        updatePlayList:function (state,value){   //更新歌曲列表
            state.playList = value
            // console.log(state.playList)
        },
        updatePlayListIndex:function (state,value){   //更新歌曲下标
            state.playListIndex = value
        },
        updateDetailShow:function (state) {   //更新歌曲详情页显示状态
            state.detailShow =! state.detailShow
        },
        updateLyricList:function (state,value) {   //更新歌词
            state.lyriclist = value
        },
        updateCurrentTime:function (state,value) {   //更新播放时间
            state.currentTime = value
            // console.log(state.currentTime)   打印当前时间
        },
        updateDuration:function (state,value) {
            state.duration = value
        },
        pushPlayList:function (state,value){
            state.playList.push(value)
        },
        updateIsLogin:function (state,value){
            state.isLogin = true
        },
        updateToken:function (state,value){
            state.token = value
            localStorage.setItem('token',state.token)
        },
        updateUser:function (state,value){
            state.user = value
        }
    },
    actions:{
      getLyric: async function (context,value){
          let res = await getMusicLyric(value)
          // console.log(res)
          context.commit("updateLyricList",res.data.lrc)
      },
      getLogin: async function (context,value){
          let res = await getEmailLogin(value);
          // console.log(res)
          return res
      }

    }
})


