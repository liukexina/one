<template>
  <div id="app">
    <div>
        <nave></nave>
    </div>
      <transition name="fade">
          <router-view></router-view>
      </transition>

  </div>

</template>

<style>
    body,html{
        height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }
    .fade-enter{
        transform: translateX(-100%);
    }
    .fade-enter-active{
        transition: all 1s ease;
    }
    .fade-enter-to{
        transform: translateX(0);
    }
    .fade-leave{
        transform: translateX(0);
    }
    .fade-leave-active{
        transition: all 1s ease;
    }
    .fade-leave-to{
        transform: translateX(100%);
    }
</style>
<script>
    import Navigate from './components/public/Navigate.vue'
    import Navigates from './components/public/Navigates.vue'
    import Nave from './components/public/Nave.vue'
  export default {
      components:{
          Navigate,
          Navigates,
          Nave
      }
  }
</script>
