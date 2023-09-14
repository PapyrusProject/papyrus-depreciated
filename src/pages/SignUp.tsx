import RegisterForm from "../components/RegisterForm/RegisterForm";
import { SignUpTextComponent } from "../components/SignUpComponents/SignUpTextComponent";

export default function SignUp() {

  return (
    <>
        <div className="flex flex-wrap w-1/2 m-auto mt-24 border-2 rounded-lg border-primary bg-primary">
          <SignUpTextComponent />
          <RegisterForm />
        </div>
    </>
  )

}
