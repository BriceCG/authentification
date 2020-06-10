var app = angular.module('app',['ngRoute'])

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
    })
})