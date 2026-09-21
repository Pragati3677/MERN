const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    rl.question("Enter your age: ", (age) => {

        console.log("\n--- Student Information ---");
        console.log("Name:", name);
        console.log("Age:", age);

        rl.close();
    });
});