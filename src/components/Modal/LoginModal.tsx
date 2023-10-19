import Modal from 'react-modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { PiX } from 'react-icons/pi';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';

Modal.setAppElement('body');

export function LoginModal() {
  const { isLoginModalOpen, handleCloseLoginModal } = useContext(LoginContext);

  return (
    <Modal
      isOpen={isLoginModalOpen}
      onRequestClose={handleCloseLoginModal}
      overlayClassName="react-modal-overlay"
      className="w-full max-w-[52.8rem] bg-white px-7 pt-7 pb-24 relative rounded-lg outline-none"
    >
      <button
        type="button"
        onClick={handleCloseLoginModal}
        className='absolute duration-200 top-6 right-6 hover:brightness-90'
        data-testid="loginModal"
      >
        <PiX className="w-6 h-6" />
      </button>

      <LoginForm />
    </Modal>
  )
}