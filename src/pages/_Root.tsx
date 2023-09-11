// React Router Dom packages
import { Outlet } from "react-router-dom";

// Pages
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function _Root() {
  return (
    <div className="flex flex-col min-h-screen w-full font-inter">
      <header>
        <Header />
      </header>
      <main className="grow flex items-center justify-center">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
