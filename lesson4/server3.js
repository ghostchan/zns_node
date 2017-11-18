const http=require("http");
const urlLib=require("url");
http.createServer(function(req,res){
   console.log(req.url);
   var obj=urlLib.parse(req.url,true);
   var url = obj.pathname;
   var GET=obj.query;
   console.log(url,GET);
   
   
    res.write("jjj");
    res.end();
}).listen(8080);