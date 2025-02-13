const fs = require('node:fs');
const path = require('node:path');
const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Formulario');
    });

router.post('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const form = req.body
    const filetxt = Object.entries(form).map(([key, value]) => `${key}: ${value}`).join('\n');
    fs.writeFile(path.join(__dirname,"..","assets/formularios","form.txt"), filetxt, (err) => {
        if (err) {
            console.error(err)
            return
        }
         //file written successfully 
    })        
   
    res.send( 'Form saved');
    });

module.exports = router;