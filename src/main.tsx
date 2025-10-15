import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Simple error boundary
const rootElement = document.getElementById('root')
if (!rootElement) {
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial, sans-serif;"><h1>Error: Root element not found</h1></div>'
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <BrowserRouter basename="/portfolio">
          <App />
        </BrowserRouter>
      </StrictMode>,
    )
  } catch (error) {
    console.error('React app error:', error)
    document.body.innerHTML = '<div style="padding: 20px; font-family: Arial, sans-serif;"><h1>Error Loading Portfolio</h1><p>' + error + '</p></div>'
  }
}
