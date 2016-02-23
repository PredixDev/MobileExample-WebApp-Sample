'use strict';

angular.module('application').service('pmapiService',
    function($http){

        var self = this;

        /*
        * The following functions each make a call to the Predix Mobile Up API
        * and returns data that has been synced to the device from the cloud store.
        * The API we're requesting (http://pmapi/) are handled by the container,
        * while other APIs will be passed off to the internet.
        * */

        /* 
         This function returns all documents and their details
        */
        this.getAllDocs = function(){
            return $http.get("http://pmapi/cdb/pm/_all_docs?include_docs=true").then(function (response) {
                return response.data.rows;
            });

        };

        /* 
         This function returns a promise that returns the user JSON
        */
        this.getCurrentUser = function(){
            return $http.get("http://pmapi/user").then(function (response) {
                return response.data;
            });

        };

        /*
         This function returns a promise that returns a single document fetched by the id
        */
        this.getDocumentById = function(id){
            return $http.get("http://pmapi/db/pm/document/"+id).then(function(response){
                return response.data;
            });


        };



    });