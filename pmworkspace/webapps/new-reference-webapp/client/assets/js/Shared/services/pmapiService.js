'use strict';

angular.module('application').service('pmapiService',
    function($http){

        /*
        * The following functions each make a call to the Predix Mobile Up API
        * and return data from the cloud store
        * */

        //This function returns all documents and their details
        this.getAllDocs = function(){
            return $http.get("http://pmapi/cdb/pm/_all_docs?include_docs=true").then(function (response) {
                return response.data.rows;
            });

        };

        //This function makes
        this.getCurrentUser = function(){
            return $http.get("http://pmapi/user").then(function (response) {
                return response.data;
            });

        };

        this.getDocumentById = function(id){
            return $http.get("http://pmapi/db/pm/document/"+id).then(function(response){
                return response.data;
            });


        };


    });