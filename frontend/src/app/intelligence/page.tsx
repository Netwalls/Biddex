"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BarChart3, Eye, Brain, LineChart } from "lucide-react";

export default function IntelligencePage() {
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
                        Data Intelligence
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12"
                    >
                        Signal <span className="text-white/40">Generation</span>
                    </motion.h1>

                    <div className="space-y-24">
                        <motion.section {...fadeInUp}>
                            <div className="flex items-start gap-8">
                                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center shrink-0 border border-[#00FF00]/20">
                                    <Brain className="w-6 h-6 text-[#00FF00]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Collective IQ</h3>
                                    <p className="text-white/50 leading-relaxed text-lg">
                                        Biddex treats the prediction market as a decentralized computer. By aggregating
                                        competitive forecasts, we produce a high-fidelity "Collective Intelligence" output
                                        that often outperforms individual эксперты.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section {...fadeInUp}>
                            <div className="flex items-start gap-8">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <LineChart className="w-6 h-6 text-white/40" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">AI Signal Smoothing</h3>
                                    <p className="text-white/50 leading-relaxed text-lg">
                                        Raw market data is often volatile. Biddex applies neural signal smoothing layers to
                                        filter noise and deliver clean probability streams for machine learning consumption
                                        and automated decisioning.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section {...fadeInUp}>
                            <div className="flex items-start gap-8">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <Eye className="w-6 h-6 text-white/40" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Queryable Probabilities</h3>
                                    <p className="text-white/50 leading-relaxed text-lg">
                                        Developers can query the Biddex protocol via API or direct ledger reads to integrate
                                        live probability signals into trading algos, insurance protocols, or risk management
                                        dashboards.
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
