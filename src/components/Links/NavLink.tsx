import { ComponentProps } from "react"

type NavLinkProps = ComponentProps<'a'> & {
    name?: string,
    page?: string,
    atualPage: boolean,
}

export default function NavLink({ name, page, atualPage }: NavLinkProps) {
    return (
        <a
            href={page}
            className={`p-1 text-lg ${atualPage ? 'text-secondary' : 'text-black'} hover:text-primary`}
        >
            {name}
        </a>
    )
}