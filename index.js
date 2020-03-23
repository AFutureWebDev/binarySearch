/* Binary Search: a search algorithm to find a specific element located in an array (only works with sorted arrays). 
    Searches faster and more efficiently. 
    "Divide and Conquer!" */

let sortedArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const binarySearch = (array, target) => {
    // Define start and end index
    let startIndex = 0;
    let endIndex = array.length -1;

    // While start index is less than or equal to end index
    while(startIndex <= endIndex) {
        // Define middle index (this will chang ewhen comparing)
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        // Compare middle index with target for match
        if(target === array[middleIndex]) {
            return console.log("Target was found at index " + middleIndex);
        }

        // Search right side of array
        if(target > array[middleIndex]) {
            console.log("Searching the right side of Array")
            // Assign start index and increase the index by 1 to narrow search
            startIndex = middleIndex + 1;
        }

        // Search left side of array
        if(target < array[middleIndex]) {
            console.log("Searching the left side of array")
            // Assign end index and increase the index by 1 to narrow search
            endIndex = middleIndex -1;
        }
        // Not found in this iteration of the loop. Looping again.
        else {
            console.log("Not Found this loop iteration. Looping another iteration.")
        }
    }
    //If target is not found
    console.log("Target value not found in array");
}

binarySearch(sortedArray, 41);
