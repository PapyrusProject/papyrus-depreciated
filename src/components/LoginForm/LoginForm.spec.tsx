import { describe, expect, it } from "vitest";
import { fireEvent, queryByText, render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import "@testing-library/jest-dom";

describe('test login modal', () => {
    it('found login modal components', () => {
        render(<LoginForm/>)

        expect(screen.getByTestId('login-button')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Insira seu e-mail')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Insira sua senha')).toBeInTheDocument();
    })

    it('test e-mail validation', async () => {
        render(<LoginForm/>)

        const email = screen.getByPlaceholderText('Insira seu e-mail');

        expect(screen.queryByText('Digite o seu e-mail corretamente.')).not.toBeInTheDocument();

        fireEvent.change(email, { target: {value: 'p'}});

        expect(await screen.queryByText('Endereço de email inválido.')).toBeInTheDocument();

        fireEvent.change(email, { target: {value: 'gilson@gmail.com'}});

        expect(await screen.queryByText('Endereço de email inválido.')).not.toBeInTheDocument();
    })
})