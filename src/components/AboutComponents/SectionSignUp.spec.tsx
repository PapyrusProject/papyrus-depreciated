//imports teste
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom";

//componente a ser testado
import { SectionSignUp } from './SectionSignUp'
import { BrowserRouter } from 'react-router-dom'

const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
    useNavigate: () => mockNavigate
}))


describe('signup', () => {

    it('found button sign up'), () => {
        render(<BrowserRouter><SectionSignUp/></BrowserRouter>)

        expect(screen.getByText('Sing Up')).toBeInTheDocument();
    }

    it('test button sign up', async () => {

        render(<BrowserRouter><SectionSignUp /></BrowserRouter>)

        await screen.findByText('Sign Up');

        mockNavigate.mockClear();

        fireEvent.click(screen.getByText('Sign Up'))

        await waitFor(() => window.location.pathname === '/signup');

        expect(window.location.pathname).toEqual('/signup');
    })
})