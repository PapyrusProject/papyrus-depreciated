import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
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

})



