"use client"

import { useState } from "react"
import type { Event } from "@/types/events"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EventCardProps {
    event: Event
    index: number
}

const categoryIcons = {
    Workshop: "laptop_mac",
    Networking: "handshake",
    Social: "groups",
    Charity: "volunteer_activism",
    Professional: "business_center",
}

const categoryColors = {
    Workshop: "bg-blue-500/20 text-blue-500",
    Networking: "bg-purple-500/20 text-purple-500",
    Social: "bg-green-500/20 text-green-500",
    Charity: "bg-red-500/20 text-red-500",
    Professional: "bg-orange-500/20 text-orange-500", 
}

export function EventCard({ event, index }: EventCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const eventDate = new Date(event.date)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: 4 }}
        >
            <Card
                className="glass-panel rounded-xl overflow-hidden flex flex-col hover:border-primary/50 transition-all group h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="h-48 relative overflow-hidden">
                    <Image 
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute top-4 left-4 bg-primary text-white rounded-lg px-3 py-1 flex flex-col items-center z-10">
                        <span className="text-xs font-bold uppercase">
                            {format(eventDate, 'MMM')}
                        </span>
                        <span className="text-xs font-bold uppercase">
                            {format(eventDate, 'd')}
                        </span>
                    </div>

                    {/* <div className="absolute top-4 right-4">
                        <Badge className={`${categoryColors[event.category]} border-0`}>
                            <span className="text-sm mr-1">
                                {categoryIcons[event.category]}
                            </span>
                            {event.category}
                        </Badge>
                    </div> */}
                </div>

                <div className="p-6 flex flex-col grow gap-4">
                    <div className="space-y-2">
                        <h3 className={`text-xl font-bold transition-colors ${isHovered ? "text-primary" : "text-white"}`}>
                            {event.title}
                        </h3>
                        <p className="text-white/60 text-sm line-clamp-2">
                            {event.description}
                        </p>
                    </div>

                    <div className="space-y-2 mt-auto">
                        <div className="flex items-center gap-2 text-white/40 text-xs">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>
                                {event.location}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-white/40 text-xs">
                            <Clock className="w-3.5 h-3.5" />
                            <span>
                                {format(eventDate, 'h:mm a')}
                            </span>
                        </div>

                        {event.attendees && (
                            <div className="flex items-center gap-2 text-white/40 text-xs">
                                <Users className="h-3.5 w-3.5" />
                                <span>
                                    {event.attendees}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-white/5">
                        <Button
                            variant='ghost'
                            size='sm'
                            asChild
                            className="text-primary hover:text-primary/80 hover:bg-transparent p-0"
                        >
                            <Link
                                href={`/events/${event.id}`}
                                className="flex items-center gap-1"
                            >
                                View Details
                                <ArrowRight className={`h-4 w-4 transition-transform ${isHovered ? "translate-x-1" : ""}`} />
                            </Link>
                        </Button>

                        <Button
                            size='sm'
                            className="bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg text-sm font-semibold transition-all border border-primary/20"
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}