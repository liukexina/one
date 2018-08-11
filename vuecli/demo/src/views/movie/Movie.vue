<template>
    <div>
        <div class="container">
            {{isend}}
            <ul class="data">
                <li v-for="(items,index) in dataList" :key='index+ "nl"'>
                    <img v-bind:src="items.images.large" alt="">
                    <span class="info">
                        <span>{{items.title}}</span><br>
                        导演: <span v-for="(item) in items.directors" >{{item.name}}/</span><br>
                        <span v-for="(item,index) in items.casts" :key="index+'ul'">{{item.name}}/</span><br>
                        <span>票房:{{items.collect_count}}</span><br>
                        类型:<span v-for="(item) in items.genres">{{item}}/</span><br>
                        <a v-bind:href="items.alt">详情</a>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    img{
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
</style>
<script>
    export default {
        data(){
            return{
                title:"电影",
                classname:"movie-nav",
                arr:[true,false,false,false],
                dataList:[],
                isend:false
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'movie');
            this.getData();
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start'+this.dataList.length+'&count=10')
                    .then( (response) => {
                        this.dataList = response.data.subjects;
                        if(this.datalist.length == response.data.subject.length){
                            this.isend = true;
                        }
                        // console.log(response);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
        mounted () {
            window.onscroll=()=>{
                let scrollTop = document.documentElement.scrollTop;
                let scrollHeigth = document.documentElement.scrollHeight;
                let clientHeight = document.documentElement.clientHeight;
                if(scrollTop+clientHeight==scrollHeigth){
                    this.isend = true;
                }
            }
        }

    }
</script>