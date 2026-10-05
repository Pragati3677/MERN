// PROCESS OBJECT

console.log("----- PROCESS OBJECT -----");

console.log("Node.js Version:", process.version);

console.log("Operating System:", process.platform);

console.log("Process ID:", process.pid);

console.log("Current Directory:", process.cwd());


// GLOBAL OBJECT

console.log("\n----- GLOBAL OBJECT -----");

console.log("Global object exists:", typeof global);

console.log("Current file:", __filename);

console.log("Current directory:", __dirname);

console.log("Node.js version:", process.version);