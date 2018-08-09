<template>
    <div>
        <h5>What's your name?</h5>
        <h6>姓名：{{$route.params.name}}</h6>
        <h6>年龄：{{$route.params.age}}</h6>
        <div>
            <!--计数器：{{$store.state.count}}-->
            <!--计数器：{{sum}}   -->
            <!--计数器：{{sum1}}-->
            计数器：{{count}}
            <button @click="$store.commit('add',20)">+1</button>
            &nbsp;
            <button @click="reduce">-1</button>
            &nbsp;
            <button @click="actionAdd">+</button>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        //1
        // computed:{
        //     sum(){
        //         return this.$store.state.count;
        //     }
        // }
        //2
        // computed:mapState(['count']),
        // 3
        // computed:mapState({
        //     sum1(state){
        //         return state.count
        //     }
        // })
        computed:{
            ...mapState(["count"]),
            ...mapGetters(["count"])
        },
        // methods:mapMutations(["add","reduce"])
        methods:{
            ...mapMutations(["add","reduce"]),
            ...mapActions(["actionAdd"])
        }
    }
</script>
