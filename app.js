//module

var TMbling= angular.module('TMbling',['ngRoute']);

//controller

TMbling.controller('navController',['$scope'],function($scope){

})

//routes
TMbling.config(function($routeProvider){

    $routeProvider

    .when('/',{
        templateURL: 'pages/home.htm',
        controller:'homeController'
    })
    .when('/parallax',{
        templateURL: 'pages/parallax.htm',
        controller: 'parallaxController'
    })

})