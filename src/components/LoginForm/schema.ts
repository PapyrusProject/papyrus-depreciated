import { z } from 'zod';

export const schema = z.object({
  email: z
  .string()
  .email("Endereço de email inválido.")
  .min(2, "Digite o seu e-mail corretamente.")
  ,
  password: z
  .string()
  .trim()
  .min(6, "Sua senha precisa ter no mínimo 6 caracteres.")
  .refine((data) => !/[^a-zA-Z0-9_\s]+/.test(data),
    {message: "Senha deve conter letrar e numeros"}
  ),
})

export type LoginProps = z.infer<typeof schema>;