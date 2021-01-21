var express=require('express');
var router=express.Router();
var controlHotels=require('../controllers/hotels.controllers.js');// function is called by controllers
var controlReviews=require('../controllers/reviews.controllers.js');
var controlUsers=require('../controllers/users.controllers.js');
router
.route('/hotels')
.get(controlHotels.hotelsGetAll)
.post(controlHotels.hotelsAddOne);

router
.route('/hotels/:hotelId')
.get(controlHotels.hotelsGetOne)
.put(controlHotels.hotelsUpdateOne)
.delete(controlHotels.hotelsDeleteOne)




router
.route('/hotel/:hotelId/reviews')
.get(controlReviews.reviewsGetAll)
.post(controlReviews.reviewsAddOne);

router
.route('/hotel/:hotelId/reviews/:reviewId')
.get(controlReviews.reviewsGetOne)
.put(controlReviews.reviewsUpdateOne)
.delete(controlReviews.reviewsDeleteOne)


router
	.route('/users/register')
	.post(controlUsers.register);
router
	.route('/users/login')
	.post(controlUsers.login)


module.exports=router;

