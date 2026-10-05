const fs = require("fs");

// CREATE DIRECTORY
fs.mkdir("myfolder", (err) => {
    if (err) {
        console.log("Error creating directory");
        return;
    }

    console.log("Directory created successfully");

    // RENAME DIRECTORY
    fs.rename("myfolder", "newfolder", (err) => {
        if (err) {
            console.log("Error renaming directory");
            return;
        }

        console.log("Directory renamed successfully");

        // REMOVE DIRECTORY
        fs.rmdir("newfolder", (err) => {
            if (err) {
                console.log("Error removing directory");
                return;
            }

            console.log("Directory removed successfully");
        });
    });
});