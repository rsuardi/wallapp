/**
 * Created by rubensuardi on 4/7/17.
 */
(function(){

    'use strict';

    var app = angular.module('wall.demo');
        app.controller('loginController', ['$scope','$http','$location', loginController]);


    function loginController($scope,$http,$location) {
        $scope.main_title = 'Login form';
        $scope.login = function () {
            $http.post('/auth_api/login/', $scope.user)
                .then(function () {
                    $location.url('/');
                },
                function () {
                    $scope.login_error = "Invalid username and password combination";
                });
        }
    }

})();
