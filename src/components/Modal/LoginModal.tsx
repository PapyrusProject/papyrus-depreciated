import { X } from '@phosphor-icons/react';
import userIcon from '../../assets/user-fill.svg'
import passwordIcon from '../../assets/password-icon.svg'
import Modal from 'react-modal';
import Btn from '../Buttons/Btn';
import { useRegister } from '../RegisterForm/useRegister';

interface LoginModalProps {
  isLoginModalOpen: boolean,
  onRequestClose(): void,
}

export function LoginModal({ isLoginModalOpen, onRequestClose }: LoginModalProps) {
  const { errors, register, handleForm, handleSubmit } = useRegister();

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

      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex flex-col items-center justify-center gap-7"
      >
        <h2 className="text-[3.35rem] text-primary font-bold mb-7">
          Papyrus
        </h2>
        <h3 className="text-4xl font-semibold">
          Login
        </h3>

        <div>
          <div className='w-96 bg-gray flex items-center gap-7 rounded-lg px-4 py-3'>
            <img src={userIcon} alt='Ícone de usuário' />
            <input
              {...register("email")}
              type="email"
              required
              placeholder="Insira seu e-mail"
              className="w-full text-lg placeholder:text-black/50 bg-gray border-none outline-none"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-center italic text-secondary">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div>
          <div className='w-96 bg-gray flex items-center gap-7 rounded-lg px-4 py-3'>
            <img src={passwordIcon} alt='Ícone de password' />
            <input
              {...register("password")}
              type="password"
              required
              placeholder="Insira sua senha"
              className="w-full text-lg placeholder:text-black/50 bg-gray border-none outline-none"
            />
          </div>
          {errors.password && (
            <p className="text-sm text-center italic text-secondary">
              {errors.password?.message}
            </p>
          )}
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