// Pages
import _Root from "./pages/_Root";
import Modal from 'react-modal';
import { LoginModal } from "./components/Modal/LoginModal";

Modal.setAppElement('#root');

export default function App() {

  return (
    <>
      <_Root />
      
      <LoginModal />
    </>
  );
}
