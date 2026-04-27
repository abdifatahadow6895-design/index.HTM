// try {
//    let firstName = "abdifatah";
//     console.log(firstName.toUpperCase())
//     console.log("Hello")
//     console.log("Hello2")

//     let dbError = new Error("could connect to the database")
//     throw dbError

// }
//  catch (error) {
//     console.log(error.message)
// }
// finally {
//     console.log("This will run regurdles of the error")
// }

// try {
//   console.log("Start");
//   console.log(x);
// } catch (error) {
//   console.log("Error happened");
// } finally {
//   console.log("Program finished");
// }

let age = 15;

try {
  if (age < 18) {
    throw "You must be 18 or older"
  }
  console.log("Access granted");
} catch (error) {
  console.log(error);
}


try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
} 