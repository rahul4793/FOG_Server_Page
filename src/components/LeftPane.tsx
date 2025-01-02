import React from 'react';
import { 
  Home, 
  Users, 
  Server, 
  X, 
  HelpCircle 
} from 'lucide-react';

interface LeftPaneProps {
  onHomeClick: () => void;
  onUsersClick: () => void;
  onServersClick: () => void;
  onSettingsClick: () => void;
  onHelpClick: () => void;
  onExitClick: () => void;
}

const LeftPane: React.FC<LeftPaneProps> = ({ 
  onHomeClick, 
  onUsersClick, 
  onServersClick, 
  onSettingsClick, 
  onHelpClick, 
  onExitClick 
}) => {
  return (
    <div className="bg-gray-800 p-4 flex flex-col items-center"> 
      <button 
        className="text-white hover:bg-gray-700 p-2 rounded-md mb-4" 
        onClick={onHomeClick}
      >
        <Home className="w-6 h-6" />
      </button>
      <button 
        className="text-white hover:bg-gray-700 p-2 rounded-md mb-4" 
        onClick={onUsersClick}
        
      >
        <Users className="w-6 h-6" />
      </button>
      <button 
        className="text-white hover:bg-gray-700 p-2 rounded-md mb-4" 
        onClick={onServersClick}
      >
        <Server className="w-6 h-6" />
      </button>
      <button 
        className="text-white hover:bg-gray-700 p-2 rounded-md mb-15" 
        onClick={onSettingsClick}
      >
        {/* <Gear className="w-6 h-6" /> */} 
      </button> 
      <button 
        className="text-white hover:bg-gray-700 p-2 rounded-md mt-80" 
        onClick={onHelpClick} 
      >
        <HelpCircle className="w-6 h-6" />
      </button>
      <button 
        className="text-white hover:bg-red-500 p-2 rounded-md mt-20" 
        onClick={onExitClick}
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default LeftPane;