import RegisterForm from "../components/RegisterForm/RegisterForm";
import { SignUpTextComponent } from "../components/SignUpComponents/SignUpTextComponent";

export default function SignUp() {

  return (
    <>
        <div className="flex flex-wrap justify-center m-auto mt-24 border-2 rounded-lg w-[98%] border-primary bg-primary sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] xl2:w-[55%]">
          <SignUpTextComponent />
          <RegisterForm />
        </div>
    </>
  )

}
