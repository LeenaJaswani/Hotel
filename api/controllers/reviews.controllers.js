var mongoose=require('mongoose');
var Hotel=mongoose.model('Hotel');


module.exports.reviewsGetAll=function(req,res){
var hotelId = req.params.hotelId;

	console.log("Get HotelId",hotelId);

	Hotel
		.findById(hotelId)
		.select('reviews')	
		.exec(function (err,doc) {
		 if (err) {
        return res.status(500).json(err);
      }
      if (!hotel) {
        return res.status(404).json({ message: 'Hotel ID not found' });
      }
      res.status(200).json( hotel.reviews ? hotel.reviews : [] );
    });

};

//get reviews for one hotel
module.exports.reviewsGetOne=function(req,res){
var hotelId = req.params.hotelId;
var reviewId = req.params.reviewId;
console.log("Get reviewId"+reviewId+"for hotelId"+hotelId);
Hotel
		.findById(hotelId)
		.select('reviews')	
		.exec(function (err,hotel) {
			var response={
				status:200,
				message:{}

			}
			if(err){
			console.log("Error finding hotel",err);
			response.status=500;
			response.message=err;
		}else if(!hotel){
			console.log("Hotel id not found in db",id);
			response.status=404;
			response.message={"message":"Hotel Id not found"+id};
		}else{
			response.message=hotel.reviews.id(reviewId);
			if(!response.message){
				response.status=404;
				response.message={
					"message":"reviewId not found"+reviewId
				};
			}
		}
		res
		.status(response.status)
		.json(response.message);});

};
var _addReview=function(req,res,hotel){

hotel.reviews.push({
name:req.body.name,
rating:parseInt(req.body.rating,10),
review:req.body.review
});
hotel.save(function(err,hotelUpdated){
	if(err){
		res
		.status(500)
		.json(err);
			}
			else{
		res
		.status(200)
		.json(hotelUpdated.reviews[hotelUpdated.reviews.length-1]);
			}
});

};
module.exports.reviewsAddOne=function(req,res){
var hotelId = req.params.hotelId;

console.log("Get hotelId",hotelId);
Hotel
		.findById(hotelId)
		.select('reviews')	
		.exec(function (err,doc) {
			var response={
				status:200,
				message:{}

			}
			if(err){
			console.log("Error finding hotel",err);
			response.status=500;
			response.message=err;
		}else if(!doc){
			console.log("Hotel Iid not found in db",id);
			response.status=404;
			response.message={"message":"Hotel Id not found"+id};
		}
		if(doc){
			_addReview(req,res,doc);
		}
		else{
			res
			.status(response.status)
			.json(response.message);
		

			
		
		}
		
		
		});
};
module.exports.reviewsUpdateOne=function(req,res){
var hotelId = req.params.hotelId;
var reviewId = req.params.reviewId;


console.log("put reviewId"+reviewId+"for hotelId"+hotelId);
Hotel
		.findById(hotelId)
		.select('reviews')	
		.exec(function (err,hotel) {
			var thisReview;
			var response={
				status:200,
				message:{}

			};
			if(err){
			console.log("Error finding hotel",err);
			response.status=500;
			response.message=err;
		}else if(!hotel){
			console.log("Hotel id not found in db",id);
			response.status=404;
			response.message={"message":"Hotel Id not found"+id
		};
		}else{
			thisReview=hotel.reviews.id(reviewId);
			if(!thisReview){
				response.status=404;
				response.message={
					"message":"reviewid not found"+reviewId
				};
			}
		}
		if (response.status!==200){
			res
		.status(response.status)
		.json(response.message)
		}
		else{
			thisReview.name=req.body.name;
			thisReview.rating=parseInt(req.body.rating,10);
			thisReview.review=req.body.review;
			hotel.save(function(err,hotelUpdated){
				if(err){
					res
					.status(500)
					.json(err);
				
			}else{
				res
				.status(204)
			.json();
		
			}
});
}
});		

};
module.exports.reviewsDeleteOne=function(req,res){
	var hotelId = req.params.hotelId;
var reviewId = req.params.reviewId;


console.log("put reviewId"+reviewId+"for hotelId"+hotelId);
Hotel
		.findById(hotelId)
		.select('reviews')	
		.exec(function (err,hotel) {
			var thisReview;
			var response={
				status:200,
				message:{}

			};
			if(err){
			console.log("Error finding hotel",err);
			response.status=500;
			response.message=err;
		}else if(!hotel){
			console.log("Hotel id not found in db",id);
			response.status=404;
			response.message={"message":"Hotel Id not found "+id
		};
		}else{
			thisReview=hotel.reviews.id(reviewId);
			if(!thisReview){
				response.status=404;
				response.message={
					"message":"reviewid not found "+reviewId
				};
			}
		}
		if (response.status!==200){
			res
		.status(response.status)
		.json(response.message)
		}
		else{
			hotel.reviews.id(reviewId).remove();
			hotel.save(function(err,hotelUpdated){
				if(err){
					res
					.status(500)
					.json(err);
				
			}else{
				res
				.status(204)
			.json();
		
			}
});
}
});		
	
};