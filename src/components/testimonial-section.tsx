"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"

export function TestimonialSection() {
    return (
        <section className="py-24 relative overflow-hidden px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Quote className="text-primary h-16 w-16 mx-auto mb-8" />
                </motion.div>

                <Card className="glass p-8 md:p-12 border border-primary/20">
                    <motion.p
                        className="text-xl  md:text-2xl font-medium italic text-slate-200 leading-relaxed mb-8"
                    >
                        "IKAMANSARA memberikan saya akses ke mentor-mentor luar biasa yang dulu hanya bisa saya baca di sosial media. Jejaring ini benar-benar nyata manfaatnya untuk pengembangan karir alumni muda"
                    </motion.p>

                    <motion.div
                        className="flex flex-col items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Avatar className="h-20 w-20 border-4 border-primary/20">
                            <AvatarImage
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=AhmadFauzi"
                                alt="Portrait of a male professional alumnus"
                            />
                        </Avatar>

                        <div>
                            <h5 className="text-white font-bold text-xl uppercase tracking-widest">
                                Muhammad Faiz Al Izza
                            </h5>
                            <p className="text-primary font-bold text-sm">
                                Alumni Angkatan 2020 | Fullstack Developer
                            </p>
                        </div>
                    </motion.div>
                </Card>

                <div className="flex justify-center gap-2 mt-12">
                    <motion.div 
                        className="w-12 h-1 bg-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <div className="w-4 h-1 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-all" />
                    <div className="w-4 h-1 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-all" />
                </div>
            </div>
        </section>
    )
}