import { ReactNode, createContext, useState } from "react";

interface LoginProviderProps {
  children: ReactNode
}

type LoginContextData = {
  isLoginModalOpen: boolean;
  handleOpenLoginModal: () => void;
  handleCloseLoginModal: () => void;
}

export const LoginContext = createContext({} as LoginContextData);

function LoginProvider({ children }:LoginProviderProps){
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true)
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false)
  }

  return (
    <LoginContext.Provider value={{handleCloseLoginModal, handleOpenLoginModal, isLoginModalOpen}}>
      {children}
    </LoginContext.Provider>
  )

}

export default LoginProvider;
