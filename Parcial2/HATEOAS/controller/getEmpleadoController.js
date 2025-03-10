const db = require('../db');

const getEmpleados = (req, res) => {
    try {
        db.query("SELECT * FROM empleados", (err, results) => {
            if (err) {
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
                        ejemploJSON: {
                            id: emp.id,
                            nombre: emp.nombre,
                            edad: emp.edad,
                            cargo: emp.cargo,
                            anios: emp.anios
                        }
                    }
                }
            }));

            res.json(empleadosConLinks);
        });
    } catch (error) {
        next(error);
    }
};

module.exports = getEmpleados;
