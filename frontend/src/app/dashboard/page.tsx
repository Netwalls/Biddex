"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ArrowDownRight,
    Activity,
    Globe,
    TrendingUp,
    BarChart3
} from "lucide-react";

const stats = [
    { name: "Global Signal Conviction", value: "84.2%", change: "+2.4%", trend: "up", icon: Globe },
    { name: "Active Batches", value: "12", change: "Stable", trend: "neutral", icon: Activity },
    { name: "Yield Generated", value: "4.82 XLM", change: "+12%", trend: "up", icon: TrendingUp },
    { name: "Protocol Accuracy", value: "92.1%", change: "-0.5%", trend: "down", icon: BarChart3 },
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
                        className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00FF00]/30 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#00FF00]/20 transition-colors">
                                <stat.icon className="w-5 h-5 text-white/40 group-hover:text-[#00FF00] transition-colors" />
                            </div>
                            <div className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest ${stat.trend === "up" ? "text-[#00FF00]" : stat.trend === "down" ? "text-red-500" : "text-white/30"
                                }`}>
                                {stat.change}
                                {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : stat.trend === "down" ? <ArrowDownRight className="w-3 h-3" /> : null}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">{stat.name}</span>
                            <div className="text-2xl font-black tracking-tight">{stat.value}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className="col-span-2 p-8 rounded-[40px] bg-white/5 border border-white/10 h-[400px] relative overflow-hidden group"
                >
                    <div className="absolute top-8 left-8">
                        <h3 className="text-lg font-black uppercase tracking-tighter mb-1">Signal Conviction Trend</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">30D Moving Average</span>
                    </div>

                    <div className="absolute inset-x-8 bottom-8 flex items-end gap-2 h-48">
                        {[40, 55, 45, 60, 75, 50, 65, 80, 70, 85, 90, 75, 60, 80, 95].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: 0.6 + i * 0.05 }}
                                className="flex-1 bg-gradient-to-t from-[#00FF00]/10 to-[#00FF00]/40 rounded-t-sm group-hover:to-[#00FF00]/60 transition-colors"
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.5 }}
                    className="p-8 rounded-[40px] bg-[#00FF00]/5 border-2 border-[#00FF00]/20 h-[400px] flex flex-col"
                >
                    <div className="mb-8">
                        <h3 className="text-lg font-black uppercase tracking-tighter mb-1 text-[#00FF00]">Batch Priority</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF00]/40">Urgent Settlements</span>
                    </div>

                    <div className="flex-1 space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Market #821{i}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-[#00FF00]/10 text-[#00FF00] text-[8px] font-bold uppercase">Clearing</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "70%" }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-full bg-[#00FF00]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
