'use strict';

angular.module('application').service('pmapiService',
    function($http){
       this.getAllDocs = function(){
           $http.get("http://pmapi/cdb/pm/_all_docs?include_docs=true").then(function (response) {
               return response.data.rows;
           });
       }
    });