import { HiOutlineLightBulb } from "react-icons/hi";
import { PiArticleBold } from "react-icons/pi";
import { BsFillPaletteFill } from "react-icons/bs"

import { DescriptionAbout } from "../components/AboutComponents/DescriptionAbout";
import { TitleAbout } from "../components/AboutComponents/TitleAbout";
import { AboutCard } from "../components/AboutComponents/AboutCard";

export default function About() {
  return (
    <>
      <TitleAbout />
      <DescriptionAbout />
      <section className="flex justify-center w-full gap-16 py-10 bg-primary">
        <AboutCard icon={<HiOutlineLightBulb className="text-primary text-7xl" />} title="Continuous Innovation" paragraph="Incorporating new ideas and technologies as they emerge" />
        <AboutCard icon={<PiArticleBold className="text-primary text-7xl" />} title="Facilitating Creativity" paragraph="We want to simplify the paper creation process." />
        <AboutCard icon={<BsFillPaletteFill className="text-primary text-7xl" />} title="Functionality and Beauty" paragraph="Functionality with an attractive interface" />
      </section>
    </>
  );
}
