const http = require('http');
var server = http.createServer(function(req,res){
    console.log('有人来了');
    res.write("abc");
    res.end();
});

server.listen(8080);