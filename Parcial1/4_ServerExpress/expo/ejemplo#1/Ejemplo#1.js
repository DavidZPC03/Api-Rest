const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');

const app = express();

// Middleware para procesar datos de formularios enviados con application/x-www-form-urlencoded
// Esto permite que los datos enviados desde un formulario HTML estén disponibles en req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit-form', (req, res) => {
  // Extraemos los datos enviados en el formulario
  const { nombre, apellido, edad } = req.body;

  // Mostramos en la consola los datos recibidos para verificar que llegaron correctamente
  console.log('Datos recibidos:', { nombre, apellido, edad });

  // Enviamos una respuesta en formato JSON confirmando que se recibieron los datos
  res.json({
    mensaje: 'Formulario recibido',
    datos: { nombre, apellido, edad }
  });
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/formulario-simple.html`);
});

// Iniciar el servidor en el puerto 3000 y mostrar un mensaje cuando esté listo
console.log('Servidor escuchando en http://localhost:3000');
app.listen(3000);