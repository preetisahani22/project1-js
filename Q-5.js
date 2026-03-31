Q-5
// Find the largest of two numbers. 

let num1 = 95;
let num2 = 25;

let result = (num1 > num2)
    ? "Largest number is: " + num1
    : (num2 > num1)
        ? "Largest number is: " + num2
        : "Both numbers are equal";

console.log(result);