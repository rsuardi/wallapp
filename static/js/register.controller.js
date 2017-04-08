/**
 * Created by rubensuardi on 4/8/17.
 */
(function(){

    'use strict';

    var app = angular.module('wall.demo');
        app.controller('registerController', ['$scope','$http','$location', registerController]);


    function registerController($scope,$http,$location) {
        $scope.main_title = 'Register form';
        $scope.register = function () {
            $http.post('/wall/users/', $scope.user)
                .then(function () {
                    $location.url('/register');
                },
                function () {
                    $scope.login_error = "There was an error trying to save the new user";
                });
        };


        $scope.add = function (first_name,last_name,email,username,password) {
                    var post = {
                        first_name : first_name,
                        last_name : last_name,
                        email: email,
                        username: username,
                        password : password,
                        date_joined: new Date()
                    };

                    $http.post('/wall/users/', post).then(function (response) {
                        alert("Created!")
                        $location.url('/login');
                    },function () {
                        alert("Could not create the user!")
                    });

                    /*
                    $http.post('/wall/users/', $scope.user).then(function (response) {
                        list.posts.push(response.data);
                    },function () {
                        alert("Could not create the user")
                    });*/
                };
    }

})();
