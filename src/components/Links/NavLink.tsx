import { ComponentProps } from "react"

type NavLinkProps = ComponentProps<'a'> & {
    name?: string,
    page?: string,
}

export default function NavLink({name, page}:NavLinkProps){
    return(
        <a 
        href={page}
        className="p-1 text-lg text-black hover:text-primary"
        >
            {name}
        </a>
    )
}