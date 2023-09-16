export function DescriptionAbout(){
  return (
    <section
      className="flex flex-col items-center justify-center w-full px-8 py-16 gap-12 lg:gap-48 lg:flex-row"
    >
      <div className="flex flex-col w-1/2 gap-5 text-center lg:text-left lg:w-1/4">
        <p className="font-semibold text-primary">
          Welcome to Papyrus
        </p>
        <h1 className="text-4xl font-bold">
          Turning Your Inspiration into Expression with Text on Paper
        </h1>
      </div>
      <div className="w-1/2 text-justify lg:w-1/3">
        <p>
          The Papyrus project is a creative exploration that was born from inspiration in Notion, a powerful digital text editing tool. This project aims to bring the versatility and expressiveness of Notion into the world of paper design, reimagining how ideas are transformed into tangible and inspiring objects.
        </p>
      </div>
    </section>
  )
}
