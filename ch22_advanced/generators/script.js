// function listNames() {
//     console.log("abdinoor")
//     console.log("ali")
//     console.log("hassan")
//     console.log("Amina")
//     console.log("ahmed")
// }
// listNames()

// function* listNames() {
//   yield "abdinoor";
//   yield "ali";
//   yield "hassan";
//   yield "Amina";
//   yield "ahmed";
// }

// // Create generator object
// let names = listNames();

// // Get values one by one
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// function* listNames() {
//   yield "abdinoor";
//   yield "ali";
//   yield "hassan";
//   yield "Amina";
//   yield "ahmed";
// }

// // Create generator
// let names = listNames();

// // Call next() for each name
// console.log(names.next()); // 1
// console.log(names.next()); // 2
// console.log(names.next()); // 3
// console.log(names.next()); // 4
// console.log(names.next()); // 5
// console.log(names.next()); // 6 (finished)



function* listNames() {
  yield "abdinoor";
  yield "ali";
  yield "hassan";
  yield "Amina";
  yield "ahmed";
}

let names = listNames();

function nextWithDelay() {
  let result = names.next();

  if (!result.done) {
    console.log(result.value);

    // Wait 3 seconds before calling next again
    setTimeout(nextWithDelay, 3000);
  } else {
    console.log("Finished!");
  }
}

// Start the process
nextWithDelay();