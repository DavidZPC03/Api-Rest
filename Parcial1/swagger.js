const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = require('swaggerDef.js'); // Asegúrate de que la ruta sea correcta

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Ajusta esta ruta si tus rutas están en otro lugar
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
