/**
 * Created by 212472174 on 1/19/16.
 */

'use strict';

angular.module('application').controller('issueDetailCtrl',
    function($scope, $state, navbarService, issueService){
        $scope.issueId = $state.params.issueId;

        if($state.params.issueType){
            navbarService.setButton(0, "Back", "issues", true, true,{issueType:$state.params.issueType});
        }
        else{
            navbarService.setButton(0, "Back", "issues", true, true);
        }

        navbarService.setButton(1, "Right", "issues", false, false);

        navbarService.setTitle("Issue Details");

        issueService.getIssueByIdWithMetatdata($scope.issueId).then(function(issue){
            $scope.issue = issue[0];
            console.log("issueID: ",$scope.issueId );
            console.log($scope.issue);
        });

    });