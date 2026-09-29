const crypto = require("crypto");

function rollDice() {
    return crypto.randomInt(1, 7);
}

console.log("Rolling the dice...");
console.log("You rolled:", rollDice());