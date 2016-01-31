'use strict';

/*
 The navbarService handles the configuration of the navigation bar at the top of our views.
 This is a custom solution to have navigation of our app more like a mobile app then a webapp
 where we can maintain the state of the past screens.  If needed, you could even add an array
 that keeps record of the previous views that could act as a navigation stack, pushing and popping
 the parameters of each view onto the stack.
*/
angular.module('application').service('navbarService',
    function () {
        // TODO: Make this global so that other code setting the button don't have to use 0 and 1
        var ButtonEnum = {
            LEFT: 0,
            RIGHT: 1
        };

        // Initial setup for the first page
        var title = "Dashboard";

        var leftTextButton = {
            enabled: true,
            show: true,
            title: "Left",
            link: "#"
        };

        var rightTextButton = {
            enabled: true,
            show: true,
            title: "Right",
            link: "#"
        };

        /* Set the navBar title */
        this.setTitle = function(pTitle){
          title = pTitle;
        };

        /* Get the navBar title */
        this.getTitle = function(){
            return title;
        };

        /*
         Set the buttons properties on the navBar.  The buttons are usually 
         changed when going to a different screen.
        */
        this.setButton = function(button, title, link, enabled, show, params) {
            if (button == ButtonEnum.LEFT) {
                leftTextButton.title = title;
                leftTextButton.link = link;
                leftTextButton.enabled = enabled;
                leftTextButton.show = show;
                if(params){
                    leftTextButton.params = params;
                }
                else{
                    leftTextButton.params = null;
                }
            } else if (button == ButtonEnum.RIGHT) {
                rightTextButton.title = title;
                rightTextButton.link = link;
                rightTextButton.enabled = enabled;
                rightTextButton.show = show;
                if(params){
                    rightTextButton.params = params;
                }
                else{
                    rightTextButton.params = null;
                }

            }
        };

        this.getLeftTextButton = function() {
            return leftTextButton;
        };
        this.getRightTextButton = function() {
            return rightTextButton;
        };

    });