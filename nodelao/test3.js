for(var i = 1 ; i <= 3 ; i++){
    /*setTimeout(function () {
        console.log(i);
    },0);*/
    /*
    输出
    end
    4
    4
    4
    */
    setTimeout(function (i) {
        console.log(i);
    },0);
    /*
   i定义 未赋值为undefined
   输出
   end
   undefined
   undefined
   undefined
   */
}
console.log('end');



/*
输出
end
4
4
4



异步处理
当前进程空闲
满足触发条件   （时间条件、磁盘I/O、网络I/O 自定义事件）
*/


/*
http四大关键字：get post put delete
*/