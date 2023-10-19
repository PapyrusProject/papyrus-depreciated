import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// React Router Dom packages
import {RouterProvider} from 'react-router-dom'
import { routes } from './Routes/Routes.tsx'
import LoginProvider from './context/LoginContext'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={routes}/>
    </LoginProvider>
  </React.StrictMode>,
)
