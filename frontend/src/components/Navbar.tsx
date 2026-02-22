"use client";

import React from "react";
import { BarChart3 } from "lucide-react";
import { WalletConnect } from "./WalletConnect";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 w-full z-50 bg-[#000000]/60 backdrop-blur-xl border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-[#00FF00] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.2)] group-hover:scale-105 transition-transform duration-500">
                        <BarChart3 className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter">
                        BIDDEX
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    <Link href="/infrastructure" className="hover:text-[#00FF00] transition-colors">Infrastructure</Link>
                    <Link href="/protocol" className="hover:text-[#00FF00] transition-colors">Protocol</Link>
                    <Link href="/intelligence" className="hover:text-[#00FF00] transition-colors">Intelligence</Link>
                </div>

                <WalletConnect />
            </div>
        </motion.nav>
    );
};
