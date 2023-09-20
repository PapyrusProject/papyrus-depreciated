import { ComponentProps } from "react"

type NavLinkProps = ComponentProps<'a'> & {
    name?: string,
    page?: string,
    atualPage: boolean,
}

export default function Navlink({ name, page, atualPage }: NavLinkProps) {
    return (
        <a
            href={page}
            className={`p-1 font-semibold ${atualPage ? 'text-secondary' : 'text-black'} hover:text-primary text-sm md:text-md lg:text-xl   `}
        >
            {name}
        </a>
    )
}