<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <h4>局部方法</h4>
      <button @click="add(3)">1：加</button>
      <button @click="reduce(3)">1：减</button>
      {{num}}
    </div>
    <div>
      <h4>全局方法</h4>
      <button @click="$store.commit('add',3)">加</button>
      <!--<button @click="$store.commit('reduce')">减</button>-->
      <button @click="reduce">2减</button>
      <!--<button @click="actionAdd">3action</button>    -->
      <!--3:{{count}}-->
      <!--2:{{sum}}-->
      <!--1:{{sum1}}-->
      {{count}}
    </div>
  </div>
</template>
<script>
  // import state from '@/store'
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  export default {
      data(){
          return {
              num:0
          }
      },
      // 1:
      // computed:{
      //     sum(){
      //         return this.$store.state.count
      //     }
      // },

      // 2:
      // computed:mapState({
      //   sum1(state){
      //       return state.count
      //   }
      // }),

      // 3:
      // computed:mapState(['count']),             /*用count*/

      // 4:
      computed:{
          ...mapState(['count']),
          ...mapGetters(['count'])

      },

      // 1:
      /*methods:{
          add(){
              this.num++;
          },
          reduce(){
              this.num--
          }
      },*/
      // 2:
      methods:mapMutations(["add","reduce"]),
      // 3:
      /*methods:{
          ...mapActions(["actionAdd"]),
          ...mapMutations(["add"])
      },*/



      beforeRouteEnter(to,from,next){
          /*console.log(to);
          console.log(from);*/
          next();
      },
      beforeRouteLeave(to,from,next){
          /*console.log(to);
          console.log(from);*/
          next();
      }
  }
</script>
<style>
  button{
      margin:10px;
  }
</style>