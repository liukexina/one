<template>
    <div class="container">
        <ul class="data">
            <li v-for="(items,index) in datalist" :key="index+'ml'" @click="enter">
                <img v-bind:src="items.bg" alt="">
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .container{
        margin-top:0;
    }
    .data{
        width: 100%;
    }
    .data li{
        width:50%;
        float:left;
    }
    .data li img{
        width: 100%;
        height: 3.8rem;
        margin:0;
    }
</style>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                title:"音乐",
                classname:"music-nav",
                arr:[false,true,false,false],
                datalist:[]
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'music');
            this.getData();
        },
        methods:{
            getData(){
                axios.get('./data/musiclist.json')
                    .then( (response) => {
                        this.datalist = response.data.albums;
                        // console.log(response);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            enter(){
                this.$router.push('/musicdetail');
            }
        }
    }
</script>