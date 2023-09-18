import Image from "../../assets/rafiki.svg";

export function SectionOurMission() {

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-16 py-16 lg:gap-48 lg:flex-row">
      <div className="flex flex-col w-3/4 gap-6 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-primary">
          Our Mission
        </h1>
        <p>
          To empower individuals and teams to manage information, projects, and collaborations more effectively and flexibly. Papyrus aims to provide a versatile and highly customizable platform that enables people to create and organize their own productivity and information management solutions tailored to their unique needs. This includes the creation of documents, databases, to-do lists, notes, and much more, all within a single digital environment.
        </p>
      </div>
      <img src={Image} alt="Imagem de estilo para a pagina" />
    </section>
  )

}
