const https = require('node:https');
const express = require('express');
const fs = require('node:fs');
const path = require('node:path');
const app = express();
const options = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
  };
  
app.get('/',(req,res)=>{
 res.json({mensaje:"Servidor Express contestando"})
})
https.createServer(options,app).listen(3000,()=>{
 console.log("Servidor Express escuchando en 3000");
})