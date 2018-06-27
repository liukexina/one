var tupian = document.getElementsByClassName("tupian")[0];
var look = document.getElementsByClassName("look")[0];
var look1 = document.getElementsByClassName("look1")[0];
var look2 = document.getElementsByClassName("look2")[0];
var look3 = document.getElementsByClassName("look3")[0];
var fan = document.getElementsByClassName("fan")[0];
var see = document.getElementsByClassName("see")[0];
var seeinfo = document.getElementsByClassName("seeinfo")[0];
var que = document.getElementsByClassName("que")[0];
var shouye = document.getElementsByClassName("shouye")[0];

shouye.onclick = function () {
    shouye.style.backgroundColor = "#f2f2f2";
    tupian.style.display = "block";
    fan.style.backgroundColor = "";
    look3.style.display = "none";
    see.style.backgroundColor = "";
    look.style.display = "none";
    seeinfo.style.backgroundColor = "";
    look1.style.display = "none";
    que.style.backgroundColor = "";
    look2.style.display = "none";
};
see.onclick = function () {
    fan.style.backgroundColor = "";
    look3.style.display = "none";
    see.style.backgroundColor = "#f2f2f2";
    look.style.display = "block";
    seeinfo.style.backgroundColor = "";
    look1.style.display = "none";
    que.style.backgroundColor = "";
    look2.style.display = "none";
    shouye.style.backgroundColor = "";
    tupian.style.display = "none";
};
seeinfo.onclick = function () {
    seeinfo.style.backgroundColor = "#f2f2f2";
    look1.style.display = "block";
    see.style.backgroundColor = "";
    look.style.display = "none";
    fan.style.backgroundColor = "";
    look3.style.display = "none";
    que.style.backgroundColor = "";
    look2.style.display = "none";
    shouye.style.backgroundColor = "";
    tupian.style.display = "none";
    if(infonum == 0){
        look1.innerHTML = "无";
    }
};
que.onclick = function () {
    que.style.backgroundColor = "#f2f2f2";
    look2.style.display = "block";
    see.style.backgroundColor = "";
    look.style.display = "none";
    seeinfo.style.backgroundColor = "";
    look1.style.display = "none";
    fan.style.backgroundColor = "";
    look3.style.display = "none";
    shouye.style.backgroundColor = "";
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
    fan.style.backgroundColor = "#f2f2f2";
    look3.style.display = "block";
    see.style.backgroundColor = "";
    look2.style.display = "none";
    seeinfo.style.backgroundColor = "";
    look1.style.display = "none";
    que.style.backgroundColor = "";
    look.style.display = "none";
    shouye.style.backgroundColor = "";
    tupian.style.display = "none";
    var html = '';
    for(i = 0;i<Drugs.length;i++){
        if(Drugs[i].usedate < 3){
            html += setDiv(Drugs[i])
        }
    }
    look3.innerHTML = html;
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
        "                        生产日期：<span>" + item.prodate + "</span>\n" +
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
get();