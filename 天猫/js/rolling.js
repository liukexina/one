var imgDiv = document.getElementsByClassName("slide-box")[0];
// var imgX= imgDiv.getElementsByTagName("div");
var confin = imgDiv.getElementsByTagName("li");
/*
for(i = 0 ; i <confin.length ; i ++){
    confin[i].index = i;
    confin[i].onmouseover = function () {
        for(j = 0 ; j <imgX.length ; j ++){
            imgX[j].style.display = "none";
            confin[j].style.backgroundColor = "#000";
            confin[j].style.opacity = "1";
        }
        imgX[this.index].style.display = "block";
        confin[this.index].style.backgroundColor = "#fff";
        confin[this.index].style.opacity = "0.6";
    }
}
var j = -1;
function change() {
    sit = setInterval(function () {
        for(i = 0 ; i < imgX.length ; i ++){
            imgX[i].style.display = "none";
            confin[i].style.backgroundColor = "#000";
            confin[i].style.opacity = "1";
        }
        j = j + 1 ;
        if(j > 4){
            j = 0;
        }
        imgX[j].style.display = "block";
        confin[j].style.backgroundColor = "#fff";
        confin[j].style.opacity = "0.6";
    },3000);
}
change();
*/
var aSP = document.querySelectorAll(".slide-item");
var box = document.getElementsByClassName("slide-box")[0];
var index = 0;
var isRun = true;
for(i = 0 ; i <confin.length ; i++){
    confin[i].index = i;
    confin[i].onmouseover = function () {
        for(j = 0 ; j < confin.length ; j ++){
            confin[j].className = "ul-li";
        }
        aSP[index].classList.remove("active");
        index = this.index;
        aSP[index].classList.add("active");
        confin[index].className = "special-li";
    }
}
function change() {
    setInterval(function(){
        if(isRun){
            for(i = 0 ; i < confin.length ; i ++){
                confin[i].className = "ul-li";
            }
            aSP[index].classList.remove("active");
            if(index==5){
                index = -1;
            }
            aSP[++index].classList.add("active");
            confin[index].className = "special-li";
        }
    },2000);
}

change();

box.onmouseover = function () {
    isRun = false;
};
box.onmouseout = function () {
    isRun = true;
};