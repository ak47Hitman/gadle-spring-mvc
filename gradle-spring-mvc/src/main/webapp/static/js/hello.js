angular.module('demo', []).controller('Hello', function($scope, $http) {
	// $http.get('http://localhost:8080/gradle-spring-mvc/task').then(
	$http.get('/gradle-spring-mvc/task').then(function(response) {
		$scope.greeting = response.data;
	});
});