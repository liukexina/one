<template>
    <div>
        <div class="container">
            <h2>图片</h2>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                title:"图片",
                classname:"photo-nav",
                arr:[false,false,false,true]
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'photo')
        }
    }
</script>