
const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log('Request received:', req.method, req.url);
    next();
});

app.get('/', function (req, res) {
    res.send('Middleware Example');
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});
