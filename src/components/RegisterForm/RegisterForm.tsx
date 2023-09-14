// Functions
import { useRegister } from "./useRegister";
// Components
import { Input } from "../Input/Input";
import Btn from "../Buttons/Btn";

// React-icons
import { PiUserFill } from "react-icons/pi";

export default function RegisterForm() {
  const { errors, register, handleForm, handleSubmit } = useRegister();

  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold text-primary">Sign Up</h2>
      <form
        className="flex flex-col items-center justify-center gap-3"
        onSubmit={handleSubmit(handleForm)}
      >
        <Input
          {...register("username")}
          placeholder="Insira seu nome de usuário"
          type="text"
        />
        {errors.username && (
          <p className="text-sm text-secondary italic">
            {errors.username?.message}
          </p>
        )}

        <Input
          {...register("email")}
          placeholder="Insira seu e-mail"
          type="text"
        />
        {errors.email && (
          <p className="text-sm text-secondary italic">
            {errors.email?.message}
          </p>
        )}

        <Input
          {...register("password")}
          placeholder="Insira sua senha"
          type="password"
        />
        {errors.password && (
          <p className="text-sm text-secondary italic">
            {errors.password?.message}
          </p>
        )}

        <Input
          {...register("confirmPassword")}
          placeholder="Confirme a sua senha"
          type="password"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-secondary italic">
            {errors.confirmPassword?.message}
          </p>
        )}
        <Btn
          icon={<PiUserFill />}
          name="Sign Up"
          bgColor="bg-primary text-white"
          hover="hover:bg-white text-primary"
          type="submit"
        ></Btn>
      </form>
    </div>
  );
}
