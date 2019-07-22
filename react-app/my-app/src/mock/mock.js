import Mock from 'mockjs'
import data from './data.json'
Mock.mock("https://api.myjson.com/bins/9inum",{dataList:data})


//生成随机数据
Mock.mock("https://www.fellow23.com/getData",{
    "name|2":"fellow23",    //重复次数 
    "age|5-10":6           //5或者10之间的数字   6为默认值  默认值必须写 没用
})

Mock.mock("https://www.fellow23.com/getData2",{
    "list|10-20":[
        {
            'id|+1':1-0,
            "name":'@first @last',    //英文名
            "text":"@cword(10,15)",    //汉字随机10-15个
            "time":"@time(hh:mm:ss)",
            "cname":"@cname",
            "img":"@img(100x100)"
        }
    ]
})

let Random = Mock.Random;

let TestDataList = ()=>{
    let list = [];
    for(let i = 0 ; i < 10 ; i++){
        let obj = {
            name:Random.cname(),
            id:Random.integer(10000,90000),
            img:Random.dataImage('125x125','小伙伴'+Random.integer(1,100)),   //生成base64  简单   image() 高度精确
            address:Random.province()
        }
        list.push(obj);
    }
    return list;
}

Mock.mock("https://www.fellow23.com/getData3",{data:TestDataList})