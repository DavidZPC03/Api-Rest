const express = require('express');
const route = express.Router();
const path = require('node:path');

route.get('/Alumnos', (req, res) => {
    console.log(req.query);
    const filename = path.join(__dirname, '../public/index.html');
    res.sendFile( filename);
    });

route.post('/sistemas/:control', (req, res) => {
    console.log(req.params);
    res.send('Got a POST request');
});


route.patch('/maestros', (req, res) => {
    console.log(req.body);
    res.send('Got a PATCH request');
});

module.exports = route;