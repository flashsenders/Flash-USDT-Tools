import React from 'react';

interface NetworkSelectorProps {
  selectedNetwork: string;
  onNetworkChange: (network: string) => void;
}

export function NetworkSelector({ selectedNetwork, onNetworkChange }: NetworkSelectorProps) {
  const networks = ['TRC20', 'ERC20', 'BEP20', 'BEP2', 'SOLANA', 'POLYGON'];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        USDT Network
      </label>
      <div className="grid grid-cols-3 gap-3">
        {networks.map((network) => (
          <label
            key={network}
            className="relative flex items-center justify-center"
          >
            <input
              type="radio"
              name="network"
              value={network}
              checked={selectedNetwork === network}
              onChange={(e) => onNetworkChange(e.target.value)}
              className="sr-only"
            />
            <div className={`
              w-full text-center px-3 py-2 rounded-lg cursor-pointer transition-colors
              ${selectedNetwork === network
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}>
              {network}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}