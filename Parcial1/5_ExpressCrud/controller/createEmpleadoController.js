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
                const newEmpleadoId = result.insertId; // ID del empleado creado

                const response = {
                    message: "Empleado creado con éxito",
                    links: [
                        { rel: "self", method: "GET", href: `/empleados/${newEmpleadoId}` },
                        { rel: "update", method: "PUT", href: `/empleados/${newEmpleadoId}` },
                        { rel: "delete", method: "DELETE", href: `/empleados/${newEmpleadoId}` }
                    ]
                };

                return res.status(201).json(response);
            }
        }
    );
};

module.exports = createEmpleado;
