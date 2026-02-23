"use client";

import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#00FF00]/20">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-8 pt-24 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
