import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { RoommateMatchPage } from './components/RoommateMatchPage';
import { SavedPage } from './components/SavedPage';
import { ProfilePage } from './components/ProfilePage';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'roommates':
        return <RoommateMatchPage />;
      case 'saved':
        return <SavedPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="size-full flex flex-col bg-gray-50">
      <div className="flex-1 overflow-hidden">
        {renderPage()}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}