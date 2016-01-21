 'use strict';

    angular.module('application').controller('navbarCtrl',
        function($scope, $state, navbarService){
            $scope.$watch(
                navbarService.getTitle,
                function() {
                    $scope.title = navbarService.getTitle();
                });

            $scope.$watch(
                navbarService.getLeftTextButton,
                function() {
                    $scope.leftTextButton = navbarService.getLeftTextButton();
                });

            $scope.$watch(
                navbarService.getRightTextButton,
                function() {
                    $scope.rightTextButton = navbarService.getRightTextButton();
                });

            $scope.goToState = function(state) {
                $state.go(state);
            };

            $scope.state = $state.current;

    });
