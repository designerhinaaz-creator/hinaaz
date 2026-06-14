import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Global PWA installation prompt handler
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.deferredPrompt = e;
  window.dispatchEvent(new Event('pwa-prompt-changed'));
});

window.addEventListener('appinstalled', () => {
  window.deferredPrompt = null;
  window.dispatchEvent(new Event('pwa-prompt-changed'));
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

