const urlLib=require("url");
var obj =urlLib.parse("http://www.baidu.com/index?a=23&b=8",true);
console.log(obj);