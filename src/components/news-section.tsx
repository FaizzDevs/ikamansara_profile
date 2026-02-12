"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { Card } from "./ui/card"
import Image from "next/image"
import Link from "next/link"

const newsItems = [
    {
        category: "Event",
        date: "20 Agustus 2024",
        title: "Reuni Akbar & Malam Inovasi 2024",
        description: "Mari rayakan 20 tahun perjalanan MAN 1 Jepara dalam malam penuh kenangan dan kolaborasi masa depan.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        category: "Info Karir",
        date: "12 Juli 2024",
        title: "Peluncuran Portal Karir Alumni",
        description: "Mempermudah alumni muda dalam menemukan peluang kerja di perusahaan milik rekan sejawat alumni.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        category: "Sosial",
        date: "05 Juni 2024",
        title: "Program 'Alumni Peduli' Tanggap Darurat",
        description: "Penyaluran bantuan sosial bagi masyarakat terdampak bencana di wilayah Jawa Tengah.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

export function NewsSection() {
    return (
        <section className="py-24 bg-black/20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h4 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">
                            Warta Terkini
                        </h4>
                        <h2 className="text-3xl sm:text-4xl font-black text-white">
                            Event & Berita
                        </h2>
                    </div>

                    <Button
                        variant="ghost"
                        className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm"
                    >
                        Lihat Semua Berita <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="glass rounded-2xl overflow-hidden group border border-white/5 hover:border-primary/40 transition-all h-full flex flex-col">
                                <div className="relative h-56 overflow-hidden">
                                    <Image 
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded shadow-lg">
                                        {item.category}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase mb-4">
                                        <Calendar className="h-3 w-3" />
                                        {item.date}
                                    </div>

                                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-primary transition-colors flex-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                                        {item.description}
                                    </p>

                                    <Link
                                        href="#"
                                        className="text-white font-bold text-sm border-b-2 border-primary pb-1 w-fit hover:text-primary transition-colors mt-auto"
                                    >
                                        Selengkapnya
                                    </Link>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}