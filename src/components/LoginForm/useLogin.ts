import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginProps, schema } from './schema';

export function useLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>({
    resolver: zodResolver(schema)
  })

  function handleLogin(data: LoginProps) {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    errors,
    handleLogin
  }
}