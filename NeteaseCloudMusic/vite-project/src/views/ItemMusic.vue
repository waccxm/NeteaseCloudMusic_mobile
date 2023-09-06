<template>
    <ItemMusicTop :playlist='state.playlist'></ItemMusicTop>
    <ItemMusicList :playlist='state.playlist' :tracks="state.tracks" :trackIds="state.trackIds"></ItemMusicList>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, reactive} from "vue";
import {getMusicItemList, getMusicUrl} from "../request/Api/item.js";
import ItemMusicTop from "../components/item/ItemMusicTop.vue";
import ItemMusicList from "../components/item/ItemMusicList.vue";

const state = reactive({
    playlist:{},
    tracks:[],
    trackIds:[]
})
onMounted(async ()=>{
    let id = useRoute().query.id
    let res =  await getMusicItemList(id)
    state.playlist = res.data.playlist;
    state.tracks = res.data.playlist.tracks;
    state.trackIds = res.data.playlist.trackIds
    // console.log(state.trackIds)
    // console.log(state.playlist)
    // console.log(state.tracks)
    sessionStorage.setItem("itemDetail", JSON.stringify(state));
})

</script>

<style scoped>

</style>