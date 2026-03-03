// let months = new Map();

// months.set(1, "January");
// months.set(2, "February");
// months.set(5, "May");
// months.set(6, "June");
// months.set(7, "July");
// months.set(8, "August");
// months.set(9, "September");
// months.set(10, "October");
// months.set(11, "November");
// months.set(12, "December");

// // Get a specific month
// console.log(months.get(1)); // January

// // Loop through all months
// months.forEach((value, key) => {
//   console.log(key + " : " + value);
// });months.set(3, "March");
// months.set(4, "April");


let months = new Map([
  ["January", { days: 31, season: "Winter" }],
  ["February", { days: 28, season: "Winter" }],
  ["March", { days: 31, season: "Spring" }],
  ["April", { days: 30, season: "Spring" }],
  ["May", { days: 31, season: "Spring" }],
  ["June", { days: 30, season: "Summer" }],
  ["July", { days: 31, season: "Summer" }],
  ["August", { days: 31, season: "Summer" }],
  ["September", { days: 30, season: "Autumn" }],
  ["October", { days: 31, season: "Autumn" }],
  ["November", { days: 30, season: "Autumn" }],
  ["December", { days: 31, season: "Winter" }],
]);

// Get data for one month
console.log(months.get("March"));

// Loop all months
months.forEach((data, month) => {
  console.log(month + " → " + data.days + " days, " + data.season);
});