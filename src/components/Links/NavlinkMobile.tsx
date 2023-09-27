import { ComponentProps } from "react"

type NavLinkProps = ComponentProps<'a'> & {
    name?: string,
    page?: string,
    atualPage?: boolean,
}

export default function NavlinkMobile({ name, page, atualPage }: NavLinkProps) {
    return (
        <a
            href={page}
            className={`p-2 font-semibold  ${atualPage ? 'text-secondary' : 'text-white'} text-sm md:text-lg`}
        >
            {name}
        </a>
    )
}