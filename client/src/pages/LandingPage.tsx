import React from 'react';

console.log("LandingPage wird geladen");

const LandingPage: React.FC = () => {
  return (
    <div style={{
      background: '#000000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(118, 42, 130, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px', zIndex: 2 }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          background: 'linear-gradient(135deg, #762a82 0%, #a855f7 50%, #ffd700 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '15px',
          fontWeight: '900',
          letterSpacing: '-2px',
          textShadow: '0 0 30px rgba(118, 42, 130, 0.5)'
        }}>
          ❤️ Sinsier
        </h1>
        <p style={{
          fontSize: '1.4rem',
          color: '#e5e7eb',
          marginBottom: '12px',
          fontWeight: '500'
        }}>
          Deine Community für ein sexpositives Zusammenkommen
        </p>
        <p style={{
          fontSize: '1.1rem',
          background: 'linear-gradient(90deg, #762a82, #ffd700)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '600'
        }}>
          VR-Erlebnisse • Premium Features • Exklusive Community
        </p>
      </div>

      {/* Main CTA */}
      <div style={{ textAlign: 'center', marginBottom: '40px', zIndex: 2 }}>
        <button style={{
          background: 'linear-gradient(135deg, #762a82 0%, #a855f7 50%, #ffd700 100%)',
          border: 'none',
          padding: '18px 50px',
          borderRadius: '50px',
          color: 'white',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '25px',
          boxShadow: '0 8px 32px rgba(118, 42, 130, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.transform = 'translateY(-2px)';
          target.style.boxShadow = '0 12px 40px rgba(118, 42, 130, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.transform = 'translateY(0)';
          target.style.boxShadow = '0 8px 32px rgba(118, 42, 130, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)';
        }}>
          🚀 Premium erleben
        </button>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: 'rgba(118, 42, 130, 0.2)',
            border: '2px solid #762a82',
            padding: '14px 30px',
            borderRadius: '30px',
            color: '#e5e7eb',
            fontSize: '1rem',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            fontWeight: '600'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.background = 'rgba(118, 42, 130, 0.4)';
            target.style.borderColor = '#a855f7';
            target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.background = 'rgba(118, 42, 130, 0.2)';
            target.style.borderColor = '#762a82';
            target.style.color = '#e5e7eb';
          }}>
            Login
          </button>
          <button style={{
            background: 'rgba(255, 215, 0, 0.1)',
            border: '2px solid #ffd700',
            padding: '14px 30px',
            borderRadius: '30px',
            color: '#ffd700',
            fontSize: '1rem',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            fontWeight: '600'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.background = 'rgba(255, 215, 0, 0.2)';
            target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.background = 'rgba(255, 215, 0, 0.1)';
            target.style.color = '#ffd700';
          }}>
            Registrieren
          </button>
        </div>
      </div>

      {/* Premium Features Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        maxWidth: '1200px',
        width: '100%',
        zIndex: 2
      }}>
        {/* VR Experience - Highlight Feature */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(118, 42, 130, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(255, 215, 0, 0.1) 100%)',
          padding: '30px',
          borderRadius: '20px',
          textAlign: 'center',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(118, 42, 130, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          gridColumn: typeof window !== 'undefined' && window.innerWidth > 768 ? 'span 2' : 'span 1'
        }}>
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            background: 'linear-gradient(45deg, #762a82, #ffd700)',
            padding: '5px 12px',
            borderRadius: '15px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: 'white'
          }}>
            PREMIUM
          </div>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🥽</div>
          <h3 style={{ 
            background: 'linear-gradient(90deg, #762a82, #ffd700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '15px',
            fontSize: '1.5rem',
            fontWeight: '700'
          }}>VR Intimacy Rooms</h3>
          <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: '1.6' }}>
            Erlebe völlig neue Dimensionen der Intimität in unseren exklusiven Virtual Reality Räumen. 
            Authentische Begegnungen in sicherer, immersiver Umgebung.
          </p>
        </div>

        <div style={{
          background: 'rgba(118, 42, 130, 0.15)',
          padding: '25px',
          borderRadius: '20px',
          textAlign: 'center',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(118, 42, 130, 0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.background = 'rgba(118, 42, 130, 0.25)';
          target.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.background = 'rgba(118, 42, 130, 0.15)';
          target.style.transform = 'translateY(0)';
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📱</div>
          <h3 style={{ color: '#a855f7', marginBottom: '12px', fontWeight: '600' }}>Smart Matching</h3>
          <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5' }}>
            KI-gestütztes Matching basierend auf deinen Vorlieben und Fantasien. 
            Finde deine perfekte Verbindung.
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 215, 0, 0.1)',
          padding: '25px',
          borderRadius: '20px',
          textAlign: 'center',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.background = 'rgba(255, 215, 0, 0.2)';
          target.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.background = 'rgba(255, 215, 0, 0.1)';
          target.style.transform = 'translateY(0)';
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🛡️</div>
          <h3 style={{ color: '#ffd700', marginBottom: '12px', fontWeight: '600' }}>Absolute Diskretion</h3>
          <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Höchste Sicherheitsstandards und Anonymität. 
            Deine Privatsphäre ist unser oberstes Gebot.
          </p>
        </div>

        <div style={{
          background: 'rgba(118, 42, 130, 0.15)',
          padding: '25px',
          borderRadius: '20px',
          textAlign: 'center',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(118, 42, 130, 0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.background = 'rgba(118, 42, 130, 0.25)';
          target.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.background = 'rgba(118, 42, 130, 0.15)';
          target.style.transform = 'translateY(0)';
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🌈</div>
          <h3 style={{ color: '#a855f7', marginBottom: '12px', fontWeight: '600' }}>Inclusive Community</h3>
          <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Alle Identitäten, Orientierungen und Fantasien sind willkommen. 
            Vielfalt macht uns stark.
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 215, 0, 0.1)',
          padding: '25px',
          borderRadius: '20px',
          textAlign: 'center',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.background = 'rgba(255, 215, 0, 0.2)';
          target.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.background = 'rgba(255, 215, 0, 0.1)';
          target.style.transform = 'translateY(0)';
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💎</div>
          <h3 style={{ color: '#ffd700', marginBottom: '12px', fontWeight: '600' }}>Premium Content</h3>
          <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Exklusive Inhalte, Live-Events und Premium-Features nur für 
            verifizierte Community-Mitglieder.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ 
        marginTop: '50px', 
        textAlign: 'center',
        zIndex: 2
      }}>
        <p style={{
          color: '#9ca3af',
          fontSize: '0.9rem',
          marginBottom: '20px'
        }}>
          Bereits über 50.000 verifizierte Mitglieder 🔥
        </p>
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          fontSize: '0.8rem',
          color: '#6b7280'
        }}>
          <span>18+ Only</span>
          <span>•</span>
          <span>Verifizierte Profile</span>
          <span>•</span>
          <span>24/7 Support</span>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @media (max-width: 768px) {
            .grid {
              grid-template-columns: 1fr;
            }
          }
        `
      }} />
    </div>
  );
};

export default LandingPage;