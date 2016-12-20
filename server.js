var express=require('express');
var middleware=require("./middleware.js")
var app=express();
var port=process.env.PORT || 3000;



app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
app.get('/about',middleware.requireAuthentication,function(req,res){

	res.send("about us!FUCK YOU!!!");
});

app.use(express.static(__dirname+"/public"));
app.listen(port,function(){
	console.log("server started and port : "+port);

});