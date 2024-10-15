import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react';

export const handleWalletConnect = (e) => {
    e.preventDefault();
    // Trigger WalletMultiButton functionality
    const button = document.querySelector('.wallet-adapter-button');
    if (button) {
        button.click();
    }
    
};