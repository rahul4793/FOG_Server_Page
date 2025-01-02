import React from 'react';
import { Header } from './components/Header';
import { ActionButtons } from './components/ActionButtons';
import { ServerStats } from './components/ServerStats';
import { SettingsGrid } from './components/SettingsGrid';
import RightPane  from './components/RightPane';
import { BottomPane } from './components/BottomPane';
import menuBackground from './assets/menu__background.jpg';
import LeftPane from './components/LeftPane';

function App() {
  const handleHomeClick = () => {
    console.log("Home button clicked");
  };

  const handleUsersClick = () => {
    console.log("Users button clicked");
  };

  const handleServersClick = () => {
    console.log("Servers button clicked");
  };

  const handleSettingsClick = () => {
    console.log("Settings button clicked");
  };

  const handleHelpClick = () => {
    console.log("Help button clicked");
  };

  const handleExitClick = () => {
    console.log("Exit button clicked");
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${menuBackground})` }}>
      <div className="flex">
        <LeftPane
          onHomeClick={handleHomeClick}
          onUsersClick={handleUsersClick}
          onServersClick={handleServersClick}
          onSettingsClick={handleSettingsClick}
          onHelpClick={handleHelpClick}
          onExitClick={handleExitClick}
        />
        <div className="flex-grow p-4">
          <Header />
          <ActionButtons />
          <ServerStats />
          <SettingsGrid />
          <BottomPane />
        </div>
        <RightPane  /> 
      </div>
    </div>
  );
}

export default App;

// isOpen={false} onToggle={function (): void {
//   throw new Error('Function not implemented.');
// } }