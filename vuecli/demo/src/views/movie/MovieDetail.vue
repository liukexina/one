<template>
    <div class="container">
        <div class="title">{{infoList.title}}</div>
        <span v-for="(items,index) in infoList.genres" class="sty">{{items}}</span><br>
        <div style="text-align: left">
            <span v-for="(items,index) in infoList.countries">{{items}}/</span>
            <span>{{infoList.year}}</span>年上映
            <span style="float:right;color:green;">评分：{{infoList.rating.average}}</span>
        </div>
        <img :src="infoList.images.large" alt="" class="photo">
        <h5>简介：{{infoList.summary}}</h5>
        导演：<span v-for="(items,index) in infoList.directors">{{items.name}}/</span><br>
        主演：<span v-for="(items,index) in infoList.casts" :key="index+'inl'" >{{items.name}}/</span><br>
        <span style="color: green">{{infoList.ratings_count}}人评价</span>



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
    h5{
        margin:0.1rem;
    }
    .container{
        margin:0.3rem;
        text-align: left;
    }
    .photo{
        height: 4rem;
        float:right;
        margin:0.1rem;
        margin-top:0.2rem;
    }
    .sty{
        display: block;
        height: 0.5rem;
        width: 1rem;
        background: #98ffcd;
        text-align: center;
        line-height: 0.5rem;
        border-radius: 0.3rem;
        float:left;
        margin-right:0.1rem;
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