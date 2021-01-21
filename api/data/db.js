var mongoose=require('mongoose');var dbUrl=process.env.dbUrl;
mongoose.connect(dbUrl);

mongoose.connection.on('connected',function(){

	console.log("Mongoose connected to "+dbUrl);
});

mongoose.connection.on('disconnected',function(){

	console.log("Mongoose disconnected");
});
mongoose.connection.on('error',function(err){

	console.log("Mongoose connection error" + err);
	
});


process.on('SIGINT',function(){
	mongoose.connection.close(function () {
		console.log('Mongoose diconnected thru app termination (SIGINT)')
		process.exit(0);
	});
});
process.on('SIGTERM',function(){
	mongoose.connection.close(function () {
		console.log('Mongoose diconnected thru app termination (SIGTERM)')
		process.exit(0);
	});
});

process.once('SIGUSR2',function(){
	mongoose.connection.close(function () {
		console.log('Mongoose diconnected thru app termination (SIGUSR2)')
		process.kill(process.pid,'SIGUSR2');
	});
});
// bring in schemas and models
require('./hotels.model.js');
require('./users.model.js');
