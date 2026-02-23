"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Info, ChevronDown } from "lucide-react";

export default function TradePage() {
    return (
        <div className="max-w-6xl mx-auto space-y-10 pb-20">
            <header>
                <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Biddex Station</h1>
                <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">Discrete-Time Batch Auction Interface</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Trading Area */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="p-10 rounded-[48px] bg-white/5 border border-white/10 space-y-8 relative overflow-hidden">
                        {/* Market Info */}
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00FF00]">Active Batch #4122</span>
                                <h2 className="text-3xl font-black uppercase tracking-tighter max-w-md">Fed Interest Rate Hike - March 2026</h2>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-black text-[#00FF00]">0.68</div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Indicative Price</span>
                            </div>
                        </div>

                        {/* Bidding Interface */}
                        <div className="p-8 rounded-[32px] bg-black/40 border border-white/5 space-y-8">
                            <div className="flex gap-4">
                                <button className="flex-1 py-4 bg-[#00FF00] text-black font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-[0_0_30px_rgba(0,255,0,0.1)]">
                                    Bid YES
                                </button>
                                <button className="flex-1 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white/10 transition-all">
                                    Bid NO
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-white/20">Amount</span>
                                    <input
                                        type="text"
                                        placeholder="0.00"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-24 pr-24 text-2xl font-black focus:outline-none focus:border-[#00FF00]/30 transition-all"
                                    />
                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-white/40">XLM</span>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {["25%", "50%", "75%", "MAX"].map(pct => (
                                        <button key={pct} className="py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all">
                                            {pct}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5 space-y-3">
                                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                                    <span className="text-white/20">Protocol Fee</span>
                                    <span>0.01 XLM</span>
                                </div>
                                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                                    <span className="text-white/20">Batch Settlement</span>
                                    <span>~ 12h 4m</span>
                                </div>
                            </div>

                            <button className="w-full py-6 bg-white text-black font-black uppercase tracking-widest text-sm rounded-3xl hover:bg-[#00FF00] transition-colors flex items-center justify-center gap-3 group">
                                Submit Batch Order <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Batch Analytics */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-4">Depth Profile</h4>
                            <div className="h-24 flex items-end gap-1">
                                {[20, 35, 25, 50, 40, 65, 80, 55].map((h, i) => (
                                    <div key={i} className={`flex-1 rounded-t-sm ${i > 4 ? "bg-[#00FF00]/40" : "bg-white/10"}`} style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                        <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-center gap-4">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-[#00FF00]" />
                                <span className="text-[10px] font-black uppercase tracking-widest">MEV Resistance: Active</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Info className="w-5 h-5 text-white/20" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Discrete settlement mode</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Orderbook/Info */}
                <div className="space-y-6">
                    <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 h-[500px] flex flex-col">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="text-[10px] font-black uppercase tracking-widest">Order Details</h4>
                            <ChevronDown className="w-4 h-4 text-white/20" />
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
                                    <div className="flex flex-col">
                                        <span className={`text-[11px] font-black ${i % 2 === 0 ? "text-[#00FF00]" : "text-red-500"}`}>
                                            {i % 2 === 0 ? "YES" : "NO"}
                                        </span>
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">0.6{i} Indic.</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[11px] font-black">250 XLM</div>
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-white/10">12:0{i} PM</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/20">Settlement Logic</h4>
                        <p className="text-[11px] font-medium leading-relaxed text-white/40">
                            Orders are collected in batches. The protocol calculates a single clearing price that maximizes volume for all participants at batch close.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
