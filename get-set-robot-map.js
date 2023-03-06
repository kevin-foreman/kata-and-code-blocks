/*
We have a collection of synchronization test results, 
each one containing the test results for a human pilot attempting to synchronize with a biomechanical Eva Unit at the time, 
where each test is respresnted as a map of of key-vlaue pairs with a pilot key to an Eva Unit value

1. Complete the function mapCompatibleUnitsByPilot:
We want to take in an array of those tests, and respresent that data by a Map of Pilots as keys,  
with values as the Set of all the Eva units that pilot is compatible of synchronizing with.
(we don't want duplicate Eva unit values for a given pilot, or care about the order of 
their compatible Evas). 
*/



/*
For example, input:
[
  Map(2) { 'Rei' => 'Eva-00', 'Shinji' => 'Eva-01' },
  Map(2) { 'Shinji' => 'Eva-01', 'Asuka' => 'Eva-02' },
  Map(3) { 'Shinji' => 'Eva-00', 'Rei' => 'Eva-01', 'Asuka' => 'Eva-02' }
]

Should return:
Map(3) {
  'Rei' => Set(2) { 'Eva-00', 'Eva-01' },
  'Shinji' => Set(2) { 'Eva-01', 'Eva-00' },
  'Asuka' => Set(1) { 'Eva-02' }
}

The final map collects the compatible EVA units from all of the input test results, 
and makes a Set of them for all Pilots featured in any of the tests.

It should be able to run in O(n) time, where n = total number of k-v pairs in all the input maps, and O(n) space 
*/


// takes in an array of Map objects
// returns a Map object whose keys match all the input map keys, 
// and value holds a Set with all matching values for that key among all maps
let input = [
    new Map([['Rei', 'Eva-00'], ['Shinji', 'Eva-01']]),
    new Map([['Shinji', 'Eva-01'], ['Asuka', 'Eva-02']]),
    new Map([['Shinji', 'Eva-00'], ['Rei', 'Eva-01'], ['Asuka', 'Eva-02']])
];
function mapCompatibleUnitsByPilot(pilotTests) {
    const pilotMap = new Map();
    pilotTests.forEach(map => {
        map.forEach((value, key) => {
            if (!pilotMap.has(key)) {
                pilotMap.set(key, new Set([value]));
            } else {
                pilotMap.get(key).add(value);
            }
        });
    });
    return pilotMap;
};
// function mapCompatibleUnitsByPilot(pilotTests) {
//   return pilotTests.reduce((pilotMap, map) => {
//     map.forEach((value, key) => {
//       const units = pilotMap.get(key) || new Set();
//       units.add(value);
//       pilotMap.set(key, units);
//     });
//     return pilotMap;
//   }, new Map());
// };
console.log(mapCompatibleUnitsByPilot(input));
// This code runs in O(n) time complexity




/*
2. Complete the function mapCompatiblePilotsByUnit:
We want to take the exact same input, but return a map this time as a Map of Eva units to 
a Set of all the pilots that can synchronize with that Eva. Just Like before, we can use a Set because 
we don't want duplicate pilots or care about their order. 
 
The same input:
[
  Map(2) { 'Rei' => 'Eva-00', 'Shinji' => 'Eva-01' },
  Map(2) { 'Shinji' => 'Eva-01', 'Asuka' => 'Eva-02' },
  Map(3) { 'Shinji' => 'Eva-00', 'Rei' => 'Eva-01', 'Asuka' => 'Eva-02' }
]
 
Should return:
Map(3) {
  'Eva-00' => Set(2) { 'Rei', 'Shinji' },
  'Eva-01' => Set(2) { 'Shinji', 'Rei' },
  'Eva-02' => Set(1) { 'Asuka' }
}
It should also run in O(n) time, where n = total number of k-v pairs in all the input maps, and O(n) space
*/


// takes in an array of Map objects
// returns a Map object whose keys match all the input map values, 
// and values holds a Set with all matching keys for that value among all maps
// function mapCompatiblePilotsByUnit(pilotTests) {

// }



/// we need individual Map objects to put inside the input array

// create input map 1 - manually by setting key-value pairs
const syncTest1 = new Map();
syncTest1.set("Rei", "Eva-00");
syncTest1.set("Shinji", "Eva-01");
console.log(syncTest1);

// create input map 2 - using the built-in constructor of key-value arrays
const syncTest2 = new Map([
    ["Shinji", "Eva-01"],
    ["Asuka", "Eva-02"]
]);

// create input map 3 - from a plain JS object using Object.entries
const syncTest3 = new Map(Object.entries({
    "Shinji": "Eva-00",
    "Rei": "Eva-01",
    "Asuka": "Eva-02"
}));

  // const syncTestsArray = [syncTest1, syncTest2, syncTest3];
  // console.log("input:", syncTestsArray);
  // console.log("mapCompatinleUnitsByPilot:", mapCompatibleUnitsByPilot(syncTestsArray));
  // console.log("mapCompatinlePilotsByUnit:", mapCompatiblePilotsByUnit(syncTestsArray));