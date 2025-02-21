const db = require('../db'); 

const createEmpleado = (req, res) => {
    const { nombre, edad, pais, cargo, anios } = req.body;

    db.query(
        "INSERT INTO empleados (nombre, edad, pais, cargo, anios) VALUES (?, ?, ?, ?, ?)", 
        [nombre, edad, pais, cargo, anios], 
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error al insertar el empleado" });
            } else {
                return res.status(201).json({ message: "Empleado creado con éxito" });
            }
        }
    );
};

module.exports = createEmpleado;
