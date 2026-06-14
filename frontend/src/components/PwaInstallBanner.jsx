import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const PwaInstallBanner = () => {
  const [hasPrompt, setHasPrompt] = useState(!!window.deferredPrompt);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Check if already running in standalone (installed) mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches 
      || window.navigator.standalone 
      || false;

    // 2. Check if user previously dismissed the prompt
    const isDismissed = localStorage.getItem('pwa_prompt_dismissed') === 'true';

    if (isStandalone || isDismissed) {
      return;
    }

    // If prompt is already available globally when component mounts
    if (window.deferredPrompt) {
      setIsVisible(true);
    }

    const handlePromptChanged = () => {
      const promptAvailable = !!window.deferredPrompt;
      setHasPrompt(promptAvailable);
      
      // Only show banner if prompt is available, and it hasn't been dismissed, and not standalone
      if (promptAvailable && !localStorage.getItem('pwa_prompt_dismissed') && !isStandalone) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('pwa-prompt-changed', handlePromptChanged);

    return () => {
      window.removeEventListener('pwa-prompt-changed', handlePromptChanged);
    };
  }, []);

  const handleInstallClick = async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return;
    
    // Show the browser's install prompt
    promptEvent.prompt();
    
    // Wait for the user's response
    const { outcome } = await promptEvent.userChoice;
    console.log(`User response to PWA install: ${outcome}`);
    
    // Clear the deferred prompt variable globally
    window.deferredPrompt = null;
    window.dispatchEvent(new Event('pwa-prompt-changed'));
    setIsVisible(false);
  };

  const handleSkipClick = () => {
    setIsVisible(false);
    // Persist dismissal so they aren't asked repeatedly
    localStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  // Only show floating footer banner on mobile/tablet (max-width: 768px)
  // We can handle visibility through responsive styles as well, or state.
  if (!isVisible) return null;

  return (
    <div className="pwa-install-banner">
      <div className="pwa-banner-content">
        <img src={logo} alt="Hinaaz Logo" className="pwa-banner-logo" />
        <div className="pwa-banner-text">
          <p className="pwa-banner-title">Install Hinaaz App</p>
          <p className="pwa-banner-subtitle">Add to Home Screen for a faster experience</p>
        </div>
      </div>
      <div className="pwa-banner-actions">
        <button onClick={handleSkipClick} className="pwa-btn-skip" id="pwa-btn-skip">
          Skip
        </button>
        <button onClick={handleInstallClick} className="pwa-btn-install" id="pwa-btn-install">
          Install
        </button>
      </div>
    </div>
  );
};

export default PwaInstallBanner;
