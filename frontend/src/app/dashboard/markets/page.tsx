"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, TrendingUp, Users, Clock } from "lucide-react";

const markets = [
    {
        id: 1,
        title: "Fed Interest Rate Hike - March 2026",
        category: "Economics",
        probability: "68%",
        volume: "1.2M XLM",
        participants: 1240,
        endsIn: "14d 6h"
    },
    {
        id: 2,
        title: "Stellar Soroban Mainnet Upgrade Release",
        category: "Technology",
        probability: "82%",
        volume: "850K XLM",
        participants: 890,
        endsIn: "4d 12h"
    },
    {
        id: 3,
        title: "Global AI Compute Shortage (H1 2026)",
        category: "Technology",
        probability: "45%",
        volume: "2.4M XLM",
        participants: 3100,
        endsIn: "88d 2h"
    },
    {
        id: 4,
        title: "BTC Transaction Fees Average > $50",
        category: "Crypto",
        probability: "15%",
        volume: "420K XLM",
        participants: 560,
        endsIn: "2d 1h"
    },
];

export default function MarketsPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-10">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Forecasting Hub</h1>
                    <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">Active Batch Auctions & Probability Clusters</p>
                </div>

                <div className="flex gap-4">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-hover:text-[#00FF00]/40 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search Markets..."
                            className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-[11px] font-bold uppercase tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-[#00FF00]/30 transition-all w-64"
                        />
                    </div>
                    <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                        <Filter className="w-4 h-4 text-white/40" />
                    </button>
                </div>
            </header>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
                {["All Markets", "Economics", "Technology", "Crypto", "Politics", "Science"].map((cat, i) => (
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-[#00FF00]/20 transition-all group cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-white/5 text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]">
                                {market.category}
                            </span>
                            <div className="flex items-center gap-2 text-[#00FF00] text-[10px] font-bold uppercase tracking-widest bg-[#00FF00]/5 px-3 py-1 rounded-full">
                                <TrendingUp className="w-3 h-3" />
                                High Conviction
                            </div>
                        </div>

                        <h3 className="text-xl font-black uppercase leading-tight mb-8 group-hover:text-[#00FF00] transition-colors">
                            {market.title}
                        </h3>

                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Probability</span>
                                <div className="text-xl font-black text-[#00FF00]">{market.probability}</div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Volume</span>
                                <div className="text-xl font-black">{market.volume}</div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Ends In</span>
                                <div className="text-xl font-black">{market.endsIn}</div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <div className="flex items-center gap-4 text-white/20">
                                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase">
                                    <Users className="w-3 h-3" />
                                    {market.participants}
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase">
                                    <Clock className="w-3 h-3" />
                                    Batch #4122
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-white/5 hover:bg-[#00FF00] hover:text-black border border-white/10 hover:border-[#00FF00] rounded-full text-[9px] font-bold uppercase tracking-widest transition-all">
                                Trade Signal
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
