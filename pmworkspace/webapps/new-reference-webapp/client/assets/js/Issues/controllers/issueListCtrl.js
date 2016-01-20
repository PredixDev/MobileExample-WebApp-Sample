'use strict';

angular.module('application').controller('issueListCtrl',
    function($scope, $state, navbarService){
        navbarService.setTitle("Issue List");

        navbarService.setButton(0, "Back", "dashboard", true, true);
        navbarService.setButton(1, "Right", "issues", true, true);

        var data = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];
        $scope.issues = data;
    });
