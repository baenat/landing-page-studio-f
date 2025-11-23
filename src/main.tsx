import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AlertProvider } from './components/Alert/AlertProvider.tsx'
import { AlertContainer } from './components/Alert/AlertContainer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlertProvider>
      <AlertContainer />
      <App />
    </AlertProvider>
  </StrictMode>,
)
