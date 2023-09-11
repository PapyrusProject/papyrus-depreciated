import { PiPencilLineBold ,PiArticleBold, PiPaintBrushBold, PiBooks, PiDatabaseBold, PiDevices, PiHourglassHighBold, PiWrenchBold, PiStrategy, PiPaletteBold, PiLightbulbFilamentBold } from "react-icons/pi";
import { DescriptionAbout } from "../components/AboutComponents/DescriptionAbout";
import { TitleAbout } from "../components/AboutComponents/TitleAbout";
import { AboutCard } from "../components/AboutComponents/AboutCard";
import { SectionOurMission } from "../components/AboutComponents/SectionOurMission";
import { SectionSignUp } from "../components/AboutComponents/SectionSignUp";
import { PageStatusItems } from "../components/AboutComponents/PageStatusItems";

export default function About() {
  return (
    <>
      <TitleAbout />
      <DescriptionAbout />
      <section className="flex flex-wrap justify-center w-full gap-16 py-10 bg-primary">
        <AboutCard icon={<PiLightbulbFilamentBold className="text-primary text-7xl" />} title="Continuous Innovation" paragraph="Incorporating new ideas and technologies as they emerge" />
        <AboutCard icon={<PiArticleBold className="text-primary text-7xl" />} title="Facilitating Creativity" paragraph="We want to simplify the paper creation process." />
        <AboutCard icon={<PiPaletteBold className="text-primary text-7xl" />} title="Functionality and Beauty" paragraph="Functionality with an attractive interface" />
      </section>
      <SectionOurMission />
      <SectionSignUp />
      <section className="flex flex-wrap justify-between w-2/3 gap-6 py-12 m-auto">
        <PageStatusItems icon={<PiPencilLineBold className="text-5xl text-white" />} title="Writing and Editing" paragraph="Create and enhance content effectively in a simplified editing environment." />
        <PageStatusItems icon={<PiPaintBrushBold className="text-5xl text-white" />} title="Customization" paragraph="Customize the system according to your needs and preferences." />
        <PageStatusItems icon={<PiBooks className="text-5xl text-white" />} title="Organization" paragraph="Keep information and tasks organized, enabling quick and efficient access." />
        <PageStatusItems icon={<PiStrategy className="text-5xl text-white" />} title="Planning" paragraph="Effortlessly create and track deadlines and tasks for projects and goals." />
        <PageStatusItems icon={<PiDatabaseBold className="text-5xl text-white" />} title="Database" paragraph="Store and manage information in a structured manner for easy reference." />
        <PageStatusItems icon={<PiDevices className="text-5xl text-white" />} title="All Devices" paragraph="Access your information and work from anywhere, on all devices." />
        <PageStatusItems icon={<PiHourglassHighBold className="text-5xl text-white" />} title="Progress Tracking" paragraph="Visualize your progress clearly, maintaining focus and motivation." />
        <PageStatusItems icon={<PiWrenchBold className="text-5xl text-white" />} title="Reference Organization" paragraph="Keep all research resources well-organized and accessible." />
      </section>
    </>
  );
}
