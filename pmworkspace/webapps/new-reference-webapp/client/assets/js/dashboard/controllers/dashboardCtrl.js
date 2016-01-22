/**
 * Created by 212472174 on 1/21/16.
 */

'use strict';

angular.module('application').controller('dashboardCtrl',
    function($scope, $state, navbarService, pmapiService, $filter){

        navbarService.setButton(0, "Back", "issues", false, false);
        navbarService.setButton(1, "Right", "issues", false, false);

        navbarService.setTitle("Dashboard");

        pmapiService.getCurrentUser().then(function(user) {
            $scope.user = user;
        });

        var issueSeverities = [
            {"severity": "critical", "color": "red", "image": "todo", "count": 0},
            {"severity": "urgent","color": "yellow", "image": "todo", "count": 0},
            {"severity": "normal", "color": "blue", "image": "todo", "count": 0}
        ];

        //pmapiService.getAllDocs().then(function(rows){
        //    var countOfIssues = $filter('filter')(rows, {doc: {dataType: "entity"}}, true);
        //    countOfIssues = $filter('uniqueWithCount')(countOfIssues,["doc","severity"]);
        //    for (var i=0; i<issueSeverities.length; i++) {
        //        // get the index of the severity in the array of issue counts
        //        var countIndex = countOfIssues
        //                            .map(function(obj) {
        //                                return obj.title;
        //                            })
        //                            .indexOf(issueSeverities[i].severity);
        //        // add issue count to the severity object
        //        issueSeverities[i].count = countOfIssues[countIndex].count;
        //
        //    }
        //    $scope.issueSeverities = issueSeverities;
        //});

        $scope.issueSeverities = issueSeverities;

        $scope.date = new Date();
    });