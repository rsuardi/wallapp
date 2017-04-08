/**
 * Created by rubensuardi on 4/6/17.
 */

(function(){

            'use strict';
            angular.module('wall.demo', ['ngRoute'])
                .controller('wallController',
                    ['$scope','$http', wallController]);

            function wallController($scope, $http){

                $scope.date = new Date();
                $scope.data = [];

                $http.get('/wall/users/').then(function (response) {
                        $scope.data = response.data;
                });

                /*
                $scope.login = function () {
                    $http.post('/auth_api/login/', {username:'rsuardi',password:'wallapp12345'});
                };*/

                $scope.add = function (title_entry,description_entry) {
                    var post = {
                        title : title_entry,
                        post_description : description_entry,
                        user: 1,
                        datetime: new Date()
                    };

                    $http.post('/wall/posts/', post).then(function (response) {
                        $http.get('/wall/users/').then(function (response) {
                            $scope.data = response.data;
                            alert("Posted!")
                        });
                    },function () {
                        alert("Could not create the post!")
                    });

                    /*
                    $http.post('/wall/users/', $scope.user).then(function (response) {
                        list.posts.push(response.data);
                    },function () {
                        alert("Could not create the user")
                    });*/
                };
            }

        }());
        //this thing right here, the parenthesis alone, makes the IIFE call or callback to call the function itself
