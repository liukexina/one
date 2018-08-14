<template>
    <div class="container">
        <v-touch v-on:tap="onSwipeTap" v-on:swipeleft="onSwipeLeft(datalist.length)" v-on:swiperight="onSwipeRight" v-if="isif" class="warrper" :style="bg">
        </v-touch>
    </div>
</template>

<style scoped>
    .warrper{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;
    }
</style>

<script>
    import Vue from 'vue';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    var VueTouch = require('vue-touch');
    Vue.use(VueTouch, {name: 'v-touch'});
    export default {
        data(){
            return{
                title:"图片",
                classname:"photo-nav",
                arr:[false,false,false,true],
                datalist:[],
                isif:false,
                // index:this.$route.params.id,
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'photo');
            this.getData();
            if(this.$store.state.data == -1){
                this.$router.push('/photo');
            }

        },
        computed:{
            bg(){
                return {background:`#000 url('${this.datalist[this.$store.state.data].src}') no-repeat center/contain`}
            }
        },
        methods:{
            /*onSwipeLeft(){
                if(this.index == 0){
                    this.index = 0
                }
                else{
                    this.index--;
                }
            },
            onSwipeRight(){
                if(this.index == this.datalist.length - 1){
                    this.index = this.datalist.length-1;
                }
                else{
                    this.index++;
                }
            },
            onSwipeTap(){
                this.$router.go(-1);
            },*/
            onSwipeTap(){
                this.onSwipe();
                this.$router.go(-1);
            },
            getData(){
                axios.get('./data/photodata.json')
                    .then( (response) => {
                        this.datalist = response.data.photoData;
                        // console.log(response);
                        this.isif = true;
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            ...mapMutations(["onSwipeRight","onSwipeLeft","onSwipe"]),
        }


    }
</script>