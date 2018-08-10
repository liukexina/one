<template>
    <div>
        <h1>fellow23</h1>
        <router-link to="/connect/begin">Begin</router-link> |
        <router-link :to="{name:'test1',params:{name:'Honey',age:'21'}}">one</router-link> |
        <router-link to="/connect/connectcom2/Lucky/5">two</router-link> |
        <router-link to="/connect/backtwo/Lucky/5">backhome</router-link>
        <router-view/>
    </div>
</template>

<script>

</script>

<style>

</style>