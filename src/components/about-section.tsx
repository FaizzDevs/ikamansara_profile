"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import Image from "next/image"
import { Briefcase, GraduationCap } from "lucide-react"

export function AboutSection() {
    return (
        <section className="py-24 relative overflow-hidden px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute w-40 h-40 bg-primary/20 rounded-full -top-10 -left-10 blur-3xl" />

                    <Card className="relative z-10 glass rounded-3xl p-4 overflow-hidden border border-primary/20">
                        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
                            <Image 
                                src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Group of diverse alumni in a professional setting"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60" />
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h4 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">
                        Jejak Langkah
                    </h4>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                        Warisan Prestasi & <br />
                        Ikatan Abadi
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        IKAMANSARA bukan sekadar organisasi alumni. Kami adalah ekosistem yang menghubungkan ribuan individu yang memiliki akar yang sama: MAN 1 Jepara.
                    </p>

                    <div className="space-y-6">
                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                <GraduationCap className="text-primary h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">
                                    Dukungan Almamater
                                </h4>
                                <p className="text-slate-400">
                                    Pemberian Beasiswa tahunan dan mentoring karir bagi siswa aktif
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                <GraduationCap className="text-primary h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">
                                    Jejaring Bisnis
                                </h4>
                                <p className="text-slate-400">
                                    Akses Eksklusif ke direktori profesional alumni lintas industri
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}