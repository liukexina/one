

var tupian = document.getElementsByClassName("tupian")[0];
var look = document.getElementsByClassName("look")[0];
var look1 = document.getElementsByClassName("look1")[0];
var look2 = document.getElementsByClassName("look2")[0];
var look3 = document.getElementsByClassName("look3")[0];
var look4 = document.getElementsByClassName("look4")[0];
var look5 = document.getElementsByClassName("look5")[0];
var look6 = document.getElementsByClassName("look6")[0];
var fan = document.getElementsByClassName("fan")[0];
var see = document.getElementsByClassName("see")[0];
var seeinfo = document.getElementsByClassName("seeinfo")[0];
var que = document.getElementsByClassName("que")[0];
var shouye = document.getElementsByClassName("shouye")[0];
var change = document.getElementsByClassName("change")[0];
var seeinfo1 = document.getElementsByClassName("seeinfo1")[0];
var seeinfo2 = document.getElementsByClassName("seeinfo2")[0];


var tuichu = document.getElementsByClassName("tuichu")[0];
tuichu.onclick = function () {
    window.location.href="首页.html";
};


var d = localStorage.getItem("infonum");
infonum = JSON.parse(d);
var dd = localStorage.getItem("info");
info = JSON.parse(dd);


shouye.onclick = function () {
    seeinfo1.classList.remove("spe");
    look5.style.display = "none";
    seeinfo2.classList.remove("spe");
    look6.style.display = "none";
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
    seeinfo2.classList.remove("spe");
    look6.style.display = "none";
    seeinfo1.classList.remove("spe");
    look5.style.display = "none";
    see.classList.add("spe");
    change.classList.remove("spe");
    fan.classList.remove("spe");
    seeinfo.classList.remove("spe");
    shouye.classList.remove("spe");
    shouye.classList.add("spe1");
    que.classList.remove("spe");
    look3.style.display = "none";
    look4.style.display = "none";
    look.style.display = "block";
    look1.style.display = "none";
    look2.style.display = "none";
    tupian.style.display = "none";
    get();
};
seeinfo.onclick = function () {
    shouye.classList.add("spe1");
    seeinfo2.classList.remove("spe");
    look6.style.display = "none";
    seeinfo1.classList.remove("spe");
    look5.style.display = "none";
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
       get2();
    }
    var but1 = document.getElementsByClassName("but1");
    for(i = 0 ; i < but1.length ; i ++){
        but1[i].onclick = function () {
            var div = this.parentNode.parentNode;
            var time = div.getElementsByClassName("dan-date")[0].getElementsByTagName("span")[0].innerHTML;
            console.log(time);
            for(j = 0 ; j < info.length ; j++){
                if(time == info[j].time){
                    info[j].sign = 0;
                    var d = JSON.stringify(info);
                    localStorage.setItem("info",d);
                    console.log(info[j].sign);
                    for(t = 0 ; t < info[j].shu.length ; t++){
                        Drugs[info[j].shu[t]].num = Drugs[info[j].shu[t]].num - info[j].shu1[t];
                        Drugs[info[j].shu[t]].sym = 0;
                        var b = JSON.stringify(Drugs);
                        localStorage.setItem("Drugs",b);
                        get2();
                    }
                }
            }
        }
    }
    var but2 = document.getElementsByClassName("but2");
    for(i = 0 ; i < but2.length ; i++){
        but2[i].onclick = function () {
            var div = this.parentNode.parentNode;
            var time = div.getElementsByClassName("dan-date")[0].getElementsByTagName("span")[0].innerHTML;
            console.log(time);
            for(j = 0 ; j < info.length ; j++){
                if(time == info[j].time){
                    info[j].sign = -1;
                    var d = JSON.stringify(info);
                    localStorage.setItem("info",d);
                    console.log(info[j].sign);
                    get2();
                }
            }
        }
    }

    var d = JSON.stringify(info);
    localStorage.setItem("info",d);

    var add = document.getElementsByClassName("look4-1")[0];
    var del = document.getElementsByClassName("look4-2")[0];
    var change1 = document.getElementsByClassName("change-1")[0];
    var change2 = document.getElementsByClassName("change-2")[0];
    del.onclick = function () {
        del.style.color = "firebrick";
        add.style.color ="black";
        change2.style.display = "block";
        change1.style.display = "none";
        var btn = change2.getElementsByTagName("button")[0];
        btn.onclick = function () {
            var sign = 0;
            var name = change2.getElementsByTagName("input")[0].value;
            var yao = document.getElementsByClassName("yao")[0];
            var gai = document.getElementsByClassName("gai")[0];
            console.log(name);
            for(i = 0 ; i < Drugs.length ; i++){
                if(name == Drugs[i].name){
                    h = setDiv(Drugs[i]);
                    yao.innerHTML = h;
                    gai.innerHTML = set();
                    sign = 1;
                    change2.getElementsByTagName("input")[0].value = "";
                    var btn = gai.getElementsByTagName("button")[0];
                    that = Drugs[i];
                    btn.onclick = function () {
                        if(confirm("是否提交?")){
                            if(document.getElementById("Dname1").value){
                                that.name = document.getElementById("Dname1").value;
                            }
                            if(document.getElementById("Deff1").value){
                                that.efficacy = document.getElementById("Deff1").value;
                            }
                            if(document.getElementById("Dusedate1").value){
                                that.usedate = document.getElementById("Dusedate1").value;
                            }
                            if(document.getElementById("Dsite1").value){
                                that.profac = document.getElementById("Dsite1").value;
                            }
                            if(document.getElementById("Dprice1").value){
                                that.unitprice = document.getElementById("Dprice1").value;
                            }
                            if(document.getElementById("Dyear1").value){
                                that.yea = document.getElementById("Dyear1").value;
                            }
                            if(document.getElementById("Dmouth1").value){
                                that.mouth = document.getElementById("Dmouth1").value;
                            }
                            if(document.getElementById("Ddate1").value){
                                that.date = document.getElementById("Ddate1").value;
                            }
                            if(document.getElementById("Dnum1").value){
                                that.num = document.getElementById("Ddate1").value;
                            }
                            var input = gai.getElementsByTagName("input");
                            for(i = 0 ; i < input.length ; i++){
                                input[i].value = "";
                            }
                            var d = JSON.stringify(Drugs);
                            localStorage.setItem("Drugs",d);
                        }
                    };
                }
            }
            if(sign == 0){
                alert("查询不到该药品!");
                change2.getElementsByTagName("input")[0].value = "";
            }
        }
    };
    add.onclick = function () {
        add.style.color = "firebrick";
        del.style.color = "black";
        change1.style.display = "block";
        change2.style.display = "none";
        var btn = change1.getElementsByTagName("button")[0];
        btn.onclick = function () {
            if(confirm("是否提交?")){
                var le = Drugs.length;
                var yao = {
                    name:document.getElementById("Dname").value,
                    efficacy:document.getElementById("Deff").value,
                    usedate:document.getElementById("Dusedate").value,
                    profac:document.getElementById("Dsite").value,
                    unitprice:document.getElementById("Dprice").value,
                    yea:document.getElementById("Dyear").value,
                    mouth:document.getElementById("Dmouth").value,
                    date:document.getElementById("Ddate").value,
                    num:document.getElementById("Dnum").value
                };
                Drugs[le] = yao;
                var input = change1.getElementsByTagName("input");
                for(i = 0 ; i < input.length ; i++){
                    input[i].value = "";
                }
                var d = JSON.stringify(Drugs);
                localStorage.setItem("Drugs",d);
            }
        };
    };
};
seeinfo1.onclick = function () {
    shouye.classList.add("spe1");
    seeinfo2.classList.remove("spe");
    look6.style.display = "none";
    seeinfo1.classList.add("spe");
    change.classList.remove("spe");
    seeinfo.classList.remove("spe");
    fan.classList.remove("spe");
    see.classList.remove("spe");
    shouye.classList.remove("spe");
    que.classList.remove("spe");
    look3.style.display = "none";
    look4.style.display = "none";
    look.style.display = "none";
    look1.style.display = "none";
    look2.style.display = "none";
    look5.style.display = "block";
    tupian.style.display = "none";
    var html = "";
    for(i = 0;i<info.length;i++){
        if(info[i].sign == 0){
            html += setInfo1(info[i])
        }
    }
    look5.innerHTML = html;
};
seeinfo2.onclick = function () {
    shouye.classList.add("spe1");
    seeinfo2.classList.add("spe");
    seeinfo1.classList.remove("spe");
    change.classList.remove("spe");
    seeinfo.classList.remove("spe");
    fan.classList.remove("spe");
    see.classList.remove("spe");
    shouye.classList.remove("spe");
    que.classList.remove("spe");
    look3.style.display = "none";
    look4.style.display = "none";
    look.style.display = "none";
    look1.style.display = "none";
    look2.style.display = "none";
    look5.style.display = "none";
    tupian.style.display = "none";
    look6.style.display = "block";
    var html = "";
    for(i = 0;i<info.length;i++){
        if(info[i].sign == -1){
            html += setInfo1(info[i])
        }
    }
    look6.innerHTML = html;
};
que.onclick = function () {
    shouye.classList.add("spe1");
    seeinfo2.classList.remove("spe");
    look6.style.display = "none";
    seeinfo1.classList.remove("spe");
    look5.style.display = "none";
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
    shouye.classList.add("spe1");
    seeinfo2.classList.remove("spe");
    look6.style.display = "none";
    seeinfo1.classList.remove("spe");
    look5.style.display = "none";
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
    shouye.classList.add("spe1");
    seeinfo2.classList.remove("spe");
    look6.style.display = "none";
    seeinfo1.classList.remove("spe");
    look5.style.display = "none";
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

    var add = document.getElementsByClassName("look4-1")[0];
    var del = document.getElementsByClassName("look4-2")[0];
    var change1 = document.getElementsByClassName("change-1")[0];
    var change2 = document.getElementsByClassName("change-2")[0];
    var btn = change1.getElementsByTagName("button")[0];
    btn.onclick = function () {
        if(document.getElementById("Dname").value && document.getElementById("Deff").value && document.getElementById("Dusedate").value && document.getElementById("Dsite").value &&
            document.getElementById("Dprice").value && document.getElementById("Dyear").value && document.getElementById("Dmouth").value && document.getElementById("Ddate").value &&
            document.getElementById("Dnum").value){
            console.log("haha");
            if(confirm("是否提交?")){
                var le = Drugs.length;
                var yao = {
                    name:document.getElementById("Dname").value,
                    efficacy:document.getElementById("Deff").value,
                    usedate:document.getElementById("Dusedate").value,
                    profac:document.getElementById("Dsite").value,
                    unitprice:document.getElementById("Dprice").value,
                    yea:document.getElementById("Dyear").value,
                    mouth:document.getElementById("Dmouth").value,
                    date:document.getElementById("Ddate").value,
                    num:document.getElementById("Dnum").value
                };
                Drugs[le] = yao;
                var input = change1.getElementsByTagName("input");
                for(i = 0 ; i < input.length ; i++){
                    input[i].value = "";
                }
                var d = JSON.stringify(Drugs);
                localStorage.setItem("Drugs",d);
            }
        }
        else{
            alert("填写不完整！");
        }
    };
    add.onclick = function () {
        add.style.color = "firebrick";
        del.style.color = "black";
        change1.style.display = "block";
        change2.style.display = "none";
        var btn = change1.getElementsByTagName("button")[0];
        console.log(btn);
        btn.onclick = function () {
            if(document.getElementById("Dname").value && document.getElementById("Deff").value && document.getElementById("Dusedate").value && document.getElementById("Dsite").value &&
                document.getElementById("Dprice").value && document.getElementById("Dyear").value && document.getElementById("Dmouth").value && document.getElementById("Ddate").value &&
                document.getElementById("Dnum").value){
                console.log("haha");
                if(confirm("是否提交?")){
                    var le = Drugs.length;
                    var yao = {
                        name:document.getElementById("Dname").value,
                        efficacy:document.getElementById("Deff").value,
                        usedate:document.getElementById("Dusedate").value,
                        profac:document.getElementById("Dsite").value,
                        unitprice:document.getElementById("Dprice").value,
                        yea:document.getElementById("Dyear").value,
                        mouth:document.getElementById("Dmouth").value,
                        date:document.getElementById("Ddate").value,
                        num:document.getElementById("Dnum").value
                    };
                    Drugs[le] = yao;
                    var input = change1.getElementsByTagName("input");
                    for(i = 0 ; i < input.length ; i++){
                        input[i].value = "";
                    }
                    var d = JSON.stringify(Drugs);
                    localStorage.setItem("Drugs",d);
                }
            }
            else{
                alert("填写不完整！");
            }
        };
    };
    del.onclick = function () {
        del.style.color = "firebrick";
        add.style.color ="black";
        change2.style.display = "block";
        change1.style.display = "none";
        var btn = change2.getElementsByTagName("button")[0];
        btn.onclick = function () {
            var sign = 0;
            var name = change2.getElementsByTagName("input")[0].value;
            var yao = document.getElementsByClassName("yao")[0];
            var gai = document.getElementsByClassName("gai")[0];
            console.log(name);
            for(i = 0 ; i < Drugs.length ; i++){
                if(name == Drugs[i].name){
                    h = setDiv(Drugs[i]);
                    yao.innerHTML = h;
                    gai.innerHTML = set();
                    sign = 1;
                    change2.getElementsByTagName("input")[0].value = "";
                    var btn = gai.getElementsByTagName("button")[0];
                    that = Drugs[i];
                    btn.onclick = function () {
                        if(confirm("是否提交?")){
                            if(document.getElementById("Dname1").value){
                                that.name = document.getElementById("Dname1").value;
                            }
                            if(document.getElementById("Deff1").value){
                                that.efficacy = document.getElementById("Deff1").value;
                            }
                            if(document.getElementById("Dusedate1").value){
                                that.usedate = document.getElementById("Dusedate1").value;
                            }
                            if(document.getElementById("Dsite1").value){
                                that.profac = document.getElementById("Dsite1").value;
                            }
                            if(document.getElementById("Dprice1").value){
                                that.unitprice = document.getElementById("Dprice1").value;
                            }
                            if(document.getElementById("Dyear1").value){
                                that.yea = document.getElementById("Dyear1").value;
                            }
                            if(document.getElementById("Dmouth1").value){
                                that.mouth = document.getElementById("Dmouth1").value;
                            }
                            if(document.getElementById("Ddate1").value){
                                that.date = document.getElementById("Ddate1").value;
                            }
                            if(document.getElementById("Dnum1").value){
                                that.num = document.getElementById("Dnum1").value;
                            }
                            var input = gai.getElementsByTagName("input");
                            for(i = 0 ; i < input.length ; i++){
                                input[i].value = "";
                            }
                            var d = JSON.stringify(Drugs);
                            localStorage.setItem("Drugs",d);
                        }
                    };
                }
            }
            if(sign == 0){
                alert("查询不到该药品!");
                change2.getElementsByTagName("input")[0].value = "";
            }
        }
    };

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
function get2() {
    var html = "";
    var num = 0;
    for(i = 0;i<info.length;i++){
        if(info[i].sign == 1){
            num++;
            html += setInfo(info[i])
        }
    }
    look1.innerHTML = html;
    if(num == 0){
        look1.innerHTML = "无订单可处理";
    }
}
function setInfo(item){
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
        "                <div class=\"decision\">\n" +
        "                    <button class=\"but1\">完成订单</button>\n" +
        "                    <button class=\"but2\">退回订单</button>\n" +
        "                </div>\n" +
        "            </div>";
    return tu;
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
function  set() {
    var tu = "药品名称：<input type=\"text\" id=\"Dname1\"><br>\n" +
        "                药品单价：<input type=\"text\" id=\"Dprice1\"><br>\n" +
        "                药品数量：<input type=\"text\" id=\"Dnum1\"><br>\n" +
        "                药品功效：<input type=\"text\" id=\"Deff1\"><br>\n" +
        "                生产厂家：<input type=\"text\" id=\"Dsite1\"><br>\n" +
        "                使用期限：<input type=\"text\" id=\"Dusedate1\"><br>\n" +
        "                生产年份：<input type=\"text\" id=\"Dyear1\"><br>\n" +
        "                生产月份：<input type=\"text\" id=\"Dmouth1\"><br>\n" +
        "                生产日份：<input type=\"text\" id=\"Ddate1\"><br>\n" +
        "                <button>提交</button>";
    return tu;
}
get();


