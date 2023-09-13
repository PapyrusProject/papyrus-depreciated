import { useNavigate } from "react-router-dom";
import Btn from "../Buttons/Btn";
import NavLink from "../Links/NavLink";
import { BsFillPersonFill } from "react-icons/bs";

export default function Header() {

  const navigate = useNavigate();
  function RedirectTo(){
    navigate("/signup");
  }

  return (
    <nav className="flex items-center justify-between w-1/2 py-2 mx-auto">
      <a href="/" className="text-4xl text-primary">
        Papy<span className="text-black">rus.</span>
      </a>
      <div className="flex items-center gap-4">
        <NavLink name="About" page="/about" />
        <NavLink name="Service" page="/service" />
        <NavLink name="Contact" page="/contact" />
      </div>
      <div className="flex gap-6">
        <Btn
          icon={ <BsFillPersonFill />}
          name="Sign Up"
          bgColor="bg-primary text-white items-center gap-2"
          hover="hover:bg-primary hover:text-white"
          func={RedirectTo}
        />
        <Btn
          name="Login"
          bgColor="bg-white text-primary"
          hover="hover:bg-primary hover:text-white"
        />
      </div>
    </nav>
  );
}
