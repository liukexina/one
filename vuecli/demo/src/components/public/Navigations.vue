<template>
    <div>
        <nav class="header" v-bind:class="navheads" >
            <router-link to="/" class="home">首页</router-link>
            <div class="title">{{titles}}</div>
        </nav>
        <header class="footer" v-bind:class="navheads">
            <div  class="clearfix">
                <router-link to="/" v-bind:class="{wcolor:arrs[0]}" class="head">电影</router-link>
                <router-link to="/music" v-bind:class="{wcolor:arrs[1]}" class="head">音乐</router-link>
                <router-link to="/book" v-bind:class="{wcolor:arrs[2]}" class="head">书籍</router-link>
                <router-link to="/photo" v-bind:class="{wcolor:arrs[3]}" class="head">图片</router-link>
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
    }
    .header{
        position:fixed;
        top:0;
        height: 1rem;
        line-height: 1rem;
        width:100%;
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
    .wcolor{
        color: white;
    }
    .movie-nav{
        background-color: rgb(33, 150, 243);
    }
    .music-nav{
        background-color: rgb(0, 150, 136);
    }
    .book-nav{
        background-color: rgb(121, 85, 72);
    }
    .photo-nav{
        background-color: rgb(63, 81, 181);
    }
</style>
<script>
    export default {
        props:["arrs","navheads","titles"],
        data(){
            return{
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