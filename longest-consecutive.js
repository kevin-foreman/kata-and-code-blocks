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


var longestConsecutive = function(nums) {
    let mappedArr = nums.map((element) => {
        // console.log(mappedArr);
        if (element >= 0) {
            // mappedArr.push(element);
            // console.log(mappedArr);
        }
        console.log(element > 1);

    });
};

// Test code to run
let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums)); // => 9
// console.log(mappedArr);