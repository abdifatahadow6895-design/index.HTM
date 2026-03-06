let noFirstNameError = new Error ("Please make sure you write you first name ")

try {
    console.log("this is the first line of our code")
    let firstName = "amina"
     
    if (firstName == undefined) {
        throw noFirstNameError
    }

    console.log("this is the last line of our code")
    
} catch (error) {
    console.log(`error error.massage end of error`)
} finally {
    console.log("regardless of error i run")

}
