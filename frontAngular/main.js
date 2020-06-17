var app = angular.module('app',['ngRoute','ui.bootstrap','rx'])

app.config(function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl: './template/login.html',
        controller: 'loginController'
    })
    .when('/login',{
        templateUrl: './template/login.html',
        controller: 'loginController'
    })
    .when('/admin',{
        templateUrl: './template/adminHome.html',
        controller: 'adminController'
    })
})