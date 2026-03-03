// // let months = new Map();

// // months.set(1, "January");
// // months.set(2, "February");
// // months.set(5, "May");
// // months.set(6, "June");
// // months.set(7, "July");
// // months.set(8, "August");
// // months.set(9, "September");
// // months.set(10, "October");
// // months.set(11, "November");
// // months.set(12, "December");

// // // Get a specific month
// // console.log(months.get(1)); // January

// // // Loop through all months
// // months.forEach((value, key) => {
// //   console.log(key + " : " + value);
// // });months.set(3, "March");
// // months.set(4, "April");

// // let months = new Map([
// //   ["January", { days: 31, season: "Winter" }],
// //   ["February", { days: 28, season: "Winter" }],
// //   ["March", { days: 31, season: "Spring" }],
// //   ["April", { days: 30, season: "Spring" }],
// //   ["May", { days: 31, season: "Spring" }],
// //   ["June", { days: 30, season: "Summer" }],
// //   ["July", { days: 31, season: "Summer" }],
// //   ["August", { days: 31, season: "Summer" }],
// //   ["September", { days: 30, season: "Autumn" }],
// //   ["October", { days: 31, season: "Autumn" }],
// //   ["November", { days: 30, season: "Autumn" }],
// //   ["December", { days: 31, season: "Winter" }],
// // ]);

// // // Get data for one month
// // console.log(months.get("March"));

// // // Loop all months
// // months.forEach((data, month) => {
// //   console.log(month + " → " + data.days + " days, " + data.season);
// // });



// let monthlyData = new Map([
//   ["January", { sales: 5000, profit: 1200 }],
//   ["February", { sales: 6200, profit: 1500 }],
//   ["March", { sales: 7100, profit: 2000 }],
//   ["April", { sales: 4800, profit: 900 }],
//   ["May", { sales: 9000, profit: 3000 }],
//   ["June", { sales: 7500, profit: 2100 }],
//   ["July", { sales: 8200, profit: 2500 }],
//   ["August", { sales: 6700, profit: 1800 }],
//   ["September", { sales: 7200, profit: 1900 }],
//   ["October", { sales: 8800, profit: 2700 }],
//   ["November", { sales: 9400, profit: 3100 }],
//   ["December", { sales: 11000, profit: 4000 }],
// ]);

// // Get data for one month
// console.log(monthlyData.get("March"));

// // Access specific value
// console.log("March Sales: $" + monthlyData.get("March").sales);
// console.log("March Profit: $" + monthlyData.get("March").profit);

// // Loop all months
// monthlyData.forEach((data, month) => {
//   console.log(month + " → Sales: $" + data.sales + ", Profit: $" + data.profit);
// });



// map.js

// =======================
// 1. CREATE A MAP
// =======================
let namesMap = new Map([
  [1, "moha"],
  [2, "farah"],
  [3, "Ahmed"],
  [4, "Ali"]
]);

console.log("Initial Map:", namesMap);

// =======================
// 2. ACCESS ELEMENTS
// =======================
console.log("Value for key 1:", namesMap.get(1));
console.log("Value for key 3:", namesMap.get(3));

// =======================
// 3. ADD ELEMENTS
// =======================
namesMap.set(5, "Hassan");
console.log("After adding key 5:", namesMap);

// =======================
// 4. DELETE ELEMENTS
// =======================
namesMap.delete(2);
console.log("After deleting key 2:", namesMap);

// =======================
// 5. CHECK EXISTENCE
// =======================
console.log("Has key 3?", namesMap.has(3));
console.log("Has key 2?", namesMap.has(2));

// =======================
// 6. SIZE OF MAP
// =======================
console.log("Map size:", namesMap.size);

// =======================
// 7. LOOP THROUGH MAP
// =======================

// Using forEach
namesMap.forEach((value, key) => {
  console.log(key + " → " + value);
});

// Using for..of
for (let [key, value] of namesMap) {
  console.log("Key:", key, "Value:", value);
}

// =======================
// 8. CLEAR MAP
// =======================
// namesMap.clear();
// console.log("After clear:", namesMap);

// =======================
// 9. CONVERT MAP TO ARRAY
// =======================
let mapToArray = Array.from(namesMap);
console.log("Map to Array:", mapToArray);

// =======================
// 10. CONVERT ARRAY TO MAP
// =======================
let arrayToMap = new Map([
  ["a", "moha"],
  ["b", "farah"],
  ["c", "Ahmed"],
  ["d", "Ali"]
]);
console.log("Array to Map:", arrayToMap);