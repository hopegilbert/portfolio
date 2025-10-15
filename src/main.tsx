import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Error boundary and debugging
try {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }
  
  console.log('React app starting...')
  
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </StrictMode>,
  )
  
  console.log('React app mounted successfully')
} catch (error) {
  console.error('Failed to mount React app:', error)
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial, sans-serif;"><h1>Error Loading Portfolio</h1><p>There was an error loading the portfolio. Please refresh the page or try again later.</p><p>Error: ' + error + '</p></div>'
}
