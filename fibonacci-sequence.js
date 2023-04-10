// Recursion
// A function which calls itself

// the fibonacci sequence is as follows
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// Each subsequent number is the sum of the preceding 2 numbers
// The numbers are indexed

// Iterative fibonacci
// iterativeFibonacci(5) = 8

let iterativeFibonacci = function (n) {
    let a = 0;
    let b = 1;
    let f = 1;
    for (let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

// the fibonacci sequence is [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// console.log(iterativeFibonacci(9)); // => 34
// console.log(iterativeFibonacci(3)); // => 2
// console.log(iterativeFibonacci(1)); // => 1
// console.log(iterativeFibonacci(2)); // => 1
// console.log(iterativeFibonacci(1250));

// let n = 100;
// let startTime = performance.now();
// let result = iterativeFibonacci(n);
// let endTime = performance.now();
// let timeTaken = endTime - startTime;

// console.log(`The ${n}th Fibonacci number is: ${result}`);
// console.log(`Time taken: ${timeTaken.toFixed(4)} milliseconds`);

// Recursive fibonacci version
// Time complexity of O(2(n)) => exponential, literally worst case
let recursiveFibonacci = function (n) {
    if (n <= 1) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

// let n = 29;
// let startTime = performance.now();
// let result = recursiveFibonacci(n);
// let endTime = performance.now();
// let timeTaken = endTime - startTime;

// console.log(`The ${n}th Fibonacci number is: ${result}`);
// console.log(`Time taken: ${timeTaken.toFixed(4)} milliseconds`);

// Memoized version
// Time complexity of O(n)
let memoizedFibonacci = function (n, memo = {}) {
    if (n <= 1) {
        return n;
    }
    if (n in memo) {
        return memo[n];
    }
    memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
    return memo[n];
};

let n = 100;
let startTime = performance.now();
let result = memoizedFibonacci(n);
let endTime = performance.now();
let timeTaken = endTime - startTime;

console.log(`The ${n}th Fibonacci number is: ${result}`);
console.log(`Time taken: ${timeTaken.toFixed(4)} milliseconds`);

