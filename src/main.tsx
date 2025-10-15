import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

console.log('Portfolio app starting...')

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial, sans-serif;"><h1>Error: Root element not found</h1><p>Please check the HTML structure.</p></div>'
} else {
  console.log('Root element found, rendering app...')
  createRoot(rootElement).render(
    <BrowserRouter basename="/portfolio">
      <App />
    </BrowserRouter>
  )
  console.log('App rendered successfully!')
}
