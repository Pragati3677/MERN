const fs = require("fs");

fs.writeFile("data.txt", "Hello, this is file write operation.", (err) => {
    if (err) {
        console.log("Error writing file");
    } else {
        console.log("Data written successfully");
    }
});