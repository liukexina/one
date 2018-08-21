<template>
    <div class="nave">
        <div class="logo"><img src="../../assets/image/logo.png" alt=""></div>
        <ul>
            <li v-for="(items,index) in liList" :key="index+'li'" @click="routerPush(items)">
                <span :class="{'active' : active==items.name}" @mouseover="">
                    <i class="iconfont" :class="items.classname"></i>
                    {{items.name}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                liList:[
                    {
                        path:'/',
                        name:'Home',
                        classname:'icon-zhuye'
                    },
                    {
                        path:'/about',
                        name:'About',
                        classname:'icon-gerenzhongxin'
                    },
                    {
                        path:'/entires',
                        name:'Entires',
                        classname:'icon-tupian'
                    },
                    {
                        path:'/work',
                        name:'Work',
                        classname:'icon-youjian1'
                    },
                    {
                        path:'/contact',
                        name:'Contact',
                        classname:'icon-bianjixiugaiqianbishuxie'
                    }
                ],
                active:'Home'
            }
        },
        methods:{
            routerPush(items){
                this.$router.push(items.path);
                this.active = items.name;
            }
        }
    }
</script>
<style scoped>
    *{
        font-family: "Open Sans", sans-serif;
        font-weight: 200;
        box-sizing: border-box;
        margin:0;
        padding:0
    }
    .iconfont{
        font-size:20px;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
    }
   .nave{
        position:fixed;
        margin-top:70px;
        left:0;
        width: 20%;
        height: 590px;
        background: rgba(0, 0, 0, 0.6);
        z-index:100;
    }
    .nave .logo{
        margin-top: 45px;
        padding: 0px 20px;
    }
    .nave .logo img{
        max-width: 100%;
        overflow-y: hidden;
    }
    .nave ul{
        margin-top: 60px;
        text-align: left;
        margin-left: 40px;
        height: 350px;
        display: flex;
        flex-direction: column;
    }
    .nave ul li{
        margin: 25px 0px;
    }
    .nave ul li span:hover{
        background: #ffffff;
        color:#000000;
        animation: test 1s ease;
    }
    .nave ul li i{
        width: 40px;
    }
    .iconfont{
        display: inline-block;
    }
    .nave ul li span{
        color:white;
        font-size:14px;
        padding:20px 30px;
        font-family: "Open Sans", sans-serif;
        font-weight: 200;
        transition: all 2s ease;
    }
    .nave .active{
        color:#000;
        background: #ffffff;
    }
    @keyframes test {
        50%{
            font-size:18px;
            color: #0308ff;
        }
    }
</style>