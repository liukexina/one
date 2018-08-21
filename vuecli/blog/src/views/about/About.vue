<template>
    <div class="big">
        <div class="solid">
            <div class="solid-left">
                <div class="left-content">
                    她说，“我想写下所有的事。”<br>
                    于是，有了这本书。<br>
                    从出生谈到现在，从咫尺看向未来。<br>
                    它不是考卷上的正确答案，也不是光盘里的教学指南。<br>
                    只是一本再简单不过的枕边书、包中物，<br>
                    是夜深人静半梦半醒后的微笑眼睛，<br>
                    还是酒后微醺自言自语后的畅快聆听，<br>
                    是时过境迁恍然大悟后的痛彻心扉，<br>
                    还是人来人往擦肩而过后的如释重负。<br>
                    生活没有标尺衡量，也不用刻意宣扬。<br>
                    “坦荡也直白，敢爱又敢恨。”<br>
                    这是郑爽的小世界，也是正版的能量线，<br>
                    透过她，世界很大，却变得美妙无比。<br>
                    好看的故事梗概太多，<br>
                    有趣的内容介绍太少。<br>
                    就做一本不一样的书吧。<br>
                    独特些，放肆些，自由一些，极致一些。<br>
                    把所有话放进文字里，<br>
                    期待也好，怀疑也好，<br>
                    做一个喜欢的自己，从现在开始吧。<br>
                    这是《郑爽的书》<br>
                    也是你们的礼物。
                    <div class="end">——郑爽</div>
                </div>
            </div>
            <div class="solid-right">
                <img src="@/assets/image/psb2.jpg" alt="">
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
        background: url('../../assets/image/second_bg.jpg') no-repeat center/cover;
        color:white;
    }
    .solid{
        position: relative;
        width: 70%;
        left: 30%;
        top: 10%;
        height: 575px;
        background: rgba(0, 0, 0, 0.5);
        overflow-y: auto;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar
    {
        width: 3px;
        background-color: #F5F5F5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
        border-radius: 10px;
        background-color: #F5F5F5;

    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-color: #555;
    }

    .solid-left,.solid-right{
        float:left;
        height: 100%;
    }
    .solid-left{
        width: 55%;
    }
    .solid-right{
        width: 45%;
    }
    .solid-right img{
        width: 100%;
    }
    .left-content{
        margin:40px;
        text-align: left;
        padding-left:60px;
    }
    .end{
        font-size:20px;
        text-align: right;
    }
</style>