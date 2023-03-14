// Build a house

// Properties
// Style
// yearBuilt
// numBedrooms

// Methods
// addRoom

function addRoom() {
    // Increment the number of bedrooms
    this.numBedrooms++
}

// Factory function - A function which returns an object with a particular structure
function House(style, yearBuilt, numBedrooms) {
    return {
        style,
        yearBuilt,
        numBedrooms,
        addRoom
    };
};

const house1 = new House("Contemporary", 2010, 3);

const house2 = new House("Modern", 2022, 4);

console.log(house1.addRoom === house2.addRoom);

// This
const person = {
    name: 'Bob',
    age: 44,
    // Note here:
    // If you want to use 'this' in this manner,
    // You MUST use a function keyword, not an arrow function
    greet: function() {
        console.loig(this);
        console.log(`Hi my name is ${this.name}, and I am ${this.age} years old.`)
    }
};
person.greet();

setTimeout(() => {
    person.greet();
}, 1000);

// Bind
setTimeout(person.greet.bind(person), 1000);

// Call
a.call("Hello");
const b = a.bind(8);
b();