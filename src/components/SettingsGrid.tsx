import React from 'react';
import { Globe2, Shield, Lock, Settings } from 'lucide-react';

export function SettingsGrid() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Basic Settings */}
      <div className="space-y-4">
        <h2 className="text-black text-sm font-medium mb-4">SETTINGS</h2>
        <div className="space-y-2">
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center gap-2">
              <Globe2 className="text-black" />
              <span className="text-black">REGION</span>
            </div>
            <span className="text-black">EUROPE - DE</span> 
          </button>
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center gap-2">
              <Shield className="text-black" />
              <span className="text-black">PUNKBUSTER</span>
            </div>
            <span className="text-black">ON</span> 
          </button>
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center gap-2">
              <Settings className="text-black" />
              <span className="text-black">FAIRFIGHT</span>
            </div>
            <span className="text-black">ON</span> 
          </button>
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center gap-2">
              <Lock className="text-black" />
              <span className="text-black">PASSWORD</span>
            </div>
            <span className="text-black">OFF</span> 
          </button>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="space-y-4">
        <h2 className="text-black text-sm font-medium mb-4">ADVANCED</h2>
        <div className="space-y-2">
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <span className="text-black">MINIMAP</span>
            <span className="text-black">ON</span> 
          </button>
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <span className="text-black">VEHICLES</span>
            <span className="text-black">ON</span> 
          </button>
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <span className="text-black">TEAM BALANCE</span>
            <span className="text-black">ON</span> 
          </button>
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <span className="text-black">HUD</span>
            <span className="text-black">ON</span> 
          </button>
        </div>
      </div>

      {/* Rules */}
      <div className="space-y-4">
        <h2 className="text-black text-sm font-medium mb-4">RULES</h2>
        <div className="space-y-2">
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <span className="text-black">TICKETS</span>
            <span className="text-black">400</span> 
          </button>
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <span className="text-black">PLAYER HEALTH</span>
            <span className="text-black">100</span> 
          </button>
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <span className="text-black">BULLET DAMAGE</span>
            <span className="text-black">100</span> 
          </button>
          <button className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-transparent hover:bg-gray-100 transition-colors duration-200">
            <span className="text-black">VEHICLE SPAWN DELAY</span>
            <span className="text-black">25</span> 
          </button>
        </div>
      </div>
    </div>
  );
}