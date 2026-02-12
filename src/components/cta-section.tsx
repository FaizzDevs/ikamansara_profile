"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Sparkles } from "lucide-react"

export function CTASection() {
    return (
        <section className="py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="relative rounded-3xl overflow-hidden bg-primary p-8 lg:p-20 text-center"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-8">
                            Siap Terhubung Kembali?
                        </h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-medium">
                            Ribuan rekan seperjuangan menanti kehadiran kamu. Jadilah bagian dari perubahan besar bersama IKAMANSARA sekarang
                        </p>

                        <Button
                            size='lg'
                            className="bg-white text-primary px-8 py-6 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-2xl hover:bg-white/90 hover:text-primary/90"
                        >
                            <Sparkles className="mr-2 h-5 w-5" />
                            Daftar Anggota Sekarang
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}