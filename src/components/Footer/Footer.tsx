// React Icons packages
import { PiGithubLogoFill, PiDiscordLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between mx-4 sm:justify-center sm:mx-0 sm:gap-4">
        <h2 className=" lg:text-xl">Copyright@Papyrus.</h2>
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/PedroHenriqueMG/papyrus">
            <PiGithubLogoFill  className="text-xl md:text-2xl xl:text-3xl text-secondary" />
          </a>
          <a href="https://discord.gg/QcraJAg9">
            <PiDiscordLogoFill className="text-xl md:text-2xl xl:text-3xl text-secondary" />
          </a>
        </div>
    </footer>
  );
}
