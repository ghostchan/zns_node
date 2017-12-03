const mysql=require('mysql');

//1、连接
var db=mysql.createConnection({host:'localhost',user:'root',password:'2008',database:'20171203'});

//2.查询
db.query("SELECT * FROM `user_table`;",(err,data)=>{
    if(err){
        console.log('出错了',err);
    }else{
        console.log('成功了',data);
        console.log(JSON.stringify(data));
    }
});