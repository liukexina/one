<template>
    <div>
        <div class="container">
            <ul>
                <li v-for="(items,index) in datalist" :key="index+'pl'" @click="$router.push({name:'photodetail',params:{id:index}})">
                    <img :src="items.src" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .container{
        text-align: left;
    }
    ul{
        width: 100%;
        overflow: hidden;
    }
    ul li{
        width:50%;
        float:left;
    }
    ul li img{
        width: 100%;
        height: 160px;
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