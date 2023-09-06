import {createRouter,createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import ItemMusic from "../views/ItemMusic.vue";
import Search from "../views/Search.vue";
import Login from "../views/Login.vue";
import InfoUser from "../views/InfoUser.vue";
import store from "../store/index.js";
import Registered from "../views/Registered.vue";

const routes = [
    {
        path:"/home",
        name:"home",
        component:Home
    },
    {
        path: "/",
        redirect:'/home'
    },
    {
        path:"/itemmusic",
        name:"itemmusic",
        component:ItemMusic
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
      path: '/registered',
      component: Registered
    },
    {
        path: '/infouser',
        name: 'infouser',
        component: InfoUser,
        beforeEnter:(to, from, next)=>{
            if(store.state.isLogin || store.state.token || localStorage.getItem('token')){
                next()
            }
            else {
                next('/login')
            }
        }
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
router.beforeEach((to,from)=>{
    if(to.path === '/login'){
        store.state.isFooterMusic = false
    }
    else {
        store.state.isFooterMusic = true
    }
})
export default router