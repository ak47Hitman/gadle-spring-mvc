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
					$scope.submitTask = function() {
						if ($scope.task.content) {
							$http
									.post('/gradle-spring-mvc/posttask',
											angular.toJson($scope.task.content))
									.then(
											function(response) {
												if (response.data) {

													// // ADD A NEW ELEMENT.
													// $book.list.push({ name:
													// $book.name, price:
													// $book.price
													$scope.tasks
															.push(response.data);
													$scope.msg = "Post Data Submitted Successfully!";
												}
											},
											function(response) {
												$scope.msg = "Service not Exists";
											});

							$scope.task.content = '';
						}
					};

					$http.get('/gradle-spring-mvc/gettasks').then(
							function(response) {
								$scope.tasks = response.data;
							});

					$scope.messages = [ {
						id : 1,
						title : "Message A",
						selected : false
					}, {
						id : 2,
						title : "Message B",
						selected : true
					}, {
						id : 3,
						title : "Message C",
						selected : true
					}, ];

					$scope.doSecondaryAction = function(event) {
						$mdDialog
								.show($mdDialog
										.alert()
										.title('Secondary Action')
										.textContent(
												'Secondary actions can be used for one click actions')
										.ariaLabel('Secondary click demo').ok(
												'Neat!').targetEvent(event));
					};

				});

// var app = angular.module('myapp', []);
//
// app.controller('myappcontroller', function($scope, $http) {
// $scope.users = []
// $scope.userform = {
// name : "",
// department : ""
// };
//
// getUserDetails();
//
// function getUserDetails() {
// $http({
// method : 'GET',
// url : 'userdetails'
// }).then(function successCallback(response) {
// $scope.users = response.data;
// }, function errorCallback(response) {
// console.log(response.statusText);
// });
// }
//
// $scope.processUser = function() {
// $http({
// method : 'POST',
// url : 'user',
// data : angular.toJson($scope.userform),
// headers : {
// 'Content-Type' : 'application/json'
// }
// }).then(getUserDetails(), clearForm()).success(function(data) {
// $scope.users = data
// });
// }
// $scope.editUser = function(user) {
// $scope.userform.name = user.name;
// $scope.userform.department = user.department;
// disableName();
// }
// $scope.deleteUser = function(user) {
// $http({
// method : 'DELETE',
// url : 'deleteuser',
// data : angular.toJson(user),
// headers : {
// 'Content-Type' : 'application/json'
// }
// }).then(getUserDetails());
// }
//
// function clearForm() {
// $scope.userform.name = "";
// $scope.userform.department = "";
// document.getElementById("name").disabled = false;
// }
// ;
// function disableName() {
// document.getElementById("name").disabled = true;
// }
// });
