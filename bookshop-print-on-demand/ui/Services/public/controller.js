angular.module('services', []);
angular.module('services').controller('ServicesController', function ($scope, $http) {

	$scope.entity = {};

	var menu = '/services/v3/js/bookshop/api/Menu.js';
	function loadMenu() {
		$http.get(menu)
		.success(function(data) {
			$scope.menu = data;
		});
	}
	loadMenu();

	var books = '/services/v3/js/bookshop-admin/api/Products/Books.js';
	function loadBooks() {
		$http.get(books)
		.success(function(data) {
			$scope.bookOptions = data;
		});
	}
	loadBooks();

	$scope.submit = function() {
		$http.post('/services/v3/js/bookshop-print-on-demand/api/PrintingRequests.js', JSON.stringify($scope.entity))
		.success(function() {
			$scope.entity = {};
		});
	};

});