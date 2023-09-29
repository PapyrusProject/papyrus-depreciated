// Pages and components imports
import Btn from "../Buttons/Btn";
import Navlink from "../Links/Navlink";

// react router dom packages
import { useNavigate, useLocation } from "react-router-dom";

//React icons Packages
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { PiUserFill } from "react-icons/pi";

//import motion
import { motion, useCycle } from "framer-motion"

interface HeaderProps {
  onOpenLoginModal(): void;
}

type motionProps = {
  closed: {
    display: string,
    y: number,
  transition: {
    duration: number,
  },
  open: {
    display: string,
    y: number,
    transition: {
      duration: number,
    }
  }
}}

export default function Header({ onOpenLoginModal }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, toggleMenu] = useCycle(false, true)

  function RedirectTo() {
    navigate("/signup");
  }

  const HeaderMotion: motionProps = {
    closed: {
      display: 'block',
      y: -500,
      transition: {
        duration: 0.5
      },
      open: {
        display: 'none',
        y: 0,
        transition: {
          duration: 0.5
        }
      }
    }
  }

  return (
    <>
      <header 
      className="flex flex-col items-center justify-around py-2 mx-auto relative">
        <div className="flex md:hidden absolute left-6 top-4">
          <Btn
            icon={menu ? <AiOutlineClose/> : <AiOutlineMenu/>}
            bgColor="bg-white text-primary"
            func={toggleMenu}
          />
        </div>
        <p className="text-4xl text-primary font-bold">
          Papy<span className="text-black">rus.</span>
        </p>
        <motion.nav 
        variants={HeaderMotion}
        animate={menu ? 'open' : 'closed'}
        className="flex flex-col md:flex-row items-center gap-4 bg-primary w-full md:bg-white mt-2 py-2 md:py-0">
          <Navlink name="Home" page="/" atualPage={location.pathname === "/"}/>
          <Navlink name="About" page="/about" atualPage={location.pathname === "/about"} />
          <Navlink name="Service" page="/service" atualPage={location.pathname === "/service"} />
          <Navlink name="Contact" page="/contact" atualPage={location.pathname === "/contact"} />
        <div className="flex gap-6">
          <Btn
            icon={<PiUserFill />}
            name="Sign Up"
            bgColor="bg-primary text-white items-center"
            hover="hover:bg-white hover:text-primary"
            atualPage={location.pathname === "/signup"}
            func={RedirectTo}
          />
          <Btn
            name="Login"
            bgColor="bg-white text-primary"
            hover="hover:bg-primary hover:text-white"
            func={onOpenLoginModal}
          />
        </div>
        </motion.nav>
      </header>
    </>
  );
}
