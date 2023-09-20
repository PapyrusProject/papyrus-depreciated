import { useNavigate, useLocation } from "react-router-dom";
import Btn from "../Buttons/Btn";
import NavLink from "../Links/NavLink";
import { PiUserFill } from "react-icons/pi";

interface HeaderProps {
  onOpenLoginModal(): void,
}

export default function Header({ onOpenLoginModal }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();

  function RedirectTo() {
    navigate("/signup");
  }

  return (
    <nav className="flex items-center justify-around py-2 mx-auto">
      <a href="/" className="text-4xl text-primary font-bold">
        Papy<span className="text-black">rus.</span>
      </a>
      <div className="flex items-center gap-4">
        <NavLink name="About" page="/about" atualPage={location.pathname === "/about"} />
        <NavLink name="Service" page="/service" atualPage={location.pathname === "/service"} />
        <NavLink name="Contact" page="/contact" atualPage={location.pathname === "/contact"} />
      </div>
      <div className="flex gap-6">
        <Btn
          icon={<PiUserFill />}
          name="Sign Up"
          bgColor="bg-primary text-white items-center"
          hover="hover:bg-white hover:text-primary"
          func={RedirectTo}
        />
        <Btn
          name="Login"
          bgColor="bg-white text-primary"
          hover="hover:bg-primary hover:text-white"
          func={onOpenLoginModal}
        />
      </div>
    </nav>
  );
}
