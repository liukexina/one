<template>
  <div id="app">
    <div class="header">
      <button @click="fore"><</button>
      <button @click="home">home</button>
      <button @click="after">></button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/connect">Connect</router-link> |
      <router-link to="/home">Backhome</router-link> |
      <router-link to="/bh">AgainBack</router-link>
    </div>
    <div>
      <transition name="fade">
        <router-view/>
      </transition>
    </div>

  </div>
</template>

<script>
    export default{
        methods:{
            home(){
                this.$router.push('/');
            },
            fore(){
                this.$router.go(-1);
            },
            after(){
                this.$router.go(1);
            }
        }
    }
</script>
<style>
  #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 60px;
   }
  .header{
    margin:10px;
  }
  .header button{
    margin: 0 10px;
  }
  .fade-enter{
    transform: scale(0.5);
  }
  .fade-enter-active{
    transition: all 1s ease;
  }
  .fade-enter-to{
    transform: scale(1);
  }
  .fade-leave{
    transform: scale(1);
  }
  .fade-leave-active{
    transition: all 0.5s ease;
  }
  .fade-leave-to{
    transform: scale(0.5);
  }
</style>
