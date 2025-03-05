const db = require('../db');

const getEmpleados = (req, res) => {
    try {
        db.query("SELECT * FROM empleados", (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error al obtener empleados" });
            } else {
                // Agregar enlaces HATEOAS a cada empleado
                const empleados = result.map(empleado => ({
                    ...empleado,
                    links: [
                        { rel: "self", method: "GET", href: `/empleados/${empleado.id}` },
                        { rel: "update", method: "PUT", href: `/empleados/${empleado.id}` },
                        { rel: "delete", method: "DELETE", href: `/empleados/${empleado.id}` }
                    ]
                }));

                res.json(empleados);
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error inesperado" });
    }
};

module.exports = getEmpleados;
