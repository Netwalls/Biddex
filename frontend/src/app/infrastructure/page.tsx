"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Network, Cpu, Shield, Zap } from "lucide-react";

export default function InfrastructurePage() {
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
                        Core Infrastructure
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12"
                    >
                        Resilient <span className="text-white/40">Scalability</span>
                    </motion.h1>

                    <div className="space-y-24">
                        <motion.section {...fadeInUp}>
                            <div className="flex items-start gap-8">
                                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center shrink-0 border border-[#00FF00]/20">
                                    <Cpu className="w-6 h-6 text-[#00FF00]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Soroban Smart Contracts</h3>
                                    <p className="text-white/50 leading-relaxed text-lg">
                                        Biddex leverages Soroban to execute complex batch auction logic directly on the Stellar network.
                                        This ensures that all clearing price calculations are verifiable and tamper-resistant,
                                        removing the need for off-chain calculation risks.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section {...fadeInUp}>
                            <div className="flex items-start gap-8">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <Network className="w-6 h-6 text-white/40" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Stellar Asset Native</h3>
                                    <p className="text-white/50 leading-relaxed text-lg">
                                        By using Stellar's native asset issuance, Biddex outcome positions are globally liquid and
                                        interoperable with any Stellar-compatible wallet or exchange. This deep integration
                                        lowers the barrier for institutional participation.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section {...fadeInUp}>
                            <div className="flex items-start gap-8">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <Shield className="w-6 h-6 text-white/40" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Auditable State</h3>
                                    <p className="text-white/50 leading-relaxed text-lg">
                                        Every probability shift is recorded as a ledger entry. This persistent historical record
                                        allows for retrospectives on signal accuracy, enabling a new class of reputation-weighted
                                        forecasting models.
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
