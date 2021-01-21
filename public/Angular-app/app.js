angular.module('meanhotel',['ngRoute','angular-jwt'])
.config(config).run(run)

function config($httpProvider,$routeProvider,$locationProvider){
	 $httpProvider.interceptors.push('AuthInterceptor');
	$locationProvider.html5Mode(false).hashPrefix('!');
	$routeProvider
	.when('/',{
		templateUrl:'Angular-app/main/main.html',
		access:{
			restricted:false
		}
	})
	.when('/hotels',{
		templateUrl:"Angular-app/hotel-list/hotels.html",
		controller:HotelsController,
		controllerAs:'vm',access:{
			restricted:false
		}
	})
	.when('/hotel/:id',{
		templateUrl:"Angular-app/hotel-display/hotel.html",
		controller:HotelController,
		controllerAs:'vm',
		access:{
			restricted:false
		}
	})
	.when('/register',{
		templateUrl:'Angular-app/register/register.html',
		controller:RegisterController,
		controllerAs:'vm',
		access:{
			restricted:false
		}
	})
	.when('/profile',{
		templateUrl:'Angular-app/profile/profile.html',
		controller:RegisterController,
		controllerAs:'vm',
		access:{
			restricted:true
		}
	})
	.otherwise({
		redirectTo:'/'
	});
}

function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
}