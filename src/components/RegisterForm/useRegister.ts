// Here you will find the function that makes request to DB and check if the email already exist


// React hook form - Resolvers zod IMPORTS
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterProps, schema } from "./schema";

export const useRegister = () => {
    const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  // Função responsável por enviar os dados para a API
  const handleForm = (  data: RegisterProps) => console.log(data)


  return {
    errors,
    register,
    handleSubmit,
    handleForm
  }
}