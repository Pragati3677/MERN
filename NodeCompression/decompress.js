var fs = require("fs");
var zlib = require("zlib");

// Decompress input.txt.gz to output.txt
fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("output.txt"))
  .on("finish", function () {
    console.log("File Decompressed.");
  });