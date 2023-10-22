//import teste
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

//componete a ser testado
import { BrowserRouter } from 'react-router-dom'
import Erro404 from './Erro404'

const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
    useNavigate: () => mockNavigate
}))

describe('erro 404', () => {

    it('found button go to home', () => {
        render(<BrowserRouter><Erro404 /></BrowserRouter>)

        expect(screen.getByText('Go to home page'))
    })

    it('test button go to home', async () => {
        render(<BrowserRouter><Erro404 /></BrowserRouter>)

        await screen.findByText('Go to home page')

        mockNavigate.mockClear();

        fireEvent.click(screen.getByText('Go to home page'))

        await waitFor(() => window.location.pathname === '/')

        expect(window.location.pathname).toEqual('/')
    })
})