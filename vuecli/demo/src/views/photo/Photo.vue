<template>
    <div>
        <div class="container">
            <h2>图片</h2>
            <v-touch v-on:tap="onSwipeTap" v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" >

            </v-touch>
        </div>
    </div>
</template>
<style>
    img{
        width: 100%;
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
                datalist:[]
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'photo');
            this.getData()
        },
        methods:{
            onSwipeLeft(){
                console.log("left");
            },
            onSwipeRight(){
                console.log("right");
            },
            onSwipeTap(){
                console.log("top");
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