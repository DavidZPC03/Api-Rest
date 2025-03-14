const { z } = require('zod');
const db = require('../db');
const logger = require('../utils/logger');

const empleadoSchema = z.object({
    id: z.number().min(1, "El ID es obligatorio y debe ser mayor que 0"),
    nombre: z.string().min(1, "El nombre es obligatorio"),
    edad: z.number().min(18, "La edad debe ser mayor o igual a 18"),
    pais: z.string().min(1, "El país es obligatorio"),
    cargo: z.string().min(1, "El cargo es obligatorio"),
    anios: z.number().min(0, "Los años de experiencia deben ser al menos 0")
});

const updateEmpleado = (req, res, next) => {
    try {
        const { id, nombre, edad, pais, cargo, anios } = empleadoSchema.parse(req.body);

        db.query(
            "UPDATE empleados SET nombre = ?, edad = ?, pais = ?, cargo = ?, anios = ? WHERE id = ?",
            [nombre, edad, pais, cargo, anios, id],
            (err, result) => {
                if (err) {
                    logger.error(`Error al actualizar empleado ${id}: ${err.message}`, { stack: err.stack });
                    return next(err);
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

                logger.info(`Empleado "${nombre}" con ID ${id} actualizado exitosamente`);
                res.json(empleadoActualizado);
            }
        );
    } catch (e) {
        logger.warn(`Error en la validación de datos para el empleado ${req.body.id}: ${e.errors[0].message}`);
        res.status(400).json({ message: e.errors[0].message });
    }
};

module.exports = updateEmpleado;
