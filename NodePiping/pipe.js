var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream("input.txt");

// Create a writable stream
var writerStream = fs.createWriteStream("output.txt");

// Pipe the read and write operations
readerStream.pipe(writerStream);

console.log("File copied successfully using pipe.");