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
import { _RootProps } from "../../pages/_Root";

export default function Header({ onOpenLoginModal }: _RootProps) {
  const [menu, toggleMenu] = useCycle(false, true);

  return (
    <div className="md:container md:mx-auto">
      <header className="flex flex-col md:flex-row items-center justify-between md:py-2">
        <div className="p-2 flex justify-center">
          <a href="/" className="text-3xl font-bold">
            Papy<span className="text-primary">rus.</span>
          </a>
          <button
            className="md:hidden absolute right-4 top-4"
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
            <PiUserFill /> SingUp
          </NavLink>
          <Btn
            name="Login"
            bgColor="bg-white text-primary hover:bg-primary hover:text-white"
            func={onOpenLoginModal}
          />
        </div>
      </header>
    </div>
  );
}
