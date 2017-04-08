/**
 * Created by rubensuardi on 4/7/17.
 */
(function(){
    'use strict';

    var app = angular.module('wall.demo');

    app.config(function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/static/html/wall.html',
                controller: 'wallController',
            })
            .when('/login', {
                templateUrl: '/static/html/login.html',
                controller : 'loginController',
            })
            .otherwise('/',{

              });
    });

    app.run(function($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    });
    
}());
