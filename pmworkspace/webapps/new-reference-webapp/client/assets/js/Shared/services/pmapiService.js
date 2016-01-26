'use strict';

angular.module('application').service('pmapiService',
    function($http){

        var user = {name:"Tom Edison"};

        var doc = {
            "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at",
            "docType": "resource",
            "customer": "Cakewalk",
            "created_at": "2015-05-03 13:32:32",
            "assignee": "Rhiannon Guzman",
            "_rev": "1-6f086687ca8c3fa20c92b5be43b7ad82",
            "_id": "resource-issue-1B8AD7A0-97AB-98AC-E675-99716319727C",
            "type": "Other",
            "channels": ["role-user", "webapp-pm-minimal-app_0_0_1"],
            "title": "High Voltage Reading",
            "dataType": "entity",
            "updated_at": "2015-11-08 10:49:06",
            "severity": "urgent",
            "status": "open",
            "id":1
        };

        var rows = [

            {
                "doc": {
                    "body": "WWWWWWWWW WWWWWWWWW WWWWWWWWWWWW WWWWWWWWWWWWW WWWWWWWWWWWWW WWWWWWWWWWWWWWW WWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWLorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at",
                    "docType": "resource",
                    "customer": "Cakewalk",
                    "created_at": "2015-05-03 13:32:32",
                    "assignee": "Rhiannon Guzman",
                    "_rev": "1-6f086687ca8c3fa20c92b5be43b7ad82",
                    "_id": "resource-issue-1B8AD7A0-97AB-98AC-E675-99716319727C",
                    "type": "Other",
                    "channels": ["role-user", "webapp-pm-minimal-app_0_0_1"],
                    "title": "High Voltage Reading",
                    "dataType": "entity",
                    "updated_at": "2015-11-08 10:49:06",
                    "severity": "urgent",
                    "status": "open",
                    "id":1
                }
            },
            {
                "doc": {
                    "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at",
                    "docType": "resource",
                    "customer": "Cakewalk",
                    "created_at": "2015-05-03 13:32:32",
                    "assignee": "Rhiannon Guzman",
                    "_rev": "1-6f086687ca8c3fa20c92b5be43b7ad82",
                    "_id": "resource-issue-1B8AD7A0-97AB-98AC-E675-99716319727C",
                    "type": "Other",
                    "channels": ["role-user", "webapp-pm-minimal-app_0_0_1"],
                    "title": "High Voltage Reading",
                    "dataType": "entity",
                    "updated_at": "2015-11-08 10:49:06",
                    "severity": "normal",
                    "status": "open",
                    "id":2
                }
            },
            {
                "doc": {
                    "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at",
                    "docType": "resource",
                    "customer": "Cakewalk",
                    "created_at": "2015-05-03 13:32:32",
                    "assignee": "Rhiannon Guzman",
                    "_rev": "1-6f086687ca8c3fa20c92b5be43b7ad82",
                    "_id": "resource-issue-1B8AD7A0-97AB-98AC-E675-99716319727C",
                    "type": "Other",
                    "channels": ["role-user", "webapp-pm-minimal-app_0_0_1"],
                    "title": "High Voltage Reading",
                    "dataType": "entity",
                    "updated_at": "2015-11-08 10:49:06",
                    "severity": "critical",
                    "status": "open",
                    "id":3
                }
            },
            {
                "doc": {
                    "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at",
                    "docType": "resource",
                    "customer": "Cakewalk",
                    "created_at": "2015-05-03 13:32:32",
                    "assignee": "Rhiannon Guzman",
                    "_rev": "1-6f086687ca8c3fa20c92b5be43b7ad82",
                    "_id": "resource-issue-1B8AD7A0-97AB-98AC-E675-99716319727C",
                    "type": "Other",
                    "channels": ["role-user", "webapp-pm-minimal-app_0_0_1"],
                    "title": "High Voltage Reading",
                    "dataType": "entity",
                    "updated_at": "2015-11-08 10:49:06",
                    "severity": "urgent",
                    "status": "open",
                    "id":4
                }
            },
            {
                "doc": {
                    "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at",
                    "docType": "resource",
                    "customer": "Cakewalk",
                    "created_at": "2015-05-03 13:32:32",
                    "assignee": "Rhiannon Guzman",
                    "_rev": "1-6f086687ca8c3fa20c92b5be43b7ad82",
                    "_id": "resource-issue-1B8AD7A0-97AB-98AC-E675-99716319727C",
                    "type": "Other",
                    "channels": ["role-user", "webapp-pm-minimal-app_0_0_1"],
                    "title": "High Voltage Reading",
                    "dataType": "entity",
                    "updated_at": "2015-11-08 10:49:06",
                    "severity": "normal",
                    "status": "open",
                    "id":5
                }
            },
            {
                "doc": {
                    "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at",
                    "docType": "resource",
                    "customer": "Cakewalk",
                    "created_at": "2015-05-03 13:32:32",
                    "assignee": "Rhiannon Guzman",
                    "_rev": "1-6f086687ca8c3fa20c92b5be43b7ad82",
                    "_id": "resource-issue-1B8AD7A0-97AB-98AC-E675-99716319727C",
                    "type": "Other",
                    "channels": ["role-user", "webapp-pm-minimal-app_0_0_1"],
                    "title": "High Voltage Reading",
                    "dataType": "entity",
                    "updated_at": "2015-11-08 10:49:06",
                    "severity": "normal",
                    "status": "open",
                    "id":6
                }
            }

        ];

        this.getAllDocs = function(){
            return $http.get("http://pmapi/cdb/pm/_all_docs?include_docs=true").then(function (response) {
                return response.data.rows;
            });

            //Testing htp call
            //return $http.get("http://swapi.co/api/").then(function (response) {
            //    return rows;
            //});
        };

        this.getCurrentUser = function(){
            return $http.get("http://pmapi/user").then(function (response) {
                return response.data;
            });

            //Testing http call
            //return $http.get("http://swapi.co/api/").then(function (response) {
            //    return user;
            //});
        };

        this.getDocumentById = function(id){
            return $http.get("http://pmapi/db/pm/document/"+id).then(function(response){
                return response.data;
            });
            //return $http.get("http://swapi.co/api/").then(function (response) {
            //    return doc;
            //});

        };


    });