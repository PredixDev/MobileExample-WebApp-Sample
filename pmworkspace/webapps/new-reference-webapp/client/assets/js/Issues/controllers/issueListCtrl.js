'use strict';

angular.module('application').controller('issueListCtrl',
    function($scope, $state, navbarService, pmapiService, pmapiFilter){
        navbarService.setTitle("Issue List");

        navbarService.setButton(0, "Back", "dashboard", true, true);
        navbarService.setButton(1, "Right", "issues", true, true);


        //var data = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number"];
        $scope.issues = data;
    });
