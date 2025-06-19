import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navigation from './Navigation';
import { designConfig, generateCSSVariables } from '../config/design';
import logo from '../assets/sinsier-logo-logo-small.png';

const Layout: React.FC = () => {
  useEffect(() => {
    const cssVariables = generateCSSVariables();
    const root = document.documentElement;

    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, []);

  const layoutStyles = {
    backgroundColor: designConfig.colors.background.primary,
    color: designConfig.colors.text.primary,
    fontFamily: designConfig.typography.fontFamily.sans.join(', '),
    minHeight: '100vh'
  };

  const mainStyles = {
    paddingBottom: designConfig.spacing.navigation
  };

  return (
    <div style={layoutStyles} className="layout-container">
      {/* Logo oben links */}
      <header className="p-4">
        <Link to="/" className="inline-block">
          <img
            src={logo}
            alt="Sinsier Logo"
            className="h-10 w-auto"
          />
        </Link>
      </header>

      {/* Seiteninhalt */}
      <main style={mainStyles} className="layout-main">
        <Outlet />
      </main>

      {/* Navigation */}
      <Navigation />
    </div>
  );
};

export default Layout;
