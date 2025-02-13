const express = require('express');
const app = express();

//Middleware incorporado en express
app.use(express.json());

app.use(express.static('public'));



module.exports = app;
