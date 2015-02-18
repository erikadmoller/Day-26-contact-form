angular.module('basic.controllers', []) 
.controller('loadingCtrl', function($scope) {

	$scope.submitForm = function() {
		if($scope.userName === 'erika') {
			console.log('erika');
			
		} else if($scope.userName === '') {
			console.log('no name');
			$scope.noName = true;
		}

	}

});