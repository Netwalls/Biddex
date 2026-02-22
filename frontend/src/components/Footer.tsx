"use client";

import React from "react";
import { BarChart3 } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tighter">BIDDEX</span>
                </div>

                <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-white/20">
                    <Link href="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
                    <Link href="/protocol" className="hover:text-white transition-colors">Protocol</Link>
                    <Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-[#00FF00]/40">
                    &copy; {new Date().getFullYear()} Biddex Protocol.
                </div>
            </div>
        </footer>
    );
};
