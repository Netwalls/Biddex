"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { name: "Global Signal Conviction", value: "84.2%", change: "+2.4%", trend: "up" },
    { name: "Active Batches", value: "12", change: "Stable", trend: "neutral" },
    { name: "Yield Generated", value: "4.82 XLM", change: "+12%", trend: "up" },
    { name: "Protocol Accuracy", value: "92.1%", change: "-0.5%", trend: "down" },
];

export default function DashboardOverview() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-10">
            <header>
                <motion.div {...fadeInUp}>
                    <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Protocol Command</h1>
                    <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">Real-time Probabilistic Intelligence Network</p>
                </motion.div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.name}
                        {...fadeInUp}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-[#00FF00]/30 transition-colors group flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">{stat.name}</span>
                            <div className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest ${stat.trend === "up" ? "text-[#00FF00]" : stat.trend === "down" ? "text-red-500" : "text-white/30"
                                }`}>
                                {stat.change}
                            </div>
                        </div>
                        <div className="text-3xl font-black tracking-tight">{stat.value}</div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className="p-10 rounded-[48px] bg-white/5 border border-white/10 relative overflow-hidden group"
                >
                    <div className="mb-12">
                        <h3 className="text-xl font-black uppercase tracking-tighter mb-1">Signal Conviction</h3>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-white/20">Protocol Baseline</span>
                    </div>

                    <div className="flex items-center justify-center py-10 border-t border-white/5">
                        <div className="text-center">
                            <div className="text-6xl font-black text-[#00FF00] mb-2 tracking-tighter">BETA</div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Settlement Version v1.02</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.5 }}
                    className="p-10 rounded-[48px] bg-[#00FF00]/5 border-2 border-[#00FF00]/20 flex flex-col"
                >
                    <div className="mb-8">
                        <h3 className="text-lg font-black uppercase tracking-tighter mb-1 text-[#00FF00]">Batch Priority</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF00]/40">Settlement Queue</span>
                    </div>

                    <div className="flex-1 space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex justify-between items-center p-4 border-b border-white/5 last:border-0 uppercase tracking-widest">
                                <span className="text-[11px] font-bold text-white/40">Batch #821{i}</span>
                                <span className="text-[11px] font-black text-[#00FF00]">Clearing</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
