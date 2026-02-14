"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function FeaturedEvent() {
    const [timeLeft, setTimeLeft] = useState({
        days: 45,
        hours: 12,
        minutes: 30,
        seconds: 0
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
                } else if ( prev.days > 0 ) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
                }

                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative overflow-hidden rounded-xl h-[480px] flex flex-col justify-end p-8 md:p-12 group">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80"
                    alt="Crowd of people celebrating at a grand alumni reunion gala"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl space-y-6">
                <motion.div
                    className="inline-flex items-center gap-2"
                >
                    <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                        <span className="h-2 w-2 bg-primary rounded-full animate-pulse mr-2" />
                        Featured Event
                    </Badge>
                </motion.div>

                <motion.div
                    className="space-y-2"
                >
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight">
                        The Grand Homecoming 2024
                    </h1>
                    <p className="text-white/80 text-lg">
                        Celebrating 50 years of excellent. Reconnect, reminisce, and reignite friendships at our biggest gathering yet
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap gap-4 items-center"
                >
                    <Button
                        size='lg'
                        className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg"
                    >
                        <Calendar className="mr-2 h-5 w-5" />
                        Secure Your Spot
                    </Button>

                    <div className="flex gap-3">
                        <div className="text-center bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/10">
                            <div className="text-white font-bold text-xl leading-tight">
                                {timeLeft.days}
                            </div>
                            <div className="text-white/60 text-[10px] uppercase">
                                Days
                            </div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/10">
                            <div className="text-white font-bold text-xl leading-tight">
                                {timeLeft.hours}
                            </div>
                            <div className="text-white/60 text-[10px] uppercase">
                                hrs
                            </div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/10">
                            <div className="text-white font-bold text-xl leading-tight">
                                {timeLeft.minutes}
                            </div>
                            <div className="text-white/60 text-[10px] uppercase">
                                Mins
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex items-center gap-4 text-white/60 text-sm"
                >
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>GOR MAN 1 Jepara</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>December 15, 2024 • 7:00 PM</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}