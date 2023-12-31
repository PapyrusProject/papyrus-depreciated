// React Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiUserFill } from "react-icons/pi";

// React Router Dom
import { NavLink } from "react-router-dom";

// Pages
import Btn from "../Buttons/Btn";
import { Links } from "./NavLinks";

// Framer motion
import { useCycle } from "framer-motion";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export default function Header() {
  const [menu, toggleMenu] = useCycle(false, true);
  const { handleOpenLoginModal } = useContext(LoginContext);

  return (
    <div className="md:container md:mx-auto">
      <header className="flex flex-col items-center justify-between md:flex-row md:py-2">
        <div className="flex justify-center p-2">
          <a href="/" data-testid="logo" className="text-3xl font-bold">
            Papy<span className="text-primary">rus.</span>
          </a>
          <button
            className="absolute md:hidden right-4 top-4"
            onClick={() => toggleMenu()}
          >
            {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        <nav
          className={`flex md:flex-row items-center gap-6 bg-primary mt-4 pt-4 md:mt-0 md:pt-0 md:bg-white w-full md:w-fit ${
            menu ? "flex-col" : "hidden md:flex"
          }`}
        >
          {Links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? "text-white md:text-secondary" : "text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div
          className={`flex justify-center gap-6 bg-primary mb-4 py-4 md:mb-0 md:py-0 md:bg-white w-full md:w-fit ${
            menu ? "" : "hidden md:flex"
          }`}
        >
          <NavLink
            to={"/signup"}
            className={({ isActive }) => `user-btn ${isActive ? "hidden" : "flex"}`}
          >
            <PiUserFill /> Sign Up
          </NavLink>
          <Btn
            name="Login"
            bgColor="bg-white text-primary hover:bg-primary hover:text-white"
            func={handleOpenLoginModal}
          />
        </div>
      </header>
    </div>
  );
}
