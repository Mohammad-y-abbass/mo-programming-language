var arr = [1,2,5,6]
console.log(arr);
var x = arr[1] 
console.log(x);
arr[1] = 34
console.log(arr);
arr.push(20)
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(54)
console.log(arr);
arr.shift()
console.log(arr);
var length = arr.length 
console.log(length);
function add(x, y) {
  return x + y;
}

function concat(s1, s2) {
  return s1 + s2;
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
