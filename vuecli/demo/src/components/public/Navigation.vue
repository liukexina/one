<template>
    <div v-bind:class="active">
        <nav class="header" >
            <router-link to="/" class="home">首页</router-link>
            <div class="title">{{title}}</div>
        </nav>
        <header class="footer">
            <div  class="clearfix">
                <ul>
                    <li v-bind:class="{'nav-active':active == items.name}" @click="routerPush(items)" v-for="(items,index) in navList" :key="index+'nl'" class="head">{{items.title}}</li>
                </ul>
            </div>
        </header>
    </div>
</template>

<style scoped>
    .head{
        width:25%;
        float: left;
    }
    .clearfix{
        height: 1rem;
    }
    .footer{
        position: fixed;
        bottom:0;
        height: 1rem;
        line-height: 1rem;
        width:100%;
        z-index:100;
    }
    .header{
        position:fixed;
        top:0;
        height: 1rem;
        line-height: 1rem;
        width:100%;
        z-index:100;
    }
    .home{
        position: absolute;
        left:0.5rem;
        color:white;
    }
    .title{
        width: 100%;
        text-align: center;
        font-size:0.5rem;
        color:white;
    }

    .nav-active{
        color: white;
    }
    .movie header,.movie nav{
        background-color: rgb(33, 150, 243);
    }
    .music header,.music nav{
        background-color: rgb(0, 150, 136);
    }
    .book header,.book nav{
        background-color: rgb(121, 85, 72);
    }
    .photo header,.photo nav{
        background-color: rgb(63, 81, 181);
    }
</style>
<script>
    export default {
        mounted(){
            this.$nextTick(function () {
                this.navList.forEach(val =>{
                    if(val.name == this.movenames){
                        this.active = val.name;
                        this.title = val.title;
                    }
                });
                console.log(this.movenames);
            });
        },
        methods:{
            routerPush(obj){
                this.$router.push(obj.path);
                this.active = obj.name;
                this.title = obj.title;
            }
        },
        props:["movenames"],
        data(){
            return{
                active:"movie",
                title:"电影",
                navList:[
                    {
                        name:'movie',
                        title:"电影",
                        id:'101',
                        path:'/'
                    },
                    {
                        name:'music',
                        title:"音乐",
                        id:'102',
                        path:'/music'
                    },
                    {
                        name:'book',
                        title:"书籍",
                        id:'103',
                        path:'/book'
                    },
                    {
                        name:'photo',
                        title:"图片",
                        id:'104',
                        path:'/photo'
                    }
                ]
            }
        }
    }
</script>