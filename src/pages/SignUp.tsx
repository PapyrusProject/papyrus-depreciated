import RegisterForm from "../components/RegisterForm/RegisterForm";
import { SignUpTextComponent } from "../components/SignUpComponents/SignUpTextComponent";

export default function SignUp() {

  return (
    <>
      <div className="flex justify-center">

        <div className="w-[37%] mt-32 border-2 rounded-lg border-primary bg-primary">
          <SignUpTextComponent />
        </div>

        <div className="mt-32 border-2 rounded-lg w-[37%] flex flex-col justify-center border-primary">
          <RegisterForm />
        </div>

      </div>
    </>
  )

}
