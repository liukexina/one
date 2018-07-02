
//查找购买药品

var d = localStorage.getItem("information");
information = JSON.parse(d);

var dd = localStorage.getItem("Drugs");
Drugs = JSON.parse(dd);

var username = document.getElementById("usern");
var userID = document.getElementById("userid");
for(i = 0 ; i < information.length; i++){
    if(information[i].index == 1){
        username.innerHTML = information[i].name;
        userID.innerHTML = information[i].password;
    }
}
console.log(information);

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
    shouye.style.backgroundColor = "white";
    kan.style.background = "";
    look.style.display = "none";
    gouwu.style.background = "";
    gou.style.display = "none";
    zhao.style.background = "#f2f2f2";
    sou.style.display = "block";
};
gouwu.onclick = function () {
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