"use client"

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Users } from "lucide-react"
import { Card } from "./ui/card"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-black/40 border-t border-primary/10 pt-20 pb-10 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="size-8 bg-primary flex items-center justify-center rounded-lg shadow-lg">
                                <Users className="h-5 w-5 text-white" />
                            </div>

                            <h2 className="text-white text-lg font-black tracking-tighter uppercase">
                                IKAMANSARA
                            </h2>
                        </div>

                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Mewujudkan sinergi alumni MAN 1 Jepara yang mandiri, berdaya saing dan berakhlakul karimah
                        </p>

                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <Card
                                    key={index}
                                    className="size-10 glass flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer border-none"
                                >
                                    <Icon className="h-5 w-5 text-white opacity-80" />
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 border-l-2 border-primary pl-4">
                            Navigasi
                        </h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            {["Tentang Kami", "Direktori Alumni", "Event & Reuni", "Galeri Dokmentasi"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="hover:text-primary transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 border-l-2 border-primary pl-4">
                            Program
                        </h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            {["Beasiswa Pendidikan", "Mentorship Karir", "IKAMANSARA Preneur", "Aksi Sosial"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="hover:text-primary transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 border-l-2 border-primary pl-4">
                            Kontak
                        </h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            <li className="flex gap-3">
                                <MapPin className="text-primary h-4 w-4 flex-shrink-0 mt-1" />
                                <span>Jl. Tahunan-Batealit KM 4.7, RT.42 RW.08, Bawu, Kecamatan Batealit, Kabupaten Jepara, Jawa Tengah</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-primary h-4 w-4 flex-shrink-0 mt-1" />
                                <span>halo@ikamansara.id</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-primary h-4 w-4 flex-shrink-0 mt-1" />
                                <span>+62 812 345 678</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
                         © 2026 Faizz Dev's. All Rights Reserved.
                    </p>

                    <div className="flex gap-8 text-slate-600 text-[10px] font-black uppercase tracking-widest">
                        <Link
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}