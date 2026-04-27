// listOfName = function () {
//     console.log(Ali)
//     console.log(Abdi)
//     console.log(Haasan)
//     console.log(Khalid)
//     console.log(Sugow)
// }
// listOfName()

function* listOfName() {
  yield "Ali";
  yield "Abdi";
  yield "Haasan";
  yield "Khalid";
  yield "Sugow";
}

// using the generator
const names = listOfName();

for (let name of names) {
  console.log(name);
}