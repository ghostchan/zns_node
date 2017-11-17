const http=require('http');
const fs =require('fs');

var server = http.createServer(function(req,res){
    var file_name='./www'+req.url;
    fs.readFile(file_name,function(err,data){
        if(err){
            console.log('bbb');
            res.write('404');
        }else{
            console.log('ccc');
            res.write(data);
        }
        res.end();
    });
    console.log('aaa');
    
});
server.listen(8080);