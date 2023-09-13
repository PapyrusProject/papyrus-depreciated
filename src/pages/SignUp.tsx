import { ReactNode } from "react";
import { SocialMedia } from "../components/SignUpComponents/SocialMedia";
import { PiGoogleLogo, PiGithubLogo } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi"

export type IProps = {
  id: number,
  icon: ReactNode,
  subtitle: String,
}

const socialMediaList: IProps[] = [
  {
    id: 1,
    icon: <PiGoogleLogo className="text-2xl bg-white rounded-full text-primary" />,
    subtitle: "Google"
  },
  {
    id: 2,
    icon: <BiLogoFacebook className="text-2xl bg-white rounded-full text-primary " />,
    subtitle: "Facebook"
  },
  {
    id: 3,
    icon: <PiGithubLogo className="text-3xl text-white rounded-full " />,
    subtitle: "Github"
  }
]

export default function SignUp(){

  return (
    <>
      <div className="w-1/2 m-auto mt-32 border-2 rounded-lg border-primary bg-primary">
        <section className="flex flex-col items-center justify-center w-1/2 gap-10 px-16 py-32">
          <h1 className="text-4xl font-bold text-white">HELLO</h1>
          <h2 className="text-3xl font-semibold text-white">Welcome To Papyrus</h2>
          <p className="text-white">
            Lembre-se, a chave para alcançar seus objetivos está na sua determinação e perseverança. Mantenha o foco, continue trabalhando duro e você verá seus sonhos se tornarem realidade.
          </p>
          <div className="flex gap-20">
            {
              socialMediaList.map(item => {
                return (
                  <SocialMedia icon={item.icon} subtitle={item.subtitle} id={item.id} />
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )

}
