import LoginBtn from "../Buttons/LoginBtn";
import NavLink from "../Links/NavLink";

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-1/2 mx-auto py-2">
      <a 
      href="/"
      className="text-primary text-4xl">
        Papy<span className="text-black">rus.</span>
      </a>
      <div className="flex items-center gap-4">
        <NavLink name="About" page="/about" />
        <NavLink name="Service" page="/service" />
        <NavLink name="Contact" page="/contact" />
      </div>
      <LoginBtn name="Login" />
    </nav>
  );
}
