 'use strict';
/*
 The controller for the navbar. It watches the variables set by the navbarService.
 The navbarService holds the functionality and attributes of the navbar buttons/page title and 
 this controller watches those values and sets these values on scope so the buttons/page title 
 in the html have the correct functionality depending on what view the app is on.
*/
angular.module('application').controller('navbarCtrl',
    function($scope, $state, navbarService){

        /*
         These are the watches and their associated callback functions that set the returned values on scope.
        */
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


        /*
         @param state The desired state link given in the view and used by Angular UI Router
                These two functions take the state given in the view and check if theres a
                parameter. It then makes the appropriate state change call with $state.go 
        */
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


        //The current state, set on scope
        $scope.state = $state.current;

});
