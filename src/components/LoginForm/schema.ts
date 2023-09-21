import { z } from 'zod';

export const schema = z.object({
  email: z.string().email("Endereço de email inválido."),
  password: z.string().trim().min(1, "A senha é obrigatória.")
})

export type LoginProps = z.infer<typeof schema>;