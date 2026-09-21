const fs = require("fs");

console.log("Program started");

const data = fs.readFileSync("input.txt", "utf8");

console.log("File content:", data);

console.log("Program ended");