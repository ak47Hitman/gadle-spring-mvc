angular
		.module('tasksApp', [ 'ngAnimate', 'ngMaterial' ])
		.config(
				function($mdThemingProvider) {
					$mdThemingProvider.theme('default').primaryPalette('pink')
							.accentPalette('orange');
				})
		.controller(
				'taskController',
				function($scope, $http) {
					$http.get('/gradle-spring-mvc/task').then(
							function(response) {
								$scope.task = response.data;
							});
					$scope.user = {
						title : 'Developer',
						email : 'ipsum@lorem.com',
						firstName : '',
						lastName : '',
						company : 'Google',
						address : '1600 Amphitheatre Pkwy',
						city : 'Mountain View',
						state : 'CA',
						biography : 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
						postalCode : '94043'
					};

					$scope.title1 = 'Button';
					$scope.title4 = 'Warn';
					$scope.isDisabled = true;

					$scope.googleUrl = 'http://google.com';
				});