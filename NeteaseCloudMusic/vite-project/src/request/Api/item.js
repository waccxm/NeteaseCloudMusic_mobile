import service from "../index.js";
//获取歌单详情页数据
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}

//获取歌单歌曲
export function getMusicUrl(data){
    return service({
        method:"GET",
        url:`/song/url?id=${data}`
    })
}
//获取歌词
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}