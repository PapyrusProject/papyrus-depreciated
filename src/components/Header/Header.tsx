// Pages and components imports
import Btn from "../Buttons/Btn";
import Navlink from "../Links/Navlink";

// react router dom packages
import { useNavigate, useLocation } from "react-router-dom";

//React icons Packages
import { PiUserFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa6"

//import motion
import { useCycle } from "framer-motion"

interface HeaderProps {
  onOpenLoginModal(): void;
}

export default function Header({ onOpenLoginModal }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useCycle(false, true)
  const [toggle, setToggle] = useCycle(true, false)

  function RedirectTo() {
    setToggle()
    navigate("/signup");
  }



  return (
    <>
      <nav className="flex items-center justify-around py-2 mx-auto">
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
          {toggle && <Btn
            icon={<PiUserFill />}
            name="Sign Up"
            bgColor="bg-primary text-white items-center"
            hover="hover:bg-white hover:text-primary"
            func={RedirectTo}
          />}
          <Btn
            name="Login"
            bgColor="bg-white text-primary"
            hover="hover:bg-primary hover:text-white"
            func={onOpenLoginModal}
          />
        </div>
        <div className="flex md:hidden">
          <Btn
            icon={<FaBars className="w-6 h-6" />}
            bgColor="bg-white text-primary"
            func={setMenu}
          />
        </div>
      </nav>

      {/* header mobile */}
      {menu &&
        <div className="flex flex-row-reverse">
          <div className="w-[250px] h-[150px] bg-primary flex flex-col items-center">
            <div className="flex gap-2">
              <div className="flex flex-col">
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
              </div>
              <div className="flex flex-col">
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
            </div>
            <div className="flex gap-2">
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
          </div>
        </div>}


    </>
  );
}
