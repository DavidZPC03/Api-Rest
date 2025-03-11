const db = require('../db');
const logger = require('../utils/logger');

const createEmpleado = (req, res, next) => {
    const { nombre, edad, pais, cargo, anios } = req.body;

    db.query(
        "INSERT INTO empleados (nombre, edad, pais, cargo, anios) VALUES (?, ?, ?, ?, ?)",
        [nombre, edad, pais, cargo, anios],
        (err, result) => {
            if (err) {
                logger.error(`Error al crear empleado: ${err.message}`, { stack: err.stack });
                return next(err);
            }

            const nuevoEmpleado = {
                id: result.insertId,
                nombre,
                edad,
                pais,
                cargo,
                anios,
                _links: {
                    self: { href: `/empleados/${result.insertId}`, method: "GET" },
                    update: { href: `/empleados/${result.insertId}`, method: "PUT" },
                    delete: { href: `/empleados/${result.insertId}`, method: "DELETE" }
                },
                _embedded: {
                    [`empleado_${result.insertId}`]: {
                        descripcion: `Empleado "${nombre}" agregado exitosamente`,
                        ejemploJSON: {
                            nombre,
                            edad,
                            pais,
                            cargo,
                            anios
                        }
                    }
                }
            };

            res.status(201).json(nuevoEmpleado);
        }
    );
};

module.exports = createEmpleado;
