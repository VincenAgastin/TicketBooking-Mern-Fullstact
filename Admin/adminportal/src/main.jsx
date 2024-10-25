import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeContextProvider } from './context/darkModeContext.jsx'
import {AuthContextProvider} from '../src/context/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>  
        <DarkModeContextProvider>
            <App />
        </DarkModeContextProvider>
    </AuthContextProvider> 
  </StrictMode>,
)