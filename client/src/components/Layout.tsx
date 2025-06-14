import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import { designConfig, generateCSSVariables } from '../config/design'

export const Layout: React.FC = () => {
  // CSS Custom Properties beim Laden setzen
  useEffect(() => {
    const cssVariables = generateCSSVariables()
    const root = document.documentElement
    
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }, [])

  // Zentrale Layout-Styles basierend auf Design-Config
  const layoutStyles = {
    backgroundColor: designConfig.colors.background.primary,
    color: designConfig.colors.text.primary,
    fontFamily: designConfig.typography.fontFamily.sans.join(', '),
    minHeight: '100vh'
  }

  const mainStyles = {
    paddingBottom: designConfig.spacing.navigation
  }

  return (
    <div style={layoutStyles} className="layout-container">
      <main style={mainStyles} className="layout-main">
        <Outlet />
      </main>
      <Navigation />
      
      <style jsx>{`
        .layout-container {
          background-color: ${designConfig.colors.background.primary};
          color: ${designConfig.colors.text.primary};
          font-family: ${designConfig.typography.fontFamily.sans.join(', ')};
          min-height: 100vh;
        }
        
        .layout-main {
          padding-bottom: ${designConfig.spacing.navigation};
        }

        /* Globale CSS Variablen für Design System */
        :root {
          --color-primary: ${designConfig.colors.primary.main};
          --color-primary-light: ${designConfig.colors.primary.light};
          --color-primary-dark: ${designConfig.colors.primary.dark};
          --color-accent: ${designConfig.colors.accent.main};
          --color-accent-light: ${designConfig.colors.accent.light};
          --color-background: ${designConfig.colors.background.primary};
          --color-background-secondary: ${designConfig.colors.background.secondary};
          --color-background-tertiary: ${designConfig.colors.background.tertiary};
          --color-text-primary: ${designConfig.colors.text.primary};
          --color-text-secondary: ${designConfig.colors.text.secondary};
          --color-text-muted: ${designConfig.colors.text.muted};
          --color-border: ${designConfig.colors.border.primary};
          --color-border-focus: ${designConfig.colors.border.focus};
          --color-status-online: ${designConfig.colors.status.online};
          --color-status-away: ${designConfig.colors.status.away};
          --color-status-offline: ${designConfig.colors.status.offline};
          
          --spacing-xs: ${designConfig.spacing.xs};
          --spacing-sm: ${designConfig.spacing.sm};
          --spacing-md: ${designConfig.spacing.md};
          --spacing-lg: ${designConfig.spacing.lg};
          --spacing-xl: ${designConfig.spacing.xl};
          --spacing-container: ${designConfig.spacing.container};
          --spacing-navigation: ${designConfig.spacing.navigation};
          --spacing-card: ${designConfig.spacing.card};
          
          --radius-sm: ${designConfig.borderRadius.sm};
          --radius-md: ${designConfig.borderRadius.md};
          --radius-lg: ${designConfig.borderRadius.lg};
          --radius-xl: ${designConfig.borderRadius.xl};
          --radius-2xl: ${designConfig.borderRadius['2xl']};
          
          --shadow-glow: ${designConfig.effects.shadow.glow};
          --transition-normal: ${designConfig.effects.transition.normal};
          --transition-fast: ${designConfig.effects.transition.fast};
          --transition-slow: ${designConfig.effects.transition.slow};
        }

        /* Design System Utility Classes */
        .bg-primary { background-color: var(--color-primary) !important; }
        .bg-accent { background-color: var(--color-accent) !important; }
        .bg-secondary { background-color: var(--color-background-secondary) !important; }
        .bg-tertiary { background-color: var(--color-background-tertiary) !important; }
        
        .text-primary { color: var(--color-text-primary) !important; }
        .text-secondary { color: var(--color-text-secondary) !important; }
        .text-muted { color: var(--color-text-muted) !important; }
        .text-accent { color: var(--color-accent) !important; }
        
        .border-primary { border-color: var(--color-border) !important; }
        .border-focus { border-color: var(--color-border-focus) !important; }
        
        .rounded-system-sm { border-radius: var(--radius-sm) !important; }
        .rounded-system-md { border-radius: var(--radius-md) !important; }
        .rounded-system-lg { border-radius: var(--radius-lg) !important; }
        .rounded-system-xl { border-radius: var(--radius-xl) !important; }
        
        .shadow-glow { box-shadow: var(--shadow-glow) !important; }
        
        .transition-system { transition: var(--transition-normal) !important; }
        
        /* Sinsier spezifische Component Classes */
        .sinsier-button-primary {
          background: linear-gradient(to right, var(--color-primary), var(--color-primary-dark));
          color: white;
          padding: var(--spacing-md) var(--spacing-lg);
          border-radius: var(--radius-lg);
          font-weight: 600;
          transition: var(--transition-normal);
          border: none;
          cursor: pointer;
        }
        
        .sinsier-button-primary:hover {
          background: linear-gradient(to right, var(--color-primary-light), var(--color-primary));
          box-shadow: var(--shadow-glow);
        }
        
        .sinsier-button-accent {
          background: linear-gradient(to right, var(--color-accent), var(--color-accent-light));
          color: black;
          padding: var(--spacing-md) var(--spacing-lg);
          border-radius: var(--radius-lg);
          font-weight: 600;
          transition: var(--transition-normal);
          border: none;
          cursor: pointer;
        }
        
        .sinsier-card {
          background-color: var(--color-background-secondary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: var(--spacing-card);
          transition: var(--transition-normal);
        }
        
        .sinsier-card:hover {
          border-color: var(--color-border-focus);
          box-shadow: 0 0 20px rgba(118, 42, 130, 0.1);
        }
        
        .sinsier-input {
          background-color: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          color: var(--color-text-primary);
          padding: var(--spacing-md);
          transition: var(--transition-normal);
          width: 100%;
        }
        
        .sinsier-input:focus {
          border-color: var(--color-border-focus);
          outline: none;
          box-shadow: 0 0 0 3px rgba(118, 42, 130, 0.1);
        }
        
        .sinsier-input::placeholder {
          color: var(--color-text-muted);
        }
        
        .sinsier-gradient-text {
          background: linear-gradient(to right, var(--color-primary-light), var(--color-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .sinsier-navigation {
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(16px);
          border-top: 1px solid var(--color-border);
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: var(--spacing-navigation);
          z-index: 50;
        }
        
        .status-indicator-online {
          width: 12px;
          height: 12px;
          background-color: var(--color-status-online);
          border-radius: 50%;
          border: 2px solid var(--color-background);
        }
        
        .status-indicator-away {
          width: 12px;
          height: 12px;
          background-color: var(--color-status-away);
          border-radius: 50%;
          border: 2px solid var(--color-background);
        }
        
        .status-indicator-offline {
          width: 12px;
          height: 12px;
          background-color: var(--color-status-offline);
          border-radius: 50%;
          border: 2px solid var(--color-background);
        }
      `}</style>
    </div>
  )
}

export default Layout;