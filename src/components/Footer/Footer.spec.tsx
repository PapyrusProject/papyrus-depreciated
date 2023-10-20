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

        fireEvent.click(screen.getByTestId('github'));

        await waitFor(() => window.location.href === 'https://github.com/PapyrusProject/papyrus')

        expect(window.location.href).toEqual('https://github.com/PapyrusProject/papyrus')
    })

    it('test discord icon', async () => {
        render(<BrowserRouter><Footer/></BrowserRouter>)

        await screen.findByTestId('discord');

        fireEvent.click(screen.getByTestId('discord'));

        await waitFor(() => window.location.href === 'https://discord.gg/QcraJAg9')

        expect(window.location.href).toEqual('https://discord.gg/QcraJAg9')
    })
})