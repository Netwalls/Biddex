"use client";

import { WalletConnect } from "@/components/WalletConnect";
import { ArrowRight, BarChart3, ShieldCheck, Zap, Globe, Cpu, Database, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#00FF00]/30 font-sans tracking-tight">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#000000]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-[#00FF00] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.3)] group-hover:scale-110 transition-transform duration-500">
              <BarChart3 className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              BIDDEX
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#infrastructure" className="hover:text-[#00FF00] transition-colors">Infrastructure</a>
            <a href="#protocol" className="hover:text-[#00FF00] transition-colors">Protocol</a>
            <a href="#data" className="hover:text-[#00FF00] transition-colors">Data Intelligence</a>
          </div>

          <WalletConnect />
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden">
          {/* Atmospheric Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-black to-black" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF00] mb-12 animate-fade-in shadow-[0_0_15px_rgba(0,255,0,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
              Stellar Data Infrastructure V1.0
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] uppercase italic italic-none">
              Decentralized <br /> Forecasting <span className="text-white/20">&</span> <br /> Data Intelligence
            </h1>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-white/60 leading-relaxed mb-16 text-balance">
              <p>
                Biddex is a decentralized forecasting and data intelligence infrastructure built on Stellar that leverages auction-based prediction markets to generate transparent, incentive-aligned probability signals about real-world events. Every trade is processed through a batch auction mechanism that determines a uniform clearing price within fixed intervals.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <button className="px-10 py-5 bg-[#00FF00] text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,0,0.2)] flex items-center gap-3 group">
                Launch Protocol <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all">
                Access Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Application Mockup Section - "The Station" */}
        <section className="pb-32 px-6">
          <div className="max-w-6xl mx-auto p-4 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl">
            <div className="rounded-[30px] overflow-hidden bg-[#0a0a0a] border border-white/5 aspect-video flex flex-col">
              <div className="h-12 border-b border-white/5 flex items-center px-6 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="h-5 w-px bg-white/10" />
                <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase">Biddex Station // Probabilistic Interface</span>
              </div>
              <div className="flex-1 grid grid-cols-12 gap-px bg-white/5">
                <div className="col-span-3 bg-[#0a0a0a] p-6 space-y-8">
                  <div className="space-y-4">
                    <div className="h-2 w-12 bg-white/10 rounded" />
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-8 w-full bg-white/5 rounded-xl border border-white/5" />
                    ))}
                  </div>
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="h-2 w-16 bg-white/10 rounded" />
                    <div className="h-32 w-full bg-gradient-to-br from-[#00FF00]/5 to-transparent rounded-xl border border-[#00FF00]/10" />
                  </div>
                </div>
                <div className="col-span-6 bg-[#0a0a0a] p-8 flex flex-col justify-center gap-8">
                  <div className="flex items-end gap-1 h-40">
                    {[30, 45, 60, 40, 70, 85, 65, 90, 100, 80, 60, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#00FF00]/20 to-[#00FF00]/60 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-white/30 uppercase">
                    <span>Historical Probability Curve</span>
                    <span className="text-[#00FF00]">Confidence: 94.2%</span>
                  </div>
                </div>
                <div className="col-span-3 bg-[#0a0a0a] p-6 flex flex-col gap-4">
                  <div className="h-2 w-20 bg-white/10 rounded" />
                  <div className="flex-1 space-y-3">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                        <div className="w-12 h-2 bg-white/5 rounded" />
                        <div className="w-8 h-2 bg-[#00FF00]/20 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="h-10 w-full bg-[#00FF00] rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description Sections */}
        <section id="infrastructure" className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-10 border border-white/10">
                  <Database className="w-8 h-8 text-[#00FF00]" />
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Structured <br /> Forecasting Lifecycle</h2>
                <div className="space-y-6 text-white/50 leading-relaxed text-lg">
                  <p>
                    Biddex operates through a structured forecasting lifecycle that integrates market creation, auction-based trade execution, probability aggregation, and on-chain settlement. Unlike traditional models, every outcome is tokenized as a transparent Stellar asset, providing a programmable structure for institutional-grade participation.
                  </p>
                  <p>
                    The forecasting history, probability movements, and settlement records remain permanently accessible on the ledger, forming a persistent, auditable dataset. This transforms speculation into structured probabilistic intelligence, usable as a reliable data primitive for applications, DAOs, and AI agents.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 h-64 flex flex-col justify-between">
                  <Cpu className="w-8 h-8 text-[#00FF00]/40" />
                  <div className="font-bold text-sm uppercase tracking-widest">Incentive Alignment</div>
                </div>
                <div className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 h-64 flex flex-col justify-between translate-y-12">
                  <Network className="w-8 h-8 text-[#00FF00]/40" />
                  <div className="font-bold text-sm uppercase tracking-widest">On-Chain Finality</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Batch Auction Innovation */}
        <section id="protocol" className="py-32 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-10 border border-white/10">
                <Zap className="w-8 h-8 text-[#00FF00]" />
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 leading-none">Probabilistic Price Discovery</h2>
              <div className="text-2xl text-white/80 leading-relaxed font-medium mb-12 italic italic-none">
                "Rather than executing trades instantly through continuous matching, Biddex computes a uniform clearing price at the end of fixed intervals, eliminating time-based execution advantages."
              </div>
              <p className="text-white/40 text-lg leading-relaxed max-w-2xl">
                This method ensures that all matched participants transact at the same price, nullifying high-frequency front-running. By converting these clearing prices into implied probabilities, Biddex produces a continuous stream of forecasting data that transforms market participation into structured intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Why Stellar Section */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-between items-center gap-20">
              <div className="flex-1 min-w-[300px]">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#00FF00] mb-6">Stellar Native Infrastructure</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  Leveraging Stellar for its scalability, low transaction costs, and rapid finality. Soroban smart contracts provide the programmable logic required for complex batch auctions and payout automation, ensuring every stage is transparent and verifiable.
                </p>
              </div>
              <div className="flex gap-20">
                <div className="text-center">
                  <div className="text-5xl font-black mb-2 antialiased">0.0001</div>
                  <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">XLM FEE</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black mb-2 antialiased">5.0s</div>
                  <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">FINALITY</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white/40" />
            </div>
            <span className="text-lg font-black tracking-tighter text-white/40">BIDDEX</span>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Stellar West Africa</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#00FF00]/40">
            &copy; {new Date().getFullYear()} Biddex Protocol. Probabilistic Data Primitive.
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
