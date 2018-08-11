<template>
    <div>
        <aplayer v-if="isif" :music="datalist[0]" :list="datalist" :showLrc="isshow"></aplayer>
    </div>
</template>

<style scoped>

</style>

<script>
    import Aplayer from 'vue-aplayer'
    export default {
        components: {
            Aplayer
        },
        data(){
            return {
                datalist:[],
                isif:false,
                isshow:true
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'music');
            this.getData();
        },
        methods:{
            getData(){
                axios.get('./data/musicdata.json')
                    .then( (response) => {
                        this.datalist = response.data.musicData;
                        console.log(response);
                        this.isif = true;
                        this.datalist.forEach((val,index)=>{
                            this.datalist[index].lrc = window.location.origin + '/' + this.datalist[index].lrc;
                        });
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
</script>

