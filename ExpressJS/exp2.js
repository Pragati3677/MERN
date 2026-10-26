
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Home Page');
});

app.get('/hi', function (req, res) {
    res.send('Hi!');
});

app.get('/welcome', function (req, res) {
    res.send('Welcome to Express JS');
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
});
