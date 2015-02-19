angular.module('basic.controllers', []) 
.controller('loadingCtrl', function($scope) {

	$scope.sumbitPage = true;

	$scope.submitForm = function() {

		var errorArray = [
			'Name cannot be empty',
			'Email cannot be empty',
			'Email must contain an "@"',
			'Website must start with http://',
			'Message cannot be left empty'
		];
	
		if($scope.userName === '' || angular.isUndefined($scope.userName)) {
			// console.log('empty name');
			$scope.noNameError = errorArray[0];
		} else {
			console.log('name');
		}

		if($scope.userEmail === '' || angular.isUndefined($scope.userEmail)) {
			// console.log('empty email');
			$scope.noEmailError = errorArray[1];
		} else {
			console.log('email');

			for(var i=0; i < $scope.userEmail.length; i++) {
				if($scope.userEmail.indexOf('@') === -1) {
					console.log('no At sign');
					$scope.noAtSignError = errorArray[2];
				} else {
					console.log('There is an At sign');
				}
			}
		}

		if(angular.isUndefined($scope.userWebsite) || $scope.userWebsite.substring(0, 7) !== 'http://') {
			console.log('website undefined');
			$scope.noWebError = errorArray[3];
		} else {
			console.log('http:// website');
		}

		if($scope.userMessage === '' || angular.isUndefined($scope.userMessage)) {
			// console.log('empty message');
			$scope.noMessageError = errorArray[4];
		} else {
			console.log('message');
		}

	}

});

