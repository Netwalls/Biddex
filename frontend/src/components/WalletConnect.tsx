"use client";

import React, { useState } from 'react';

export const WalletConnect: React.FC = () => {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState<string | null>(null);

    const connectFreighter = async () => {
        console.log("Connecting to Freighter...");
        setConnected(true);
        setAddress("G...FREIGHTER");
    };

    const disconnect = () => {
        setConnected(false);
        setAddress(null);
    };

    return (
        <div className="flex items-center gap-4">
            {!connected ? (
                <button
                    onClick={connectFreighter}
                    className="px-6 py-2.5 bg-[#00FF00] hover:bg-[#00DD00] text-black text-[11px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:shadow-[0_0_25px_rgba(0,255,0,0.3)] active:scale-95"
                >
                    Connect Wallet
                </button>
            ) : (
                <div className="flex items-center gap-4 group">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
                        <span className="text-[11px] font-mono font-medium text-white/60 tracking-wider">
                            {address?.slice(0, 6)}...{address?.slice(-4)}
                        </span>
                    </div>
                    <button
                        onClick={disconnect}
                        className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-[#FF3B30] transition-colors"
                    >
                        Disconnect
                    </button>
                </div>
            )}
        </div>
    );
};
