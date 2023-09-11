// React Icons packages
import { PiGithubLogo, PiDiscordLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full py-2">
      <div className="flex items-center gap-12 text-lg ">
        <h2>Copyright@Papyrus.</h2>
        <div className="flex items-center gap-4">
          <a href="https://github.com/PedroHenriqueMG/papyrus">
            <PiGithubLogo />
          </a>
          <a href="https://discord.gg/QcraJAg9">
            <PiDiscordLogo />
          </a>
        </div>
      </div>
    </div>
  );
}
