//imports teste
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

//componente a ser testado
import { SectionSignUp } from './SectionSignUp'
import { BrowserRouter } from 'react-router-dom'

const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
    useNavigate: () => mockNavigate
}))


describe('signup', () => {


    it('test button sign up', async () => {

        render(<BrowserRouter><SectionSignUp /></BrowserRouter>)

        await screen.findByText('Sign Up');

        mockNavigate.mockClear();

        userEvent.click(screen.getByText('Sign Up'))

        mockNavigate('/signup')

        expect(mockNavigate).toHaveBeenCalled;
        expect(mockNavigate).toHaveBeenCalledWith('/signup');
    })
})