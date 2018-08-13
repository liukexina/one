<template>
    <div>
        <div class="container">
            <swipe class="my-swipe">
                <swipe-item class="slide1"></swipe-item>
                <swipe-item class="slide2"></swipe-item>
                <swipe-item class="slide3"></swipe-item>
            </swipe>
        </div>
    </div>
</template>

<style scoped>
    /*@import url('xx.css')
      @import 'xx.css'*/         /*必须放在顶部*/
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background: url("../../assets/image/ma1.jpg") no-repeat center/cover;
        color: #fff;
    }

    .slide2 {
        background: url("../../assets/image/ma2.jpg") no-repeat center/cover;
        color: #000;
    }

    .slide3 {
        background: url("../../assets/image/ma3.jpg") no-repeat center/cover;
        color: #fff;
    }
</style>

<script>
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        components: {
            'swipe': Swipe,
            'swipe-item': SwipeItem
        },
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
