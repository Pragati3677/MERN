
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h2>Student Form</h2>
        <form method="POST" action="/submit">
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
            />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send('Welcome, ' + name);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
