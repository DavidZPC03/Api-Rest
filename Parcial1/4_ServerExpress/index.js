const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile( __dirname + '/public/index.html');
    });

app.post('/', (req, res) => {
    res.send('Got a POST request');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });

