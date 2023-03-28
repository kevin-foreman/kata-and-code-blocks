/*
While working on a project, you get tired of inherited
methods not showing up in the console when logging out
an object, so you decide to fix it. In order to do this,
write a function which, given an object as a paramter,
returns an array of the names of all properties defined
on that object and those inherited from its prototype chain.
This array should contain no duplicates, and be sorted
in alphabetical order. Additionally, you've discovered
that many methods defined on the top-level Object
prototype (e.g. __proto__, __defineGetter__, __defineSetter__)
are deprecated in favor of newer alternatives. Thankfully,
they all begin with __ and end with __, so it should be easy
enough to filter those out. Write this function below.
*/

const inspect = (obj) => {
    const propertySet = new Set();

    while (obj) {
        const names = Object.getOwnPropertyNames(obj);
        // console.log(names);
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            // console.log(name);

            if (!propertySet.has(name) && !name.startsWith('__')) {
                propertySet.add(name);
                // console.log(propertySet);
            }
        }

        obj = Object.getPrototypeOf(obj);
    }

    return Array.from(propertySet).sort();
};

const person = {
    name: "Bob"
  };
  
  console.log(inspect(person));
  // [
  //   'constructor',
  //   'hasOwnProperty',
  //   'isPrototypeOf',
  //   'name',
  //   'propertyIsEnumerable',
  //   'toLocaleString',
  //   'toString',
  //   'valueOf'
  // ]