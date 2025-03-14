const express = require('express');
const path = require('node:path');
const app = express();
const cors = require('cors');
const empleadosRouter = require('./routes/empleadosRouter');
const hateoasLinker = require('express-hateoas-links');
const logger = require('./utils/logger');

app.use(cors());
app.use(hateoasLinker);
app.use(express.json());

// Configurar Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use('/empleados', empleadosRouter);

// Ruta de prueba para Pug
app.get('/', (req, res) => {
    res.render('index', { title: 'Mi Proyecto con Pug', message: '¡Hola desde Pug!' });
});

// Manejo de errores
app.use((err, req, res, next) => {
    logger.error(`Error en la API: ${err.message}`, { stack: err.stack });
    res.status(500).json({ message: err.message });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
