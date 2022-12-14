// create a function that will take in a string as an argument and output a reversed string

function reverseStr(str) {
    // create variable to store reversed string
    var revStr = '';
    // loop through the string and go through each character in the string backwards, starting with the last character
    for (var i = str.length - 1; i >= 0; i--) {
        // within the loop, concatenate each letter in string to variable declared earlier
        revStr += str[i];
    }
    // log reversed string
    return revStr;
    console.log(revStr);
};
// call the function using any string as the argument!
reverseStr("I want to be reversed");

var output = reverseStr("I want to be reversed");
console.log(output);



////////////////////////////////////////////////////////////////////////////////////////////
// ANOTHER COOL WAY TO DO IT!!!

const reverse = (input) => {
    return input.split("").reverse().join("");
}

console.log(reverse("Kevin Foreman"))
console.log(reverse("Coding is awesome!"))