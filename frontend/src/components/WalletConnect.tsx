"use client";

import React, { useState } from 'react';

/**
 * Biddex Wallet Connection Component
 * Support for Freighter and Albedo (Simulated/Boilerplate)
 */
export const WalletConnect: React.FC = () => {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState<string | null>(null);

    const connectFreighter = async () => {
        // In a real app, use @stellar/freighter-api
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
                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20"
                >
                    Connect Wallet
                </button>
            ) : (
                <div className="flex items-center gap-3">
                    <span className="text-sm font-mono bg-white/10 px-3 py-1 rounded-full border border-white/20">
                        {address?.slice(0, 6)}...{address?.slice(-4)}
                    </span>
                    <button
                        onClick={disconnect}
                        className="text-sm text-indigo-300 hover:text-white underline decoration-indigo-500/30"
                    >
                        Disconnect
                    </button>
                </div>
            )}
        </div>
    );
};
