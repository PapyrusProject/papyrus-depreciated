// React Icons packages
import { PiGithubLogoFill, PiDiscordLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="flex items-center justify-end w-full py-6">
        <h2 className="text-lg">Copyright@Papyrus.</h2>
        <div className="flex items-center justify-end w-2/5 gap-6 mr-24">
          <a href="https://github.com/PedroHenriqueMG/papyrus">
            <PiGithubLogoFill  className="text-3xl text-secondary" />
          </a>
          <a href="https://discord.gg/QcraJAg9">
            <PiDiscordLogoFill className="text-3xl text-secondary" />
          </a>
        </div>
    </div>
  );
}
