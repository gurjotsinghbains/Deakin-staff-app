import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { StaffProvider } from './context/StaffContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <UserProvider>
    <StaffProvider>
    <App />
    </StaffProvider>
    </UserProvider>
    
    </BrowserRouter>
  </StrictMode>,
)
