const fs = require("fs");

// fs for file system
fs.writeFileSync("hello.txt", "Hello from Node.js! 🚀 by zohiab Yasin");

var array = [1, 2, 3, 4, 5, 6, 7, "T", 8, 9, 10];
var copiedArray = array.slice(0, "T");
console.log(copiedArray);

// rest operator is used to merg elements in an array
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// spread operator is used to split elements in an array
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [...array1];
console.log(array2);
