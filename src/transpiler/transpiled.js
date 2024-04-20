// ## This function calculates the factorial of a number
function factorial (n) {
    var x = 1;
if (n <= 1) {
    var x = 1;
}
for (let i = 1; i <= n; i++) {
    var x = x * i 
}
    return x;
}
var fac = factorial(10) 
console.log(fac);
function sqrt(x) {
  return Math.sqrt(x);
}

function pow(x, y) {
  return Math.pow(x, y);
}

function floor(x) {
  return Math.floor(x);
}

function ceil(x) {
  return Math.ceil(x);
}

function displayArrElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
