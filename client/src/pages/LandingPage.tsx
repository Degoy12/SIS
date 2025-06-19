import React from 'react';
import logo from '../assets/Sinsier-logo1.png';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div style={{
      background: '#000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      
      {/* Logo ersetzt Headline */}
      <img 
        src={logo} 
        alt="Sinsier Logo" 
        style={{ height: '280px', marginBottom: '20px' }}
      />

      <p style={{ fontSize: '1.4rem', color: '#e5e7eb', marginBottom: '8px' }}>
        Die sexpositive Community für echte Verbindungen.
      </p>
      <p style={{
        fontSize: '1rem',
        color: '#a78bfa',
        marginBottom: '40px'
      }}>
        VR-Erlebnisse • Premium Features • Exklusive Community
      </p>

      <button 
        onClick={() => onNavigate('payment')}
        style={{
          background: 'linear-gradient(135deg, #762a82, #ffd700)',
          border: 'none',
          padding: '16px 40px',
          borderRadius: '50px',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '30px',
          boxShadow: '0 6px 20px rgba(255, 215, 0, 0.3)'
        }}
      >
        🚀 Premium erleben
      </button>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button 
          onClick={() => onNavigate('login')}
          style={{
            background: 'transparent',
            border: '2px solid #a855f7',
            padding: '12px 24px',
            borderRadius: '30px',
            color: '#a855f7',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Login
        </button>

        <button 
          onClick={() => onNavigate('register')}
          style={{
            background: 'transparent',
            border: '2px solid #ffd700',
            padding: '12px 24px',
            borderRadius: '30px',
            color: '#ffd700',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Registrieren
        </button>
      </div>

      <div style={{ marginTop: '50px', fontSize: '0.85rem', color: '#9ca3af' }}>
        Nur echte Mitglieder – hier gibt es nur echte Personen - 20+ only – 24/7 Support
      </div>
    </div>
  );
};

export default LandingPage;
