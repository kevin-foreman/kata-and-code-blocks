function mergeSorted(arr1, arr2) {
    // logic to merge the two arrays
    // Sorted array should be in ascending
    const sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        sortedArr.push(arr1[i]);
        i++;
    } else {
        sortedArr.push(arr2[j]);
        j++;
    }
}
return sortedArr;
};


const input1 = [3, 4];
const input2 = [7, 8];
console.log(mergeSorted(input2, input1));
// console.log(mergeSorted(input2));