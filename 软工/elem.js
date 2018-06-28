// document.write("<script language=javascript src='number.js'></script>");
//查找购买药品
/*
var Drugs = [
    {
        name:"通宣理肺片",
        efficacy:"解表散寒，宣肺止咳",
        usedate:3,
        prodate:"2017-3-9",
        profac:"北京有限公司",
        unitprice:25
    },
    {
        name:"氯雷他定片",
        efficacy:"用于缓解过敏性鼻炎有关的症状",
        usedate:5,
        prodate:"2018-4-10",
        profac:"哈尔滨有限公司",
        unitprice:30
    },
    {
        name:"新雪片",
        efficacy:"清热解毒,用于各种热性病之发热",
        usedate:1,
        prodate:"2018-7-9",
        profac:"广州有限公司",
        unitprice:15
    },
    {
        name:"一清颗粒",
        efficacy:"清热泻火解毒",
        usedate:6,
        prodate:"2017-10-9",
        profac:"深圳有限公司",
        unitprice:20
    },
    {
        name:"人工牛黄甲硝唑胶囊",
        efficacy:"人工牛黄甲硝唑胶囊",
        usedate:2,
        prodate:"2018-3-30",
        profac:"吉林有限公司",
        unitprice:10
    }
];
*/

console.log(information);
var username = document.getElementById("usern");
var userID = document.getElementById("userid");
console.log(username);
console.log(userID);
for(i = 0 ; i < information.length; i++){
    if(information[i].index == 1){
        username.innerHTML = information[i].name;
        userID.innerHTML = information[i].password;
    }
}
console.log(username.innerHTML);
console.log(userID.innerHTML);

var tuichu = document.getElementsByClassName("tuichu")[0];
tuichu.onclick = function () {
    window.location.href="首页.html";
};
var Dname = document.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0];
var Deff = document.getElementsByClassName("Deff")[0].getElementsByTagName("span")[0];
var Price = document.getElementsByClassName("price")[0].getElementsByTagName("span")[0];
var Factor = document.getElementsByClassName("factor")[0].getElementsByTagName("span")[0];
var Userdate = document.getElementsByClassName("userdate")[0].getElementsByTagName("span")[0];
var Prodate = document.getElementsByClassName("prodate")[0].getElementsByTagName("span")[0];
var look = document.getElementsByClassName("look")[0];
var look1 = document.getElementsByClassName("look1")[0];
var look2 = document.getElementsByClassName("look2")[0];
var gou = document.getElementsByClassName("gou")[0];

var kan = document.getElementsByClassName("kan")[0];
var shouye = document.getElementsByClassName("shouye")[0];
var main = document.getElementsByClassName("main")[0];
var zhao = document.getElementsByClassName("zhao")[0];
var sou = document.getElementsByClassName("sou")[0];
var gouwu = document.getElementsByClassName("gouwuche")[0];


var join = document.getElementsByClassName("join")[0];
var btn = document.getElementById("btn");
var intname = document.getElementById("intname");
var sign = false;

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
        "                            <div class=\"action\">\n" +
        "                                <i class=\"iconfont icon-htmal5icon29\"></i>\n" +
        "                                <span>加入购物车</span>\n" +
        "                            </div>\n" +
        "                </div>";

    return tutu;
}
function setDiv1(item) {
    var tutu = "<div class=\"bianxian1\" >\n" +
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
        "                </div>";
    return tutu;
}
function setDiv2(item) {
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
function get2() {
    var allprice=0;
    var html = '';
    for(i = 0;i<Drugs.length;i++){
        if(Drugs[i].sym == 1){
            html += setDiv2(Drugs[i]);
        }
    }
    look2.innerHTML = html;
}
get();
kan.onclick = function () {
    main.style.display = "none";
    shouye.style.background = "";
    zhao.style.background = "";
    sou.style.display = "";
    gouwu.style.background = "";
    gou.style.display = "none";
    kan.style.background = "#f2f2f2";
    look.style.display = "block";
    var action = document.getElementsByClassName("action");
    for(i = 0 ; i < action.length ; i++){
        action[i].onclick = function () {
            alert("加入成功!");
            var div = this.parentNode;
            console.log(div);
            var name = div.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0].innerHTML;
            console.log(name);
            for(i = 0 ; i < Drugs.length ; i++){
                if(name == Drugs[i].name){
                    Drugs[i].sym = 1;
                }
            }
        };
    }
};
shouye.onclick = function () {
    look.style.display = "none";
    kan.style.background = "";
    zhao.style.background = "";
    sou.style.display = "";
    shouye.style.background = "#f2f2f2";
    main.style.display = "block";
    gouwu.style.background = "";
    gou.style.display = "none";
};
zhao.onclick = function () {
    main.style.display = "none";
    shouye.style.background = "";
    kan.style.background = "";
    look.style.display = "none";
    gouwu.style.background = "";
    gou.style.display = "none";
    zhao.style.background = "#f2f2f2";
    sou.style.display = "block";
};
gouwu.onclick = function () {
    main.style.display = "none";
    shouye.style.background = "";
    kan.style.background = "";
    look.style.display = "none";
    zhao.style.background = "";
    sou.style.display = "none";
    gouwu.style.background = "#f2f2f2";
    gou.style.display = "block";
    get2();
};
btn.onclick = function () {
    var html1 = '';
    var name = intname.value;
    for(i = 0 ; i < Drugs.length ; i++){
        if(name == Drugs[i].name){
            html1 = setDiv1(Drugs[i]);
            look1.innerHTML = html1;
            sign = true;
            that = Drugs[i];
            join.onclick = function () {
                alert("加入成功!");
                that.sym = 1;
                console.log(that.sym);
            };
        }
    }
    if(sign == false){
        look1.innerHTML = " <div class=\"result\">\n" +
            "                               查找不到该药品！\n" +
            "                           </div>";
        join.onclick = function () {
            alert("无药品加入购物车");
        }
    }
};
if(sign == false){
    join.onclick = function () {
        alert("无药品加入购物车");
    }
}


var zhifu = document.getElementsByClassName("allprice")[0].getElementsByTagName("button")[0];
console.log(zhifu);
zhifu.onclick = function () {

};