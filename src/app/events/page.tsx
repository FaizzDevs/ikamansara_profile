"use client"

import { eventsData } from "@/lib/constants/events"
import { useState } from "react"
import FeaturedEvent from "./components/featured-event"
import { motion } from "framer-motion"
import { EventCard } from "./components/event-card"

export default function EventsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All Events")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredEvents = eventsData.filter((event) => {
        const matchesCategory = selectedCategory === "All Events" || event.category === selectedCategory
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            event.description.toLowerCase().includes(searchQuery.toLowerCase())
        
        return matchesCategory && matchesSearch
    })

    return (
        <main className="max-w-7xl mx-auto px-4 md:px-10 py-8 space-y-12">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <FeaturedEvent />
            </motion.section>

            <section className="space-y-6">
                <motion.div>
                    Event Filters
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {filteredEvents.map((event, index) => (
                        <EventCard key={event.id} index={index} event={event} />
                    ))}
                </motion.div>
            </section>
        </main>
    )
}