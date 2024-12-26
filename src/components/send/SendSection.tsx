import React from 'react';
import { Card } from '../layout/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { NetworkSelector } from './NetworkSelector';

interface SendSectionProps {
  recipientAddress: string;
  amount: string;
  selectedNetwork: string;
  onAddressChange: (address: string) => void;
  onAmountChange: (amount: string) => void;
  onNetworkChange: (network: string) => void;
  onSend: () => void;
}

export function SendSection({
  recipientAddress,
  amount,
  selectedNetwork,
  onAddressChange,
  onAmountChange,
  onNetworkChange,
  onSend
}: SendSectionProps) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-6">Send USDT</h2>
      
      <div className="space-y-6">
        <Input
          id="address"
          label="Recipient USDT address"
          value={recipientAddress}
          onChange={(e) => onAddressChange(e.target.value)}
        />
        
        <Input
          id="amount"
          label="Amount USDT"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
        
        <NetworkSelector
          selectedNetwork={selectedNetwork}
          onNetworkChange={onNetworkChange}
        />
        
        <Button fullWidth onClick={onSend}>
          Send Flash!
        </Button>
      </div>
    </Card>
  );
}