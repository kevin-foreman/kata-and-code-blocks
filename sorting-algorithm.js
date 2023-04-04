// Bubble sort, a classic
// Given an array ... or a linked list
// Iterate through the array (as many times as necessary)
// To effectively sort the array by how high the number is

const bubbleSort = (array) => {
    let n = array.length;
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
};

let myArray = [64, 34, 25, 12, 22, 11, 90, 1];
let bubbleSortedArray = bubbleSort(myArray);
console.log(bubbleSortedArray); // Output => [1, 11, 12, 22, 25, 34, 64, 90]