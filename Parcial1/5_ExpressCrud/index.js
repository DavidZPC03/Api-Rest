const express = require('express');
const app = express();
const cors = require('cors');
const empleadosRouter = require('./routes/empleadosRouter');
const router = require('./routes/empleadosRouter');

app.use(cors());
app.use(express.json());

app.use('/empleados', empleadosRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
