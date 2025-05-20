const db = require('../db');

const getEmpleados = (req, res) => {
    console.log('Intentando conectar a la BD...'); // 👈 1. Log de inicio
    
    db.query("SELECT * FROM empleados", (err, result) => {
        if (err) {
            console.error('ERROR SQL COMPLETO:', {  // 👈 2. Log detallado
                message: err.message,
                code: err.code,
                sqlMessage: err.sqlMessage,
                sqlState: err.sqlState,
                stack: err.stack
            });
            return res.status(500).json({ 
                message: "Error al obtener empleados",
                error: err.message  // 👈 3. Envía el mensaje real al cliente
            });
        }
        
        console.log('Resultado de la consulta:', result); // 👈 4. Log de resultados
        
        const empleados = result.map(empleado => ({
            ...empleado,
            links: [
                { rel: "self", method: "GET", href: `/empleados/${empleado.id}` },
                { rel: "update", method: "PUT", href: `/empleados/${empleado.id}` },
                { rel: "delete", method: "DELETE", href: `/empleados/${empleado.id}` }
            ]
        }));

        res.json(empleados);
    });
};

module.exports = getEmpleados;