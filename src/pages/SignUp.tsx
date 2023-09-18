import RegisterForm from "../components/RegisterForm/RegisterForm";
import { SignUpTextComponent } from "../components/SignUpComponents/SignUpTextComponent";

export default function SignUp() {

  return (
    <>
        <div className="flex flex-wrap justify-center m-auto mt-24 border-2 rounded-lg w-min border-primary bg-primary sm:w-[55%] md:w-[70%] lg:w-[80%] xl:w-[65%] xl2:w-[55%]">
          <SignUpTextComponent />
          <RegisterForm />
        </div>
    </>
  )

}
