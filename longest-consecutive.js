// Lab: Interview Challenge 21 February 2023
// Given an unsorted array of integers 'nums,'
// return the length of the longest consecutive elements sequence
// You must write an algorithm that runs in '0(n)' time complexity

// Example 1:
/*
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/


var longestConsecutive = function (nums) {

    let mySet = new Set(nums);
    // console.log(mySet);
    // console.log(mySet.size);
    let chunks = [];

    let previousNum = 0;

    nums.forEach((currentNum) => {
        // Checking the value of the numbers in comparison with each other
        // If the difference isn't exactly 1, they are not consecutive
        if (currentNum - previousNum != 1) {
            chunks.push([]);
            // console.log(chunks);
            // Add the number to the current chunk
            chunks[chunks.length - 1].push(currentNum);
            // Moving to the next number in the array
            previousNum = currentNum;
            // console.log(chunks[0]);
        };
    });

    // Sort the chunks, based on their length
    chunks.sort((a, b) => {
        a.length - b.length
    });
    // console.log(chunks.length);
    // console.log(chunks[0]);
    return chunks.length;

};

// Test code to run
let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums)); // => 9
// console.log(mappedArr);