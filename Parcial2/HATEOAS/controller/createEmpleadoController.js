const { z } = require('zod');
const db = require('../db');
const logger = require('../utils/logger');

const empleadoSchema = z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    edad: z.number().min(18, "La edad debe ser mayor o igual a 18"),
    pais: z.string().min(1, "El país es obligatorio"),
    cargo: z.string().min(1, "El cargo es obligatorio"),
    anios: z.number().min(0, "Los años de experiencia deben ser al menos 0")
});

const createEmpleado = (req, res, next) => {
    try {
        const { nombre, edad, pais, cargo, anios } = empleadoSchema.parse(req.body);

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

                logger.info(`Empleado "${nombre}" creado exitosamente con ID ${result.insertId}`);
                res.status(201).json(nuevoEmpleado);
            }
        );
    } catch (e) {
        logger.warn(`Error en la validación de datos: ${e.errors[0].message}`);
        res.status(400).json({ message: e.errors[0].message });
    }
};

module.exports = createEmpleado;
