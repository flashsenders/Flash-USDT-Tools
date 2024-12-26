import React from 'react';

interface Stat {
  label: string;
  value: string | number;
}

interface StatsDisplayProps {
  stats: Stat[];
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="flex justify-end gap-6 text-sm">
      {stats.map((stat, index) => (
        <div key={index} className="text-right">
          <p className="text-gray-600">{stat.label}</p>
          <p className="font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}