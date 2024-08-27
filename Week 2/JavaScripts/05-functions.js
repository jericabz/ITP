// Functions
// Reusable block of code that can be executed whenever needed.

// 1. Function Definition
function greet() {
    console.log("Hello, welcome to the world of functions!");
    console.log("Let's gooo!!!");
}

// Calling a function
greet()
greet()
greet()


// 2. Function with Parameters
/*
    Parameter: placeholder.
    Arguments: values that will be passed to the functions parameters.
*/ 

function greetUser(name){
    console.log("Hello" + " " + name + "!");
}

greetUser("Matt");
greetUser("Ron");
greetUser("Julianne");

// Functions with parameters
function sum(num1, num2) {
    console.log("Calculating the value...");
    return num1 + num2;
}

// Calling with arguments
console.log(sum(5, 8));