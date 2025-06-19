import React, { useState } from 'react';

interface PaymentPageProps {
  onUpgrade: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ onUpgrade }) => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const plans = {
    monthly: { price: '29.99', period: 'Monat' },
    yearly: { price: '199.99', period: 'Jahr', savings: 'Spare 60€!' },
    lifetime: { price: '499.99', period: 'Einmalig', savings: 'Beste Deal!' }
  };

  return (
    <div style={{
      background: '#000',
      minHeight: '100vh',
      padding: '20px',
      color: 'white'
    }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #762a82, #ffd700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px'
          }}>
            👑 Premium Upgrade
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '1.1rem' }}>
            Unlock alle Features und erlebe Sinsier Premium
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              onClick={() => setSelectedPlan(key)}
              style={{
                background: selectedPlan === key 
                  ? 'linear-gradient(135deg, rgba(118, 42, 130, 0.3), rgba(255, 215, 0, 0.1))'
                  : 'rgba(118, 42, 130, 0.1)',
                border: selectedPlan === key 
                  ? '2px solid #ffd700' 
                  : '1px solid rgba(118, 42, 130, 0.2)',
                borderRadius: '15px',
                padding: '20px',
                marginBottom: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>
                    {key === 'monthly' && '📅 Monatlich'}
                    {key === 'yearly' && '🗓️ Jährlich'}
                    {key === 'lifetime' && '♾️ Lifetime'}
                  </div>
                  <div style={{ color: '#d1d5db' }}>€{plan.price} / {plan.period}</div>
                  {plan.savings && (
                    <div style={{ color: '#10b981', fontSize: '0.9rem', marginTop: '5px' }}>
                      ✨ {plan.savings}
                    </div>
                  )}
                </div>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: selectedPlan === key ? '2px solid #ffd700' : '2px solid #666',
                  background: selectedPlan === key ? '#ffd700' : 'transparent'
                }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(118, 42, 130, 0.1)',
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '30px'
        }}>
          <h3 style={{ color: '#a855f7', marginBottom: '15px' }}>✨ Premium Features:</h3>
          <ul style={{ color: '#d1d5db', lineHeight: '1.8' }}>
            <li>🥽 VR Intimacy Rooms</li>
            <li>💬 Unlimited Messaging</li>
            <li>👁️ See who liked you</li>
            <li>🔥 Super Likes & Boosts</li>
            <li>🛡️ Advanced Privacy Controls</li>
            <li>🎯 Priority Matching</li>
          </ul>
        </div>

        <button
          onClick={onUpgrade}
          style={{
            width: '100%',
            padding: '18px',
            background: 'linear-gradient(135deg, #762a82, #ffd700)',
            border: 'none',
            borderRadius: '15px',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          🚀 Jetzt Premium werden – €{plans[selectedPlan as keyof typeof plans].price}
        </button>

        <div style={{ textAlign: 'center', color: '#888', fontSize: '0.8rem' }}>
          Sicher bezahlen • Jederzeit kündbar • 7 Tage Geld-zurück-Garantie
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
