(function() {
 'use strict';

 angular.module('application', [
   'ui.router',
   'ngAnimate',

   // foundation
   'foundation',
   'foundation.dynamicRouting',
   'foundation.dynamicRouting.animations'
 ]).controller('pmController', function($scope, $http, $filter) {
   /* The http function below is what makes the call to couchbase using the endpoint given
      at the beginning of this step.
    */
   $http.get("http://pmapi/cdb/pm/_all_docs?include_docs=true").then(function (response) {
     var customerList = response.data.rows;
     customerList = $filter('filter')(customerList, {doc: {dataType: "entity"}}, true)
     customerList = $filter('uniqueWithCount')(customerList,["doc","customer"]);
     $scope.customers = customerList;
   });
    /* This is a custom filter function to only show unique items, but also shows the count of the number of times the item appeared in the original list.  For this tutorial, the number of issues is in our original data, and we’re only showing unique customers, with the count of issues they have. 
    */
 }).filter('uniqueWithCount', function() {
   return function(input, filterKeys) {
     var output = {};
     var keys = [];
     var outputArr = [];
     angular.forEach(input, function(item){
       var value = item;
       var i;
       // input.doc.customer
       for (i=0;i<filterKeys.length;i++) {
         value = value[filterKeys[i]];
       }
       // Now value should be equal to the value we want to filter on

       if (value in output) {
         // Increment the count of the key in output
         output[value]++;
       } else {
         // Add the count of the key to the output
         output[value] = 1;
       }
     });
     console.log(output);
     for (var item in output){
       outputArr.push({"title":item,"count":output[item]});
     };
     return outputArr;
   }
 })
   .config(config)
   .run(run)
 ;

// *** Nothing changed below here ***

 config.$inject = ['$urlRouterProvider', '$locationProvider'];

 function config($urlProvider, $locationProvider) {
   $urlProvider.otherwise('/');

   $locationProvider.html5Mode({
     enabled:false,
     requireBase: false
   });

   $locationProvider.hashPrefix('!');
 }

 function run() {
   FastClick.attach(document.body);
 }

})();
