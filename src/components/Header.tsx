import React from 'react';
import { TetherIcon } from './icons/TetherIcon';
import { StatsDisplay } from './stats/StatsDisplay';

interface HeaderProps {
  dailyLimit: number;
  sentToday: number;
  sentTotal: number;
}

export function Header({ dailyLimit, sentToday, sentTotal }: HeaderProps) {
  const stats = [
    { label: 'Daily limit', value: `${dailyLimit.toLocaleString()} USDT` },
    { label: 'Sent today', value: `${sentToday.toLocaleString()} USDT` },
    { label: 'Sent total', value: `${sentTotal.toLocaleString()} USDT` }
  ];

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <TetherIcon className="w-12 h-12" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Flash USDT Sender</h1>
          <p className="text-gray-600">Send USDT into Tether Blockchain</p>
        </div>
      </div>
      <StatsDisplay stats={stats} />
    </div>
  );
}