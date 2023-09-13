import { ReactNode } from "react"

interface IProps {
  id: number,
  icon: ReactNode,
  subtitle: String,
}
export function SocialMedia(props:IProps){

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {props.icon}
      <h3 className="text-white">{props.subtitle}</h3>
    </div>
  )

}

