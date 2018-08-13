<template>
    <div class="container">
        <v-touch v-on:tap="onSwipeTap" v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" v-if="isif" class="warrper">
            <img :src="datalist[this.$route.params.id].src" alt="">
        </v-touch>
    </div>
</template>

<style scoped>
    .warrper{
        background: rgba(0,0,0,.5);
        width: 100%;
        position:absolute;
        top:50%;
        transform: translateY(-50%);
    }
</style>

<script>
    import Vue from 'vue';
    var VueTouch = require('vue-touch');
    Vue.use(VueTouch, {name: 'v-touch'});
    export default {
        data(){
            return{
                title:"图片",
                classname:"photo-nav",
                arr:[false,false,false,true],
                datalist:[],
                isif:false
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'photo');
            this.getData();
        },
        methods:{
            onSwipeLeft(){
                console.log("left");
                this.$route.params.id--;
                console.log(this.$route.params.id);
            },
            onSwipeRight(){
                console.log("right");
                this.$route.params.id++;
                console.log(this.$route.params.id);
            },
            onSwipeTap(){
                console.log("top");
                this.$router.push('/photo');
            },
            getData(){
                axios.get('./data/photodata.json')
                    .then( (response) => {
                        this.datalist = response.data.photoData;
                        console.log(response);
                        this.isif = true;
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }


    }
</script>