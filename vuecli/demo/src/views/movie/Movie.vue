<template>
    <div>
        <div class="container">
            <ul class="data">
                <li v-for="(items,index) in dataList" :key='index+ "nl"'>
                    <img v-bind:src="items.images.large" alt="">
                    <div class="info">
                        <span>{{items.title}}</span><br>
                        <span v-for="(item,index) in items.casts" :key="index+'ul'">{{item.name}}/</span><br>
                        <span>票房：{{items.collect_count}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
    .data{
        margin-top:10px;
    }
    img{
        margin:0 auto;
        display: block;
        /*transform: scale(0.8);*/
        height: 241px;
        width: 172px;
    }
    .info{
        margin:10px 0 20px 0;
    }
</style>
<script>
    export default {
        data(){
            return{
                title:"电影",
                classname:"movie-nav",
                arr:[true,false,false,false]
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'movie');
            this.getData();
        },
        data(){
            return {
                dataList:[]
            }
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters')
                    .then( (response) => {
                        this.dataList = response.data.subjects;
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }

    }
</script>