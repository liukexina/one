<template>
    <div class="container">
        <div class="title">{{infoList.title}}</div>
        <span>{{infoList.ratings_count}}人评价</span>
        <span>评分：{{infoList.rating.average}}</span>
        <img :src="infoList.images.large" alt="" class="photo">
        <h5>简介：{{infoList.summary}}</h5>

        <!--主演：<span v-for="(items,index) in infoList.casts" :key="index+'inl'" >{{items.name}}/</span>-->

    </div>
</template>

<style scoped>
    .title{
        font-size:0.6rem;
        text-align: left;
    }
    h3{
        float:left;
    }
    .container{
        margin:0.3rem;
    }
    .photo{
        height: 4rem;
        float:right;
        margin:0.1rem;
    }
</style>
<script>
    export  default {
        data(){
            return {
                infoList:[]
            }
        },
        created(){
            this.getData()
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
                    .then( (response) => {
                        console.log(response);
                        this.infoList = response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    }
</script>