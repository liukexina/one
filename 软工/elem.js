
//查找购买药品
var d = localStorage.getItem("information");
information = JSON.parse(d);

var dd = localStorage.getItem("Drugs");
Drugs = JSON.parse(dd);

var ddd = localStorage.getItem("info");
info = JSON.parse(ddd);
console.log(info);



for(i = 0 ; i < information.length ; i++){
    if(information[i].index == 1){
        for(j = 0 ; j < info.length ; j++){
            if(info[j].people == information[i].name){
                if(info[j].sign == 1){
                    console.log(info[j]);
                }
            }
        }
    }
}
/*
var Drugs = [
    {
        name:"通宣理肺片",
        efficacy:"解表散寒，宣肺止咳",
        usedate:3,
        profac:"北京有限公司",
        unitprice:25,
        num:20,
        yea:2015,
        mouth:3,
        date:15
    },
    {
        name:"氯雷他定片",
        efficacy:"用于缓解过敏性鼻炎有关的症状",
        usedate:5,
        profac:"哈尔滨有限公司",
        unitprice:30,
        num:30,
        yea:2017,
        mouth:3,
        date:9
    },
    {
        name:"新雪片",
        efficacy:"清热解毒,用于各种热性病之发热",
        usedate:1,
        profac:"广州有限公司",
        unitprice:15,
        num:10,
        yea:2013,
        mouth:4,
        date:8
    },
    {
        name:"一清颗粒",
        efficacy:"清热泻火解毒",
        usedate:6,
        profac:"深圳有限公司",
        unitprice:20,
        num:40,
        yea:2014,
        mouth:11,
        date:20
    },
    {
        name:"甲钴胺注射液",
        efficacy:"因缺乏维生素B12引起的巨幼红细胞性贫血的治疗",
        usedate:2,
        profac:"福建金山生物制药股份有限公司",
        unitprice:10,
        num:60,
        yea:2018,
        mouth:3,
        date:9
    },
    {
        name:"人工牛黄甲硝唑胶囊",
        efficacy:"人工牛黄甲硝唑胶囊",
        usedate:2,
        profac:"吉林有限公司",
        unitprice:10,
        num:60,
        yea:2018,
        mouth:6,
        date:9
    },
    {
        name:"六味地黄丸",
        efficacy:"头晕耳鸣，腰膝酸软",
        usedate:5,
        profac:"北京同仁堂科技发展股份有限公司制药厂",
        unitprice:10,
        num:60,
        yea:2018,
        mouth:4,
        date:15
    },
    {
        name:"乳果糖口服溶液",
        efficacy:"用于治疗高血氨症及由血氨升高引起的疾病；用于治疗慢性功能性便秘",
        usedate:1,
        profac:"丹东康复制药有限公司",
        unitprice:10,
        num:60,
        yea:2015,
        mouth:6,
        date:7
    },
    {
        name:"维生素E软胶囊",
        efficacy:"用于未进食强化奶粉或有严重脂肪吸收不良母亲所生的新生儿、早产儿、低出生体重儿",
        usedate:1,
        profac:"浙江医药股份有限公司新昌制药厂",
        unitprice:10,
        num:60,
        yea:2018,
        mouth:1,
        date:9
    },
    {
        name:"迪巧儿童维D钙咀嚼片",
        efficacy:"高钙血症、高尿酸血症、含钙肾结石或有肾结石病史者禁用",
        usedate:2,
        profac:"安士制药(中山)有限公司",
        unitprice:15,
        num:30,
        yea:2013,
        mouth:3,
        date:15
    },
    {
        name:"双黄连口服液",
        efficacy:"疏风解表，清热解毒、用于外感风热所致的感冒，症见发热、咳嗽、咽痛",
        usedate:1,
        profac:"吉林有限公司",
        unitprice:10,
        num:20,
        yea:2017,
        mouth:12,
        date:9
    }
];
*/

var username = document.getElementById("usern");
var userID = document.getElementById("userid");
for(i = 0 ; i < information.length; i++){
    if(information[i].index == 1){
        username.innerHTML = information[i].name;
        userID.innerHTML = information[i].password;
    }
}


