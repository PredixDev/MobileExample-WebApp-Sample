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

            $scope.goToStateLeft = function(state) {
                if($scope.leftTextButton.params){
                    $state.go(state,$scope.leftTextButton.params);
                }else{
                    $state.go(state);
                }
            };

            $scope.goToStateRight = function(state) {
                if($scope.rightTextButton.params){
                    $state.go(state,$scope.rightTextButton.params);
                }else{
                    $state.go(state);
                }
            };

            $scope.state = $state.current;

    });
