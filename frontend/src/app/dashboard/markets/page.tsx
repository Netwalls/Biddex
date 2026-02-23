"use client";

import React from "react";
import { motion } from "framer-motion";

const markets = [
    {
        id: 1,
        title: "Fed Interest Rate Hike - March 2026",
        category: "Economics",
        probability: "68%",
        volume: "1.2M XLM",
        endsIn: "14d 6h"
    },
    {
        id: 2,
        title: "Stellar Soroban Mainnet Upgrade Release",
        category: "Technology",
        probability: "82%",
        volume: "850K XLM",
        endsIn: "4d 12h"
    },
    {
        id: 3,
        title: "Global AI Compute Shortage (H1 2026)",
        category: "Technology",
        probability: "45%",
        volume: "2.4M XLM",
        endsIn: "88d 2h"
    },
    {
        id: 4,
        title: "BTC Transaction Fees Average > $50",
        category: "Crypto",
        probability: "15%",
        volume: "420K XLM",
        endsIn: "2d 1h"
    },
];

export default function MarketsPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-10">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Forecasting Hub</h1>
                    <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">Active Batch Auctions</p>
                </div>

                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Search Markets..."
                        className="bg-white/5 border border-white/10 rounded-2xl py-3 px-6 text-[11px] font-bold uppercase tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-[#00FF00]/30 transition-all w-64"
                    />
                </div>
            </header>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
                {["All Markets", "Economics", "Technology", "Crypto", "Politics"].map((cat, i) => (
                    <button
                        key={cat}
                        className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border transition-all ${i === 0 ? "bg-[#00FF00] text-black border-[#00FF00]" : "bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Markets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {markets.map((market, i) => (
                    <motion.div
                        key={market.id}
                        {...fadeInUp}
                        transition={{ delay: i * 0.1 }}
                        className="p-10 rounded-[48px] bg-white/5 border border-white/10 hover:border-[#00FF00]/20 transition-all group cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                                {market.category}
                            </span>
                            <div className="text-[#00FF00] text-[10px] font-bold uppercase tracking-widest">
                                Active Batch
                            </div>
                        </div>

                        <h3 className="text-2xl font-black uppercase leading-tight mb-10 group-hover:text-[#00FF00] transition-colors tracking-tighter">
                            {market.title}
                        </h3>

                        <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5">
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Prob.</span>
                                <div className="text-2xl font-black text-[#00FF00]">{market.probability}</div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Vol.</span>
                                <div className="text-2xl font-black">{market.volume}</div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">End</span>
                                <div className="text-2xl font-black">{market.endsIn}</div>
                            </div>
                        </div>

                        <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Batch settlement in progress</span>
                            <button className="px-8 py-3 bg-[#00FF00] text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                                Trade Signal
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
