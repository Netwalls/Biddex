"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TradePage() {
    return (
        <div className="max-w-6xl mx-auto space-y-10 pb-20">
            <header>
                <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Order Terminal</h1>
                <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">Discrete-Time Batch Auction Interface</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Interface */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="p-12 rounded-[56px] bg-white/5 border border-white/10 space-y-10 relative overflow-hidden">
                        {/* Market Title */}
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00FF00]">Batch Priority High</span>
                                <h2 className="text-4xl font-black uppercase tracking-tighter max-w-lg leading-none">Fed Interest Rate Hike - March 2026</h2>
                            </div>
                            <div className="text-right">
                                <div className="text-5xl font-black text-[#00FF00] tracking-tighter">0.68</div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Clearing Price</span>
                            </div>
                        </div>

                        {/* Interaction Block */}
                        <div className="p-10 rounded-[40px] bg-black/40 border border-white/5 space-y-10">
                            <div className="flex gap-6">
                                <button className="flex-1 py-5 bg-[#00FF00] text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-3xl shadow-[0_0_40px_rgba(0,255,0,0.15)] hover:scale-[1.02] transition-transform active:scale-95">
                                    YES
                                </button>
                                <button className="flex-1 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-3xl hover:bg-white/10 transition-all active:scale-95">
                                    NO
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="0.00"
                                        className="w-full bg-white/5 border border-white/10 rounded-3xl py-8 px-10 text-3xl font-black focus:outline-none focus:border-[#00FF00]/40 transition-all placeholder:text-white/5"
                                    />
                                    <span className="absolute right-10 top-1/2 -translate-y-1/2 text-xs font-black uppercase tracking-widest text-white/20">XLM Tokens</span>
                                </div>
                                <div className="grid grid-cols-4 gap-3">
                                    {["25%", "50%", "75%", "MAX"].map(pct => (
                                        <button key={pct} className="py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black tracking-widest text-white/20 hover:text-white hover:bg-white/10 transition-all">
                                            {pct}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-10 border-t border-white/5 flex flex-col gap-4">
                                <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em]">
                                    <span className="text-white/20">Network Cost</span>
                                    <span className="text-white/60">0.01 XLM</span>
                                </div>
                                <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em]">
                                    <span className="text-white/20">Next Settlement</span>
                                    <span className="text-white/60">12:00:00 UTC</span>
                                </div>
                            </div>

                            <button className="w-full py-8 bg-white text-black font-black uppercase tracking-widest text-sm rounded-[32px] hover:bg-[#00FF00] transition-colors active:scale-95">
                                Execute Batch Submission
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar Data */}
                <div className="space-y-8">
                    <div className="p-10 rounded-[48px] bg-white/5 border border-white/10 h-[600px] flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-10">Indicative Summary</span>

                        <div className="flex-1 space-y-6 overflow-y-auto pr-4 custom-scrollbar">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                    <div className="flex flex-col gap-1">
                                        <span className={`text-xs font-black uppercase ${i % 2 === 0 ? "text-[#00FF00]" : "text-white/40"}`}>
                                            {i % 2 === 0 ? "YES" : "NO"}
                                        </span>
                                        <span className="text-[9px] font-bold uppercase text-white/10 tracking-widest">Hash #AD21{i}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[11px] font-black tracking-tight text-white/80">320.5 XLM</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-10 rounded-[48px] bg-[#00FF00]/5 border-2 border-[#00FF00]/10">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00FF00] mb-4 block">Clearing Logic</span>
                        <p className="text-[12px] font-bold leading-relaxed text-[#00FF00]/60 uppercase tracking-wide">
                            Periodic standard matching protocol active. Batch integrity verified at epoch close.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
