// src/App.tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureCards from '../components/FeatureCards';

const Page1: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <FeatureCards />
    </div>
  );
}

export default Page1;
