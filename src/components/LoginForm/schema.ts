import { z } from 'zod';

export const schema = z.object({
  email: z
  .string()
  .email("Endereço de email inválido.")
  .refine((data) => /[a-z,A-Z,0-9,_]/.test(data.email))
  ,
  password: z
  .string()
  .trim()
  .min(1, "A senha é obrigatória.")
  .refine((data) => /[a-z,A-Z,0-9,_]/.test(data.password))
})

export type LoginProps = z.infer<typeof schema>;