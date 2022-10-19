// to test this out run it in the console with 'node nested-for-loops.js'

function loopAnObjectOfObjects(nestedObject) {
    // create a loop which iterates over the input object
    // create an inner loop which iterates over current inner object
    for (var key in nestedObject) {
        for (var innerKey in nestedObject[key]) {
            console.log(nestedObject[key][innerKey]);
        }
    }
    // log current value to the console
}

loopAnObjectOfObjects({ a: { a: 1, b: 2 }, b: { a: 5, b: 6 } });
// console output:
// 1
// 2
// 5
// 6

loopAnObjectOfObjects({
    structures: { queue: true, stack: false },
    plantLife: { tree: "leaves" },
    letters: { apple: "a", bag: "b", cats: "c" },
});
// console output:
// true
// false
// leaves
// a
// b
// c

// var nestedObject = {
//   'inner1': {a: 1, b: 2, c: 3},
//   'inner2': {d: 4, e: 5, f: 6},
//   'inner3': {g: 7, h: 8, i: 9}
// };

// for (var key in nestedObject) {
//   for (var innerKey in nestedObject[key]) {
//     console.log(nestedObject[key][innerKey]);
//   }
//   console.log('end of inner loop');
// }
// console.log('end of outer loop');

// This one loops over an array of objects (Spoiler alert, very common!)
// Does it behave the way you anticipated?

var arrayOfObjects = [
    { a: 1, b: 2, c: 3 },
    { d: 4, e: 5, f: 6 },
    { g: 7, h: 8, i: 9 }
];

for (var i = 0; i < arrayOfObjects.length; i++) {
    for (var key in arrayOfObjects[i]) {
        console.log(arrayOfObjects[i][key]);
    }
};

// console.log(arrayOfObjects[0].b);

function loopAnArrayOfObjects(arrayOfObjects) {
    // create a loop which iterates over the input array
    // create an inner loop which iterates over current inner object
    for (var i = 0; i < arrayOfObjects.length; i++) {
        for (var key in arrayOfObjects[i]) {
            console.log(arrayOfObjects[i][key]);
        }
    };
    // log current value to the console
};

loopAnArrayOfObjects([{ a: 1, b: 2 }, { z: 5, y: 6 }, { q: 14 }]);
// console output:
// 1
// 2
// 5
// 6
// 14

loopAnArrayOfObjects([{ queue: false, stack: true }, { fish: 'swims' }, { shirt: 's', pop: 'p', eye: 'e' }]);
  // console output:
    // false
    // true
    // swims
    // s
    // p
    // e
