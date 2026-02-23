"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, Database, Zap, ShieldCheck, Globe, Cpu, Network } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#00FF00]/20 font-sans tracking-tight">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-black to-black" />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 blur-[150px] rounded-full"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF00] mb-10 shadow-[0_0_15px_rgba(0,255,0,0.1)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
              Probabilistic Signal Protocol V1.0
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.95] uppercase"
            >
              Decentralized <br /> <span className="text-white/40">Market</span> Intelligence
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed mb-16 font-medium"
            >
              Biddex is a forecasting layer for the Stellar ecosystem.
              We transform competitive bidding into low-noise,
              queryable probability signals for AI and governance.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <Link href="/dashboard" className="px-10 py-5 bg-[#00FF00] text-black font-bold uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,255,0,0.2)] flex items-center gap-3 active:scale-95 group">
                Enter Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-10 py-5 bg-white/5 border border-white/10 font-bold uppercase tracking-widest text-[11px] rounded-full hover:bg-white/10 transition-all active:scale-95">
                View Whitepaper
              </button>
            </motion.div>
          </div>
        </section>

        {/* The Station - Interactive Mockup */}
        <motion.section
          {...fadeInUp}
          className="pb-32 px-6"
        >
          <div className="max-w-6xl mx-auto p-4 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden group hover:border-[#00FF00]/20 transition-colors duration-700">
            <div className="rounded-[30px] overflow-hidden bg-[#0a0a0a] border border-white/5 aspect-video flex flex-col relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="h-12 border-b border-white/5 flex items-center px-6 gap-4 relative z-10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="h-5 w-px bg-white/10" />
                <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase">Biddex Station // Probabilistic Interface</span>
              </div>

              <div className="flex-1 grid grid-cols-12 relative z-10">
                <div className="col-span-3 bg-[#0a0a0a] p-6 border-r border-white/5">
                  <div className="space-y-6">
                    <div className="h-2 w-12 bg-white/10 rounded" />
                    {[1, 2, 3, 4].map(i => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.1 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="h-8 w-full bg-white/5 rounded-xl border border-white/5"
                      />
                    ))}
                  </div>
                </div>
                <div className="col-span-6 bg-[#0a0a0a] p-8 flex flex-col justify-center gap-10">
                  <div className="flex items-end gap-1.5 h-48">
                    {[30, 45, 60, 40, 70, 85, 65, 90, 70, 80, 60, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-[#00FF00]/10 to-[#00FF00]/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-white/20 uppercase">
                    <span>Realtime Signal Processing</span>
                    <span className="text-[#00FF00]/80">Confidence: 96.4%</span>
                  </div>
                </div>
                <div className="col-span-3 bg-[#0a0a0a] p-6 space-y-6">
                  <div className="h-2 w-20 bg-white/10 rounded" />
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                        <div className="w-16 h-1.5 bg-white/5 rounded" />
                        <div className="w-6 h-1.5 bg-[#00FF00]/20 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <div className="h-10 w-full bg-[#00FF00]/10 border border-[#00FF00]/20 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Competitor Benchmarking */}
        <section className="py-32 border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-20">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">Signal Integrity Benchmark</h2>
              <p className="text-white/40 max-w-xl mx-auto">Comparing the Biddex batch-auction architecture against legacy continuous matching markets.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                {...fadeInUp}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col gap-6 opacity-40 hover:opacity-60 transition-opacity"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Legacy Protocol</span>
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <h4 className="text-2xl font-black uppercase italic">POLYMARKET</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white/30">Matching</span>
                    <span className="text-white/60">Continuous CLOB</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white/30">Privacy</span>
                    <span className="text-white/60">Public Ledger</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white/30">MEV Risk</span>
                    <span className="text-white/60">High</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-[32px] bg-[#00FF00]/5 border-2 border-[#00FF00]/30 flex flex-col gap-6 relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00FF00] rounded-full text-[9px] font-bold text-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,0,0.4)]">
                  Infrastructure Grade
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF00]">Biddex Protocol</span>
                  <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
                </div>
                <h4 className="text-4xl font-black uppercase tracking-tighter text-[#00FF00]">BIDDEX</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white/30">Matching</span>
                    <span className="text-[#00FF00]">Batch Auction</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white/30">Signal</span>
                    <span className="text-[#00FF00]">Low-Noise</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white/30">MEV Risk</span>
                    <span className="text-[#00FF00]">Zero (Periodic)</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col gap-6 opacity-40 hover:opacity-60 transition-opacity"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Legacy Protocol</span>
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <h4 className="text-2xl font-black uppercase italic tracking-tighter">KALSHI</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white/30">Compliance</span>
                    <span className="text-white/60">Regulated Centralized</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white/30">Signal</span>
                    <span className="text-white/60">Fragmented</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white/30">Liquidity</span>
                    <span className="text-white/60">Siloed</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <motion.div {...fadeInUp} className="group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#00FF00]/30 transition-colors">
                  <Database className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Structured Data</h3>
                <p className="text-white/40 leading-relaxed font-medium">
                  We transform market activity into queryable probability signals. Unlike prediction markets for speculation, Biddex is a protocol for measurable data generation.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#00FF00]/30 transition-colors">
                  <Zap className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Batch Auctions</h3>
                <p className="text-white/40 leading-relaxed font-medium">
                  Our periodic clearing mechanism eliminates the high-frequency advantage, ensuring that price signals are derived from collective intelligence, not speed.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#00FF00]/30 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">On-Chain Finality</h3>
                <p className="text-white/40 leading-relaxed font-medium">
                  Every probability state and final settlement is verifiable on Stellar. Permanent, auditable, and immutable historical datasets for AI training.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stellar Power */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-24 border-y border-white/5 bg-white/[0.01]"
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-6">Built on Stellar</h2>
              <p className="text-white/40 font-medium">
                Scaling through Soroban smart contracts to deliver rapid batch processing and minimal overhead for global-scale intelligence generation.
              </p>
            </div>
            <div className="flex gap-16">
              <div className="text-center">
                <div className="text-4xl font-black mb-1">~0.00s</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#00FF00]/60">Slippage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#00FF00]/60">Verifiable</div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
