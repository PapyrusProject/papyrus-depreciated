import { X } from '@phosphor-icons/react';
import userIcon from '../../assets/user-fill.svg'
import passwordIcon from '../../assets/password-icon.svg'
import Modal from 'react-modal';
import Btn from '../Buttons/Btn';

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
        <X className="w-6 h-6" />
      </button>

      <form className="flex flex-col items-center justify-center gap-7">
        <h2 className="text-[3.35rem] text-primary font-bold mb-7">
          Papyrus
        </h2>
        <h3 className="text-4xl font-semibold">
          Login
        </h3>

        <div className='w-96 bg-gray flex items-center gap-7 rounded-lg px-4 py-3'>
          <img src={userIcon} alt='Ícone de usuário' />
          <input
            type="email"
            required
            placeholder="Type your e-mail"
            className=" text-lg placeholder:text-black/50 bg-gray border-none outline-none"
          />
        </div>

        <div className='w-96 bg-gray flex items-center gap-7 rounded-lg px-4 py-3'>
          <img src={passwordIcon} alt='Ícone de password' />
          <input
            type="password"
            required
            placeholder="Type your password"
            className=" text-lg placeholder:text-black/50 bg-gray border-none outline-none"
          />
        </div>

        <a
          href="#"
          className='font-semibold text-lg text-black/50 hover:text-black/30'
        >
          Reset password
        </a>
        
        <Btn
          name='Login'
          bgColor="bg-white text-primary"
          hover="hover:bg-primary hover:text-white"
        />
      </form>
    </Modal>
  )
}