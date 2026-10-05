const fs = require("fs");

fs.open("data.txt", "r", (err, fd) => {

    if (err) {
        console.log("Error opening file");
        return;
    }

    console.log("File opened successfully");

    fs.close(fd, (err) => {

        if (err) {
            console.log("Error closing file");
        } else {
            console.log("File closed successfully");
        }

    });
});