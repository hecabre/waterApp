import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "El email es requerido" })
    .email({ message: "Correo invalido" }),
  password: z.string({ required_error: "La contraseña es requerida" }),
});
