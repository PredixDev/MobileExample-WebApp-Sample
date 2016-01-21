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

        this.setButton = function(button, title, link, enabled, show) {
            if (button == ButtonEnum.LEFT) {
                leftTextButton.title = title;
                leftTextButton.link = link;
                leftTextButton.enabled = enabled;
                leftTextButton.show = show;
            } else if (button == ButtonEnum.RIGHT) {
                rightTextButton.title = title;
                rightTextButton.link = link;
                rightTextButton.enabled = enabled;
                rightTextButton.show = show;
            }
        };

        this.getLeftTextButton = function() {
            return leftTextButton;
        };
        this.getRightTextButton = function() {
            return rightTextButton;
        };

    });

//angular.module('application').service('navbarService',
//    function () {
//        var title = "Dashboard";
//        var navS = {};
//        navS.setTitle = function(pTitle){
//            title = pTitle;
//        };
//
//        navS.getTitle = function(){
//            return title;
//        };
//    });