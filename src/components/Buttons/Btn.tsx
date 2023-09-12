import { ComponentProps, ReactNode } from "react"

type LoginBtnProps = ComponentProps<'button'> & {
    name?: string,
    icon?: ReactNode,
    bgColor?: string,
    hover?: string,
    func?: void,
}
/* 
name =  texto do botão
icon = icone do botão ( Usar react icons )
bgColor = bg-COR DO BOTÃO text-COR DO TEXTO
hover = hover:bg-DO HOVER hover:text-DO HOVER
func = receber a função
*/

export default function LoginBtn({name='', icon, bgColor='', hover='', func}:LoginBtnProps){
    return(
        <button
        onClick={() => {func}}
        className={`py-1 px-4 text-lg rounded-lg border border-primary ${bgColor} ${hover}`}
        >
            {icon}
            {name}
        </button>
    )
}