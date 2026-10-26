
const express = require('express');
const app = express();

app.get('/student', function (req, res) {
    const name = req.query.name;

    res.send('Student Name: ' + (name || 'Not Provided'));
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});
