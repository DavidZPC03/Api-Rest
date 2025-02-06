const express = require('express');
const app = express();
const port = 3000;

app.use('/',(req, res, next) => {
    console.log("peticion al server");
    next();
},(req, res, next) => {
    console.log("2da peticion al middleware");
    next();
    });

//Middleware incorporado en express
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Got a POST request');
    }
);

app.use((req,res,) => {
    res.status(404);
    res.send('Error 404');
    });

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

