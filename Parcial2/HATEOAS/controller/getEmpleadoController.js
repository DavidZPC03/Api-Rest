const db = require('../db');
const logger = require('../utils/logger');

const getEmpleados = (req, res, next) => {
    try {
        db.query("SELECT * FROM empleados", (err, results) => {
            if (err) {
                logger.error(`Error al obtener empleados: ${err.message}`, { stack: err.stack });
                return res.status(500).json({ message: "Error al obtener empleados" });
            }
            const empleadosConLinks = results.map(emp => ({
                ...emp,
                _links: {
                    self: { href: `/empleados/${emp.id}`, method: "GET" },
                    update: { href: `/empleados/${emp.id}`, method: "PUT" },
                    delete: { href: `/empleados/${emp.id}`, method: "DELETE" }
                },
                _embedded: {
                    [`empleado_${emp.id}`]: {
                        descripcion: `Información sobre el empleado "${emp.nombre}"`,
                        ejemploJSON: emp
                    }
                }
            }));

            res.json(empleadosConLinks);
        });
    } catch (error) {
        logger.error(`Error inesperado: ${error.message}`, { stack: error.stack });
        next(error);
    }
};

module.exports = getEmpleados;
