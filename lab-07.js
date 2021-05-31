class CustomError extends Error {
    constructor(arg){
        super(arg);
        this.name = "Error";
    }
}
function throwGenericError() {
     throw new Error("Generic error")
 }
function throwCustomError(){
    throw new Error("Custom error")
}


try {
    console.log("Force generic error")
    console.log("Generic error try block")
    throwGenericError()
} catch(err){
    console.log("Generic error catch block")
    console.log(`${err.name}: ${err.message}`)

}finally{
console.log("Generic error finally block")
}

try {
    console.log("Force custom error")
    console.log("Custom error try block")
    throwCustomError()
} catch(err){
    console.log("Custom error catch block")
    console.log(err.name + ": " + err.message)
}finally{
    console.log("Custom error finally block")
}