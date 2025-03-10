const db = require('../db');

const updateEmpleado = (req, res) => {
    const { id, nombre, edad, pais, cargo, anios } = req.body;

    db.query(
        "UPDATE empleados SET nombre = ?, edad = ?, pais = ?, cargo = ?, anios = ? WHERE id = ?",
        [nombre, edad, pais, cargo, anios, id],
        (err, result) => {
            if (err) {
                next(err);
            }

            const empleadoActualizado = {
                id,
                nombre,
                edad,
                pais,
                cargo,
                anios,
                _links: {
                    self: { href: `/empleados/${id}`, method: "GET" },
                    delete: { href: `/empleados/${id}`, method: "DELETE" }
                },
                _embedded: {
                    [`empleado_${id}`]: {
                        descripcion: `Empleado "${nombre}" actualizado correctamente`,
                        ejemploJSON: {
                            id,
                            nombre,
                            edad,
                            pais,
                            cargo,
                            anios
                        }
                    }
                }
            };

            res.json(empleadoActualizado);
        }
    );
};

module.exports = updateEmpleado;
