"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    BarChart3,
    Briefcase,
    Zap,
    Settings,
    HelpCircle
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Markets", href: "/dashboard/markets", icon: BarChart3 },
    { name: "Portfolio", href: "/dashboard/portfolio", icon: Briefcase },
    { name: "Trade", href: "/dashboard/trade", icon: Zap },
];

export const Sidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-xl h-screen sticky top-0 flex flex-col pt-24 pb-10 px-4">
            <div className="flex-1 space-y-2">
                <div className="px-4 mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Protocol Interface</span>
                </div>

                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group ${isActive
                                    ? "bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/20"
                                    : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? "text-[#00FF00]" : "group-hover:text-white transition-colors"}`} />
                            <span className="text-[13px] font-bold uppercase tracking-wider">{item.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-accent"
                                    className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00FF00]"
                                />
                            )}
                        </Link>
                    );
                })}
            </div>

            <div className="space-y-2 border-t border-white/5 pt-10">
                <Link href="#" className="flex items-center gap-4 px-4 py-3 text-white/20 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">
                    <Settings className="w-4 h-4" />
                    Settings
                </Link>
                <Link href="#" className="flex items-center gap-4 px-4 py-3 text-white/20 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">
                    <HelpCircle className="w-4 h-4" />
                    Help Center
                </Link>
            </div>
        </aside>
    );
};
