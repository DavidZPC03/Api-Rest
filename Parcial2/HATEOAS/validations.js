import { z } from "zod";

const validacionesFormulario = z.object({
    nombre: z.string()
        .min(3, { message: "El nombre debe tener al menos 3 caracteres" }) // Aplica min primero
        .max(35, { message: "El nombre no puede tener más de 35 caracteres" }) // Luego max
        .regex(/^[a-zA-Z\s]+$/, { message: "El nombre solo puede contener letras" }) // Aplica regex
        .refine(val => val.trim().length > 0, { message: "El nombre no puede estar vacío" }), // Por último refine
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

export default validacionesFormulario;
