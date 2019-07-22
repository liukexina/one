<template>
  <div id="app">
    <div class="nav">
        <navigation :movenames="movename"></navigation>
        <!--<navigations v-bind:navheads="navhead" v-bind:arrs="arr" v-bind:titles="title" :movenames="movename"></navigations>-->
    </div>
    <router-view @routerEmit="changeTitle"></router-view>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 1rem 0;
  }
</style>

<script>
  import Navigation from './components/public/Navigation.vue'
  import Navigations from './components/public/Navigations.vue'
  export default {
      components:{
          Navigation,
          Navigations
      },
      data(){
          return{
              navhead:"movie-nav",
              clear:"clearfix",
              title:"电影",
              arr:[true,false,false,false],
              movename:'movie'
          }
      },
      methods:{
          changeTitle(title,navhead,arr,name){
              this.title = title;
              this.navhead = navhead;
              this.arr = arr;
              this.movename = name;
          }
      }
  }
</script>
