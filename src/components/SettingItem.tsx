import React from 'react';

interface SettingItemProps {
  icon?: React.ReactNode;
  label: string;
  value: string;
}

export function SettingItem({ icon, label, value }: SettingItemProps) {
  return (
    <div className="flex items-center justify-between bg-gray-800/30 p-3 rounded">
      <div className="flex items-center gap-2">
        {icon && <span className="text-gray-400 w-4 h-4">{icon}</span>}
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}