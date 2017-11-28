const ejs=require('ejs');

ejs.renderFile('./views/1.ejs',{name:'jinn'},function(err,data){
    console.log(data);
});