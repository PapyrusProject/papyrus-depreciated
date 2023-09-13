import { ReactNode } from "react"

interface IProps {
  id: number,
  icon: ReactNode,
  subtitle: String,
  path?: string
}
export function SocialMedia(props:IProps){

  return (
    <a href={props.path} key={props.id} className="flex flex-col items-center justify-center gap-4 cursor-pointer">
      {props.icon}
      <h3 className="text-white">{props.subtitle}</h3>
    </a>
  )

}
