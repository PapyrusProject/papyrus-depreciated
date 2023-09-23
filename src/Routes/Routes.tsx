// React Router Dom Packages
import { createBrowserRouter } from "react-router-dom";

// Pages
import App from "../App";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import Users from "../pages/Users";
import SignUp from "../pages/SignUp";
import Page404 from "../pages/404";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Services /> },
      { path: "/users", element: <Users /> },
      { path: "/signup", element: <SignUp /> },
      {path: "/404", element: <Page404 />}
    ],
  },
]);
