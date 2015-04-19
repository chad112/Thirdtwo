    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'includes/home.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/blog', {
                templateUrl : 'includes/blog.html',
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