<template>
    <div>
        <div class="container">
            <h2>书籍</h2>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                title:"书籍",
                classname:"book-nav",
                arr:[false,false,true,false]
            }
        },
        created(){
            this.$emit('routerEmit',this.title,this.classname,this.arr,'book')
        },

    }
</script>