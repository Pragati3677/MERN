const fs = require("fs");

console.log("Program started");

fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    console.log("File content:", data);
});

console.log("Program ended");