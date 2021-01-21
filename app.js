
require('./api/data/db.js')
var express=require('express');
var app=express();
var path=require('path');

var routes=require('./api/routes');
var bodyParser=require('body-parser');
app.set('port');
	app.use(function(req,res,next){
console.log(req.method,req.url);
next();


});
app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules',express.static(__dirname+'/node_modules'))
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/api',routes);

var port=process.env.PORT || '3000';

var server=app.listen(port,function(){
	

	console.log("Working part "+port);
});
