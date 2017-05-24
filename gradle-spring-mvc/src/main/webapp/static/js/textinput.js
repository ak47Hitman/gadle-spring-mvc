angular.module('ngApp', []).controller('Controller',
		[ '$scope', function($scope) {
			$scope.count = 0;
			$scope.myFunc = function() {
				$scope.count++;
			};
			$scope.clicked = function() {
				window.location = "/gradle-spring-mvc/mytasks";
			}
		} ]);