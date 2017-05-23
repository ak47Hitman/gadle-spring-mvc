angular.module('textInputExample', []).controller('ExampleController',
		[ '$scope', function($scope) {
			$scope.example = {
				text : 'guest',
				word : /^\s*\w*\s*$/
			};
		} ]);