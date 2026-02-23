"use client";

import React from "react";
import { motion } from "framer-motion";

const positions = [
    {
        id: 1,
        mkt: "Fed Rate Hike",
        side: "YES",
        size: "500 XLM",
        pnl: "+12.4%",
        conviction: "High"
    },
    {
        id: 2,
        mkt: "Stellar Upgrade",
        side: "NO",
        size: "1,200 XLM",
        pnl: "-2.1%",
        conviction: "Medium"
    },
];

export default function PortfolioPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-10">
            <header>
                <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Signal Inventory</h1>
                <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">Personalized Probability Positions</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Balance Card */}
                <div className="p-10 rounded-[48px] bg-[#00FF00] text-black space-y-8 shadow-[0_0_50px_rgba(0,255,0,0.1)]">
                    <div className="flex justify-between items-start">
                        <span className="text-[11px] font-black uppercase tracking-widest">Available Balance</span>
                        <span className="text-[10px] font-bold opacity-40">Stellar Node</span>
                    </div>
                    <div>
                        <div className="text-5xl font-black tracking-tighter">4,821.50</div>
                        <div className="text-sm font-bold uppercase tracking-widest mt-2">XLM Tokens</div>
                    </div>
                    <button className="w-full py-5 bg-black text-[#00FF00] rounded-2xl font-black uppercase tracking-widest text-[11px] hover:translate-y-[-2px] transition-transform">
                        Deposit
                    </button>
                </div>

                {/* Portfolio Stats */}
                <div className="col-span-2 grid grid-cols-2 gap-8">
                    <div className="p-10 rounded-[48px] bg-white/5 border border-white/10 space-y-8 flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Protocol Exposure</span>
                        <h4 className="text-4xl font-black tracking-tight">72.4%</h4>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-[#00FF00] w-[72%]" />
                        </div>
                    </div>
                    <div className="p-10 rounded-[48px] bg-white/5 border border-white/10 space-y-8 flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Settlement Trust</span>
                        <h4 className="text-4xl font-black tracking-tight text-[#00FF00]">AAA</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Verified Ledger Integrity</p>
                    </div>
                </div>
            </div>

            {/* Active High-Fidelity Positions */}
            <section className="space-y-6 pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black uppercase tracking-tighter">Active Signals</h3>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">
                        View History
                    </button>
                </div>

                <div className="space-y-4">
                    {positions.map((pos, i) => (
                        <motion.div
                            key={pos.id}
                            {...fadeInUp}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-between group hover:border-[#00FF00]/20 transition-colors"
                        >
                            <div className="flex items-center gap-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xs ${pos.side === "YES" ? "bg-[#00FF00] text-black" : "bg-red-500/10 text-red-500 border border-red-500/20"
                                    }`}>
                                    {pos.side}
                                </div>
                                <div>
                                    <h4 className="text-lg font-black uppercase tracking-tight mb-1">{pos.mkt}</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{pos.size} Allocated</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-16">
                                <div className="text-right">
                                    <div className={`text-xl font-black ${pos.pnl.startsWith("+") ? "text-[#00FF00]" : "text-red-500"
                                        }`}>
                                        {pos.pnl}
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">PnL Indicator</span>
                                </div>
                                <button className="px-8 py-3 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#00FF00] hover:text-black transition-all">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
