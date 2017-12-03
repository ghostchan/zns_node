const express=require('express');
var server=express();

var routeUser=express.Router();

routeUser.get('/1.html',function(req,res){
    res.send('user1');
});
routeUser.get('/2.html',function(req,res){
    res.send('user22');
});

server.use('/user',routeUser);

var articleRouter=express.Router();
server.use('/article',articleRouter);
articleRouter.get('/a.html',function(req,res){
    res.send('aaaa');
});

server.listen(8080);