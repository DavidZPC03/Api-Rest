const db = require('../db');
const logger = require('../utils/logger');

const deleteEmpleado = (req, res, next) => {
    const { id } = req.body;

    if (!id) {
        logger.warn("Se intentó eliminar un empleado sin proporcionar ID");
        return res.status(400).json({ message: "El ID es obligatorio para eliminar un empleado" });
    }

    db.query("SELECT nombre FROM empleados WHERE id = ?", [id], (err, results) => {
        if (err || results.length === 0) {
            logger.error(`Error al buscar empleado ${id}: ${err?.message || 'Empleado no encontrado'}`);
            return res.status(404).json({ message: "Empleado no encontrado" });
        }

        const nombreEmpleado = results[0].nombre;

        db.query("DELETE FROM empleados WHERE id = ?", [id], (err) => {
            if (err) {
                logger.error(`Error al eliminar empleado ${id}: ${err.message}`, { stack: err.stack });
                return res.status(500).json({ message: "Error al eliminar el empleado" });
            }

            logger.info(`Empleado "${nombreEmpleado}" eliminado exitosamente`);

            res.json({
                message: `Empleado "${nombreEmpleado}" eliminado con éxito`,
                _links: {
                    create: { href: "/empleados", method: "POST" }
                },
                _embedded: {
                    [`empleado_${id}`]: {
                        descripcion: `Se eliminó el empleado "${nombreEmpleado}"`,
                        ejemploJSON: { id }
                    }
                }
            });
        });
    });
};

module.exports = deleteEmpleado;
