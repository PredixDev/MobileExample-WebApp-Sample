'use strict';

/*
 The issue service provides issues in different formats for use in the dashboard, issue list, and issue detail pages
*/
angular.module('application').service('issueService',
    function(pmapiService,$filter){
        // Reference to this so that we can use functions created in this service by this service
        var self = this;

        // The order that we want severities to display on the dashboard
        var countsOrder = [{"severity": "critical"}, {"severity": "urgent"}, {"severity": "normal"}];

        /* 
         This function is not specific to issues, it merely takes a list of objects that
         we want to be ordered in a non-specific (i.e. not increasing/decreasing) way.
         Instead, the list is ordered based on a list that shares the same key and is pre-ordered
         in the desired ordering.

         @param listToOrder Array of objects where the value to order on is accessed by orderByKey
         @param baseList Array of objects that is in the correct order where the value to order on is accessed by orderByKey
         @return Array of objects from listToOrder ordered in the same order as baseList
        */
        var reorderList = function(listToOrder, baseList, orderByKey) {
            var output = [];
            var indexToInsert = 0;
            // Transform the listToOrder array into an array of just the values we are ordering by.
            var listArray = listToOrder.map(function(item) {
                                return item[orderByKey];
                            });
            // Iterate through the ordered list
            for (var i=0; i<baseList.length; i++) {
                // Find the index of the listToOrder array that matches the current item of the base list we are on.
                indexToInsert = listArray.indexOf(baseList[i][orderByKey]);
                // Push the item from listToOrder into our output array
                output.push(listToOrder[indexToInsert]);
            }
            // return the ordered list
            return output
        };

        /* This is an array of objects containing metadata we want to add to each issue type. So, if we have
            an array of issue objects, or even just one issue object, we can expand that object to include the
            metadata for that issue type.  The metadata includes things like css classes to add and images to use,
            and more metadata could be added here if more styling is needed for that type of issue.
        */
        var issueMetadata = [
            {"severity": "critical", "btnType": "critical-btn", "image": "assets/img/issue-critical.png"},
            {"severity": "urgent","btnType": "urgent-btn", "image": "assets/img/issue-urgent.png"},
            {"severity": "normal", "btnType": "normal-btn", "image": "assets/img/issue-normal.png"}
        ];

        /* 
         Takes in a list of issue objects and expands each issue in that list to include the corresponding metadata.

         @param issueList Array of issue objects that include the severity of the issue, where the severity is accessed by severityKey
         @param severityKey The key (string) to use to access the severity of the issue object (e.g. "severity")
         @return Array of issue objects which include the corresponding issueMetadata
        */
        var injectIssueMetadata = function(issueList, severityKey) {
            var metadataArray = issueMetadata
                .map(function(obj) {
                    return obj.severity;
                });
            //^ map should create array : [critical,urgent,normal]
            //console.log("result of map function: ",metadataArray);

            for (var i=0; i<issueList.length; i++) {
                // get the index of severity in the metadata
                var metadataIndex = metadataArray.indexOf(issueList[i][severityKey]);
                // inject issue metadata into the object at the current issueList index
                for (var attrname in issueMetadata[metadataIndex]) {
                    issueList[i][attrname] = issueMetadata[metadataIndex][attrname];
                }
            }
            //console.log("result of inject function: ", issueList);
            return issueList;
        };

        /* 
         Gets the list of issues from the pmapiService.  Currently, we filter which documents are
         issues by filtering in angular/js, but the data should be structured where the type of the
         document is denoted the JSON by the specific key "type", which could then be queried directly
         by the PM API instead of filtered on the front-end.

         @return Promise that returns all of the issue JSON objects.
        */
        this.getIssues = function() {
            return pmapiService.getAllDocs().then(function(rows) {
                //console.log("getAllDocs Response: ", rows);
                // return issues from all docs
                return $filter('filter')(rows, {doc: {dataType: "entity"}}, true);
            });
        };


        /* 
         @return Promise that returns the count of issues array along with the metadata 
        */
        this.getIssueCounts = function(){
            return self.getIssues().then(function(issues){
                // filters issues by severity uniquely, where severity only occurs once along with the number of issues with that severity
                var countOfIssues = $filter('uniqueWithCount')(issues,["doc","severity"]);
                // injects issue metadata on to count array
                countOfIssues = injectIssueMetadata(countOfIssues, "severity");
                // Order count array for the dashboard (Critical, Urgent, Normal)
                countOfIssues = reorderList(countOfIssues, countsOrder, "severity");
                return countOfIssues;
            });
        };


        this.getIssuesWithMetadata = function() {
            return self.getIssues().then(function(issues) {
                var issuesWithMetadata = issues
                    .map(function(obj) {
                        return obj.doc;
                    });
                //console.log("issueWithMeta map result: ", issuesWithMetadata);
                issuesWithMetadata = injectIssueMetadata(issuesWithMetadata, "severity");
                return issuesWithMetadata;
            });
        };

        this.getIssueByIdWithMetatdata = function(id){
          return pmapiService.getDocumentById(id).then(function(issue){
              var issueWithMetadata = [issue];
              issueWithMetadata = injectIssueMetadata(issueWithMetadata,"severity");
              return issueWithMetadata;
          });
        };






    });