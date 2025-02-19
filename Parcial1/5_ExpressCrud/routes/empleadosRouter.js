const express = require('express');
const router = express.Router();
const { z } = require('zod');
const db = require('../db');

const validacionesFormulario = z.object({
    nombre: z.string()
        .min(3, { message: "El nombre debe tener al menos 3 caracteres" })
        .max(35, { message: "El nombre no puede tener más de 35 caracteres" })
        .regex(/^[a-zA-Z\s]+$/, { message: "El nombre solo puede contener letras" })
        .refine(val => val.trim().length > 0, { message: "El nombre no puede estar vacío" }),
    edad: z.number()
        .min(18, { message: "La edad debe ser mayor de 18" })
        .max(65, { message: "La edad debe ser menor de 65" }),
    pais: z.string()
        .min(2, { message: "El país debe tener al menos 2 caracteres" })
        .max(10, { message: "El país no puede tener más de 10 caracteres" })
        .regex(/^[a-zA-Z\s]+$/, { message: "El país solo puede contener letras" })
        .refine(val => val.trim().length > 0, { message: "El país no puede estar vacío" }),
    cargo: z.string()
        .min(2, { message: "El cargo debe tener al menos 2 caracteres" })
        .max(20, { message: "El cargo no puede tener más de 20 caracteres" })
        .regex(/^[a-zA-Z\s]+$/, { message: "El cargo solo puede contener letras" })
        .refine(val => val.trim().length > 0, { message: "El cargo no puede estar vacío" }),
    anios: z.number()
        .min(1, { message: "Los años de experiencia deben ser mayor a '0'" })
        .max(40, { message: "Los años de experiencia no pueden ser mayor a '40'" })
});

function validationBody(body, bodyrules = []) {
    const keys = Object.keys(body);
    const rules = bodyrules.filter(formprop => !keys.includes(formprop));
    if (rules.length > 0) {
        return { message: `Faltan los siguientes campos: ${rules.join(", ")}` };
    }
    return true;
}

router.post("/create", (req, res) => {
    const rules = validationBody(req.body, ["nombre", "edad", "pais", "cargo", "anios"]);
    if (rules !== true) {
        res.status(400).json(rules);
        return;
    }

    const validationResult = validacionesFormulario.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ message: validationResult.error.errors[0].message });
    }

    const { nombre, edad, pais, cargo, anios } = req.body;
    db.query("INSERT INTO empleados (nombre, edad, pais, cargo, anios) VALUES (?, ?, ?, ?, ?)", 
        [nombre, edad, pais, cargo, anios], 
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: "Error al insertar el empleado" });
            } else {
                res.status(201).json({ message: "Empleado creado con éxito" });
            }
        }
    );
});

router.get("/empleados", (req, res) => {
    db.query("SELECT * FROM empleados", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

router.put("/update", (req, res) => {
    const rules = validationBody(req.body, ["id", "nombre", "edad", "pais", "cargo", "anios"]);
    if (rules !== true) {
        res.status(400).json(rules);
        return;
    }

    const validationResult = validacionesFormulario.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ message: validationResult.error.errors[0].message });
    }

    const { id, nombre, edad, pais, cargo, anios } = req.body;
    db.query(
        "UPDATE empleados SET nombre = ?, edad = ?, pais = ?, cargo = ?, anios = ? WHERE id = ?", 
        [nombre, edad, pais, cargo, anios, id], 
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: "Error al actualizar el empleado" });
            } else {
                res.json({ message: "Empleado actualizado con éxito" });
            }
        }
    );
});

router.delete("/delete", (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: "ID es obligatorio para eliminar un empleado" });
    }
    db.query(
        "DELETE FROM empleados WHERE id = ?", 
        [id], 
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: "Error al eliminar el empleado" });
            } else {
                res.json({ message: "Empleado eliminado con éxito" });
            }
        }
    );
});

module.exports = router;

