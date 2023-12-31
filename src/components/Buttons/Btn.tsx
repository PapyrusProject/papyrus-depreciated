import { ComponentProps, ReactNode } from "react"

type LoginBtnProps = ComponentProps<'button'> & {
    name?: string,
    icon?: ReactNode,
    bgColor?: string,
    hover?: string,
    atualPage?: boolean,
    func?: () => void,
    dataTestingid?: string
}
/* 
name =  texto do botão
icon = icone do botão ( Usar react icons )
bgColor = bg-COR DO BOTÃO text-COR DO TEXTO border-COR DA BORDA
hover = hover:bg-DO HOVER hover:text-DO HOVER
func = receber a função
*/

export default function Btn({ name = '', icon, bgColor = '', hover = '', func, dataTestingid }: LoginBtnProps) {

    return (
        <button
            data-testid = {dataTestingid}
            onClick={func}
            className={`flex items-center justify-center py-1 px-4 text-lg rounded-lg border gap-2 ${bgColor} ${hover} py-0.5 px-1 md:py-1 md:px-3 text-md sm:text-lg lg:text-xl`}
        >
            {icon}
            {name}
        </button>
    )
}