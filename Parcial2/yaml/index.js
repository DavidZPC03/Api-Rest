const fs = require('node:fs');
const express = require('express');
const yaml = require('yaml');
const path = require('node:path');

const yamlFilePath = path.join(__dirname, 'objeto.yaml');

fs.readFile(yamlFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo YAML:', err);
        return;
    }

    const yamlObject = yaml.parse(data);
    console.log('Contenido del objeto YAML:', yamlObject);
});

const app = express();
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
