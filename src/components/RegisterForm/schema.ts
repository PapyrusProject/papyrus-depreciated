import { z } from "zod";

export const schema = z
  .object({
    username: z
    .string()
    .min(4, "Usuário precisa ter no mínimo 4 caracteres.")
    .refine((data) => /[^a-z,A-Z,0-9,_]/.test(data.username),
    {message: "Usuário deve conter letrar e numeros"}
    ),
    email: z
      .string()
      .email("Digite um email válido.")
      .min(2, "Digite o seu e-mail corretamente."),
    /* .refine(async (data)=>  {
    // Fazer requisição no DB e verificar se o email já existe.
    return await emailAlreadyExist(data)
  }, 'Esse email já existe.')*/
    password: z
      .string()
      .min(6, "Sua senha precisa ter no mínimo 6 caracteres.")
      .refine((data) => /[a-z,A-Z,0-9,_]/.test(data.password),
      {message: "Senha deve conter letrar e numeros"}
      ),
    confirmPassword: z.string().min(6, "Digite a senha correta."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "O campo de senha e confirmação de senha precisam ser iguais.",
    path: ["confirmPassword"],
  });

export type RegisterProps = z.infer<typeof schema>;
