const express=require('express');
const cookieParser=require('cookie-parser');
var server=express();

server.use(cookieParser('abcdefg'));
server.use('/',function(req,res){
    req.secret='abcdefg';
    // res.cookie('user','jinn',{signed:true});
    console.log('无签名：',req.cookies);
    console.log('有签名：',req.signedCookies);
    res.send('ok');
});
server.listen(8080);