/*var fs = require('fs');
var data = fs.readFileSync('filef.txt');*/
/*<Buffer 67 75 61 6e 78 69 61 6e 73 68 75 61 69 20 73 68 69 20 7a 68 75>*/
var fs = require('fs');
var data = fs.readFileSync('filef.txt','utf-8');
/*guanxianshuai shi zhu*/

console.log(data);
console.log('end');


/*
$.post('user/checkname',{'id':1},function (data) {
    console.log(data);
},'text');*/
