/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 *
 * Recursive binary search algorithm implemented. See https://en.wikipedia.org/wiki/Binary_search_algorithm#Algorithm.
 */
var binarySearch = function (array, target, min, max) {
  // Check for missing bounds
  min = typeof min !== 'undefined' ?  min : 0;                  // Default lower bound is lowest index
  max = typeof max !== 'undefined' ?  max : array.length-1;     // Default upper bound is the highest index
  // Check for empty array, meaning target not found
  if( max < min ) {
    // set is empty, so return null indicating not found
    return null;
  } else {
    // calculate midpoint to cut set in half
    // If the max and min are the same, then they are their own midpoint
    // If they are not, then split the difference and round to the nearest integer
    var mid = (max === min) ? max : Math.round( min + ( (max-min)/2 ) );
    // three-way comparison
    switch(true) {
      case (array[mid] === target):
        // Target has been found
        return mid;
      case (array[mid] > target):
        // Target is in lower subset
        return binarySearch(array, target, min, mid - 1);
      case (array[mid] < target):
        // Target is in upper subset
        return binarySearch(array, target, mid + 1, max);
    }
  }
};
