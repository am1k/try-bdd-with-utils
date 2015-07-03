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
            { if (list[j+1] < list[j])
                { var app = list[j+1]; list[j+1] = list[j]; list[j] = app; }
            }
        }
        console.log(list);
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
        //for (var i = 0; i < sequence.length; i++) {
        //    if (Object.prototype.toString.call(sequence).toUpperCase() === '[OBJECT ARRAY]') {
        //    var world,
        //        b;
        //        world = sequence[i].replace(/(?:^\w|[A-Z]|\b\w)/g, function(word) { return word.toUpperCase(); });
        //        b = world.split(' ');
        //        console.log(b);
        //    }
        //}
        var lowerCase = sequence.toLocaleLowerCase();
        return lowerCase.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word) { return word.toUpperCase(); });
        return lowerCase;
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
       return list.split('').reverse().join('');
    },
 
    /**
     *  Change each list's element by applying handler
     *  @params {Array|Object} list - input sequence
     *  @params {Function} iterator  - some rule which changes each element
     *  @return {Array} new list with changes elements
     */
 
    map:function (list, iterator) {

        return [];
    },

    /**
     * Group some input sequence of element by some rule
     * @param {Array} list - input sequence
     * @param {Function} iterator -  provide group id for each element
     * @return {Object} object of group id properties which point to arrays of element from input sequence
     */
 
    groupBy:function (list, iterator) {
        return {};
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