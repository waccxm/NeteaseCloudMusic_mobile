import { createApp } from 'vue'
import './style.css'
import App from './Main.vue'
import router from "./router/index.js";
import getVant from "./plugins/index.js";
import { createPinia } from 'pinia'
import store from "./store/index.js";

const app =  createApp(App)
const pinia = createPinia()
getVant(app)
app.use(router)
app.use(pinia)
app.use(store)
app.mount('#app')
