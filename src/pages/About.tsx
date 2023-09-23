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
      <section className="flex flex-col xl:flex-row items-center justify-center w-full gap-16 py-10 h-full bg-primary">
        <AboutCard />
      </section>
      <SectionOurMission />
      <SectionSignUp />
      <section className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:grid-rows-4 
      xl:grid-cols-4 xl:grid-rows-2 w-[80%] gap-6 py-12 m-auto">
        <PageStatusItems />
      </section>
    </>
  );
}
