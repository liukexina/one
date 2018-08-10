<template>
    <div>
        <div class="container">
            <h2>音乐</h2>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                title:"音乐",
                classname:"music-nav",
                arr:[false,true,false,false]
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'music');
        }
    }
</script>