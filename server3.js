const http = require('http');
var server = http.createServer(function(req,res){
    console.log(req.url);
    switch(req.url){
        case '/1.html':
        res.write("1111");
        break;
        case '/2.html':
        res.write("222");
        break;
        default:
        res.write("404");
        break;
    }
    // res.write("abc");
    res.end();
});

server.listen(8080);