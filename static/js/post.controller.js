/**
 * Created by rubensuardi on 4/7/17.
 */

(function () {

    'use strict';

    var app = angular.module('wall.demo',[]);
    app.controller('postController', ['$scope','$http','$location',postController]);

    function postController($scope, $http, $location) {
        $scope.post_to_wall = function (title_entry,description_entry) {
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
                };
    }
})();