// vairables are used to store information 

var name = "Harsh"

// The variables which are created by using var keyword are function scoped where as const and let are blocked scope

// {} :- Block

function sayName(){
    var lName = "Pandey"
}
sayName()
// console.log(lname);          ------------> variable is not defined 


// lets check for let and const         ---> Es2015 me let and const aaya 
let age = 15 
const dob = "1/1/1"

function details(){
    console.log(`name is ${name} and age is ${age} and dob is ${dob}`);
}
details()



















