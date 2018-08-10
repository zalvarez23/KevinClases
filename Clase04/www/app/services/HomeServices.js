angular.module('myApp.HomeServices', [])

.factory('HomeServices', function ($timeout) {

	var Result = {};

	Result.headerShow = function(value){

		var headerHome = document.getElementById('headerHome');
		console.log(headerHome);
		if (value == true) {			
			headerHome.style.display = "";
		}else{
			headerHome.style.display = "none";
		}
	}

	return Result;

})