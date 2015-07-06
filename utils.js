module.exports = {
 
    /**
     * Sort given array by provided rule in comparator function
     * @param {Array} list
     * @param {Function} comparator
     */
 
    sort:function (list, comparator) {
        var count = list.length;
        for (var i = 0; i < count-1; i++)
        { for (var j = 0; j < count-1-i; j++)
            { if ((comparator && comparator(list[j], list[j + 1])) ||
                (!comparator && list[j] > list[j+1]))
                { var app = list[j+1];
                      list[j+1] = list[j];
                      list[j] = app; }
            }
        }
        return list;
    },
 
    /**
     * Make first letter of given string upper case
     * @param {String} string
     * @return {String} capitalized string
     */
 
    capitalize:function (string) {
        var lowerCase = string.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    },
 
    /**
     * Camelize given string or array of string
     * @param {Array|String} sequence
     * @return {String} capitalized string
     */
 
    camelize:function (sequence) {
            var string = '';

            if (Object.prototype.toString.call(sequence).toUpperCase() === '[OBJECT ARRAY]') {
                for (var i = 0; i < sequence.length; i++) {
                    if ((typeof sequence[i]) === 'object') {
                        var newArr = sequence[i];
                        string += module.exports.camelize(newArr);
                    }
                    else {
                        sequence[i] = sequence[i].replace(/\W/, '');
                        sequence[i] = sequence[i].replace(/[0-9]]/);

                        string += module.exports.capitalize(sequence[i]);
                    }
                }
            }
            else if (Object.prototype.toString.call(sequence).toUpperCase() === '[OBJECT STRING]') {
                var newArr = sequence.split(' ');
                string += module.exports.camelize(newArr);
            }
            return string;
    },

 
    /**
     * Cut of any count of spaces from the beginning and from the end of the string
     * @param {String} str
     * @return {String}
     */
 
    trim:function (str) {
        return str.replace(/ +/g,"");
    },

    /**
     * Reverses a specified list.
     * @param {Array} list - a list to be reversed, may be empty.
     * @return {Array} - the same instance of list but reverted
     */
 
    reverse:function (list) {
        for (var i = 0; i < list.length / 2; i++) {
            var newArr = list[i];
            list[i] = list[list.length - 1 - i];
            list[list.length - 1 - i] = newArr;
        }
        return list;
    },
 
    /**
     *  Change each list's element by applying handler
     *  @params {Array|Object} list - input sequence
     *  @params {Function} iterator  - some rule which changes each element
     *  @return {Array} new list with changes elements
     */


    map: function (list, iterator) {
        if (Object.prototype.toString.call(list).toUpperCase() === '[OBJECT OBJECT]') {
            var newObj = {};

            for (var someProperty in list) {
                if (list.hasOwnProperty(someProperty)) {
                    newObj[someProperty] = iterator(list[someProperty]);
                }
            }

            return newObj;
        } else if (Object.prototype.toString.call(list).toUpperCase() === '[OBJECT ARRAY]') {
            var newArr = [];

            for (var i = 0; i < list.length; i++) {
                newArr.push(iterator(list[i]));
            }
            return newArr;
        }
    },


    /**
     * Group some input sequence of element by some rule
     * @param {Array} list - input sequence
     * @param {Function} iterator -  provide group id for each element
     * @return {Object} object of group id properties which point to arrays of element from input sequence
     */
 
    groupBy:function (list, iterator) {
        var results = {};
        for (var i = 0; i < list.length; i++) {
            var key = iterator(list[i]);
                if (results.hasOwnProperty(key)) {
                    results[key].push(list[i]);
                } else {
                    results[key] = [list[i]];
                }
        }
        return results;
    },


    /**
     * Creates a version of the function that can only be called one time. 
     * Repeated calls to the modified function will have no effect. 
     * @param {Function} func - your target function
     * @return {Function} new  function which could be invoked only once
     */

    once: function(func){
        return;
    }, 


    /**
     * Creates and returns a new debounced version of the passed function 
     * which will postpone its execution until after wait milliseconds 
     * have elapsed since the last time it was invoked. 
     * @param {Function} func - your target function
     * @param {Number} wait -  milliseconds have elapsed since the last time it was invoked
     * @return {Function} new debounced version of the passed function
     */

    debounce: function(func, wait){
        return;
    }
 
};