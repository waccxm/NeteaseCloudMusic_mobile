<template>
    <router-view></router-view>
    <FooterMusic v-show="$store.state.isFooterMusic"></FooterMusic>
</template>

<script>
import Home from "./views/Home.vue";
import FooterMusic from "./components/item/FooterMusic.vue";
export default {
    name: "Main",
    components: {FooterMusic, Home}
}
</script>

<style lang="less"> //只有less才能嵌套式使用选择器
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.icon{
    width: 0.4rem;
    height: 0.4rem;
}
a{
    color: black;
}
</style>