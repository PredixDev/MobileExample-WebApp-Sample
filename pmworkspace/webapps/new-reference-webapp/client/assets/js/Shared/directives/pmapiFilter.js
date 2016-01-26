'use strict';

/**
 @param input The array of items or objects to filter on
 @param filterKeys Array of keys to dig down into an object to filter on something that isn't the main item
                        Use an empty array for arrays where you want to remove duplicate items and get the count
 @return Array of objects in the format { "<filterKey[-1]>": value, "count": count_of_value} where filterKey[-1] is
            the last value in the filterKey array, or "item" if the array is empty
*/
angular.module('application').filter('uniqueWithCount',
    function() {
        return function(input, filterKeys) {
            var output = {};
            var outputArr = [];
            angular.forEach(input, function(item){
                var value = item;
                var i;
                // e.g. input.filterKey1.filterKey2
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
            // use the last filter key as the key for the object
            var title = filterKeys[filterKeys.length - 1];
            // if no filter keys were used, set the title as "item"
            if (!title) {
                title = "item"
            }
            // convert to array
            for (var item in output){
                var countObj = {};
                countObj[title] = item;
                countObj["count"] = output[item];
                outputArr.push(countObj);
            }
            return outputArr;
        }
});