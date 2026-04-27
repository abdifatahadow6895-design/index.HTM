import { add, subtract, multiply, divide } from "./math.js";

let a = 20;
let b = 10;

let result = `
Add: ${add(a,b)} <br>
Subtract: ${subtract(a,b)} <br>
Multiply: ${multiply(a,b)} <br>
Divide: ${divide(a,b)}
`;

document.getElementById("result").innerHTML = result;