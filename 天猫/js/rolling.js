var imgDiv = document.getElementsByClassName("slide-box")[0];
console.log(imgDiv);
var imgX= imgDiv.getElementsByTagName("div");
console.log(imgX);
var confin = imgDiv.getElementsByTagName("li");
console.log(confin);
for(i = 0 ; i <confin.length ; i ++){
    confin[i].index = i;
    confin[i].onmouseover = function () {
        for(j = 0 ; j <imgX.length ; j ++){
            imgX[j].style.display = "none";
            confin[j].style.backgroundColor = "#000";
            confin[j].style.opacity = "1";
        }
        imgX[this.index].style.display = "block";
        // confin[this.index].className = "special-li";
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
