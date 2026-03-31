Q-9
let num = 5;  // you can change the number

let result;

result = (num !== null && num !== undefined)
    ? "Square of " + num + " is " + (num * num)
    : "Invalid number";

console.log(result);