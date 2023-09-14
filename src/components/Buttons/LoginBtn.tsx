import { ComponentProps } from "react"

type LoginBtnProps = ComponentProps<'button'> & {
    name?: string,
    onOpenLoginModal?(): void,
}

export default function LoginBtn({ name, onOpenLoginModal }:LoginBtnProps){
    return(
        <button
        onClick={onOpenLoginModal}
        className="py-1 px-4 text-lg rounded-lg text-primary border border-primary hover:bg-primary hover:text-white"
        >
            {name}
        </button>
    )
}