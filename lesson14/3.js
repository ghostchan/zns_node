const ejs=require('ejs');

ejs.renderFile('./views/3.ejs',{json:{arr:[
    {user:'jinn',pass:'123456'},
    {user:'chan',pass:'555'},
    {user:'ghost',pass:'123777456'},
    {user:'nuo',pass:'999'}
]}},function(err,data){
    console.log(data);
});