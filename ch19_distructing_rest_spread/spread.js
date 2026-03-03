// const numbers = [1, 2, 3];

// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers);
// // Output: [1, 2, 3, 4, 5]

// const fruits = ["apple", "banana"];

// const copyFruits = [...fruits];

// console.log(copyFruits);

// const person = {
//   name: "Abdi",
//   age: 20,
// };

// const newPerson = {
//   ...person,
//   country: "Kenya",
// };

// console.log(newPerson);

function multiply(x, y) {
    return x * y
}
let numbers = [4 , 6]
let result = multiply(...numbers)
console.log(result);
