// Zentrale Design-Konfiguration für Sinsier PWA
// Alle Layout-Änderungen (Farben, Spacing, etc.) hier vornehmen

export const designConfig = {
  // Farbschema
  colors: {
    // Hauptfarben
    primary: {
      main: '#762a82',      // Hauptlila
      light: '#9c4db4',     // Helleres Lila
      dark: '#4a1a52',      // Dunkleres Lila
      contrast: '#ffffff'   // Kontrast-Text
    },
    
    // Akzentfarben
    accent: {
      main: '#f59e0b',      // Gold
      light: '#fbbf24',     // Helleres Gold
      dark: '#d97706',      // Dunkleres Gold
      contrast: '#000000'   // Kontrast-Text
    },
    
    // Hintergrundfarben
    background: {
      primary: '#000000',   // Haupt-Hintergrund (Schwarz)
      secondary: '#111827', // Karten/Container
      tertiary: '#1f2937',  // Erhöhte Elemente
      modal: 'rgba(0, 0, 0, 0.8)' // Modal-Overlay
    },
    
    // Textfarben
    text: {
      primary: '#ffffff',   // Haupt-Text
      secondary: '#d1d5db', // Sekundär-Text
      muted: '#9ca3af',     // Gedämpfter Text
      disabled: '#6b7280'   // Deaktiviert
    },
    
    // Grenzfarben
    border: {
      primary: '#374151',   // Standard-Rahmen
      secondary: '#4b5563', // Erhöhte Rahmen
      focus: '#762a82',     // Focus-Rahmen
      success: '#10b981',   // Erfolg
      error: '#ef4444',     // Fehler
      warning: '#f59e0b'    // Warnung
    },
    
    // Status-Farben
    status: {
      online: '#10b981',    // Online-Status
      away: '#f59e0b',      // Abwesend
      offline: '#6b7280',   // Offline
      verified: '#3b82f6'   // Verifiziert
    }
  },
  
  // Spacing & Größen
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    
    // Spezielle Abstände
    container: '1rem',        // Container Padding
    navigation: '5rem',       // Navigation Height
    header: '4rem',          // Header Height
    card: '1.5rem'           // Card Padding
  },
  
  // Border Radius
  borderRadius: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px'    // Vollständig rund
  },
  
  // Schriften
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Poppins', 'system-ui', 'sans-serif']
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem'  // 36px
    },
    
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  
  // Schatten & Effekte
  effects: {
    shadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      glow: '0 0 20px rgba(118, 42, 130, 0.3)'
    },
    
    blur: {
      sm: '4px',
      md: '8px',
      lg: '16px'
    },
    
    transition: {
      fast: '150ms ease-in-out',
      normal: '200ms ease-in-out',
      slow: '300ms ease-in-out'
    }
  },
  
  // Z-Index Layering
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    modal: 30,
    popover: 40,
    tooltip: 50
  },
  
  // Breakpoints (für responsive Design)
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
} as const

// CSS Custom Properties Generator
export const generateCSSVariables = () => {
  const { colors, spacing, borderRadius, effects } = designConfig
  
  return {
    // Farben
    '--color-primary': colors.primary.main,
    '--color-primary-light': colors.primary.light,
    '--color-primary-dark': colors.primary.dark,
    '--color-accent': colors.accent.main,
    '--color-accent-light': colors.accent.light,
    '--color-background': colors.background.primary,
    '--color-background-secondary': colors.background.secondary,
    '--color-text-primary': colors.text.primary,
    '--color-text-secondary': colors.text.secondary,
    '--color-border': colors.border.primary,
    
    // Spacing
    '--spacing-container': spacing.container,
    '--spacing-navigation': spacing.navigation,
    '--spacing-card': spacing.card,
    
    // Border Radius
    '--radius-sm': borderRadius.sm,
    '--radius-md': borderRadius.md,
    '--radius-lg': borderRadius.lg,
    '--radius-xl': borderRadius.xl,
    
    // Effects
    '--shadow-glow': effects.shadow.glow,
    '--transition-normal': effects.transition.normal
  }
}

// Utility-Funktionen
export const getColor = (path: string) => {
  const keys = path.split('.')
  let value: any = designConfig.colors
  
  for (const key of keys) {
    value = value?.[key]
  }
  
  return value || '#000000'
}

export const getSpacing = (size: keyof typeof designConfig.spacing) => {
  return designConfig.spacing[size]
}

export const getBorderRadius = (size: keyof typeof designConfig.borderRadius) => {
  return designConfig.borderRadius[size]
}

// Theme Variants (für spätere Dark/Light Mode Unterstützung)
export const themes = {
  dark: designConfig, // Aktuelles Design ist bereits dark
  
  // Für zukünftige Light Mode Implementierung
  light: {
    ...designConfig,
    colors: {
      ...designConfig.colors,
      background: {
        primary: '#ffffff',
        secondary: '#f9fafb',
        tertiary: '#f3f4f6',
        modal: 'rgba(255, 255, 255, 0.8)'
      },
      text: {
        primary: '#111827',
        secondary: '#374151',
        muted: '#6b7280',
        disabled: '#9ca3af'
      }
    }
  }
}