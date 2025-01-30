console.log("Sum Module...");
export let x = 100;
export function sum(a, b) {
  let result = a + b;
  console.log(result);
}

// console.log(module.exports);
// module.exports = { sum };
// module.exports = { sum: sum };

// module.exports.sum = sum;
// module.exports.x = x;
// console.log(module.exports);

//module.exports is an empty object
