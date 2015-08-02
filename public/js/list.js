'use strict';

angular.module('lightSpeedSonia.controllers')
    .controller('ListCtrl', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
        $scope.contacts = [];
        $scope.isEditMode = false;

        $http.get('/contacts').success(function (data) {
            $scope.contacts = angular.copy(data);
        });

        $scope.addContact = function () {
            var id = $scope.contacts.length;
            $scope.contacts.push({id: id, firstName: "", lastName: "", jobTitle: "", phoneNumber: "", picture: ""});
            $scope.currentContact = $scope.contacts[id];
        };

        $scope.removeContact = function () {
            $scope.contacts = $filter('filter')($scope.contacts, {id: '!' + $scope.currentContact.id});
        };

        $scope.setCurrentContact = function (index) {
            $scope.currentContact = $scope.contacts[index];
        };

        $scope.edit = function () {
            $scope.isEditMode = true;
        };

        $scope.endEdit = function () {
            $scope.isEditMode = false;
        };

    }]);




