    var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'includes/home.html',
                controller  : 'mainCtrl'
            })

            // route for the blog page
            .when('/blog', {
                templateUrl : 'includes/blog.html',
                controller  : 'mainCtrl'
            })
        
            // route for the store page
            .when('/store', {
                templateUrl : 'includes/store.html',
                controller  : 'mainCtrl'
            })
						
						// route for the about page
            .when('/about', {
                templateUrl : 'includes/about.html',
                controller  : 'mainCtrl'
            })
            .when('/error', {
                templateUrl : 'includes/home.html',
                controller  : 'mainCtrl'
            })
            .when('/success', {
                templateUrl : 'includes/home.html',
                controller  : 'mainCtrl'
            })
						.when('/order', {
                templateUrl : 'includes/ordersuccess.html',
                controller  : 'mainCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'includes/contact.html',
                controller  : 'mainCtrl'
            });
        
    });   

    // create the controller and inject Angular's $scope
    myApp.controller('mainCtrl', function($scope) {
    });

