const db = require('../db');

const deleteEmpleado = (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            throw new Error("El ID es obligatorio para eliminar un empleado");
        }

        db.query(
            "SELECT nombre FROM empleados WHERE id = ?",
            [id],
            (err, results) => {
                if (err || results.length === 0) {
                    return res.status(404).json({ message: "Empleado no encontrado" });
                }

                const nombreEmpleado = results[0].nombre;

                db.query(
                    "DELETE FROM empleados WHERE id = ?",
                    [id],
                    (err, result) => {
                        if (err) {
                            res.status(500).json({ message: "Error al eliminar el empleado" });
                        } else {
                            const respuesta = {
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
                            };

                            res.json(respuesta);
                        }
                    }
                );
            }
        );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = deleteEmpleado;
