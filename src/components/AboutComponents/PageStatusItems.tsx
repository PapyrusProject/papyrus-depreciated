import { IProps } from "./AboutCard"

export function PageStatusItems(props:IProps){

  return(
    <div className="flex flex-col items-center justify-center w-64 gap-4">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
        {props.icon}
      </div>
      <h3 className="font-semibold">{props.title}</h3>
      <p className="text-center">
        "{props.paragraph}"
      </p>
    </div>
  )

}
