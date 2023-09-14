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
            className={`p-1 text-md font-semibold ${atualPage ? 'text-secondary' : 'text-black'} hover:text-primary`}
        >
            {name}
        </a>
    )
}