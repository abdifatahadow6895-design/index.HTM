// // let firstName = "Abdifatah";
// // let lastName = "Adow";
// // let age = 20;

// // let firstName = "Hassan";
// // let lastName = "Ali";
// // let age = 30;

// let person1 ={
//     firstName: "Abdifatah",
//     lastName:  "Adow",
//     age: 20
// }

// let person2 ={
//     firstName: "Hassan",
//     lastName: "Ali",
//     age: 30
// };
// console.log(person1.lastName)

let person3 = {}
person3.firsrName = "Warsame"
person3.lastName = "Osaman"
person3.age = 30
person3.talk = function () {
    console.log(this.firsrName + " is talking")
}
console.log(person3.talk())
console.log(person3['firsrName'])

for (let key in person3) {
    console.log(person3[key])
}
