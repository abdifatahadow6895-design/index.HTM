// const numbers = [1, 2, 3, 4, 5];

// const [first, second, ...others] = numbers;

// console.log(first); // 1
// console.log(second); // 2
// console.log(others); // [3, 4, 5]


// const person = {
//   name: "Ali",
//   age: 25,
//   country: "Somalia"
// };

// const {name, ...restInfo } = person;

// console.log(name);      // Ali
// console.log(restInfo);  // { age: 25, country: "Somalia" }


function add(num1, num2, ...numbers) {
    console.log(num1)
    console.log(num2)
    console.log(numbers)
    
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9);