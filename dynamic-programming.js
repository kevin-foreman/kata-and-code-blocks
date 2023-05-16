// Given an optimal substructure -and-
// overlapping subproblems
// The classic approach is to store solutions to the subproblems
// in a table, so that each solution is only computed once.
// When a solution is needed, it can be looked up in the table
// rather than being recomputed

// Given an array of coins, and an amount, determine the fewest coins need to make that amount
// e.g. [ 5, 10, 25], 100 => in this case it would be 4 (4 * 25)
// If no solution can be reached, return -1

let coinChange = function(coins, amount) {
    // what data structure would be optimal? (linked list?)
    // Are any additional variables required?
    // array?
    // Memoize the fewest number of coins for every number < amount
    // Each index will be updated
    // if (coins[i] % amount === 0)?
    // Tabulation
    // coins - 0 1 2 3 4 5 6 7 8 9 10 11
    //         _ _ _ _ _ _ _ _ _ _ __ __
    // amount  0 1 2 3 4 5 6 7 8 9 10 11 
    // check for coin <= amount, if so, it can potentially be used to get the amount, so set that number as the index
    // set the index to amount - coin = idx
    // create the potentialAmount = table[idx] + 1
    // table[i] = min(table[i], potentialAmount)

    // Create a table representing all the different amounts that we can have,
    // and the number of coins it takes to get the amount we're looking for
    // While updating the table with the minimum amount it takes to get there
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    for (let coin of coins) {
        for (let i = 0; i < table.length; i++) {
            if (coin <= i) {
                let idx = i - coin;
                let potentialAmount = table[idx] + 1;
                table[i] = Math.min(table[i], potentialAmount);
            }
        }
    }
    return table[table.length - 1] === Infinity ? - 1 : table[table.length - 1];
};

// Example 1
const input1 = [1, 2, 5];
const input2 = 11;
console.log(coinChange(input1, input2)); // => output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2
// const input1 = [2];
// const input2 = 3;
// console.log(coinChange(input1, input2)); // => output: -1

// Example 3
// const input1 = [1];
// const input2 = 0;
// console.log(coinChange(input1, input2)); // => output: 0