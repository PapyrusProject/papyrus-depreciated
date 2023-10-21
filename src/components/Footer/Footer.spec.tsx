//import teste
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

//componete a ser testado
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer';

const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
    useNavigate: () => mockNavigate
}))

describe('footer', () => {

    it('found footer icons', () => {
        render(<BrowserRouter><Footer/></BrowserRouter>)

        expect(screen.getByTestId('github')).toBeInTheDocument();
        expect(screen.getByTestId('discord')).toBeInTheDocument();
    })

    it('test github icon', async () => {
        render(<BrowserRouter><Footer/></BrowserRouter>)

        await screen.findByTestId('github');

        mockNavigate.mockClear();

        const link = screen.getByTestId('github');

        expect(link.getAttribute('href')).toEqual('https://github.com/PapyrusProject/papyrus')

       // fireEvent.click(screen.getByTestId('github'));

       // await waitFor(() => window.location.href === 'https://github.com/PapyrusProject/papyrus')

       // expect(window.location.href).toEqual('https://github.com/PapyrusProject/papyrus')
    })

    it('test discord icon', async () => {
        render(<BrowserRouter><Footer/></BrowserRouter>)

        await screen.findByTestId('discord');

        const link = screen.getByTestId('discord');

        expect(link.getAttribute('href')).toEqual('https://discord.gg/QcraJAg9')
    })
})