const express=require('express');
var server=express();

// server.use('/a.html',function(req,res){
//     res.send('abc');
//     res.end();
// });

// server.use('/b.html',function(req,res){
//     res.send('123');
//     res.end();
// });

// server.get('/',function(){
//     console.log('有get');
// });
// server.post('/',function(){
//     console.log('有post');
// });

server.use('/',function(){
    console.log('有use');
});
server.listen(8080);