<template>
    <div>
        <h1>fellow23</h1>
        <router-link to="/begin">Begin</router-link> |
        <router-link :to="{name:'test1',params:{name:'Honey',age:'21'}}">one</router-link> |
        <router-link to="/connectcom2/Lucky/5">two</router-link> |
        <router-link to="/backtwo/Lucky/5">backhome</router-link>
        <router-view/>
    </div>
</template>

<script>

</script>

<style>

</style>