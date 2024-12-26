import React, { useState } from 'react';
import { Container } from './components/layout/Container';
import { Card } from './components/layout/Card';
import { Header } from './components/Header';
import { CompatibilityBadges } from './components/CompatibilityBadges';
import { WalletSection } from './components/wallet/WalletSection';
import { SendSection } from './components/send/SendSection';

export default function App() {
  const [walletPath, setWalletPath] = useState('C:\\Desktop\\USDT (tether)wallet.dat');
  const [recipientAddress, setRecipientAddress] = useState('0x3a33e6531f82e1b82f956fc2226f36112995338');
  const [amount, setAmount] = useState('2184');
  const [selectedNetwork, setSelectedNetwork] = useState('ERC20');

  const handleOpenWallet = () => {
    console.log('Opening wallet...');
  };

  const handleBuyWallet = () => {
    console.log('Buying wallet...');
  };

  const handleSend = () => {
    console.log('Sending USDT...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <Card className="mb-8">
          <Header
            dailyLimit={10000000}
            sentToday={0}
            sentTotal={0}
          />
        </Card>
        
        <CompatibilityBadges />
        
        <WalletSection
          walletPath={walletPath}
          onWalletPathChange={setWalletPath}
          onOpenWallet={handleOpenWallet}
          onBuyWallet={handleBuyWallet}
        />
        
        <SendSection
          recipientAddress={recipientAddress}
          amount={amount}
          selectedNetwork={selectedNetwork}
          onAddressChange={setRecipientAddress}
          onAmountChange={setAmount}
          onNetworkChange={setSelectedNetwork}
          onSend={handleSend}
        />
      </Container>
    </div>
  );
}