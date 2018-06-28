//验证身份
/*var information =[
    {
        name:"刘可新",
        password:230621199808245165
    },
    {
        name:"王文竹",
        password:230621199808245166
    },
    {
        name:"王习文",
        password:230621199808245167
    }
];*/
var username = document.getElementById("username");
var password = document.getElementById("password");
var loginBtn = document.getElementById("loginA");
var form = document.getElementsByClassName("formhead")[0];
var time = 0;
var state = false;
loginBtn.onclick = function () {
    if(time == 3){
        alert("登录次数太多，登录失效！")
    }
    time ++;
    state = false;
    if(username.value == "管理员" && password.value == "111"){
        form.action = "管理员界面.html";
        form.submit();
    }
    else if(username.value == "" || password.value == ""){
        alert("用户名或密码为空！");
        state = false;
    }
    else{
        for (i = 0; i < information.length; i++) {
            console.log(username.value);
            console.log(password.value);
            if (username.value == information[i].name && password.value == information[i].password) {
                state = true;
                information[i].index = 1;
                console.log(state);
            }
        }

        if (state) {
            console.log(state);
            form.action = "用户界面.html";
            form.submit();
        }
        else {
            console.log(state);
            form.action = "";
            form.submit();
            alert("用户名或密码错误！");
        }
    }
};
//验证身份结束
