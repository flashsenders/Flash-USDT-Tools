import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

interface WalletLoaderProps {
  onOpenWallet: () => void;
  onBuyWallet: () => void;
  walletPath: string;
  setWalletPath: (path: string) => void;
}

export function WalletLoader({ onOpenWallet, onBuyWallet, walletPath, setWalletPath }: WalletLoaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Load Flash USDT Wallet</h2>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <div className="flex gap-3">
          <ExclamationTriangleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="text-red-700 text-sm">
            <p className="mb-1">Every wallet is locked on computer MAC address and IP and cannot be used in another computer.</p>
            <p>This way our users are protected from any scammers from Telegram or other platforms.</p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={onOpenWallet}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Open Wallet
        </button>
        
        <input
          type="text"
          value={walletPath}
          onChange={(e) => setWalletPath(e.target.value)}
          placeholder="Select wallet file path..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        
        <button
          onClick={onBuyWallet}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Buy Wallet
        </button>
      </div>
    </div>
  );
}