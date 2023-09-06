<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
        <div class="topContent">
            <span @click="$router.push('/infouser')">我的</span>
            <span class="bold">发现</span>
            <span>云村</span>
            <span>电台</span>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
                <use xlink:href="#icon-sousuo1"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopNav"
}
</script>

<style lang="less" scoped>
.topNav{
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: space-between; /* 均匀排列每个元素
                                   首个元素放置于起点，末尾元素放置于终点 */
    align-items: center;  //内容居中
    .topContent{
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around; /* 均匀排列每个元素
                                   每个元素周围分配相同的空间 */
        align-items: center;
        font-size: 18px;
        .bold{
            font-weight: 600;
        }
    }
}
</style>