<template>
    <div class="big">
        <div class="solid">
            <div class="center">
                <img src="../../assets/image/20.jpg" alt="" class="photo">
            </div>
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
        background: url('../../assets/image/first_bg.jpg') no-repeat center/cover;
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
    .center{
        position: absolute;
        top:50%;
        left:50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .center .photo{
        height: 180px;
        width: 180px;
        border-radius: 30%;
        float:left;
    }
    .center .info{
        float:left;
    }
</style>