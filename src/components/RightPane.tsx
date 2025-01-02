import React, { useState } from 'react';

const RightPane: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [squadName, setSquadName] = useState('');

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleSquadJoin = () => {
    if (squadName) {
      alert(`You have joined the squad: ${squadName}`);
      setSquadName(''); // Reset the input
    } else {
      alert('Please enter a squad name.');
    }
  };

  return (
    <div>
      {/* Persistent "Squad Join" Button */}
      <button
        onMouseEnter={handleMouseEnter}
        className="fixed top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded shadow-lg z-50 flex items-center space-x-2"
      >
        <span>Player Status</span>
      </button>

      {/* Right Pane Menu */}
      <div
        className={`fixed right-0 top-0 h-screen w-64 bg-gray-900 bg-opacity-70 backdrop-blur-lg text-white shadow-lg transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Menu Content */}
        <div className="p-4">
          {/* Header */}
          <h2 className="text-lg font-semibold mb-4">Squad</h2>

          {/* Squad Join Section */}
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-2">Join Squad</h3>
            <input
              type="text"
              placeholder="Enter squad name"
              value={squadName}
              onChange={(e) => setSquadName(e.target.value)}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded mb-2 outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSquadJoin}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Join Squad
            </button>
          </div>

          {/* Online Section */}
          <div>
            <h3 className="text-md font-semibold mb-2">ONLINE</h3>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://icon-library.com/images/profile-picture-icon/profile-picture-icon-0.jpg" // Replace with actual image path
                alt="Profile Image"
                className="w-10 h-10 rounded-full border-2 border-green-500"
              />
              <div>
                <p className="font-medium">Ram Prasad</p>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
          </div>

          {/* Offline Section */}
          <div>
            <h3 className="text-md font-semibold mb-2">OFFLINE</h3>
            <div className="flex items-center space-x-2">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" // Replace with actual image path
                alt="Profile Image"
                className="w-10 h-10 rounded-full border-2 border-gray-500"
              />
              <div>
                <p className="font-medium">Rahul Gupta</p>
                <p className="text-sm text-gray-500">Offline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPane;
