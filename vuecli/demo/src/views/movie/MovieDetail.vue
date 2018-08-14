<template>
    <div class="container" v-if="isif">
        <div style="overflow: hidden; margin-bottom:0.1rem">
            <img :src="infoList.images.large" alt="" class="photo">
            <div class="title-right">
                <div class="title">{{infoList.title}}</div>
                <span v-for="(items,index) in infoList.genres" class="sty">{{items}}</span><br>
                <span v-for="(items,index) in infoList.countries">{{items}}/</span><br>
                <span>{{infoList.year}}</span>年上映 <br>
                <span style="color: green">{{infoList.ratings_count}}人评价</span>
            </div>
        </div>
        <div style="overflow: hidden">
            演职人员：<br>
            <div>
                导演：
                <div v-for="(items,index) in infoList.directors">
                    <span style="margin-top:2rem">{{items.name}}</span>
                    <img :src="items.avatars.large" alt="" style="height: 2rem; display: block; margin:0 auto">
                </div>
            </div>
            <div>
                主演：
                <div v-for="(items,index) in infoList.casts" :key="index+'inl'" style="float: left; margin-right:0.1rem">
                    <img :src="items.avatars.large" alt="" style="height: 2rem; display: block; margin:0 auto">
                    <span style="margin-top:2rem">{{items.name}}</span>
                </div>
            </div>
        </div>
        <h6>简介：{{infoList.summary}}</h6>
       <!-- <div class="title">{{infoList.title}}</div>
        <span v-for="(items,index) in infoList.genres" class="sty">{{items}}</span><br>
        <div style="text-align: left; margin:0.1rem; margin-left:0">
            <span v-for="(items,index) in infoList.countries">{{items}}/</span>
            <span>{{infoList.year}}</span>年上映
            <span style="float:right;color:green;">评分：{{infoList.rating.average}}</span>
        </div>
        导演：<span v-for="(items,index) in infoList.directors">{{items.name}}/</span><br>
        主演：<span v-for="(items,index) in infoList.casts" :key="index+'inl'" >{{items.name}}/</span><br>
        <span style="color: green">{{infoList.ratings_count}}人评价</span>
        <img :src="infoList.images.large" alt="" class="photo">
        <h6>简介：{{infoList.summary}}</h6>-->


    </div>
</template>

<style scoped>
    .title{
        font-size:0.5rem;
        text-align: left;
        margin-bottom:0.2rem;
    }
    .title-right{
        float:left;
        margin:0.1rem;
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
        height: 3.5rem;
        margin:0.1rem;
        margin-top:0.2rem;
        float:left;
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
                infoList:null,
                isif:false
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'movie');
            this.getData();
            if(!this.$route.params.id){
                this.$router.push('/');
            }
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
                    .then( (response) => {
                        console.log(response);
                        this.infoList = response.data;
                        this.isif = true;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    }
</script>