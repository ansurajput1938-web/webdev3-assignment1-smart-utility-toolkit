const args = process.argv.slice(2);

const num1 = Number(args[0]);
const operation = args[1];
const num2 = Number(args[2]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers.");
    process.exit();
}

let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;

    case "sub":
        result = num1 - num2;
        break;

    case "mul":
        result = num1 * num2;
        break;

    case "div":
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
            process.exit();
        }
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operation.");
        console.log("Use: add, sub, mul, or div");
        process.exit();
}

console.log("Result:", result);