const db = require('../db');

const getEmpleados = (req, res) => {
    try {
        db.query("SELECT * FROM empleados", (err, result) => {
            if (err) {
                res.status(500).json({ message: "Error al obtener empleados" });
            } else {
                res.json(result);
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error inesperado",
        });
    }
};

module.exports = getEmpleados;
