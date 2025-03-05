const db = require('../db'); 

const updateEmpleado = (req, res) => {
    const { id, nombre, edad, pais, cargo, anios } = req.body;

    db.query(
        "UPDATE empleados SET nombre = ?, edad = ?, pais = ?, cargo = ?, anios = ? WHERE id = ?", 
        [nombre, edad, pais, cargo, anios, id], 
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error al actualizar el empleado" });
            } else {
                return res.json({
                    message: "Empleado actualizado con éxito",
                    links: [
                        { rel: "self", method: "GET", href: `/empleados/${id}` },
                        { rel: "delete", method: "DELETE", href: `/empleados/${id}` }
                    ]
                });
            }
        }
    );
};

module.exports = updateEmpleado;
