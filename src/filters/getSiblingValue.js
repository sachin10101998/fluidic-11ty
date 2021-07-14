"use strict";

/**
 * Within an array of objects, find an object with a key that matches a specific value
 * and return the value of another key on that object.
 *
 * @param {Array} value - The array of objects to search within.
 * @param {String} inputKey - The key to search for.
 * @param {Any} inputValue - The value of `inputKey` to search for.
 * @param {String} siblingKey - The key whose value should be returned from the matched object.
 * @return {Any} - The value of the sibling key.
 */
module.exports = (value, inputKey, inputValue, siblingKey) => {
    let matchedItem = value.find(item => item[inputKey] === inputValue);
    return matchedItem && matchedItem[siblingKey];
};
