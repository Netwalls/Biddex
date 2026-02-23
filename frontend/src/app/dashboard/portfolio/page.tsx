"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wallet, PieChart, History, ArrowUpRight, ShieldCheck } from "lucide-react";

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
    return (
        <div className="max-w-6xl mx-auto space-y-10">
            <header>
                <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Signal Portfolio</h1>
                <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">Personalized Probability Inventory</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Wallet Balance Card */}
                <div className="p-8 rounded-[40px] bg-[#00FF00] text-black space-y-8 shadow-[0_0_50px_rgba(0,255,0,0.2)]">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-black/10 rounded-2xl flex items-center justify-center">
                            <Wallet className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest">Active Balance</span>
                    </div>
                    <div>
                        <div className="text-sm font-bold uppercase tracking-widest mb-1 opacity-60">Stellar Network</div>
                        <div className="text-4xl font-black tracking-tight">4,821.50 XLM</div>
                    </div>
                    <button className="w-full py-4 bg-black text-[#00FF00] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-transform">
                        Deposit Assets
                    </button>
                </div>

                {/* Portfolio Stats */}
                <div className="col-span-2 grid grid-cols-2 gap-6">
                    <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 space-y-6">
                        <div className="flex justify-between items-center text-white/40">
                            <PieChart className="w-5 h-5" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Allocation</span>
                        </div>
                        <h4 className="text-3xl font-black tracking-tight">72.4% <span className="text-[10px] text-white/40 uppercase">In Markets</span></h4>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-[#00FF00] w-[72%]" />
                        </div>
                    </div>
                    <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 space-y-6">
                        <div className="flex justify-between items-center text-white/40">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Safu Score</span>
                        </div>
                        <h4 className="text-3xl font-black tracking-tight text-[#00FF00]">AAA</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 truncate">Verified Decentralized Settlement</p>
                    </div>
                </div>
            </div>

            {/* Active Positions */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black uppercase tracking-tighter">Active Positions</h3>
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                        <History className="w-4 h-4" />
                        Full History
                    </button>
                </div>

                <div className="space-y-4">
                    {positions.map((pos, i) => (
                        <motion.div
                            key={pos.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-white/20 transition-colors"
                        >
                            <div className="flex items-center gap-6">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black ${pos.side === "YES" ? "bg-[#00FF00]/10 text-[#00FF00]" : "bg-red-500/10 text-red-500"
                                    }`}>
                                    {pos.side}
                                </div>
                                <div>
                                    <h4 className="font-black uppercase tracking-tight mb-1">{pos.mkt}</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{pos.size} Allocated</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="text-right">
                                    <div className={`text-sm font-black flex items-center justify-end gap-1 ${pos.pnl.startsWith("+") ? "text-[#00FF00]" : "text-red-500"
                                        }`}>
                                        {pos.pnl}
                                        <ArrowUpRight className="w-3 h-3" />
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">Current PnL</span>
                                </div>
                                <button className="px-6 py-2 bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 hover:border-white/20 transition-all">
                                    Manage
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
