const express = require('express');
const router = express.Router();

const createEmpleado = require('../controller/createEmpleadoController.js');
const getEmpleados = require('../controller/getEmpleadoController.js');
const updateEmpleado = require('../controller/updateEmpleadoController.js');
const deleteEmpleado = require('../controller/deleteEmpleadoController.js');

/**
 * @swagger
 * components:
 *   schemas:
 *     Empleado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Gerardo
 *         edad:
 *           type: integer
 *           example: 29
 *         pais:
 *           type: string
 *           example: México
 *         cargo:
 *           type: string
 *           example: QA
 *         anios:
 *           type: integer
 *           example: 5
 *     EmpleadoInput:
 *       type: object
 *       required:
 *         - nombre
 *         - edad
 *         - pais
 *         - cargo
 *         - anios
 *       properties:
 *         nombre:
 *           type: string
 *           example: Gerardo
 *         edad:
 *           type: integer
 *           example: 29
 *         pais:
 *           type: string
 *           example: México
 *         cargo:
 *           type: string
 *           example: QA
 *         anios:
 *           type: integer
 *           example: 5
 *     EmpleadoUpdate:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - edad
 *         - pais
 *         - cargo
 *         - anios
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Gerardo Actualizado
 *         edad:
 *           type: integer
 *           example: 31
 *         pais:
 *           type: string
 *           example: México
 *         cargo:
 *           type: string
 *           example: Líder Técnico
 *         anios:
 *           type: integer
 *           example: 7
 *     EmpleadoDelete:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 */

/**
 * @swagger
 * tags:
 *   name: Empleados
 *   description: Operaciones CRUD para empleados
 */

/**
 * @swagger
 * /empleados:
 *   post:
 *     summary: Crear un nuevo empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmpleadoInput'
 *     responses:
 *       201:
 *         description: Empleado creado exitosamente
 *     x-codeSamples:
 *       - lang: JavaScript
 *         source: |
 *           const axios = require('axios');
 *           axios.post('http://localhost:3001/empleados', {
 *             nombre: 'Gerardo',
 *             edad: 29,
 *             pais: 'México',
 *             cargo: 'QA',
 *             anios: 5
 *           }).then(response => {
 *             console.log(response.data);
 *           }).catch(error => {
 *             console.error(error);
 *           });
 *       - lang: cURL
 *         source: |
 *           curl -X POST http://localhost:3001/empleados \
 *           -H "Content-Type: application/json" \
 *           -d '{"nombre": "Gerardo", "edad": 29, "pais": "México", "cargo": "QA", "anios": 5}'
 */
router.post('/', createEmpleado);

/**
 * @swagger
 * /empleados:
 *   get:
 *     summary: Obtener la lista de empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empleado'
 *     x-codeSamples:
 *       - lang: JavaScript
 *         source: |
 *           const axios = require('axios');
 *           axios.get('http://localhost:3001/empleados')
 *             .then(response => {
 *               console.log(response.data);
 *             })
 *             .catch(error => {
 *               console.error(error);
 *             });
 *       - lang: cURL
 *         source: |
 *           curl -X GET http://localhost:3001/empleados
 */
router.get('/', getEmpleados);

/**
 * @swagger
 * /empleados:
 *   put:
 *     summary: Actualizar un empleado existente
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmpleadoUpdate'
 *     responses:
 *       200:
 *         description: Empleado actualizado exitosamente
 *     x-codeSamples:
 *       - lang: JavaScript
 *         source: |
 *           const axios = require('axios');
 *           axios.put('http://localhost:3001/empleados', {
 *             id: 1,
 *             nombre: 'Gerardo Actualizado',
 *             edad: 31,
 *             pais: 'México',
 *             cargo: 'Líder Técnico',
 *             anios: 7
 *           }).then(response => {
 *             console.log(response.data);
 *           }).catch(error => {
 *             console.error(error);
 *           });
 *       - lang: cURL
 *         source: |
 *           curl -X PUT http://localhost:3001/empleados \
 *           -H "Content-Type: application/json" \
 *           -d '{"id": 1, "nombre": "Gerardo Actualizado", "edad": 31, "pais": "México", "cargo": "Líder Técnico", "anios": 7}'
 */
router.put('/', updateEmpleado);

/**
 * @swagger
 * /empleados:
 *   delete:
 *     summary: Eliminar un empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmpleadoDelete'
 *     responses:
 *       200:
 *         description: Empleado eliminado exitosamente
 *     x-codeSamples:
 *       - lang: JavaScript
 *         source: |
 *           const axios = require('axios');
 *           axios.delete('http://localhost:3001/empleados', {
 *             data: { id: 1 }
 *           }).then(response => {
 *             console.log(response.data);
 *           }).catch(error => {
 *             console.error(error);
 *           });
 *       - lang: cURL
 *         source: |
 *           curl -X DELETE http://localhost:3001/empleados \
 *           -H "Content-Type: application/json" \
 *           -d '{"id": 1}'
 */
router.delete('/', deleteEmpleado);

module.exports = router;
