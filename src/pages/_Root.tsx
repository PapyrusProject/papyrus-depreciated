// React Router Dom packages
import { Outlet } from "react-router-dom";

// Pages
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export type _RootProps = {
  onOpenLoginModal(): void,
}

export default function _Root({ onOpenLoginModal }: _RootProps) {
  return (
    <div className="flex flex-col min-h-screen w-full font-inter bg-white">
      <header>
        <Header onOpenLoginModal={onOpenLoginModal} />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
