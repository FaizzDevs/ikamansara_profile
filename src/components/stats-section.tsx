"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"
import { Card } from "./ui/card"

const stats = [
    {
        icon: Users,
        label: "Total Alumni Terdaftar",
        value: "5.240+",
        subtitle: "+12% Monthly",
    },
    {
        icon: Calendar,
        label: "Tahun Berkontribusi",
        value: "40+",
        subtitle: "Est. 1984",
    },
    {
        icon: MapPin,
        label: "Cabang Wilayah Aktif",
        value: "18",
        subtitle: "+3 Regional",
    },
]

export function StatsSection() {
    return (
        <section className="py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-8 border border-primary rounded-2xl border-l-8 border-l-primary group hover:bg-primary/5 transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <stat.icon className="text-primary h-10 w-10" />
                                    <span className="text-primary font-bold text-sm tracking-widest">
                                        {stat.subtitle}
                                    </span>
                                </div>

                                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                                    {stat.label}
                                </h3>
                                <p className="text-3xl font-black text-white tracking-tighter">
                                    {stat.value}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}