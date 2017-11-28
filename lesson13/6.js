const jade=require('jade');
console.log(jade.renderFile('./views/12.jade',{pretty:true,
content:'<h2>你好</h2><p>斤斤计较几家朴素</p>'}));