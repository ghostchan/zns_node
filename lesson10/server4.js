const express=require('express');
const bodyParser=require('body-parser');
const querystring=require('querystring');
var server=express();

server.listen(8080);

/* server.use(function(req,res,next){
    var str='';
    req.on('data',function(data){
        str+=data;
    });
    req.on('end',function(){
        req.body=querystring.parse(str);
        next();
    });
    // req.a=12;
    // req.body=8;
}); */
server.use(bodyParser.urlencoded({}));
server.use('/',function(req,res){
    // console.log(req.a);
    console.log(req.body);
});