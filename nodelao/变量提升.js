aa();   //456
console.log(aa);   //function aa(){console.log(456);}

var aa = function () {
    console.log(123);
};

aa();    //123

function aa() {
    console.log(456);
}

aa();   //123