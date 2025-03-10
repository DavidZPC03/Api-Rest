const express = require('express');
const app = express();
const cors = require('cors');
const empleadosRouter = require('./routes/empleadosRouter');
const router = require('./routes/empleadosRouter');
const hateoasLinker = require('express-hateoas-links');

app.use(cors());
app.use(hateoasLinker)
app.use(express.json());

app.use('/empleados', empleadosRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
}, router);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
