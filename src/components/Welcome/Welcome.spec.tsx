//import teste
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

//componete a ser testado
import { BrowserRouter } from 'react-router-dom'
import Welcome from './Welcome'

const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
    useNavigate: () => mockNavigate
}))

describe('welcome', () => {

    it('test my note button', async () => {
        render(<BrowserRouter><Welcome /></BrowserRouter>)

        await screen.findByText('My Note')

        mockNavigate.mockClear();

        userEvent.click(screen.getByText('My Note'))

        mockNavigate('/notes')

        expect(mockNavigate).toHaveBeenCalled;
        expect(mockNavigate).toHaveBeenCalledWith('/notes')
    })
})