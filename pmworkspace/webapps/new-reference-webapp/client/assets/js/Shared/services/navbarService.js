'use strict';


angular.module('application').service('navbarService',
    function () {

        var ButtonEnum = {
            LEFT: 0,
            RIGHT: 1
        };

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


        this.setTitle = function(pTitle){
          title = pTitle;
        };

        this.getTitle = function(){
            return title;
        };

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