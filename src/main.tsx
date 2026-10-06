import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import App from './App.tsx'
import { ThemeProvider } from './theme/ThemeProvider'
import { LocaleProvider } from './i18n/LocaleProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LocaleProvider>
  </StrictMode>,
)
