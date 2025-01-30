console.log("Sum Module...");
let x = 100;
function sum(a, b) {
  result = a + b;
  console.log(result);
}

console.log(module.exports);
module.exports = { sum };
// module.exports = { sum: sum };

// module.exports.sum = sum;
module.exports.x = x;
console.log(module.exports);

//module.exports is an empty object
