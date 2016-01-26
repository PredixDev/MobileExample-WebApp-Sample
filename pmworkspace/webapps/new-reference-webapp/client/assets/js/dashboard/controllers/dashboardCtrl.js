/**
 * Created by 212472174 on 1/21/16.
 */

'use strict';

angular.module('application').controller('dashboardCtrl',
    function($scope, $state, navbarService, pmapiService, issueService){

        navbarService.setButton(0, "Back", "issues", false, false);
        navbarService.setButton(1, "All Issues", "issues", true, true);

        navbarService.setTitle("Dashboard");

        pmapiService.getCurrentUser().then(function(user) {
            $scope.user = user;
        });

        issueService.getIssueCounts().then(function(issueCounts) {
            $scope.issueSeverities = issueCounts;
        });

        $scope.goToIssues = function(issueType){
          $state.go("issues",{"issueType":issueType});
        };

        $scope.date = new Date();
    });