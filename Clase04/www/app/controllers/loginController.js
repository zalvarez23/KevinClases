var app = angular.module('myApp.ctrlLogin', [])                     


app.controller('ctrlLogin',function($scope,$timeout,$location,$http){
	
	$scope.objects = {
		usuario : '',
		password : ''
	};
	$scope.showLoader = false;

	$scope.iniciarSesion = function(){
		$scope.showLoader = true;
		var url = "http://192.168.0.33:82/Controladores/inicioSesion.php";
		var params = {

		}
		$http.post(url,params).then(function(res){
			console.log(res);
		},function(err){
			console.log(err);
		})


		/*$timeout(function(){
			$location.path('/Home');
			$scope.showLoader = false;
		},2000)	*/
	}



})