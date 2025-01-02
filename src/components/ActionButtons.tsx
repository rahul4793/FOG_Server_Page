import React from 'react';
import { Star } from 'lucide-react';

export function ActionButtons() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 py-2 px-4 rounded transition-colors duration-200 ease-in-out">
        JOIN
      </button>
      <button className="bg-gray-700 hover:bg-white text-white hover:text-gray-700 py-2 px-4 rounded transition-colors duration-200 ease-in-out">
        SPECTATE
      </button>
      <button className="bg-gray-700 hover:bg-white text-white hover:text-gray-700 py-2 px-4 rounded transition-colors duration-200 ease-in-out">
        JOIN AS COMMANDER
      </button>
      <button className="bg-transparent hover:bg-white/10 text-yellow-400 px-3 py-1 rounded-md text-sm transition-colors duration-200 flex items-center justify-center gap-1">
        <Star className="w-4 h-4" />
        13672
      </button>
    </div>
  );
}