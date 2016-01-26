'use strict';

angular.module('application').service('issueService',
    function(pmapiService,$filter){
        var self = this;

        var countsOrder = [{"title": "critical"}, {"title": "urgent"}, {"title": "normal"}];
        var reorderList = function(listToOrder, baseList, orderByKey) {
            var output = [];
            var indexToInsert = 0;
            var listArray = listToOrder.map(function(item) {
                                return item[orderByKey];
                            });
            //console.log("result of reorder map function: ", listArray);
            for (var i=0; i<baseList.length; i++) {
                indexToInsert = listArray.indexOf(baseList[i][orderByKey]);
                //console.log("baseList value: ", orderByKey);
                //console.log("indexToInsert: ", indexToInsert);
                //console.log("listToOrder[index]: ", listToOrder[indexToInsert]);
                output.push(listToOrder[indexToInsert]);
            }
            //console.log("result of reorder: ",output);
            return output
        };


        var issueMetadata = [
            {"severity": "critical", "btnType": "critical-btn", "image": "assets/img/issue-critical.png"},
            {"severity": "urgent","btnType": "urgent-btn", "image": "assets/img/issue-urgent.png"},
            {"severity": "normal", "btnType": "normal-btn", "image": "assets/img/issue-normal.png"}
        ];

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

        /* Gets the list of issues */
        this.getIssues = function() {
            return pmapiService.getAllDocs().then(function(rows) {
                //console.log("getAllDocs Response: ", rows);
                // return issues from all docs
                return $filter('filter')(rows, {doc: {dataType: "entity"}}, true);
            });
        };


        /* Returns a promise that gives the count of issues array along with the metadata */
        this.getIssueCounts = function(){
            return self.getIssues().then(function(issues){
                //console.log("getIssues Response: ", issues);
                var countOfIssues = $filter('uniqueWithCount')(issues,["doc","severity"]);
                //console.log("filter result: ", countOfIssues);
                // injects issue metadata on to count array
                countOfIssues = injectIssueMetadata(countOfIssues, "title");
                // TODO: order count array for the dashboard (Critical, Urgent, Normal)
                countOfIssues = reorderList(countOfIssues, countsOrder, "title");
                //console.log("count of issues after reorder: ", countOfIssues);
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