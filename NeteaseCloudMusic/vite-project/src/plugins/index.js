import { Button, Swipe, SwipeItem, Popup} from 'vant';
//集中管理引入的插件
//放进数组里
let plugins = [
    Button, Swipe, SwipeItem, Popup
]
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}