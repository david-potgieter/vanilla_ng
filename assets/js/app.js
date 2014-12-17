	var app = angular.module('app',['ui.router','mgcrea.ngStrap']);
	var baseURL = 'assets/';

	app.run(function($stateParams,$state,$rootScope) {
		$rootScope.$on('$stateChangeStart',
			function(event, toState, toParams, fromState, fromParams){
				console.log(toState.name);
			});
	});


	app.config(["$locationProvider", function($locationProvider) {
		$locationProvider.html5Mode({
				enabled: false,
				requireBase: false
		});
	}]);

	app.config(['$stateProvider', '$urlRouterProvider' ,function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/welcome');
		$stateProvider
			.state('home', {
				url: '/welcome',
				controller: 'welcomeCtrl',
				templateUrl: baseURL+'angular/views/landing.html',
				data: {
					title: 'title',
					description: 'description',
					menu: 'image',
					showNav: true
				}
			})
			.state('link1', {
				url: '/link1',
				controller: 'welcomeCtrl',
				templateUrl: baseURL+'angular/views/page1.html',
				data: {
					title: 'title',
					description: 'description',
					menu: 'image',
					showNav: true
				}
			})
			.state('link2', {
				url: '/link2',
				controller: 'welcomeCtrl',
				templateUrl: baseURL+'angular/views/page2.html',
				data: {
					title: 'title',
					description: 'description',
					menu: 'image',
					showNav: true
				}
			})
			.state('link3', {
				url: '/link3',
				controller: 'welcomeCtrl',
				templateUrl: baseURL+'angular/views/page3.html',
				data: {
					title: 'title',
					description: 'description',
					menu: 'image',
					showNav: true
				}
			})
			.state('404', {
				url: '/oops',
				data :{
					title: 'title',
					description: 'description',
					menu: 'image',
					showNav: false
				}
			});

	}]);

