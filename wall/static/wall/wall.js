/**
 * Created by rubensuardi on 4/6/17.
 */

(function(){

            'use strict';
            angular.module('wall.demo', []).controller('wallController', ['$scope','$http',wallController]);

            function wallController($scope, $http){
                $scope.user = {
                        password: "12345",
                        last_login: null,
                        is_superuser: true,
                        username: "rsuardi3",
                        first_name: "Ruben",
                        last_name: "Suardi",
                        email: "rsuardiaraujo@gmail.com",
                        is_staff: true,
                        is_active: true,
                        date_joined: "2017-04-06T18:11:30.905194Z",
                        groups: [],
                        user_permissions: [
                            19
                        ]
                };
                $scope.add = function (list,new_entry) {
                    var thing = {
                        first_thing : new_entry
                    };
                    $http.post('/wall/users/', $scope.user).then(function (response) {
                        list.thing.push(response.data);
                    },function () {
                        alert("Could not create the user")
                    });
                };

                $scope.data = [];
                $http.get('/wall/users/').then(function (response) {
                    $scope.data = response.data;
                });
            }

        }());
        //this thing right here, the parenthesis alone, makes the IIFE call or callback to call the function itself
