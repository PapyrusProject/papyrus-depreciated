import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import "@testing-library/jest-dom";

describe("testing sign up form component",()=>{

  it("testing whether the form elements are on screen", ()=>{
    render(<RegisterForm />);
    
    expect(screen.getByTestId("signup-button")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Insira seu nome de usuário")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Insira seu e-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Insira sua senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirme a sua senha")).toBeInTheDocument();
  })
    
  it("Checking validation in the name field", async() =>{
    render(<RegisterForm />);
    const fieldName = screen.getByPlaceholderText("Insira seu nome de usuário");

    expect(screen.queryByText("Usuário precisa ter no mínimo 4 caracteres.")).not.toBeInTheDocument();

    fireEvent.change(fieldName, { target: {value: "T"}});

    expect(await screen.findByText("Usuário precisa ter no mínimo 4 caracteres.")).toBeInTheDocument();

    fireEvent.change(fieldName, { target: {value: "TestName"}});

    expect(await screen.findByText("Usuário precisa ter no mínimo 4 caracteres.")).not.toBeInTheDocument();
  })

  it("testing 'username' field against sql injection", async() => {
    render(<RegisterForm />);
    const fieldName = screen.getByPlaceholderText("Insira seu nome de usuário");
    fireEvent.change(fieldName, { target: {value: "<script></script>"}});
    expect(await screen.findByText("Usuário deve conter letrar e numeros")).toBeInTheDocument();
  })

  it("Checking validation in the email field", async() =>{
    render(<RegisterForm />);
    const fieldEmail = screen.getByPlaceholderText("Insira seu e-mail");

    expect(screen.queryByText("Digite um email válido.")).not.toBeInTheDocument();
    
    fireEvent.change(fieldEmail, { target: {value: "emailerror"}});
    
    expect(await screen.findByText("Digite um email válido.")).toBeInTheDocument();
    
    fireEvent.change(fieldEmail, { target: {value: "email@example.com"}});

    expect(await screen.findByText("Digite um email válido.")).not.toBeInTheDocument();
  })

  it("Checking validation in the password field", async() =>{
    render(<RegisterForm />);
    const fieldPassword = screen.getByPlaceholderText("Insira sua senha");

    expect(screen.queryByText("Sua senha precisa ter no mínimo 6 caracteres.")).not.toBeInTheDocument();
    
    fireEvent.change(fieldPassword, { target: {value: "12345"}});
    
    expect(await screen.findByText("Sua senha precisa ter no mínimo 6 caracteres.")).toBeInTheDocument();
    
    fireEvent.change(fieldPassword, { target: {value: "123456"}});
    
    expect(await screen.findByText("Sua senha precisa ter no mínimo 6 caracteres.")).not.toBeInTheDocument();
  })

  it("testing 'password' field against sql injection", async() => {
    render(<RegisterForm />);
    const fieldPassword = screen.getByPlaceholderText("Insira sua senha");
    fireEvent.change(fieldPassword, { target: {value: "<script></script>"}});
    expect(await screen.findByText("Senha deve conter letrar e numeros")).toBeInTheDocument();
  })

  it("Checking validation in the password confirmation field", async() =>{
    render(<RegisterForm />);
    const fieldConfirmePassword = screen.getByPlaceholderText("Confirme a sua senha");

    expect(screen.queryByText("Digite a senha correta.")).not.toBeInTheDocument();

    fireEvent.change(fieldConfirmePassword, { target: {value: "0"}})

    expect(await screen.findByText("Digite a senha correta.")).toBeInTheDocument();

    const fieldPassword = screen.getByPlaceholderText("Insira sua senha");

    expect(screen.queryByText("O campo de senha e confirmação de senha precisam ser iguais.")).not.toBeInTheDocument();
    
    fireEvent.change(fieldPassword, { target: {value: "1234567"}});
    fireEvent.change(fieldConfirmePassword, { target: {value: "0987654"}})

    expect(await screen.findByText("O campo de senha e confirmação de senha precisam ser iguais.")).toBeInTheDocument();
    
    fireEvent.change(fieldPassword, { target: {value: "1234567"}});
    fireEvent.change(fieldConfirmePassword, { target: {value: "1234567"}})

    expect(await screen.findByText("O campo de senha e confirmação de senha precisam ser iguais.")).not.toBeInTheDocument();
  })

})



