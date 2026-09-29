const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

console.log("Program Started");

const number = 10;

console.log("Checking number:", number);

if (isEven(number)) {
    logger("Number is even");
} else {
    logger("Number is odd");
}

console.log("Program Finished");