function Demo(){
    this.a = 123;
    this.bb = function () {
        console.log(456);
    }
}
/*
var demo = new Demo();
demo.bb();
*/

exports.mm = new Demo();

/*
exports.mm = {
    'a':1
};*/
