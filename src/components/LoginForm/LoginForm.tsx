import { Input } from "../Input/Input";
import { useLogin } from "./useLogin";
import Btn from "../Buttons/Btn";

export function LoginForm() {
  const { register, handleSubmit, handleLogin, errors } = useLogin()

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col items-center justify-center gap-7"
    >
      <h2 className="text-[3.35rem] text-primary font-bold mb-7">
        Papyrus
      </h2>
      <h3 className="text-4xl font-semibold">
        Login
      </h3>

      <div>
        <Input
          {...register("email")}
          type="text"
          placeholder="Insira seu e-mail"
        />
        {errors.email && (
          <p className="text-sm text-center italic text-secondary mt-3">
            {errors.email?.message}
          </p>
        )}
      </div>

      <div>
        <Input
          {...register("password")}
          type="password"
          placeholder="Insira sua senha"
        />
        {errors.password && (
          <p className="text-sm text-center italic text-secondary mt-3">
            {errors.password?.message}
          </p>
        )}
      </div>

      <a
        href="#"
        className='font-semibold text-lg text-black/50 hover:text-black/30'
      >
        Reset password
      </a>
      
      <Btn
        name='Login'
        bgColor="bg-white text-primary"
        hover="hover:bg-primary hover:text-white"
        dataTestingid="login-button"
      />
    </form>
  );
}