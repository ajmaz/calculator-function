const readline = require('readline-sync');


function add(num1, num2) {
    return Number(num1) + Number(num2)
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}
function operation(string, num1, num2) {
    if (string == '+') {
        return add(num1, num2)
    }
    else if (string == "-") {
        return subtract(num1, num2)
    }
    else if (string == "*") {
        return multiply(num1, num2)
    }
    else if (string == "/") {
        return divide(num1, num2)
    }
    else {
        return "error"
    }


}

var num1 = readline.question("Please enter your first number: ");
var num2 = readline.question("Please enter your second number: ");
var string = readline.question("Please enter the operation to perform: add, sub, mul, div ");
var result = operation(string, num1, num2);

console.log("The result is: " + result)