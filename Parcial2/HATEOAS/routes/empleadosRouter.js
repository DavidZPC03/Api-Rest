const express = require('express');
const router = express.Router();


const createEmpleado = require('../controller/createEmpleadoController.js');
const getEmpleados = require('../controller/getEmpleadoController.js');
const updateEmpleado = require('../controller/updateEmpleadoController.js');
const deleteEmpleado = require('../controller/deleteEmpleadoController.js');

//se utiliza el mismo endpoint y solamente cambio los metodos para cada operacion
router.post('/empleados', createEmpleado);
router.get('/empleados', getEmpleados);
router.put('/empleados', updateEmpleado);
router.delete('/empleados', deleteEmpleado);

module.exports = router;
