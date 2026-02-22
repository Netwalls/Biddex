"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, BarChart3, Repeat, Target } from "lucide-react";

export default function ProtocolPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    return (
        <div className="min-h-screen bg-[#000000] text-white selection:bg-[#00FF00]/20 font-sans tracking-tight">
            <Navbar />

            <main className="pt-40 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF00] mb-8"
                    >
                        Protocol Design
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12"
                    >
                        Batch <span className="text-white/40">Mechanism</span>
                    </motion.h1>

                    <div className="space-y-24">
                        <motion.section {...fadeInUp}>
                            <div className="flex items-start gap-8">
                                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center shrink-0 border border-[#00FF00]/20">
                                    <Repeat className="w-6 h-6 text-[#00FF00]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">The Batch Auction Cycle</h3>
                                    <p className="text-white/50 leading-relaxed text-lg">
                                        Biddex transitions away from continuous matching models. Instead, orders are collected
                                        over a discrete time window. At the end of the window, a single uniform price is computed
                                        that clears the max possible volume.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section {...fadeInUp}>
                            <div className="flex items-start gap-8">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <Target className="w-6 h-6 text-white/40" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Front-Running Immunity</h3>
                                    <p className="text-white/50 leading-relaxed text-lg">
                                        Since all matched trades in a batch occur at the same price, there is no advantage to
                                        submitting orders micro-seconds faster. This levels the playing field for human
                                        analysts against automated bots.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section {...fadeInUp}>
                            <div className="flex items-start gap-8">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <BarChart3 className="w-6 h-6 text-white/40" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Implied Probabilities</h3>
                                    <p className="text-white/50 leading-relaxed text-lg">
                                        Biddex clearing prices directly reflect the market's collective consensus.
                                        These prices are normalized to represent 0-1 probabilistic confidence levels,
                                        creating a precise stream of forward-looking data.
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
