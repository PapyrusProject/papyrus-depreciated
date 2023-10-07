//import teste
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

//componete a ser testado
import { BrowserRouter } from 'react-router-dom'
import Welcome from './Welcome'

const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
    useNavigate: () => mockNavigate
}))

describe('welcome', () => {

    it('found my note button', () => {
        render(<BrowserRouter><Welcome/></BrowserRouter>)

        expect(screen.getByText('My Note')).toBeInTheDocument();
    })

    it('test my note button', async () => {
        render(<BrowserRouter><Welcome /></BrowserRouter>)

        await screen.findByText('My Note')

        mockNavigate.mockClear();

        fireEvent.click(screen.getByText('My Note'))

        await waitFor(() => window.location.pathname === '/notes')

        expect(window.location.pathname).toEqual('/notes')
    })
})