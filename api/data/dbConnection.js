var MongoClient=require('mongodb').MongoClient;
var dbUrl='mongodb+srv://admin:mongoauthentication@hotelcluster.pl4nz.mongodb.net/meanhotel?retryWrites=true&w=majority'

var _connection=null;
var open=function(){
MongoClient.connect(dbUrl,function (err,client) {
	if(err){
		console.log("DB FAILED CONNECTION");
		return;
	}
	var db=client.db('meanhotel')
	_connection=db;
	console.log("DB CONNECTION OPEN",db)
});
};
var get=function(){

	return _connection
};

module.exports={
	open:open,

	get:get
};