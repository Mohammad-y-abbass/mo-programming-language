function factorial (n) {
    var a = 1;
if (n == 1) {
    var a = 1;
}
if (n > 1) {
    for (let i = 2; i <= n; i++) {
    var a = multiply(a,i) 
}
}
console.log(a);
}
factorial(5)
var x = true;
console.log(x);
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

function modulus(x, y) {
  return x % y;
}

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
