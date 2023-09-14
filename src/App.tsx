// Pages
import { useState } from 'react'
import _Root from "./pages/_Root";
import Modal from 'react-modal';
import { LoginModal } from "./components/Modal/LoginModal";

Modal.setAppElement('#root');

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true)
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false)
  }

  return (
    <>
      <_Root onOpenLoginModal={handleOpenLoginModal} />
      
      <LoginModal
        isLoginModalOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
    </>
  );
}
