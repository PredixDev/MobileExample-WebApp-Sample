/**
 * Created by 212472174 on 1/19/16.
 */

'use strict';

angular.module('application').controller('issueDetailCtrl',
    function($scope, $state, navbarService, issueService,pmapiService, $http){
        $scope.issueId = $state.params.issueId;

        if($state.params.issueType){
            navbarService.setButton(0, "Back", "issues", true, true,{issueType:$state.params.issueType});
        }
        else{
            navbarService.setButton(0, "Back", "issues", true, true);
        }

        navbarService.setButton(1, "", "issues", false, false);

        navbarService.setTitle("Issue Details");

        issueService.getIssueByIdWithMetatdata($scope.issueId).then(function(issue){
            $scope.issue = issue;
            console.log("issueID: ",$scope.issueId );
            console.log($scope.issue);
        });

        $scope.assignIssue = function(issueId,assignee){
            pmapiService.getDocumentById(issueId).then(function(issue){
                var data = issue;
                data.assignee = assignee;
                //data.updated_at = new Date();
                return $http.put("http://pmapi/cdb/pm/"+issue._id,data);
            }).then(function(response) {
                $scope.issue.assignee = assignee;
                console.log("received put response: " + response);
            });
        };


    });