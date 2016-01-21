'use strict';

angular.module('application').filter('uniqueWithCount',
    function() {
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
});