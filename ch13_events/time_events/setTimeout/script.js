function executeThisCode() {
    console.log("My Name is Abdifatah");
    console.log("I like coding");
    console.log("........")
}


// setTimeOut(executeThisCode,20000)

let interval = setInterval(executeThisCode, 1000)
clearInterval(interval)
let canceller = () => {
    clearInterval(interval)
}
setInterval(canceller , 20000)