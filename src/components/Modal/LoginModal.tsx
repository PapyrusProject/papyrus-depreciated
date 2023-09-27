import Modal from 'react-modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { PiX } from 'react-icons/pi';

interface LoginModalProps {
  isLoginModalOpen: boolean,
  onRequestClose(): void,
}

export function LoginModal({ isLoginModalOpen, onRequestClose }: LoginModalProps) {
  return (
    <Modal
      isOpen={isLoginModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="w-full max-w-[52.8rem] bg-white px-7 pt-7 pb-24 relative rounded-lg outline-none"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className='absolute top-6 right-6 hover:brightness-90 duration-200'
      >
        <PiX className="w-6 h-6" />
      </button>

      <LoginForm />
    </Modal>
  )
}