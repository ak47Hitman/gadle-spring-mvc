angular.module('tasksApp').controller('tasksController',
		function($scope, $http) {
			$http.get('/gradle-spring-mvc/tasks').then(function(response) {
				$scope.tasks = response.data;
			});
		});
