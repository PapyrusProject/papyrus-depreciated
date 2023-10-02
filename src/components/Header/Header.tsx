// Pages and components imports
import Btn from "../Buttons/Btn";
import Navlink from "../Links/Navlink";
import NavlinkMobile from "../Links/NavlinkMobile";

// react router dom packages
import { useNavigate, useLocation } from "react-router-dom";

//React icons Packages
import { PiUserFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa6"

//import motion
import { motion, useCycle } from "framer-motion"

interface HeaderProps {
  onOpenLoginModal(): void;
}

type motionProps = {
  open: {
    y: number,
    opacity?: number,
    transition: {
      delay: number,
    }
  }
  close: {
    y: number,
    opacity?: number,
    transition: {
      delay: number,
    }
  }
}

export default function Header({ onOpenLoginModal }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, toggleMenu] = useCycle(false, true)

  function RedirectTo() {
    navigate("/signup");
  }

  const headerAnimation: motionProps = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5
      },
    },
    close: {
      y: -200,
      opacity: 0,
      transition: {
        delay: 0.5
      },
    }
  }

  return (
    <>
      <nav className="flex items-center justify-around py-2 mx-auto">
        <div className="flex md:hidden">
          <Btn
            icon={<FaBars className="w-6 h-6" />}
            bgColor="bg-white text-primary"
            func={toggleMenu}
          />
        </div>
        <p className="text-4xl text-primary font-bold">
          Papy<span className="text-black">rus.</span>
        </p>
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
      </nav>

      {/* header mobile */}
      <motion.div
        variants={headerAnimation}
        animate={menu ? 'open' : 'close'}
        className="flex md:hidden flex-row-reverse"
      >
        <div className="w-full h-auto bg-primary flex flex-col items-center">
          <div className="flex gap-6 items-center">
            <div className="flex flex-col ">
              <NavlinkMobile
                name="Home"
                page="/"
              />
              <NavlinkMobile
                name="About"
                page="/about"
              />
            </div>
            <div className="flex flex-col">
              <NavlinkMobile
                name="Service"
                page="/service"
              />
              <NavlinkMobile
                name="Contact"
                page="/contact"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Btn
              icon={<PiUserFill />}
              name="Sign Up"
              bgColor="bg-white text-primary items-center"
              atualPage={location.pathname === "/signup"}
              func={RedirectTo}
            />
            <Btn
              name="Login"
              bgColor="bg-white text-primary"
              func={onOpenLoginModal}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
