angular.module('textInputExample', []).controller('ExampleController',
		[ '$scope', function($scope) {
			$scope.count = 0;
			$scope.myFunc = function() {
				$scope.count++;
			};
		} ]);