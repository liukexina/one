<template>
    <div>
        <div class="container">
            <ul class="data">
                <li v-for="(items,index) in dataList" :key='index+ "nl"' @click="$router.push({name:'moviedetail',params:{id:items.id}})">
                    <img v-bind:src="items.images.large" alt="" class="tu">
                    <div class="info">
                        <span style="font-weight: bold;font-size:0.4rem;">{{items.title}}</span><br>
                        导演: <span v-for="(item) in items.directors" >{{item.name}}/</span><br>
                        <span v-for="(item,index) in items.casts" :key="index+'ul'">{{item.name}}/</span><br>
                        <span>{{items.collect_count}}人观看</span><br>
                        类型:<span v-for="(item) in items.genres">{{item}}/</span><br>
                        评分：<span>{{items.rating.average}}</span>
                        <a v-bind:href="items.alt" style="float:right;">详情</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="loading"  v-show="load">
            <div class="image">
                <img src="@/assets/image/loading.gif" alt="">
            </div>
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
        box-sizing: border-box;
        margin:0.2rem 0 0.2rem 0;
        padding-right:0.3rem;
        width: 4rem;
        float:right;
        text-align: left;
    }
    .data li{
        margin:0.1rem;
        overflow: hidden;
        border-bottom:1px solid #675963;
    }
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.5);
    }
    .image {
        position: absolute;
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
                isshow:false,
                isFinish:false
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
                let scrollHeigth = document.documentElement.scrollHeight;       /*滚动高度*/
                let clientHeight = document.documentElement.clientHeight;      /*可视高度*/
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