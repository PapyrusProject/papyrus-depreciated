import { z } from "zod";

export const schema = z
  .object({
    username: z.string().min(4, "Usuário precisar ter no mínimo 4 caracteres."),
    email: z
      .string()
      .email("Digite um email válido.")
      .min(2, "Digite o seu e-mail corretamente."),
    /* .refine(async (data)=> {
    // Fazer requisição no DB e verificar se o email já existe.
    return await emailAlreadyExist(data)
  }, 'Esse email já existe.')*/
    password: z
      .string()
      .min(6, "Sua senha precisa ter no mínimo 6 caracteres."),
    confirmPassword: z.string().min(6, "Digite senha correta."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "O campo de senha e confirmação de senha precisam ser iguais.",
    path: ["confirmPassword"],
  });

export type RegisterProps = z.infer<typeof schema>;
