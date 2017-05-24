angular.module('demo', []).controller('Hello', function($scope, $http) {
	$http.get('/gradle-spring-mvc/task').then(function(response) {
		$scope.task = response.data;
	});
});