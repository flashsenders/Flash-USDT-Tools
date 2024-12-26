import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const badges = [
  'Binance Compatible',
  'Coinbase Compatible',
  'Blockchain Compatible',
  'Kraken Compatible',
  'Any Wallet Compatible',
  'Any Exchange Compatible',
  'Casino Games Compatible',
  'Swap Programs Compatible'
];

export function CompatibilityBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {badges.map((badge) => (
        <div
          key={badge}
          className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm"
        >
          <CheckCircleIcon className="w-5 h-5" />
          <span>{badge}</span>
        </div>
      ))}
    </div>
  );
}