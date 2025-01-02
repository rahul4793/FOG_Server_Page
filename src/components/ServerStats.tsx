import React from 'react';
import { Users, Signal, Activity } from 'lucide-react';

export function ServerStats() {
  return (
    <div className="grid grid-cols-3 gap-8 mb-8">
      <div className="bg-gray-800/50 p-4 rounded-lg transition-colors duration-200 ease-in-out font-serif"> 
        <div className="flex items-center gap-2 text-white mb-2">
          <Users className="w-4 h-4" />
          <span>PLAYERS</span>
        </div>
        <div className="text-xl font-bold text-white">60/64</div>
      </div>
      <div className="bg-gray-800/50 p-4 rounded-lg transition-colors duration-200 ease-in-out font-serif"> 
        <div className="flex items-center gap-2 text-white mb-2">
          <Signal className="w-4 h-4" />
          <span>PING</span>
        </div>
        <div className="text-xl font-bold text-white">104ms</div>
      </div>
      <div className="bg-gray-800/50 p-4 rounded-lg transition-colors duration-200 ease-in-out font-serif"> 
        <div className="flex items-center gap-2 text-white mb-2">
          <Activity className="w-4 h-4" />
          <span>TICKRATE</span>
        </div>
        <div className="text-xl font-bold text-white">60 Hz</div>
      </div>
    </div>
  );
}