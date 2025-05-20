const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const express = require('express');
const getEmpleados = require('./controller/getEmpleadoController');

const app = express();
app.get('/empleados', getEmpleados);

test('GET /empleados obtiene la lista de empleados', async () => {
    const response = await request(app)
        .get('/empleados')
        .expect('Content-Type', /json/);

    console.log('Respuesta completa:', {
        status: response.status,
        body: response.body,
        headers: response.headers
    });

    if (response.status === 500) {
        console.error('Error del servidor:', response.body.error);
    }

    assert.strictEqual(response.status, 200);
    assert.ok(Array.isArray(response.body));
});