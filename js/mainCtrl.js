var app = angular.module('quoteBook', ['ngCookies']);

app.controller('mainCtrl', function($scope, mainService) {

	//$scope.test = "testing, testing, 1, 2...";
	var getData = function() {
			$scope.quotes = mainService.getData();
			console.log($scope.quotes);
	}

	getData();

	$scope.addQuote = function() {
		mainService.addData($scope.text, $scope.author);

		$scope.text = '';
		$scope.author = '';
	}

	$scope.removeQuote = function($index) {
		mainService.removeData($index);
	}

	$scope.toggle = function() {
		if($scope.showForm) {
			$scope.showForm = false;
		} else {
			$scope.showForm = true;
		}
	};

	$scope.showRemove = function() {
		if($scope.showRemoveBtn) {
			$scope.showRemoveBtn = false;
		} else {
			$scope.showRemoveBtn = true;
		}
	};

	//using cookies to store data for reuse

});