var tuichu = document.getElementsByClassName("tuichu")[0];
tuichu.onclick = function () {
    for(i = 0 ; i < information.length; i++){
        information[i].index=0;
    }
    console.log(information);
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
var seelook = document.getElementsByClassName("seelook")[0];


var kan = document.getElementsByClassName("kan")[0];
var shouye = document.getElementsByClassName("shouye")[0];
var main = document.getElementsByClassName("main")[0];
var zhao = document.getElementsByClassName("zhao")[0];
var sou = document.getElementsByClassName("sou")[0];
var gouwu = document.getElementsByClassName("gouwuche")[0];
var seeinfo = document.getElementsByClassName("seeinfo")[0];


var info1 = document.getElementsByClassName("info-one")[0];
var info2 = document.getElementsByClassName("info-two")[0];
var info3 = document.getElementsByClassName("info-three")[0];

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
        "                        生产日期：<span>" + item.yea + "</span>\n" +
        "                                -\n" +
        "                                <span>" + item.mouth + "</span>\n" +
        "                                -\n" +
        "                                <span>" + item.date +"</span>" +
        "                    </div>\n" +
        "                    <div class=\"userdate\">\n" +
        "                        使用期限：<span>" + item.usedate + "</span>年\n" +
        "                    </div>\n" +
        "                            <div class=\"action\">\n" +
        "                                <i class=\"iconfont icon-htmal5icon29\"></i>\n" +
        "                                <span>加入购物车</span>\n" +
        "                            </div>\n" +
        "                    <div class=\"buynum\">\n" +
        "                         购买数量：<input type=\"text\" id =\"buy\">\n" +
        "                    </div>" +
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
        "                        生产日期：<span>" + item.yea + "</span>\n" +
        "                                -\n" +
        "                                <span>" + item.mouth + "</span>\n" +
        "                                -\n" +
        "                                <span>" + item.date +"</span>" +
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
        "                        生产日期：<span>" + item.yea + "</span>\n" +
        "                                -\n" +
        "                                <span>" + item.mouth + "</span>\n" +
        "                                -\n" +
        "                                <span>" + item.date +"</span>" +
        "                    </div>\n" +
        "                    <div class=\"userdate\">\n" +
        "                        使用期限：<span>" + item.usedate + "</span>年\n" +
        "                    </div>\n" +
        "                    <div class=\"buynum\">\n" +
        "                         购买数量：<span>" + item.buy + "</span>盒\n" +
        "                         <i class=\"iconfont icon-iconfontadd\"></i>\n" +
        "                         <i class=\"iconfont icon-iconfontmove\"></i>" +
        "                    </div>" +
        "                    <div class=\"shanchu\">\n" +
        "                         <i class=\"iconfont icon-guanbi\"></i>\n" +
        "                    </div>" +
        "                </div>";
    return tutu;
}
function setInfo1(item){
    var h = "";
    for(j = 0 ; j < item.shu.length ; j++){
        console.log(Drugs[item.shu[j]]);
        h += setZi(Drugs[item.shu[j]],item.shu1[j])
    }
    var tu = "<div class=\"dan\">\n" +
        h +
        "<div class=\"allmoney\">\n" +
        "                    总价格: <span>" +item.allmoney + "</span>元\n" +
        "                </div>" +
        "                <div class=\"paypeople\">\n" +
        "                    购买人: <span>" + item.people + "</span>\n" +
        "                </div>" +
        "                <div class=\"dan-date\">\n" +
        "                    支付时间: <span>" + item.time + "</span>\n" +
        "                </div>\n" +
        "            </div>";
    return tu;
}
function setZi(item,item1) {
    var tu =  "                <div class=\"bianxian1\" >\n" +
        "                    <div class=\"Dname1\">\n" +
        "                        药品名：<span>" + item.name + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"price1\">\n" +
        "                        单价：<span>" + item.unitprice + "</span>元\n" +
        "                    </div>\n" +
        "                    <div class=\"buynum1\">\n" +
        "                        购买数量：<span>" + item1 + "</span>盒\n" +
        "                    </div>\n" +
        "                </div>\n";

    return tu;
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
function get3() {
    var html = "";
    var num = 0;
    for(i = 0 ; i < information.length ; i++){
        if(information[i].index == 1){
            for(j = 0 ; j < info.length ; j++){
                if(info[j].people == information[i].name){
                    if(info[j].sign == 0){
                        num++;
                        html += setInfo1(info[j]);
                    }
                }
            }
            info3.innerHTML = html;
            if(num == 0){
                info3.innerHTML = "无相关订单";
            }
        }
    }
}
function get4() {
    var html = "";
    var num = 0;
    for(i = 0 ; i < information.length ; i++){
        if(information[i].index == 1){
            for(j = 0 ; j < info.length ; j++){
                if(info[j].people == information[i].name){
                    if(info[j].sign == -1){
                        num++;
                        html += setInfo1(info[j]);
                    }
                }
            }
            info2.innerHTML = html;
            if(num == 0){
                info2.innerHTML = "无相关订单";
            }
        }
    }
}
function get5() {
    var html = "";
    var num = 0;
    for(i = 0 ; i < information.length ; i++){
        if(information[i].index == 1){
            for(j = 0 ; j < info.length ; j++){
                if(info[j].people == information[i].name){
                    if(info[j].sign == 1){
                        num++;
                        html += setInfo1(info[j]);
                    }
                }
            }
            info1.innerHTML = html;
            if(num == 0){
                info1.innerHTML = "无相关订单";
            }
        }
    }
}
get();
kan.onclick = function () {
    seeinfo.style.background = "";
    seelook.style.display = "none";
    main.style.display = "none";
    shouye.style.backgroundColor = "white";
    zhao.style.background = "";
    sou.style.display = "";
    gouwu.style.background = "";
    gou.style.display = "none";
    kan.style.background = "#f2f2f2";
    look.style.display = "block";
    var action = document.getElementsByClassName("action");
    for(i = 0 ; i < action.length ; i++){
        action[i].onclick = function () {
            var div = this.parentNode;
            console.log(div);
            var name = div.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0].innerHTML;
            var buynum = div.getElementsByClassName("buynum")[0].getElementsByTagName("input")[0].value;
            if(buynum == ""){
                buynum = 1;
            }
            console.log(buynum);
            console.log(name);
            for(i = 0 ; i < Drugs.length ; i++){
                if(name == Drugs[i].name){
                    if(Drugs[i].num < buynum){
                        div.getElementsByClassName("buynum")[0].getElementsByTagName("input")[0].value = "";
                        alert("数量不足，加入购物车失败！");
                    }
                    else{
                        Drugs[i].sym = 1;
                        Drugs[i].buy = buynum;
                        alert("加入成功!");
                        div.getElementsByClassName("buynum")[0].getElementsByTagName("input")[0].value = "";
                    }
                }
            }
        };
    }
};
shouye.onclick = function () {
    seeinfo.style.background = "";
    seelook.style.display = "none";
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
    seeinfo.style.background = "";
    seelook.style.display = "none";
    main.style.display = "none";
    shouye.style.backgroundColor = "white";
    kan.style.background = "";
    look.style.display = "none";
    gouwu.style.background = "";
    gou.style.display = "none";
    zhao.style.background = "#f2f2f2";
    sou.style.display = "block";
};
gouwu.onclick = function () {
    seeinfo.style.background = "";
    seelook.style.display = "none";
    main.style.display = "none";
    shouye.style.backgroundColor = "white";
    kan.style.background = "";
    look.style.display = "none";
    zhao.style.background = "";
    sou.style.display = "none";
    gouwu.style.background = "#f2f2f2";
    gou.style.display = "block";
    get2();
    var allmoney = 0 ;
    var del = document.getElementsByClassName("shanchu");
    var allprice = document.getElementsByClassName("allprice")[0].getElementsByTagName("span")[0];
    var add = document.getElementsByClassName("icon-iconfontadd");
    var delet = document.getElementsByClassName("icon-iconfontmove");
    for(i = 0 ; i < add.length ; i++){
        add[i].onclick = function () {
            var div = this.parentNode.parentNode;
            var name = div.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0].innerHTML;
            for(j = 0 ; j < Drugs.length; j++){
                if(name == Drugs[j].name){
                    if(Drugs[j].buy == Drugs[j].num){
                        alert("已达到最大数目!");
                    }
                    else{
                        Drugs[j].buy = Drugs[j].buy - 0;
                        Drugs[j].buy = Drugs[j].buy + 1;
                    }
                }
            }
        }
    }
    for(i = 0 ; i < delet.length ; i++){
        delet[i].onclick = function () {
            var div = this.parentNode.parentNode;
            var name = div.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0].innerHTML;
            for(j = 0 ; j < Drugs.length ; j++){
                if(name == Drugs[j].name){
                    if(Drugs[j].buy == 1){
                        alert("已达到最小数目!");
                    }
                    else{
                        Drugs[j].buy = Drugs[j].buy - 1;
                    }
                }
            }
        };
    }
    for(i = 0 ; i < del.length ; i++){
        del[i].index = i;
        del[i].onclick = function () {
            var div = this.parentNode;
            console.log(div);
            var name = div.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0].innerHTML;
            console.log(name);
            for(j = 0 ; j < Drugs.length ; j++){
                if(name == Drugs[j].name){
                    var xuan = confirm("是否删除?");
                    if(xuan){
                        Drugs[j].sym = 0;
                    }
                }
            }
        };
        var div = del[i].parentNode;
        var name = div.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0].innerHTML;
        for(j = 0 ; j < Drugs.length ; j++){
            if(name == Drugs[j].name){
                allmoney = allmoney + Drugs[j].buy * Drugs[j].unitprice;
            }
        }

    }
    allprice.innerHTML = allmoney;

};
seeinfo.onclick = function () {
    seeinfo.style.backgroundColor = "#f2f2f2";
    seelook.style.display = "block";
    main.style.display = "none";
    shouye.style.backgroundColor = "white";
    zhao.style.background = "";
    sou.style.display = "";
    gouwu.style.background = "";
    gou.style.display = "none";
    kan.style.background = "";
    look.style.display = "none";
    var one = document.getElementsByClassName("one")[0];
    var two = document.getElementsByClassName("two")[0];
    var three = document.getElementsByClassName("three")[0];
    one.onclick = function () {
        info1.style.display = "block";
        info2.style.display = "none";
        info3.style.display = "none";
        one.style.backgroundColor = "palevioletred";
        two.style.backgroundColor = "#f2f2f2";
        three.style.backgroundColor = "#f2f2f2";
        get5();
    };
    two.onclick = function () {
        info1.style.display = "none";
        info2.style.display = "block";
        info3.style.display = "none";
        two.style.backgroundColor = "palevioletred";
        three.style.backgroundColor = "#f2f2f2";
        one.style.backgroundColor = "#f2f2f2";
        get4();
    };
    three.onclick = function () {
        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "block";
        three.style.backgroundColor = "palevioletred";
        two.style.backgroundColor = "#f2f2f2";
        one.style.backgroundColor = "#f2f2f2";
        get3();
    };
    get5();




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
                var buynum = document.getElementsByClassName("buybuy")[0].getElementsByTagName("input")[0].value;
                if(buynum == ""){
                    buynum = 1;
                }
                if(that.num < buynum){
                    alert("数量不足，加入购物车失败！");
                    document.getElementsByClassName("buybuy")[0].getElementsByTagName("input")[0].value = "";
                }
                else{
                    that.buy = buynum;
                    that.sym = 1;
                    alert("加入成功!");
                    document.getElementsByClassName("buybuy")[0].getElementsByTagName("input")[0].value = "";
                    var d = JSON.stringify(Drugs);
                    localStorage.setItem("Drugs",d);
                    console.log(Drugs);
                }
                console.log(that);
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
zhifu.onclick = function () {
    var allprice = document.getElementsByClassName("allprice")[0].getElementsByTagName("span")[0];
    if(allprice.innerHTML == 0){
        alert("购物车中无商品!");
    }
    else{
        if(confirm("是否支付?")){
            confirm("选择支付方式:微信支付点击（确定）,支付宝支付点击（取消）");
            var myDate = new Date();
            var dui = {
                shu : new Array(),
                shu1:new Array(),
                time: 0
            };
            var t = 0 ;
            var del = document.getElementsByClassName("shanchu");
            for(i = 0 ; i < del.length ; i++){
                var div = del[i].parentNode;
                var name = div.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0].innerHTML;
                for(j = 0 ; j < Drugs.length ; j++){
                    if(name == Drugs[j].name){
                        dui.shu1[t] = Drugs[j].buy;
                        dui.shu[t] = j;
                        t++;
                    }
                }
            }
            for(i = 0 ; i < information.length ; i ++){
                if(information[i].index == 1){
                    dui.people = information[i].name;
                }
            }
            dui.time = myDate.toLocaleString();
            dui.allmoney = allprice.innerHTML;
            dui.sign = 1;
            console.log(dui);
            infonum++;
            var d = JSON.stringify(infonum);
            localStorage.setItem("infonum",d);
            console.log(infonum);
            d = d - 1;
            info[d] = dui;
            console.log(info);
            var dd = JSON.stringify(info);
            localStorage.setItem("info",dd);
        }

    }
};