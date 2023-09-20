import { ReactNode } from "react"

interface IProps {
  icon: ReactNode,
  subtitle: string,
  path?: string
}
export function SocialMedia(props:IProps){

  return (
    <a href={props.path} className="flex flex-col items-center justify-center gap-4 cursor-pointer">
      {props.icon}
      <h3 className="text-white">{props.subtitle}</h3>
    </a>
  )

}
