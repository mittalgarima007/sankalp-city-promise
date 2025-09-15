import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import sankalpHero from '@/assets/sankalp-hero.jpg';

interface SplashScreenProps {
  onGetStarted: () => void;
}

const SplashScreen = ({ onGetStarted }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={sankalpHero} 
          alt="Sankalp Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto">
        {/* Logo/Icon Placeholder */}
        <div className="w-24 h-24 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
          <span className="text-4xl font-bold text-white">S</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          Sankalp
        </h1>
        
        {/* Tagline */}
        <p className="text-xl text-white/90 mb-12 leading-relaxed">
          A Promise for Change
        </p>
        
        {/* Description */}
        <p className="text-white/80 mb-12 text-lg leading-relaxed">
          Report civic issues, track progress, and make your city better. 
          Your voice matters in building a cleaner, safer community.
        </p>
        
        {/* Get Started Button */}
        <Button 
          variant="hero"
          size="lg"
          onClick={onGetStarted}
          className="w-full py-4 text-lg font-semibold shadow-hero transform hover:scale-105 transition-all duration-300"
        >
          Get Started
        </Button>
        
        {/* Features Preview */}
        <div className="mt-12 grid grid-cols-2 gap-4 text-white/70">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
              📱
            </div>
            <span className="text-sm">Easy Reporting</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
              📍
            </div>
            <span className="text-sm">GPS Tracking</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
              🏆
            </div>
            <span className="text-sm">Leaderboard</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
              💬
            </div>
            <span className="text-sm">Community</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent"></div>
    </div>
  );
};

export default SplashScreen;