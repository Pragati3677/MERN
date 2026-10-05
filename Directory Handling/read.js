const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
    } else {
        console.log("File data:");
        console.log(data);
    }
});