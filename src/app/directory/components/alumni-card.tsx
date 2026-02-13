"use client"

import { Alumni } from "@/types/directory"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AlumniCardProps {
    alumni: Alumni
}

export function AlumniCard({ alumni }: AlumniCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div>
            <Card className="glass-card p-6 rounded-2xl flex flex-col border border-white/5 hover:border-primary/40 transition-all h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false) }
            >
                <div className="flex items-start justify-between mb-4">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10">
                        <img
                            src={alumni.avatar}
                            alt={`Portrait of ${alumni.name}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <Badge
                        variant='outline'
                        className="bg-primary/20 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border-primary/30"
                    >
                        Class of {alumni.gradYear}
                    </Badge>
                </div>

                <h3 className="text-white text-lg font-bold mb-1">
                    {alumni.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                    {alumni.position}
                </p>

                <div className="space-y-2 mb-6 flex-grow">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <Building2 className="w-3.5 h-3.5" />
                        {alumni.company}
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {alumni.location}
                    </div>
                </div>

                <Button
                    asChild
                    className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all border ${
                        isHovered
                            ? "bg-primary text-white border-primary"
                            : "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white"
                    }`}
                >
                    <Link
                        href={`/directory/${alumni.id}`}
                    >
                        View Profile
                    </Link>
                </Button>
            </Card>
        </motion.div>
    )
}