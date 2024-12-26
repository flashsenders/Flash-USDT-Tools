import React from 'react';

interface Network {
  id: string;
  name: string;
}

const networks: Network[] = [
  { id: 'TRC20', name: 'TRC20' },
  { id: 'ERC20', name: 'ERC20' },
  { id: 'BEP20', name: 'BEP20' },
  { id: 'BEP2', name: 'BEP2' },
  { id: 'SOLANA', name: 'SOLANA' },
  { id: 'POLYGON', name: 'POLYGON' },
];

interface SendFormProps {
  recipientAddress: string;
  amount: string;
  selectedNetwork: string;
  onAddressChange: (address: string) => void;
  onAmountChange: (amount: string) => void;
  onNetworkChange: (network: string) => void;
  onSubmit: () => void;
}

export function SendForm({
  recipientAddress,
  amount,
  selectedNetwork,
  onAddressChange,
  onAmountChange,
  onNetworkChange,
  onSubmit,
}: SendFormProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Send USDT</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Recipient USDT address
          </label>
          <input
            id="address"
            type="text"
            value={recipientAddress}
            onChange={(e) => onAddressChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Amount USDT
          </label>
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            USDT Network
          </label>
          <div className="grid grid-cols-3 gap-3">
            {networks.map((network) => (
              <label
                key={network.id}
                className="relative flex items-center justify-center"
              >
                <input
                  type="radio"
                  name="network"
                  value={network.id}
                  checked={selectedNetwork === network.id}
                  onChange={(e) => onNetworkChange(e.target.value)}
                  className="sr-only"
                />
                <div className={`
                  w-full text-center px-3 py-2 rounded-lg cursor-pointer
                  ${selectedNetwork === network.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}>
                  {network.name}
                </div>
              </label>
            ))}
          </div>
        </div>
        
        <button
          onClick={onSubmit}
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
        >
          Send Flash!
        </button>
      </div>
    </div>
  );
}