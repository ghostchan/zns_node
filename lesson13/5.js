const jade=require('jade');
console.log(jade.renderFile('./views/11.jade',{pretty:true,
arr:['jinn','chan','ghost','nuo']}));