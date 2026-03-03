// let firstNames = new Set(["moha", "farah", "Ahmed", "Ali"])
// console.log(firstNames)

// set.js

// Data
const namesArray = ["moha", "farah", "Ahmed", "Ali"];

// =======================
// 1. ARRAY
// =======================
console.log("=== ARRAY ===");

// Access
console.log("First name:", namesArray[0]);

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

// =======================
// 2. OBJECT
// =======================
console.log("\n=== OBJECT ===");

let namesObject = {
  first: "moha",
  second: "farah",
  third: "Ahmed",
  fourth: "Ali",
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

// =======================
// 3. MAP
// =======================
console.log("\n=== MAP ===");

let namesMap = new Map([
  ["1", "moha"],
  ["2", "farah"],
  ["3", "Ahmed"],
  ["4", "Ali"],
]);

// Access
console.log("Key 1:", namesMap.get("1"));

// Add
namesMap.set("5", "Hassan");
console.log("After adding key 5:", namesMap);

// Delete
namesMap.delete("3");
console.log("After deleting key 3:", namesMap);

// Loop
namesMap.forEach((value, key) => {
  console.log(key + ":", value);
});

// =======================
// 4. SET
// =======================
console.log("\n=== SET ===");

// let namesSet = new Set(["moha", "farah", "Ahmed", "Ali"]);

// // Add
// namesSet.add("Hassan");
// console.log("After add:", namesSet);

// // Delete
// namesSet.delete("farah");
// console.log("After delete:", namesSet);

// // Check if exists
// console.log("Has 'Ali'?", namesSet.has("Ali"));

// // Loop
// namesSet.forEach((name) => console.log(name));

// // Size
// console.log("Set size:", namesSet.size);
