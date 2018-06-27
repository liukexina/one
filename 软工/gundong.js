//轮播图开始
var oBox = document.getElementsByClassName("container")[0];
var oImg = document.getElementsByClassName("c-img")[0];
var aBtn = document.getElementById("b-btn").getElementsByTagName("li");
var aBtnDir = document.getElementById("l-btn").getElementsByTagName("li");
var globalIndex = 0;
var timer;
var isRun = true;
var isTimer = true;

for(var i=0;i<aBtn.length;i++){
    aBtn[i].index = i;
    aBtn[i].onclick = function(){
        if(isRun){
            changImg(this.index)
        }
    }
}

//向左移动按钮
aBtnDir[0].onclick = function(){
    if(isRun){
        changImg(globalIndex-1);
    }
};
//向右移动按钮
aBtnDir[1].onclick = function(){
    if(isRun){
        changImg(globalIndex+1);
    }
};

//移入停止动画
oBox.onmouseover = function(){
    isTimer = false;
};
//移出继续动画
oBox.onmouseout = function(){
    isTimer = true;
};

//定时切换图片
setInterval(function(){
    if(isRun && isTimer){
        changImg(globalIndex+1);
    }
},1000);

//图片切换
function changImg(index){
    isRun = false;
    var direction;
    if(index>globalIndex){
        direction = -1;
    }else if(index<globalIndex){
        direction = 1;
    }

    //判断边界
    if(index == -1){
        index = 4;
        direction = -1;
    }else if(index == 5){
        index = 0;
        direction = 1;
    }

    globalIndex = index;
    timer = setInterval(function () {
        oImg.style.left = oImg.offsetLeft+ direction*10 +"px";
        if(index*-690 == oImg.offsetLeft){
            clearInterval(timer);
            isRun = true;
        }
    },16);

    //切换按钮选中状态
    for(var i=0;i<aBtn.length;i++){
        aBtn[i].className = "";
    }
    aBtn[globalIndex].className = "active";
    //轮播图结束
}