function behaviorPromise(isWellBehaved) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isWellBehaved) {
        resolve("You behaved well! Here is your phone next week.");
      } else {
        reject("You didn't behaved well! so no phone this time");
      }
    }, 5000);
  });
}

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed successfully!");
//   } else {
//     reject("Task failed!");
//   }
// });
// .then(result => {
//     console.log(result);
// })

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received!");
//     }, 3000);
//   });
// }

// async function showData() {
//   const result = await getData();
//   console.log(result);
// }

// showData();

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("data recieved");
//         }, 2000);
//     })
// }
// async function showData() {
//     const result = await getData();
//     console.log(result);

// }

// showData();

// let motherPromise = new Promise(function (resolve, reject) {
//   let boyBehaved = true;

//   if (boyBehaved) {
//     resolve("Mom bought the phone 📱");
//   } else {
//     reject("Mom did not buy the phone ❌");
//   }
// });

// motherPromise
//   .then(function (message) {
//     console.log(message);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// new Promise((resolve, reject) => {
//   // do something

//   if (success) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// });

// const myPromise = new Promise((resolve, reject) => {
//   let examPassed = true;

//   if (examPassed) {
//     resolve("You passed the exam 🎉");
//   } else {
//     reject("You failed the exam 😢");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
// //   });

// let examPassed = true
// const myPromise = new Promise((resolve, reject) => {
//     if (examPassed) {
//         resolve("You passed exam")
//     } else {
//         reject("You failed exam")
//     }

// })

// myPromise.then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })