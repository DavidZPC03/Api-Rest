const express = require('express');
const multer = require('multer');
const path = require('node:path');
const fs = require('node:fs');

const app = express();
app.use(express.json());
// Ruta de la carpeta "uploads"
const uploadDir = path.join(__dirname, 'uploads');

// Crear la carpeta "uploads" si no existe
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
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

// Middleware de Multer para gestionar la carga de archivos
// Aquí se define la estrategia de almacenamiento en disco
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload-file', upload.single('archivo'), (req, res) => {
  const { nombre } = req.body;
  const archivo = req.file; //se intercepta atra vez de multer y analiza el cuerpo de la solicitud y guarda el archivo en req.file y accedemos atra vez de una constante

  if (!archivo) {
    return res.status(400).json({ mensaje: 'No se ha subido ningún archivo' });
  }

  console.log('Datos recibidos:', { nombre });
  console.log('Archivo recibido:', archivo);

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

// Iniciar el servidor
app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});
