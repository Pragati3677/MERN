
const domain = require('domain');

const d = domain.create();

d.on('error', (err) => {
    console.log("Error caught:", err.message);
    console.log("Program continues");
});

d.run(() => {
    throw new Error("This is a test error");
});
