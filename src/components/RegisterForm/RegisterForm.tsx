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
    <div className="flex flex-col justify-center gap-6 py-12 text-center bg-white rounded-lg w-80 sm:w-[100%] lg:w-[50%] xl:py-24">
      <h2 className="text-5xl font-bold text-primary">Sign Up</h2>
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
          <p className="text-sm italic text-secondary">
            {errors.username?.message}
          </p>
        )}

        <Input
          {...register("email")}
          placeholder="Insira seu e-mail"
          type="text"
        />
        {errors.email && (
          <p className="text-sm italic text-secondary">
            {errors.email?.message}
          </p>
        )}

        <Input
          {...register("password")}
          placeholder="Insira sua senha"
          type="password"
        />
        {errors.password && (
          <p className="text-sm italic text-secondary">
            {errors.password?.message}
          </p>
        )}

        <Input
          {...register("confirmPassword")}
          placeholder="Confirme a sua senha"
          type="password"
        />
        {errors.confirmPassword && (
          <p className="text-sm italic text-secondary">
            {errors.confirmPassword?.message}
          </p>
        )}
        <Btn
          icon={<PiUserFill className='mr-2 ' />}
          name="Sign Up"
          bgColor="bg-primary text-white mt-7 px-7"
          hover="hover:bg-white hover:text-primary"
          type="submit"
        ></Btn>
      </form>
    </div>
  );
}
