var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {

	//$scope.test = "testing, testing, 1, 2...";
	var getData = function() {
			$scope.quotes = mainService.getData();
			console.log($scope.quotes);
	}

	getData();

});