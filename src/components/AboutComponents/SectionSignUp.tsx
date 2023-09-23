import { useNavigate } from "react-router-dom";
import Btn from "../Buttons/Btn";

export function SectionSignUp() {

  const navigate = useNavigate();

  function RedirectTo() {
    navigate("/signup");
  }

  return (
    <section className="flex items-center justify-center py-10 bg-primary">
      <div className="flex flex-col items-center justify-center gap-3 py-8 border-2 border-white rounded-lg w-[95%]">
        <h1 className="text-4xl font-normal text-white ml-7">Edit all your texts with Papyrus.</h1>
        <p className="text-white">Start right now, and don't delay.</p>
        <Btn
          name="Sign Up"
          bgColor="text-white border-white bg-primary px-5"
          hover="hover:text-primary hover:bg-white"
          func={RedirectTo}
        />
      </div>
    </section>
  )

}
