import RegisterForm from "../components/RegisterForm/RegisterForm";
import { SignUpTextComponent } from "../components/SignUpComponents/SignUpTextComponent";

export default function SignUp() {

  return (
    <>
        <div className="flex flex-wrap justify-center mx-auto my-20 border-2 rounded-lg w-[90%] border-primary bg-primary">
          <SignUpTextComponent />
          <RegisterForm />
        </div>
    </>
  )

}
