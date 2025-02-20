const db = require('../db');

const deleteEmpleado = (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            throw new Error("El ID es obligatorio para eliminar un empleado");
        }

        db.query(
            "DELETE FROM empleados WHERE id = ?", 
            [id], 
            (err, result) => {
                if (err) {
                    res.status(500).json({ message: "Error al eliminar el empleado" });
                } else {
                    res.json({ message: "Empleado eliminado con éxito" });
                }
            }
        );
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = deleteEmpleado;
