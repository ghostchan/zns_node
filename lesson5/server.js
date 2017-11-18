var http =require("http");
var querystring = require("querystring");
http.createServer(function(req,res){
    //POST--req
    var str="";
    var i=0;
    //data--有一段数据到达（很多次）
    req.on("data",function(data){
        console.log(`第${i++}次收到数据`);
        str+=data;
    });
    //end--数据全部到达（一次）
    req.on("end",function(){
        // console.log(str);
        // console.log("结束了");
        var post=querystring.parse(str);
        console.log(post);
    });
}).listen(8080);