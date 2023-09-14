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
      <section className="flex flex-wrap justify-center w-full gap-16 py-10 h-full bg-primary">
        <AboutCard />
      </section>
      <SectionOurMission />
      <SectionSignUp />
      <section className="flex flex-wrap justify-between w-2/3 gap-6 py-12 m-auto">
        <PageStatusItems />
      </section>
    </>
  );
}
