import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { handleLogin } from '../components/LoginForm/useLogin'

describe('LoginForm Component', () => {
  it('Should be able to receive user email and password in the form fields', async () => {
    render(<LoginForm />)

    const inputEmail = screen.getByPlaceholderText('Insira seu e-mail')
    const inputPassword = screen.getByPlaceholderText('Insira sua senha')

    await userEvent.type(inputEmail, 'user@email.com')
    await userEvent.type(inputPassword, '123456')
    
    expect(screen.getByTestId('login-form')).toHaveFormValues({
      email: 'user@email.com',
      password: '123456'
    })
  })

  it('Should be able to call the function and return the user data', () => {
    render(<LoginForm />)

    const getDataLogin = vi.fn(handleLogin)
    const loginButton = screen.getByTestId('login-button')

    userEvent.click(loginButton)

    getDataLogin({ email: 'user@mail.com', password: '123456' })

    expect(getDataLogin).toHaveReturnedWith({
      email: 'user@mail.com',
      password: '123456'
    })
  })
})