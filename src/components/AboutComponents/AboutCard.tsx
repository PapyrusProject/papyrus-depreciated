import { ReactNode } from "react"

export interface IProps {
  icon: ReactNode,
  title: String,
  paragraph: string
}

export function AboutCard(props:IProps){

  return (
    <div className="flex flex-col items-center gap-4 px-6 py-20 bg-white w-96 rounded-xl">
      {props.icon}
      <h2 className="text-2xl font-semibold">{props.title}</h2>
      <p className="text-center">
        {props.paragraph}
      </p>
    </div>
  )

}
