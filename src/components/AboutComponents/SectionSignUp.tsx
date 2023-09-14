import Btn from "../Buttons/Btn";

export function SectionSignUp() {

  return (
    <section className="flex items-center justify-center py-10 bg-primary">
      <div className="flex flex-col items-center justify-center gap-3 py-8 border-2 border-white rounded-lg px-96">
        <h1 className="text-4xl font-normal text-white">Edit all your texts with Papyrus.</h1>
        <p className="text-white">Start right now, and don't delay.</p>
        <Btn
          name="Sign Up"
          bgColor="text-white border-white bg-primary px-5"
          hover="hover:text-primary hover:bg-white"
        />
      </div>
    </section>
  )

}
