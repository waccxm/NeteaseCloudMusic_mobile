import service from "../index.js";
//获取首页轮播图数据
export function getBanner(){
    return service({
        method: "GET",
        url: "/banner?type=2"
    })
}
//获取推荐歌单数据
export function getMusicList(){
    return service({
        method: "GET",
        url: "/personalized?limit=10"  //每次获取十个数据
    })
}
//搜索
export function getSearchMusic(data){
    return service({
        method: "GET",
        url: `/search?keywords=${data}`  //每次获取十个数据
    })
}
//邮箱登录url: `/login?email=xxx&password=xxx`
export function getEmailLogin(data){
    return service({
        method: "GET",
        url: `/login?email=${data.email}&password=${data.password}`
    })
}
// 获取用户详情/user/detail?uid=32953014
export function getLoginUser(data){
    return service({
        method: "GET",
        url: `/user/detail?uid=${data}`
    })
}