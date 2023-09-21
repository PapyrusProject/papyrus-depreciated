// Pages and components imports
import Btn from "../Buttons/Btn";
import Navlink from "../Links/Navlink";

// react router dom packages
import { useNavigate, useLocation } from "react-router-dom";

//React icons Packages
import { PiUserFill } from "react-icons/pi";

//import motion
import { motion, useCycle } from "framer-motion"

interface HeaderProps {
  onOpenLoginModal(): void;
}

export default function Header({ onOpenLoginModal }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const menu = useCycle(false, true)

  function RedirectTo() {
    navigate("/signup");
  }

  return (
    <nav className="flex items-center justify-around py-2 mx-auto">
      <a href="/" className="text-4xl text-primary font-bold">
        Papy<span className="text-black">rus.</span>
      </a>
      <div className="hidden md:flex  items-center gap-4">
        <Navlink
          name="Home"
          page="/"
          atualPage={location.pathname === "/"}
        />
        <Navlink
          name="About"
          page="/about"
          atualPage={location.pathname === "/about"}
        />
        <Navlink
          name="Service"
          page="/service"
          atualPage={location.pathname === "/service"}
        />
        <Navlink
          name="Contact"
          page="/contact"
          atualPage={location.pathname === "/contact"}
        />
      </div>
      <div className="hidden md:flex gap-6">
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
