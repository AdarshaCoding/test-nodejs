// let { sum, x } = require("./sum.js");

import { sum, x } from "./sum.js";

console.log("Entry Point... app.js");
const a = 10;
const b = 20;

sum(a, b);
console.log("x value comes from sum.js module", x);
// x = 200;
console.log("x value modified in app.js, tried but getting the error", x);
// Common JS Module
// Need to export the function using "module.exports" from one module. module.exports is an empty object
// Import them in other module where we have invoke it using "require()""
