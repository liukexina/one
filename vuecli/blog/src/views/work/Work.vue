<template>
    <div class="big">
        <div class="solid">
            <img v-for="(items,index) in datalist" :key="index+'data'" :src="items.src" alt="">
        </div>
    </div>
</template>

<style scoped>
    .big{
        position:fixed;
        top:90px;
        bottom:0;
        left:0;
        right:0;
        background: url('../../assets/image/fifth_bg.jpg') no-repeat center/cover;
        color:white;
    }
    .solid{
        position: relative;
        width: 70%;
        left: 30%;
        top: 10%;
        height: 575px;
        background: rgba(0, 0, 0, 0.5);
    }
    img{
        width: 100px;
        height: 100px;
    }
</style>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                datalist:[]
            }
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                axios.get('./data/photodata.json')
                    .then( (response) => {
                        this.datalist = response.data.photoData;
                        console.log(response);
                        for(let i = 0 ; i < this.datalist.length ; i++){
                            this.datalist[i].src = require('@/assets/image/'+ this.datalist[i].src)
                        }
                        console.log(this.datalist);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
</script>