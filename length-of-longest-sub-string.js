// Get the length of the longest substring in a given string

function lengthOfLongestSubString (str) {
    let set = new Set();
    let left = 0;
    let right = 0;
    // let size = str.length - 1;
    let size = 0;
    // for (let i = 0; i - str.length; i++) {
    //     for (let j = 0; j = str.length - 1; j++);
    //     // Move the left one, or the right one
    // }
    while (left < str.length && right < str.length) {
        if (!set.has(str.charAt(right))) {
            set.add(str.charAt(right));
            right++
            size = Math.max(size, right - left);
        } else {
            set.delete(str.charAt(left));
            left++;
        }
    }
    return size;
};

let input = "bcbbcba";
console.log(lengthOfLongestSubString(input)); // => 3