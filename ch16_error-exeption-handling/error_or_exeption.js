
try {
//    let firstName = "abdifatah";
//     console.log(firstName.toUpperCase())
//     console.log("Hello")
//     console.log("Hello2")

    let dbError = new Error("could connect to the database")
    throw dbError

}
 catch (error) {
    console.log(error.message)
}
finally {
    console.log("This will run regurdles of the error")
}