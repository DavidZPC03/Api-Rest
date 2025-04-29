const express = require('express');
const app = express();
const cors = require('cors');
const empleadosRouter = require('./routes/empleadosRouter');
const router = require('./routes/empleadosRouter');
const hateoasLinker = require('express-hateoas-links');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('node:path');
const swaggerOptions = require('./swaggerOptions.json');
const redoc = require('redoc-express')

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));
app.get("/api-docs-json", (req, res) => {
    res.json(swaggerDocs);
});

app.get('/redoc', 
    redoc({ title: 'API Docs', specUrl: '/api-docs-json' }),
)

app.use(cors());
app.use(hateoasLinker)
app.use(express.json());

app.use('/empleados', empleadosRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
