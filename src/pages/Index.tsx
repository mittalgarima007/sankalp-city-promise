import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import LoginScreen from '@/components/LoginScreen';
import HomePage from '@/components/HomePage';
import ReportPage from '@/components/ReportPage';
import LeaderboardPage from '@/components/LeaderboardPage';
import ProfilePage from '@/components/ProfilePage';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'login' | 'home' | 'report' | 'leaderboard' | 'profile' | 'issues' | 'rewards'>('splash');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGetStarted = () => {
    setCurrentScreen('login');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('home');
  };

  const handleNavigate = (page: string) => {
    if (page === 'issues') {
      // For now, redirect to home since we haven't built the issues page yet
      setCurrentScreen('home');
    } else if (page === 'rewards') {
      // For now, redirect to profile since we haven't built the rewards page yet
      setCurrentScreen('profile');
    } else {
      setCurrentScreen(page as any);
    }
  };

  if (!isLoggedIn && currentScreen === 'splash') {
    return <SplashScreen onGetStarted={handleGetStarted} />;
  }

  if (!isLoggedIn && currentScreen === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Main app content for logged-in users
  switch (currentScreen) {
    case 'home':
      return <HomePage onNavigate={handleNavigate} />;
    case 'report':
      return <ReportPage onNavigate={handleNavigate} />;
    case 'leaderboard':
      return <LeaderboardPage onNavigate={handleNavigate} />;
    case 'profile':
      return <ProfilePage onNavigate={handleNavigate} />;
    default:
      return <HomePage onNavigate={handleNavigate} />;
  }
};

export default Index;
