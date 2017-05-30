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

					$scope.name = null;
					$scope.name = 'test1';
					$scope.age = null;
					$scope.age = 'test2';
					$scope.adress = null;
					$scope.adress = 'test3';
					$scope.lblMsg = null;
					$scope.postdata = function(name, age, adress) {

						var data = {
							name : name,
							age : age,
							adress : adress
						};

						// Call the services
						$http
								.post('/gradle-spring-mvc/settasks',
										JSON.stringify(data))
								.then(
										function(response) {
											if (response.data)
												$scope.msg = "Post Data Submitted Successfully!";
										},
										function(response) {
											$scope.msg = "Service not Exists";
											$scope.statusval = response.status;
											$scope.statustext = response.statusText;
											$scope.headers = response.headers();
										});
					};
					// // Simple Post request example:
					// var url = '/gradle-spring-mvc/settasks', data =
					// 'parameters', config =
					// 'contenttype';
					// $http.post(url, data, config).then(function(response) {
					// alert('Test' + data)
					// // This function handles
					// // success
					// }, function(response) {
					// alert('Test2' + data)
					// // this function handles
					// // error
					// });

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