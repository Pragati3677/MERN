
const express = require('express');
const app = express();

// Set Pug as the template engine
app.set('view engine', 'pug');

// Set the views folder
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(5000, function () {
    console.log('Node server is running on port 5000');
});
