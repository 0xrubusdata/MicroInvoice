
import { useState } from 'react';
import LandingNav from '@/components/landing/LandingNav';
import LandingHeader from '@/components/landing/LandingHeader';
import LandingSection from '@/components/landing/LandingSection';
import LandingFooter from '@/components/landing/LandingFooter';

const Landing = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // This will be replaced with real authentication logic later
  const handleLogin = () => {
    setIsAuthenticated(true);
    // Redirect to dashboard - for now we'll just show it
    window.location.href = '/app';
  };

  return (
    <div className="landing-page">
      <LandingNav onLogin={handleLogin} />
      <LandingHeader onLogin={handleLogin} />
      <LandingSection />
      <LandingSection secondary />
      <LandingSection />
      <LandingSection secondary />
      <LandingSection />
      <LandingSection secondary />
      <LandingSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
