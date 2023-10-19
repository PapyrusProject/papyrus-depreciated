import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import LoginProvider from "../../context/LoginContext";
import { LoginModal } from "../Modal/LoginModal";

const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
    useNavigate: () => mockNavigate
}))

describe("testing header component", ()=>{

  it("checking if the components are on screen", ()=>{

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Service")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  })

  it("testing whether the logo component is sending to the right route", async()=>{

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    await screen.findAllByTestId("logo");

    mockNavigate.mockClear();

    fireEvent.click(screen.getByTestId("logo"))

    await waitFor(()=> window.location.pathname === "/")

    expect(window.location.pathname).toEqual("/");
  })

  it("testing whether the home component is sending to the right route", async()=>{

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    await screen.findByText('Home');

    mockNavigate.mockClear();

    fireEvent.click(screen.getByText('Home'))

    await waitFor(()=> window.location.pathname === "/")

    expect(window.location.pathname).toEqual("/");
  })

  it("testing whether the about component is sending to the right route", async()=>{

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    await screen.findByText('About');

    mockNavigate.mockClear();

    fireEvent.click(screen.getByText('About'))

    await waitFor(()=> window.location.pathname === "/about")

    expect(window.location.pathname).toEqual("/about");
  })
  
  it("testing whether the service component is sending to the right route", async()=>{

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    await screen.findByText('Service');

    mockNavigate.mockClear();

    fireEvent.click(screen.getByText('Service'))

    await waitFor(()=> window.location.pathname === "/service")

    expect(window.location.pathname).toEqual("/service");
  })
  
  it("testing whether the contact component is sending to the right route", async()=>{

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    await screen.findByText('Contact');

    mockNavigate.mockClear();

    fireEvent.click(screen.getByText('Contact'))

    await waitFor(()=> window.location.pathname === "/contact")

    expect(window.location.pathname).toEqual("/contact");
  })

  it("testing whether the sign up component is sending to the right route", async()=>{

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    await screen.findByText('Sign Up');

    mockNavigate.mockClear();

    fireEvent.click(screen.getByText('Sign Up'))

    await waitFor(()=> window.location.pathname === "/signup");

    expect(window.location.pathname).toEqual("/signup");
  })

  it("testing whether the login component is sending to the right route", async()=>{
    
    render(
      <LoginProvider>
        <BrowserRouter>
          <Header />
          <LoginModal />
        </BrowserRouter>
      </LoginProvider>
    )

    await screen.findByText('Login');

    fireEvent.click(screen.getByText('Login'));

    expect(await screen.findByTestId("loginModal")).toBeInTheDocument();
  })

})
