var tupian = document.getElementsByClassName("tupian")[0];
var look = document.getElementsByClassName("look")[0];
var look1 = document.getElementsByClassName("look1")[0];
var look2 = document.getElementsByClassName("look2")[0];
var look3 = document.getElementsByClassName("look3")[0];
var look4 = document.getElementsByClassName("look4")[0];
var fan = document.getElementsByClassName("fan")[0];
var see = document.getElementsByClassName("see")[0];
var seeinfo = document.getElementsByClassName("seeinfo")[0];
var que = document.getElementsByClassName("que")[0];
var shouye = document.getElementsByClassName("shouye")[0];
var change = document.getElementsByClassName("change")[0];

var tuichu = document.getElementsByClassName("tuichu")[0];
tuichu.onclick = function () {
    window.location.href="首页.html";
};


var d = localStorage.getItem("infonum");
infonum = JSON.parse(d);
var dd = localStorage.getItem("info");
info = JSON.parse(dd);
var ddd = localStorage.getItem("Drugs");
Drugs = JSON.parse(ddd);
console.log(Drugs);



shouye.onclick = function () {
    shouye.classList.add("spe");
    change.classList.remove("spe");
    tupian.style.display = "block";
    fan.classList.remove("spe");
    look3.style.display = "none";
    see.classList.remove("spe");
    look.style.display = "none";
    seeinfo.classList.remove("spe");
    look1.style.display = "none";
    que.classList.remove("spe");
    look2.style.display = "none";
    look4.style.display = "none";
};
see.onclick = function () {
    see.classList.add("spe");
    change.classList.remove("spe");
    fan.classList.remove("spe");
    seeinfo.classList.remove("spe");
    shouye.classList.remove("spe");
    que.classList.remove("spe");
    look3.style.display = "none";
    look4.style.display = "none";
    look.style.display = "block";
    look1.style.display = "none";
    look2.style.display = "none";
    tupian.style.display = "none";
};
seeinfo.onclick = function () {
    seeinfo.classList.add("spe");
    change.classList.remove("spe");
    fan.classList.remove("spe");
    see.classList.remove("spe");
    shouye.classList.remove("spe");
    que.classList.remove("spe");
    look3.style.display = "none";
    look4.style.display = "none";
    look.style.display = "none";
    look1.style.display = "block";
    look2.style.display = "none";
    tupian.style.display = "none";
    if(infonum == 0){
        look1.innerHTML = "无";
    }
    else{
        var html = "";
        for(i = 0;i<info.length;i++){
            html += setInfo(info[i])
        }
        look1.innerHTML = html;

    }
};
que.onclick = function () {
    que.classList.add("spe");
    change.classList.remove("spe");
    fan.classList.remove("spe");
    see.classList.remove("spe");
    shouye.classList.remove("spe");
    seeinfo.classList.remove("spe");
    look3.style.display = "none";
    look4.style.display = "none";
    look.style.display = "none";
    look1.style.display = "none";
    look2.style.display = "block";
    tupian.style.display = "none";
    var html = '';
    for(i = 0;i<Drugs.length;i++){
        if(Drugs[i].num < 20){
            html += setDiv(Drugs[i])
        }
    }
    look2.innerHTML = html;
};
fan.onclick = function () {
    fan.classList.add("spe");
    change.classList.remove("spe");
    seeinfo.classList.remove("spe");
    see.classList.remove("spe");
    shouye.classList.remove("spe");
    que.classList.remove("spe");
    look3.style.display = "block";
    look4.style.display = "none";
    look.style.display = "none";
    look1.style.display = "none";
    look2.style.display = "none";
    tupian.style.display = "none";
    var html = '';
    var myDate = new Date();
    var year  = myDate.getFullYear();
    for(i = 0;i<Drugs.length;i++){
        if(year - Drugs[i].usedate > Drugs[i].yea){
            html += setDiv(Drugs[i])
        }
    }
    look3.innerHTML = html;
};
change.onclick = function () {
    change.classList.add("spe");
    fan.classList.remove("spe");
    seeinfo.classList.remove("spe");
    see.classList.remove("spe");
    shouye.classList.remove("spe");
    que.classList.remove("spe");
    look4.style.display = "block";
    look3.style.display = "none";
    look.style.display = "none";
    look1.style.display = "none";
    look2.style.display = "none";
    tupian.style.display = "none";
};

function setDiv(item) {
    var tutu = "<div class=\"bianxian\" >\n" +
        "                    <div class=\"Dname\">\n" +
        "                        药品名：<span>" + item.name +"</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"Deff\">\n" +
        "                        药品功效：<span>" + item.efficacy + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"price\">\n" +
        "                        单价：<span>" + item.unitprice + "</span>元\n" +
        "                    </div>\n" +
        "                    <div class=\"factor\">\n" +
        "                        生产厂家：<span>" + item.profac + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"prodate\">\n" +
        "                        生产日期：<span>" + item.yea + "</span>\n" +
        "                                -\n" +
        "                                <span>" + item.mouth + "</span>\n" +
        "                                -\n" +
        "                                <span>" + item.date +"</span>" +
        "                    </div>\n" +
        "                    <div class=\"userdate\">\n" +
        "                        使用期限：<span>" + item.usedate + "</span>年\n" +
        "                    </div>\n" +
        "                    <div class=\"sheng\">\n" +
        "                        数量：<span>" + item.num + "</span>盒\n" +
        "                    </div>\n" +
        "                </div>";

    return tutu;
}
function get() {
    var html = '';
    for(i = 0;i<Drugs.length;i++){

        html += setDiv(Drugs[i])
    }
    look.innerHTML = html;
}
function setInfo(item){
    var h = "";
    for(j = 0 ; j < item.shu.length ; j++){
        console.log(Drugs[item.shu[j]]);
        h += setZi(Drugs[item.shu[j]])
    }
    var tu = "<div class=\"dan\">\n" +
            h +
        "<div class=\"allmoney\">\n" +
        "                    总价格: <span>" +item.allmoney + "</span>元\n" +
        "                </div>" +
        "                <div class=\"dan-date\">\n" +
        "                    支付时间: <span>" + item.time + "</span>\n" +
        "                </div>\n" +
        "                <div class=\"decision\">\n" +
        "                    <button>完成订单</button>\n" +
        "                    <button>退回订单</button>\n" +
        "                </div>\n" +
        "            </div>";
    return tu;
}
function setZi(item) {
    var tu =  "                <div class=\"bianxian1\" >\n" +
        "                    <div class=\"Dname1\">\n" +
        "                        药品名：<span>" + item.name + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"price1\">\n" +
        "                        单价：<span>" + item.unitprice + "</span>元\n" +
        "                    </div>\n" +
        "                    <div class=\"buynum1\">\n" +
        "                        购买数量：<span>" + item.buy + "</span>盒\n" +
        "                    </div>\n" +
        "                </div>\n";

    return tu;
}
get();
console.log(infonum);