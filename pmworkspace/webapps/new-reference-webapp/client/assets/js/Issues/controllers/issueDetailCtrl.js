/**
 * Created by 212472174 on 1/19/16.
 */

'use strict';

angular.module('application').controller('issueDetailCtrl',
    function($scope, $state, navbarService){
        $scope.issueId = $state.params.issueId;

        navbarService.setButton(0, "Back", "issues", true, true);
        navbarService.setButton(1, "Right", "issues", false, false);

        navbarService.setTitle("Issue: " + $scope.issueId);
    });