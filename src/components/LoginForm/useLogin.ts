import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginProps, schema } from './schema';

export function handleLogin(data: LoginProps) {
    return data
  }

export function useLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>({
    resolver: zodResolver(schema)
  })

  return {
    register,
    handleSubmit,
    errors,
    handleLogin
  }
}