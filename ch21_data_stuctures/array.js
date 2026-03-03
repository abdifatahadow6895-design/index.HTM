let firstName = "Moha"
let firstNames = ["moha", "farah", "Ahmed", "Ali"]
// console.log(firstNames[0])
// firstNames.push("Halima")
firstNames.
    console.log(firstNames)


    // dataStructures.js

// =======================
// 1. ARRAY
// =======================
console.log("=== ARRAY ===");

let namesArray = ["moha", "farah", "Ahmed", "Ali"];

// Access
console.log("First element:", namesArray[0]);

// Add
namesArray.push("Hassan");
console.log("After push:", namesArray);

// Remove
namesArray.pop();
console.log("After pop:", namesArray);

// Loop
namesArray.forEach((name, index) => {
  console.log(index + ":", name);
});

// Find
console.log("Index of 'Ali':", namesArray.indexOf("Ali"));

// Convert Array to Set
let arrayToSet = new Set(namesArray);
console.log("Array to Set:", arrayToSet);

// =======================
// 2. OBJECT
// =======================
console.log("\n=== OBJECT ===");

let namesObject = {
  first: "moha",
  second: "farah",
  third: "Ahmed",
  fourth: "Ali"
};

// Access
console.log("First name:", namesObject.first);

// Add
namesObject.fifth = "Hassan";
console.log("After adding fifth:", namesObject);

// Delete
delete namesObject.third;
console.log("After deleting third:", namesObject);

// Loop
for (let key in namesObject) {
  console.log(key + ":", namesObject[key]);
}

// Convert Object to Map
let objectToMap = new Map(Object.entries(namesObject));
console.log("Object to Map:", objectToMap);

// =======================
// 3. MAP
// =======================
console.log("\n=== MAP ===");

let namesMap = new Map([
  [1, "moha"],
  [2, "farah"],
  [3, "Ahmed"],
  [4, "Ali"]
]);

// Access
console.log("Key 1:", namesMap.get(1));

// Add
namesMap.set(5, "Hassan");
console.log("After adding key 5:", namesMap);

// Delete
namesMap.delete(2);
console.log("After deleting key 2:", namesMap);

// Loop
namesMap.forEach((value, key) => {
  console.log(key + " → " + value);
});

// Map to Array
let mapToArray = Array.from(namesMap);
console.log("Map to Array:", mapToArray);

// =======================
// 4. SET
// =======================
console.log("\n=== SET ===");

let namesSet = new Set(["moha", "farah", "Ahmed", "Ali"]);

// Add
namesSet.add("Hassan");
console.log("After add:", namesSet);

// Delete
namesSet.delete("farah");
console.log("After delete:", namesSet);

// Check existence
console.log("Has 'Ali'?", namesSet.has("Ali"));

// Loop
namesSet.forEach(name => console.log(name));

// Set size
console.log("Set size:", namesSet.size);

// Convert Set to Array
let setToArray = Array.from(namesSet);
console.log("Set to Array:", setToArray);