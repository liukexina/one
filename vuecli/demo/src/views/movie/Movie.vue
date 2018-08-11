<template>
    <div>
        <div class="container">
            <ul class="data">
                <li v-for="(items,index) in dataList" :key='index+ "nl"'>
                    <img v-bind:src="items.images.large" alt="" class="tu">
                    <div class="info">
                        <span>{{items.title}}</span><br>
                        导演: <span v-for="(item) in items.directors" >{{item.name}}/</span><br>
                        <span v-for="(item,index) in items.casts" :key="index+'ul'">{{item.name}}/</span><br>
                        <span>票房:{{items.collect_count}}</span><br>
                        类型:<span v-for="(item) in items.genres">{{item}}/</span><br>
                        <a v-bind:href="items.alt">详情</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="image" v-show="load">
            <img src="@/assets/image/loading.gif" alt="">
        </div>
    </div>
</template>

<style scoped>
    .tu{
        margin:10px;
        display: block;
        width: 120px;
        float:left;
    }
    .info{
        margin:10px 0 10px 0;
        width: 4rem;
        float:right;
        text-align: left;
    }
    .data li{
        overflow: hidden;
    }
    .image {
        position: fixed;
        padding: 1rem;
        text-align: center;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 0.2rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index:100;
    }
</style>
<script>
    export default {
        data(){
            return{
                title:"电影",
                classname:"movie-nav",
                arr:[true,false,false,false],
                dataList:[],
                isend:false,
                load:true,
                isshow:false
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'movie');
            this.getData();
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.myjson.com/bins/nsb9g')
                    //https://api.douban.com/v2/movie/in_theaters?start='+this.dataList.length+'&count=10'
                    //https://api.myjson.com/bins/nsb9g
                    .then( (response) => {
                        // console.log(response);
                        this.dataList = this.dataList.concat(response.data.subjects);
                        this.load = false;
                        if(response.data.subjects.length == 0){
                            this.isend = true;
                        }
                        console.log(this.dataList);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        mounted () {
            window.onscroll=()=>{
                let scrollTop = document.documentElement.scrollTop;
                let scrollHeigth = document.documentElement.scrollHeight;
                let clientHeight = document.documentElement.clientHeight;
                if(scrollHeigth - clientHeight - 10 < scrollTop){
                    if(!this.load){
                        if(!this.isend){
                            this.load = true;
                            this.getData();
                        }
                    }
                }
            }
        }

    }
</script>