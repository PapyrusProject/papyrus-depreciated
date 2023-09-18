import { BiLogoFacebook } from "react-icons/bi"
import { PiGithubLogo, PiGoogleLogo } from "react-icons/pi"
import { SocialMedia } from "./SocialMedia"
import { ReactNode } from "react"

export type IProps = {
  id: number,
  icon: ReactNode,
  subtitle: string,
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

export function SignUpTextComponent() {

  return (
    <section className="flex flex-col items-center justify-center gap-10 px-6 py-16 w-[100%] sm:w-[100%] lg:w-[50%] lg:py-24 xl:py-32 xl:gap-12">
      <h1 className="text-4xl font-bold text-white">HELLO</h1>
      <h2 className="text-3xl font-bold text-white">Welcome To Papyrus</h2>
      <p className="text-white">
        Lembre-se, a chave para alcançar seus objetivos está na sua determinação e perseverança. Mantenha o foco, continue trabalhando duro e você verá seus sonhos se tornarem realidade.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
        {
          socialMediaList.map(item => {
            return (
              <SocialMedia icon={item.icon} subtitle={item.subtitle} key={item.id} />
            )
          })
        }
      </div>
    </section>
  )
}
