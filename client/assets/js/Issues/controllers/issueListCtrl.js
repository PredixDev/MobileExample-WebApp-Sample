'use strict';

angular.module('application').controller('issueListCtrl',
    function($scope, $state, $filter, navbarService, issueService){


        var data = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number", "A high number"];
        var data2 =[
            {
                "title": "Urgent Title",
                "description": "This is the description for issue one.",
                "severity": "urgent"
            },
            {
                "title": "Critical Title",
                "description": "This is the description for issue two.",
                "severity": "critical"
            },
            {
                "title": "Normal Title",
                "description": "This is the description for issue three.",
                "severity": "normal"
            }
        ];


        navbarService.setButton(0, "Back", "dashboard", true, true);
        navbarService.setButton(1, "Right", "issues", false, false);

        if($state.params.issueType){
            $scope.issueType = $state.params.issueType;
            $scope.issueLink = "issueDetail({issueType:issueType,issueId: issue._id})";
            navbarService.setTitle("Issue List: "+ $scope.issueType);
            issueService.getIssuesWithMetadata().then(function(issues){
                var issuesList = $filter('filter')(issues, {severity:$scope.issueType}, true);
                $scope.issues = issuesList;
            });
        }
        else{
            navbarService.setTitle("Issue List");
            $scope.issueLink = "issueDetail({issueId: issue._id})";
            issueService.getIssuesWithMetadata().then(function(issues){
                $scope.issues =  issues;
            });
        }

    });
