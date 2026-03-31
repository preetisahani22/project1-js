Q-10
// simple interset

let principal = 1000;  
let rate = 7;          
let time = 2;          

let result;

result = (principal > 0 && rate > 0 && time > 0)
    ? "Simple Interest is " + (principal * rate * time) / 100
    : "wrong";

console.log(result);