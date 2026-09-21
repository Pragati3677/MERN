const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
        <html>
        <head>
            <title>Node.js Web Application</title>
        </head>
        <body>
            <h1>Welcome to Node.js Web Application</h1>
            <p>This webpage is created using Node.js.</p>
            <h2>Student Information</h2>
            <p>Name: Pragati</p>
            <p>Course: Computer Science Engineering</p>
        </body>
        </html>
    `);

    res.end();
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});