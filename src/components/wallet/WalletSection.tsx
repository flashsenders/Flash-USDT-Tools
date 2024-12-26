import React from 'react';
import { Card } from '../layout/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Alert } from '../ui/Alert';

interface WalletSectionProps {
  walletPath: string;
  onWalletPathChange: (path: string) => void;
  onOpenWallet: () => void;
  onBuyWallet: () => void;
}

export function WalletSection({ 
  walletPath, 
  onWalletPathChange, 
  onOpenWallet, 
  onBuyWallet 
}: WalletSectionProps) {
  return (
    <Card className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Load Flash USDT Wallet</h2>
      
      <Alert variant="error">
        <p className="mb-1">Every wallet is locked on computer MAC address and IP and cannot be used in another computer.</p>
        <p>This way our users are protected from any scammers from Telegram or other platforms.</p>
      </Alert>
      
      <div className="flex gap-3 mt-4">
        <Button variant="secondary" onClick={onOpenWallet}>
          Open Wallet
        </Button>
        
        <Input
          value={walletPath}
          onChange={(e) => onWalletPathChange(e.target.value)}
          placeholder="Select wallet file path..."
          className="flex-1"
        />
        
        <Button onClick={onBuyWallet}>
          Buy Wallet
        </Button>
      </div>
    </Card>
  );
}