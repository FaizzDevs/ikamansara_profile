"use client"

import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background-dark to-background-dark z-0" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8"
                >
                    <span className="h-2 w-2 flex rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                        Connecting Excellence Since 1980
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight"
                >
                    SELAMAT DAN SUKSES, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                        Atas Pelantikan Kepengurusan IKA MAN 1 Jepara
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    Wadah Kolaborasi alumni MAN 1 Jepara untuk berkarya dan berkontribusi bagi bangsa dengan semangat inovasi dan kekeluargaan yang tak terbatas oleh waktu
                </motion.p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button className="w-full sm:w-auto px-8 py-6 bg-primary text-white rounded-xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Gabung Sekarang
                    </Button>
                    <Button
                        className="w-full sm:w-auto px-8 py-6 bg-primary text-white rounded-xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-all"
                    >
                        Explorasi Program
                    </Button>
                </div>
            </div>
        </section>
    )
}