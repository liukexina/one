<template>
    <div>
        <h1>电影名称:{{$route.params.id}}</h1>
    </div>
</template>

<script>
    export  default {
        created(){
            this.getData()
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/subject/'+'this.$route.params.id')
                    .then( (response) => {
                        console.log(response);
                        this.dataList = response.data.subjects;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    }
</script>