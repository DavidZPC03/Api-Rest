// const express = require('express');
const path = require('node:path');
// const app = express();
xmlparser = require('express-xml-bodyparser');
const port = 3000;
const app = require('./init');
const multer = require('multer'); 
const fs = require('node:fs'); 


//get estrictamente prohibido usar body
//chenomoformo.com/repos?date=2021-09-01&name=juan this is req.query
//chenomoformo.com/repos/private this is req.params
//chenomoformo.com/repos/forked this is req.params
//chenomoformo.com/repos/edit this is req.body ???

//post publicar - insert bd - crear 
//put actualizar - modifica todo un objeto
//get obtener - leer - obtener info
//patch actualizar - modifica una propiedad para un objeto

app.use('/',(req, res, next) => {
    console.log("peticion al server");
    next();
},(req, res, next) => {
    console.log("2da peticion al middleware");
    next();
    });


// //Middleware incorporado en express
// app.use(express.json());

//Middleware incorporado en express
app.use(xmlparser());

app.post('/prefecto', (req, res) => {
    console.log(req.body);
    res.send('Got a POST request');
    });

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Got a POST request');
    }
);

// Ruta de la carpeta "uploads"
const uploadDir = path.join(__dirname, 'uploads');

// Crear la carpeta "uploads" si no existe
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir); // Crea la carpeta "uploads"
}

  // Configuración de Multer para manejar archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir); // Usar la carpeta "uploads"
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para el archivo
    }
  });
  
  // Middleware de Multer
  const upload = multer({ storage });

  app.post('/prefectoss', upload.single('archivo'), (req, res) => {
  const { nombre } = req.body; // Obtener el campo "nombre" del cuerpo de la solicitud
  const archivo = req.file; // Obtener el archivo subido

  // Validar si se subió un archivo
  if (!archivo) {
    return res.status(400).json({ mensaje: 'No se ha subido ningún archivo' });
  }

  // Mostrar datos en consola
  console.log('Datos recibidos:', { nombre });
  console.log('Archivo recibido:', archivo);

  // Enviar una respuesta con los datos del archivo subido
  res.json({
    mensaje: 'Archivo recibido',
    datos: { nombre },
    archivo: {
      filename: archivo.filename,
      size: archivo.size,
      mimetype: archivo.mimetype
    }
  });
});




// app.use((req,res,) => {
//     res.status(404);
//     res.send('Error 404');
//     });

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile( `${__dirname}/public/index.html`);
    });

app.post('/', (req, res) => {
    res.send('Got a POST request');
    }); 

app.use('/form', require('./routes/form.route'));

app.use('/escuela', require('./routes/escuela.route'));

app.use('/xlsx', require('./routes/xlsx.route'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });


