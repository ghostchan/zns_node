const express=require('express');
var server=express();

server.use('/aaa/b.html',function(req,res){
    
    res.cookie("user","jinn",{path:'/aaa',maxAge:30*24*3600*1000});
    res.send('ok');
});
server.listen(8080);