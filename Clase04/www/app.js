
 var app = angular.module('myApp',['ngRoute',
 	'myApp.ctrlLogin',
 	'myApp.HomeServices']);





 app.config(function ($routeProvider) {

	$routeProvider

	.when('/Home',{
		templateUrl : 'www/views/home.html',
		controller: 'ctrlHome',		
	})

	.when('/Login',{
		templateUrl : 'www/views/login.html',
		controller: 'ctrlLogin'
	})

	// MODULOS 

	.when('/Modulo1',{
		templateUrl : 'www/views/modulos/modulo1.html',
		controller : 'ctrlModulo1'
	})

	.when('/Modulo2',{
		templateUrl : 'www/views/modulos/modulo2.html',
		controller : 'ctrlModulo2'
	})

	.when('/Modulo3',{
		templateUrl : 'www/views/modulos/modulo3.html',
		controller : 'ctrlModulo3'
	})

	.when('/Modulo4',{
		templateUrl : 'www/views/modulos/modulo4.html',
		controller : 'ctrlModulo4'
	})			

	//

	.otherwise({
       redirectTo: '/Login'
    });
})


 app.controller('appCtrl', function($scope,$location){
 	$scope.changeView = function(value){
 		if (value == 1) {
 			$location.path('/Modulo1');
 		}else if(value == 2){
 			$location.path('/Modulo2');
 		}else if(value == 3){
 			$location.path('/Modulo3');
 		}else if(value == 4){
 			$location.path('/Modulo4');
 		}
 	}
 })
 app.controller('ctrlHome',function(HomeServices){
 	HomeServices.headerShow(true);
 })

 app.controller('ctrlModulo1',function(HomeServices){
 	HomeServices.headerShow(true);
 })
 app.controller('ctrlModulo2',function(HomeServices){
 	HomeServices.headerShow(true);
 })
 app.controller('ctrlModulo3',function(HomeServices){
 	HomeServices.headerShow(true);
 })
 app.controller('ctrlModulo4',function(HomeServices){
 	HomeServices.headerShow(true);
 })