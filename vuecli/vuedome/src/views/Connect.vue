<template>
    <div>
        <h1>联系我们{{$store.state.count}}</h1>
        <router-link :to="{name:'test1',params:{name:'liuke',age:30}}">test1</router-link> |
        <router-link to="/connect/test2/zhangsan/20">test2</router-link> |
        <router-link to="/connect/backtest2/zhangsan/20">back test2</router-link>
        <div class="router-tran">
            <transition name="fad">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .router-tran{
        position: relative;
    }
    .fad-enter{
        transform: scale(0.5);
    }
    .fad-enter-active{
        transition: all 1s ease;
    }
    .fad-enter-to{
        position:absolute;
        top:0;
        width: 100%;
        transform: scale(1);
    }
    .fad-leave{
        transform: scale(1);
    }
    .fad-leave-active{
        transition: all 0.5s ease;
    }
    .fad-leave-to{
        position:absolute;
        top:0;
        width: 100%;
        transform: scale(0.5);
    }
</style>