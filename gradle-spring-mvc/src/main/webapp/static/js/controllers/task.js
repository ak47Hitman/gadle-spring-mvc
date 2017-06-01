var taskApp = angular.module('tasksApp', [ 'ngAnimate', 'ngMaterial' ]);

taskApp.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default').primaryPalette('pink').accentPalette(
			'orange');
});

function postTask($scope, $http, data) {
	$http.post('/gradle-spring-mvc/settasks', JSON.parse(JSON.stringify(data)))
			.then(function(response) {
				if (response.data)
					$scope.msg = "Post Data Submitted Successfully!";
			}, function(response) {
				$scope.msg = "Service not Exists";
				$scope.statusval = response.status;
				$scope.statustext = response.statusText;
				$scope.headers = response.headers();
			});
}

function getTasks($scope, $http) {
	$http.get('/gradle-spring-mvc/task').then(function(response) {
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
		// JSON.stringify(data)
		postTask($scope, $http, data);
	};

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
}

taskApp.controller('taskController', function($scope, $http) {
	getTasks($scope, $http);
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
