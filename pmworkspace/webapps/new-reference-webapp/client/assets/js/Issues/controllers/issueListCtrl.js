'use strict';

angular.module('application').controller('issueListCtrl',
    function($scope, $state, $filter, navbarService, pmapiService){
        navbarService.setTitle("Issue List");

        navbarService.setButton(0, "Back", "dashboard", true, true);
        navbarService.setButton(1, "Right", "issues", false, false);


        //var data = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number"];
        pmapiService.getAllDocs().then(function(rows) {
             var data = $filter('filter')(rows, {doc: {dataType: "entity"}}, true);
             data = $filter('uniqueWithCount')(data,["doc","severity"]);
             $scope.issues = data;
            });
    });
