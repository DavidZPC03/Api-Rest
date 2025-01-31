const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(__dirname + '/public/index.html');
    next();
    });

app.post('/', (req, res) => {
    res.send('Got a POST request');
    next();
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });

