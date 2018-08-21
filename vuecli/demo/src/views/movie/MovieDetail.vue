<template>
    <div class="bg">
        <div class="container" v-if="isif">
            <div style="overflow: hidden; margin-bottom:0.1rem">
                <img :src="infoList.images.large" alt="" class="photo">
                <div class="title-right">
                    <span class="title">{{infoList.title}}</span>
                    <div style="overflow: hidden;margin:0.1rem 0">
                        <span v-for="(items,index) in infoList.genres" class="sty">{{items}}</span>
                    </div>
                    <span v-for="(items,index) in infoList.countries">{{items}}/</span><br>
                    <span>{{infoList.year}}</span>年上映 <br>
                    <span style="color: green">评分：{{infoList.rating.average}}</span>
                </div>
            </div>
            <div style="overflow: hidden">
                <div style="font-weight: bold">演职人员：</div>
                <div style="overflow: hidden;border:1px solid #98ffcd;border-radius: 0.5rem;margin:0.1rem 0 0.2rem 0">
                    <div style="margin-left:0.3rem;overflow: hidden">
                        <div v-for="(items,index) in infoList.directors" :key="index+'dl'" style="float:left">
                            <!--<img :src="items.avatars.large" alt="" style="height: 2rem; display: block;margin:0 auto ">-->
                            <span style="margin-top:2rem;">{{items.name}}</span>
                            <span style="font-size:0.1rem;">（导演）</span>
                        </div>
                    </div>
                    <div style="margin-left:0.3rem">
                        <div v-for="(items,index) in infoList.casts" :key="index+'inl'" style="float: left; margin-right:0.1rem;">
                            <!--<img :src="items.avatars.large" alt="" style="height: 2rem; display: block; margin:0 auto">-->
                            <span style="margin-top:2rem">{{items.name}}</span>
                            <span style="font-size:0.1rem;">（演员）</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style="border:1px solid #98ffcd">
                <h6>简介：{{infoList.summary}}</h6>
            </div>


        </div>
    </div>

</template>

<style scoped>
    .bg{
        position:fixed;
        top:1rem;
        left:0;
        bottom:1rem;
        right:0
    }
    .title{
        font-size:0.45rem;
        text-align: left;
        margin-bottom:0.2rem;
    }
    .title-right{
        float:left;
        margin:0.1rem;
        width: 3.8rem;
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
        },
        computed:{
            bg(){
                return {

                    background:`url('${this.infoList.images.large}') no-repeat center/contain`
                }
            }
        }
    }
</script>